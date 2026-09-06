# Honeycomb International — honeycombint.com

Website for Honeycomb International, an Ahmedabad-based maker and exporter of hand block-printed, hand-embroidered, patchwork, hand-woven and tie-dyed home textiles.

Built with [Astro](https://astro.build), GSAP + Lenis for motion, and a Real-ESRGAN image-restoration pipeline for the archive photography.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview
```

## Structure

```
src/
  data/site.ts          # copy, nav, crafts, process steps, products, archive categories
  data/photos.json      # generated photo manifest (slug, caption, dimensions)
  assets/photos/        # restored 2400px JPEGs (generated, committed)
  components/           # Nav, Footer, Photo, Lightbox, Preloader, Cursor, Logo
  layouts/Base.astro    # head, fonts, nav, footer, scripts
  pages/                # index, about, archive, contact, thanks, 404, crafts/[slug]
  scripts/main.ts       # smooth scroll, reveals, parallax, horizontal crafts, process stack, cursor, lightbox
  styles/global.css     # design tokens and base styles
public/video/           # hero loops (720p, muted) cut from the 2012 workshop footage
scripts/                # image pipeline (manifest.py, process_images.py)
```

## Editing copy

All copy lives in `src/data/site.ts` (home page sections, craft pages) and directly in `src/pages/about.astro` (timeline, values) and `src/pages/contact.astro`. Captions live in `scripts/manifest.py` and are baked into `src/data/photos.json` when the pipeline runs.

## Photo pipeline

Original photographs are not in this repo. To add or re-process photos:

1. Add an entry to `scripts/manifest.py` (source path, slug, group, caption).
2. Download the Real-ESRGAN ncnn binary for macOS from
   https://github.com/xinntao/Real-ESRGAN/releases (`realesrgan-ncnn-vulkan-*-macos.zip`).
3. Run:

```sh
python3 scripts/process_images.py \
  --src "/path/to/Honeycomb Info Website" \
  --esrgan /path/to/realesrgan-ncnn-vulkan \
  --skip-existing
```

Each photo is white-balanced, contrast-corrected, downscaled to 1000px, restored and upscaled 4x by Real-ESRGAN, then resized to 2400px. Astro generates AVIF/WebP responsive variants at build time.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co) at `info@honeycombint.com`. The first submission triggers an activation email to that inbox; click the link once and all later submissions are delivered. Replace with Formspree, Netlify Forms or a serverless function later if preferred.

## Deployment

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`. `public/CNAME` pins the custom domain.

DNS at GoDaddy for `honeycombint.com`:

| Type  | Name | Value                    |
| ----- | ---- | ------------------------ |
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | rayyanseattle.github.io  |

Then in the GitHub repo: Settings → Pages → Custom domain → `honeycombint.com`, and tick "Enforce HTTPS" once the certificate is issued. Remove GoDaddy's parked-page forwarding first.
