// Remove image files in dist/_astro that no HTML/CSS/JS references.
// Astro emits the original of every eagerly imported photo even when only
// its responsive variants are used; this keeps the deploy lean.
import { readdirSync, readFileSync, statSync, unlinkSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const assets = join(dist, '_astro');

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const textFiles = walk(dist).filter((f) => ['.html', '.css', '.js', '.xml', '.json'].includes(extname(f)));
const corpus = textFiles.map((f) => readFileSync(f, 'utf8')).join('\n');

let removed = 0, bytes = 0;
for (const f of readdirSync(assets)) {
  if (!['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(extname(f))) continue;
  if (!corpus.includes(f)) {
    const p = join(assets, f);
    bytes += statSync(p).size;
    unlinkSync(p);
    removed++;
  }
}
console.log(`pruned ${removed} unreferenced images (${(bytes / 1e6).toFixed(1)} MB)`);
