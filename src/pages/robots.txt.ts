import type { APIRoute } from 'astro';
import { siteBase } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const sitemapLine = site ? `\nSitemap: ${new URL(`${siteBase()}sitemap-index.xml`, site).href}\n` : '';
  const body = `User-agent: *\nAllow: /\n${sitemapLine}`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
