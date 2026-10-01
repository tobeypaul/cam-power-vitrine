export const siteConfig = {
  name: 'CamPower',
  locale: 'fr',
  applicationUrl: 'https://cam-power.net/',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.campower&hl=fr',
  linkedInUrl: 'https://www.linkedin.com/company/campower',
  email: 'contact@cam-power.net',
} as const;

export function organizationGraph(site: URL, description: string, logoUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: siteConfig.name,
        url: site.href,
        logo: logoUrl,
        email: siteConfig.email,
        areaServed: {
          '@type': 'Country',
          name: 'Cameroun',
        },
        sameAs: [siteConfig.linkedInUrl],
      },
      {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: site.href,
        inLanguage: siteConfig.locale,
        description,
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
      },
    ],
  };
}
