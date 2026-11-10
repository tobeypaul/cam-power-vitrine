export const siteConfig = {
  name: 'CamPower',
  locale: 'fr',
  applicationUrl: 'https://cam-power.net/',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.campower&hl=fr',
  appStoreUrl: 'https://apps.apple.com/app/campower/id6812945656',
  linkedInUrl: 'https://www.linkedin.com/company/campower/',
  facebookUrl: 'https://www.facebook.com/people/CamPower/61591516614513/',
  tiktokUrl: 'https://www.tiktok.com/@campower8',
  email: 'contact@cam-power.net',
} as const;

export type SocialNetwork = 'facebook' | 'tiktok' | 'linkedin';

export const socialLinks: Array<{ network: SocialNetwork; name: string; href: string }> = [
  { network: 'facebook', name: 'Facebook', href: siteConfig.facebookUrl },
  { network: 'tiktok', name: 'TikTok', href: siteConfig.tiktokUrl },
  { network: 'linkedin', name: 'LinkedIn', href: siteConfig.linkedInUrl },
];

export function organizationGraph(site: URL, description: string, logoUrl: string, locale: string = siteConfig.locale) {
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
          name: locale === 'en' ? 'Cameroon' : 'Cameroun',
        },
        sameAs: socialLinks.map((link) => link.href),
      },
      {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: site.href,
        inLanguage: locale,
        description,
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
      },
    ],
  };
}
