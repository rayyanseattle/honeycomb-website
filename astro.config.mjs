// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://honeycombint.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
  integrations: [sitemap()],
  image: {
    // Large restored archive photographs; allow the full pipeline.
    responsiveStyles: false,
  },
});
