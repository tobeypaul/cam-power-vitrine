export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface HomepageContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
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

export interface DecouvrirContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    ecosystem: LinkItem;
    spine: string[];
    spineNote: string;
  };
  possibilities: {
    titleLines: string[];
    dek: string;
    steps: string[];
  };
  identity: {
    kicker: string;
    title: string;
    support: string;
  };
  network: {
    kicker: string;
    title: string;
    support: string;
  };
  opportunities: {
    eyebrow: string;
    title: string;
    support: string;
  };
  meeting: {
    title: string;
    dek: string;
    professionalsTitle: string;
    professionalsBody: string;
    organisationsTitle: string;
    organisationsBody: string;
  };
  missions: {
    eyebrow: string;
    title: string;
    support: string;
    leftTitle: string;
    leftBody: string;
    rightTitle: string;
    rightBody: string;
  };
  ecosystem: {
    title: string;
    dek: string;
    chain: string[];
  };
  cameroon: {
    title: string;
    dek: string;
  };
  daily: {
    title: string;
    support: string;
    storeKicker: string;
    storeName: string;
    storeHref: string;
  };
  finale: {
    title: string;
    support: string;
  };
}

export interface EntreprisesContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    explore: LinkItem;
    panelKicker: string;
    panelLine: string;
    flow: Array<{ label: string; text: string }>;
  };
  presence: {
    kicker: string;
    title: string;
    support: string;
    marks: Array<{ label: string; text: string }>;
  };
  need: {
    kicker: string;
    title: string;
    support: string;
    root: string;
    branches: Array<{ title: string; text: string }>;
  };
  talents: {
    eyebrow: string;
    title: string;
    support: string;
    note: string;
    imageAlt: string;
  };
  routes: {
    eyebrow: string;
    title: string;
    origin: string;
    hire: { kicker: string; title: string; idea: string; text: string; foot: string };
    mission: { kicker: string; title: string; idea: string; text: string; foot: string };
  };
  community: {
    title: string;
    support: string;
    items: string[];
  };
  network: {
    kicker: string;
    title: string;
    support: string;
  };
  lifecycle: {
    title: string;
    support: string;
    steps: Array<{ label: string; text: string }>;
    note: string;
  };
  cameroon: {
    title: string;
    support: string;
  };
  finale: {
    title: string;
    support: string;
  };
}

export interface AProposContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    explore: LinkItem;
    sources: Array<{ title: string; text: string }>;
    gathered: string;
    hub: { title: string; text: string };
    toward: string;
    destination: { title: string; text: string };
    caption: string;
  };
  purpose: {
    kicker: string;
    title: string;
    statement: string;
    mark: string;
    support: string;
    realities: Array<{ title: string; text: string }>;
  };
  conviction: {
    kicker: string;
    title: string;
    quote: string;
    support: string;
    steps: Array<{ title: string; text: string }>;
    enterprise: { kicker: string; title: string; text: string };
  };
  ecosystem: {
    kicker: string;
    title: string;
    support: string;
    items: string[];
    formsLabel: string;
    forms: Array<{ title: string; text: string }>;
    note: string;
  };
  community: {
    kicker: string;
    title: string;
    support: string;
    tagline: string;
  };
  cameroon: {
    title: string;
    support: string;
  };
  vision: {
    kicker: string;
    title: string;
    lead: string;
    aims: string[];
    toward: string;
    note: string;
  };
  growth: {
    kicker: string;
    title: string;
    support: string;
  };
  finale: {
    title: string;
    support: string;
  };
}

export interface MissionsContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    explore: LinkItem;
    joinLabel: string;
    poles: Array<{ kicker: string; title: string; text: string }>;
    mission: { kicker: string; title: string; text: string };
  };
  need: {
    kicker: string;
    title: string;
    support: string;
    steps: Array<{ label: string; text: string }>;
    areasLabel: string;
    areas: string[];
  };
  meeting: {
    kicker: string;
    title: string;
    support: string;
    professional: { kicker: string; title: string; idea: string; text: string };
    mission: { kicker: string; title: string; text: string };
    enterprise: { kicker: string; title: string; idea: string; text: string };
  };
  opportunities: {
    eyebrow: string;
    title: string;
    support: string;
    root: string;
    branches: Array<{ title: string; text: string }>;
    note: string;
  };
  journey: {
    kicker: string;
    title: string;
    support: string;
    steps: Array<{ label: string; text: string }>;
    note: string;
  };
  collaboration: {
    title: string;
    support: string;
    steps: Array<{ label: string; text: string }>;
    note: string;
  };
  ecosystem: {
    kicker: string;
    title: string;
    support: string;
    items: Array<{ label: string; current?: boolean }>;
  };
  cameroon: {
    title: string;
    support: string;
  };
  finale: {
    title: string;
    support: string;
  };
}

export interface TalentsContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    explore: LinkItem;
    panelKicker: string;
    panelLine: string;
    dimensions: Array<{ label: string; text: string }>;
  };
  identity: {
    kicker: string;
    title: string;
    support: string;
  };
  skills: {
    kicker: string;
    title: string;
    support: string;
    items: Array<{ label: string; text: string }>;
  };
  network: {
    kicker: string;
    title: string;
    support: string;
  };
  opportunities: {
    eyebrow: string;
    title: string;
    support: string;
    root: string;
    branches: Array<{ title: string; text: string }>;
    note: string;
  };
  routes: {
    eyebrow: string;
    title: string;
    employment: { kicker: string; title: string; text: string };
    missions: { kicker: string; title: string; text: string };
  };
  organisations: {
    eyebrow: string;
    title: string;
    support: string;
    sides: Array<{ title: string; text: string }>;
    note: string;
  };
  lifecycle: {
    title: string;
    support: string;
    steps: Array<{ label: string; text: string }>;
    note: string;
  };
  cameroon: {
    title: string;
    support: string;
  };
  daily: {
    title: string;
    support: string;
    storeKicker: string;
    storeName: string;
    storeHref: string;
  };
  finale: {
    title: string;
    support: string;
  };
}

export interface AideContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    searchLabel: string;
    searchPlaceholder: string;
    hint: string;
    empty: string;
    emptyLink: string;
  };
  topics: {
    title: string;
    items: Array<{
      title: string;
      text: string;
      action: string;
      terms: string;
      icon: 'key' | 'user' | 'brief' | 'org' | 'meet' | 'shield';
      href?: string;
    }>;
  };
  faq: {
    title: string;
    dek: string;
    items: Array<{
      question: string;
      answer: string;
      terms: string;
      link?: { label: string; href: string };
      after?: string;
    }>;
  };
  paths: {
    title: string;
    dek: string;
    professional: { kicker: string; title: string; links: Array<{ label: string; terms: string }> };
    enterprise: { kicker: string; title: string; links: Array<{ label: string; terms: string }> };
  };
  escalation: {
    title: string;
    support: string;
    contactLabel: string;
    contactHref: string;
    emailLabel: string;
    accessLabel: string;
    accessHref: string;
  };
}

export interface ContactContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  intents: {
    title: string;
    dek: string;
    choose: string;
    items: Array<{ title: string; text: string; subject: string }>;
  };
  email: {
    title: string;
    dek: string;
    address: string;
    href: string;
    cta: string;
    optional: string;
    subjectPrefix: string;
  };
  aide: {
    title: string;
    support: string;
    cta: string;
    href: string;
  };
  linkedin: {
    title: string;
    support: string;
    cta: string;
    href: string;
  };
  application: {
    title: string;
    cta: string;
    href: string;
  };
}
