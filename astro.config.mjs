import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkSmartypants from 'remark-smartypants';
import { remarkExcerpt } from './src/lib/remark-excerpt.mjs';

export default defineConfig({
  site: 'https://bartl.io/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkExcerpt, remarkSmartypants],
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
