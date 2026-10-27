import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bangladeshtravelguide.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto', // Automatically inlines small CSS files to eliminate render-blocking requests
  },
  integrations: [
    sitemap()
  ]
});