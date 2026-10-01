export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HomepageContent {
  meta: {
    title: string;
    description: string;
  };
  nav: LinkItem[];
  hero: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    discover: LinkItem;
    access: LinkItem;
    signals: string[];
    chip: {
      kicker: string;
      title: string;
      meta: string;
    };
  };
  audiences: {
    titleLines: string[];
    dek: string;
    items: Array<{
      id: string;
      title: string;
      body: string;
      cta: LinkItem;
      tone: 'default' | 'emphasis';
    }>;
  };
  product: {
    title: string;
    dek: string;
    left: string[];
    right: string[];
  };
  steps: {
    title: string;
    items: string[];
  };
  professionals: {
    id: string;
    kicker: string;
    titleLines: string[];
    support: string;
    cta: LinkItem;
  };
  organisations: {
    id: string;
    kicker: string;
    title: string;
    support: string;
    cta: LinkItem;
  };
  cameroon: {
    title: string;
    dek: string;
    left: Array<{ title: string; body: string }>;
    right: Array<{ title: string; body: string }>;
  };
  mobile: {
    title: string;
    dek: string;
    storeKicker: string;
    storeName: string;
    storeHref: string;
  };
  finale: {
    title: string;
    support: string;
    cta: LinkItem;
  };
  footer: {
    tagline: string;
    columns: Array<{
      title: string;
      links: LinkItem[];
    }>;
    email: LinkItem;
    location: string;
    linkedIn: LinkItem;
    copyright: string;
  };
}
