import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'http://localhost:4321';

export default defineConfig({
  site: 'https://tobeypaul.github.io',
  base: '/cam-power-vitrine',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
