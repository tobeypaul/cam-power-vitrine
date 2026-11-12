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

type JsonLd = Record<string, unknown>;

interface GraphInput {
  /** Absolute URL of the French home page, the site's reference origin. */
  siteUrl: string;
  /** Absolute URL of the home page in the current language. */
  homeUrl: string;
  /** Absolute canonical URL of the current page. */
  pageUrl: string;
  pageName: string;
  homeName: string;
  description: string;
  logoUrl: string;
  locale: string;
  isHome: boolean;
  /** Pages between the home page and this one, as absolute URLs. */
  trail?: Array<{ name: string; url: string }>;
  /** Extra page-level nodes, for example an FAQPage. */
  extra?: JsonLd[];
}

/**
 * Structured data for one page.
 * Organization and WebSite always point at the home page, never the current page.
 * The home page also describes the mobile application; inner pages get a breadcrumb.
 */
export function structuredDataGraph(input: GraphInput) {
  const organizationId = `${input.siteUrl}#organization`;
  const websiteId = `${input.homeUrl}#website`;
  const graph: JsonLd[] = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.name,
      url: input.siteUrl,
      logo: input.logoUrl,
      email: siteConfig.email,
      areaServed: { '@type': 'Country', name: input.locale === 'en' ? 'Cameroon' : 'Cameroun' },
      sameAs: [siteConfig.applicationUrl, ...socialLinks.map((link) => link.href)],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.name,
      url: input.homeUrl,
      inLanguage: input.locale,
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'WebPage',
      '@id': `${input.pageUrl}#webpage`,
      url: input.pageUrl,
      name: input.pageName,
      description: input.description,
      inLanguage: input.locale,
      isPartOf: { '@id': websiteId },
      about: { '@id': organizationId },
      ...(input.isHome ? {} : { breadcrumb: { '@id': `${input.pageUrl}#breadcrumb` } }),
    },
  ];

  if (input.isHome) {
    graph.push({
      '@type': 'MobileApplication',
      '@id': `${input.siteUrl}#app`,
      name: siteConfig.name,
      operatingSystem: 'Android, iOS',
      applicationCategory: 'BusinessApplication',
      url: siteConfig.applicationUrl,
      downloadUrl: [siteConfig.playStoreUrl, siteConfig.appStoreUrl],
      publisher: { '@id': organizationId },
    });
  } else {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${input.pageUrl}#breadcrumb`,
      itemListElement: [
        { name: input.homeName, url: input.homeUrl },
        ...(input.trail ?? []),
        { name: input.pageName, url: input.pageUrl },
      ].map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: crumb.url })),
    });
  }

  graph.push(...(input.extra ?? []));
  return { '@context': 'https://schema.org', '@graph': graph };
}

/** FAQPage node from question/answer pairs written as plain text. */
export function faqPage(pageUrl: string, items: Array<{ question: string; answer: string }>): JsonLd {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
