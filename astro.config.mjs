import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// TODO: replace with real domain once purchased
export const SITE_URL = 'https://walkforlove.in';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap(), tailwind()],
  build: { inlineStylesheets: 'auto' },
  prefetch: true,
});
