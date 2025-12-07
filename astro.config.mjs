// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact";
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://ejahman.netlify.app/",
  integrations: [icon(), sitemap(), preact()],
});