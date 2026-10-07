/**
 * Prefix an in-site path with Astro's `base`.
 * Hash links, mailto addresses, and absolute URLs stay unchanged.
 */
export function siteBase(): string {
  const raw = import.meta.env.BASE_URL || '/';
  if (raw === '/') return '/';
  return raw.endsWith('/') ? raw : `${raw}/`;
}

export function sitePath(href: string): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href;
  const base = siteBase();
  if (base !== '/' && (href === base || href.startsWith(base) || href === base.slice(0, -1))) return href;
  return `${base}${href.slice(1)}`;
}
