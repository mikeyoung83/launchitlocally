// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://launchitlocally.com', // used by the sitemap and astro-seo's canonical URLs
  output: 'static', // no adapter needed for a brochure site on Netlify

  integrations: [
    sitemap({
      // Keep the form thank-you page and the standalone timezone tool out of the sitemap
      filter: (page) => !/\/(success|timezone)\/?$/.test(page),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
