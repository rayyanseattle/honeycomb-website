#!/usr/bin/env python3
"""
Restore and upscale the archive photographs for the web.

Pipeline per photo:
  1. EXIF-rotate, gentle white-balance, auto-contrast, slight saturation lift
  2. Downscale to 1000px on the long edge (removes JPEG blocking / noise)
  3. Real-ESRGAN x4 (realesrgan-x4plus) -> ~4000px, AI-restored detail
  4. Lanczos resize to 2400px long edge, save as high-quality JPEG

Usage:
  python3 scripts/process_images.py --src "/path/to/Honeycomb Info Website" \
      --esrgan /path/to/realesrgan-ncnn-vulkan [--only slug] [--skip-existing]

Outputs to src/assets/photos/<slug>.jpg and writes src/data/photos.json
"""
import argparse, json, os, subprocess, sys, tempfile
from pathlib import Path
import numpy as np
from PIL import Image, ImageOps, ImageEnhance

sys.path.insert(0, str(Path(__file__).parent))
from manifest import PHOTOS  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "src" / "assets" / "photos"
DATA = ROOT / "src" / "data" / "photos.json"


def enhance(im: Image.Image, wb_strength=0.3) -> Image.Image:
    im = ImageOps.exif_transpose(im).convert("RGB")
    a = np.asarray(im).astype(np.float32)
    means = a.reshape(-1, 3).mean(0)
    gains = means.mean() / means
    gains = 1 + wb_strength * (gains - 1)
    a = np.clip(a * gains, 0, 255)
    im = Image.fromarray(a.astype(np.uint8))
    im = ImageOps.autocontrast(im, cutoff=0.4)
    im = ImageEnhance.Color(im).enhance(1.06)
    return im


def process(src_path: Path, out_path: Path, esrgan: str, long_edge=2400, pre=1000, opts=None):
    opts = opts or {}
    im = enhance(Image.open(src_path), wb_strength=opts.get("wb", 0.3))
    if "crop" in opts:  # fractions of width/height to keep: (left, top, right, bottom)
        l, t, r, b = opts["crop"]
        im = im.crop((int(im.width * l), int(im.height * t), int(im.width * r), int(im.height * b)))
    if opts.get("rotate"):
        im = im.rotate(opts["rotate"], expand=True)
    if opts.get("ai") is False:  # large, already-sharp originals: plain resize
        im.thumbnail((long_edge, long_edge), Image.LANCZOS)
        im.save(out_path, "JPEG", quality=88, optimize=True, progressive=True)
        return im.size
    im.thumbnail((pre, pre), Image.LANCZOS)
    with tempfile.TemporaryDirectory() as td:
        small = Path(td) / "in.png"
        big = Path(td) / "out.png"
        im.save(small)
        model_dir = str(Path(esrgan).parent / "models")
        subprocess.run(
            [esrgan, "-i", str(small), "-o", str(big), "-n", "realesrgan-x4plus", "-s", "4", "-m", model_dir],
            check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        )
        up = Image.open(big).convert("RGB")
    up.thumbnail((long_edge, long_edge), Image.LANCZOS)
    up.save(out_path, "JPEG", quality=88, optimize=True, progressive=True)
    return up.size


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True)
    ap.add_argument("--esrgan", required=True)
    ap.add_argument("--only")
    ap.add_argument("--skip-existing", action="store_true")
    args = ap.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    DATA.parent.mkdir(parents=True, exist_ok=True)
    records = []
    for entry in PHOTOS:
        rel, slug, group, caption = entry[:4]
        opts = entry[4] if len(entry) > 4 else {}
        if args.only and slug != args.only:
            continue
        src = Path(args.src) / rel
        out = OUT_DIR / f"{slug}.jpg"
        if not src.exists():
            print(f"MISSING {rel}", file=sys.stderr)
            continue
        if args.skip_existing and out.exists():
            w, h = Image.open(out).size
        else:
            print(f"-> {slug}", flush=True)
            w, h = process(src, out, args.esrgan, opts=opts)
        records.append({"slug": slug, "group": group, "caption": caption, "width": w, "height": h, "source": rel})
    if not args.only:
        DATA.write_text(json.dumps(records, indent=2, ensure_ascii=False))
        print(f"wrote {len(records)} records to {DATA}")


if __name__ == "__main__":
    main()
