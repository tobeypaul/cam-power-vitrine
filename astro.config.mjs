import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/cam-power-vitrine';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !/\/(erreur|maintenance)\//.test(page) })],
});
