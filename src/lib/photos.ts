import type { ImageMetadata } from 'astro';
import data from '../data/photos.json';

export type PhotoRecord = { slug: string; group: string; caption: string; width: number; height: number; source: string };

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.jpg', { eager: true });

const bySlug = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const slug = path.split('/').pop()!.replace(/\.jpg$/, '');
  bySlug.set(slug, mod.default);
}

export const records: PhotoRecord[] = data as PhotoRecord[];
const recordBySlug = new Map(records.map((r) => [r.slug, r]));

export function photo(slug: string): ImageMetadata {
  const img = bySlug.get(slug);
  if (!img) throw new Error(`Photo not found: ${slug}`);
  return img;
}

export function hasPhoto(slug: string) {
  return bySlug.has(slug);
}

export function caption(slug: string): string {
  return recordBySlug.get(slug)?.caption ?? '';
}

export function byGroup(group: string): PhotoRecord[] {
  return records.filter((r) => r.group === group && bySlug.has(r.slug));
}

export function byPrefix(prefix: string | readonly string[]): PhotoRecord[] {
  const list = Array.isArray(prefix) ? prefix : [prefix as string];
  return records.filter((r) => list.some((p) => r.slug.startsWith(p)) && bySlug.has(r.slug));
}
