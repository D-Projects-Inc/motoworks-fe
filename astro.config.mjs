// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact";
import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://khanyej.netlify.app/",

  integrations: [
      icon(),
      sitemap(), preact()
	],

  adapter: netlify(),
});