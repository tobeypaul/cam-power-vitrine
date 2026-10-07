import type { APIRoute } from 'astro';
import { siteBase } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const sitemapPath = `${siteBase()}sitemap-index.xml`;
  const sitemap = site ? new URL(sitemapPath, site).href : sitemapPath;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
