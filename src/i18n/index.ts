import type { HomepageContent } from '../content/types';
import { sitePath } from '../lib/paths';

export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

export const routes = {
  home: { fr: '/', en: '/en/' },
  decouvrir: { fr: '/decouvrir/', en: '/en/discover/' },
  talents: { fr: '/talents/', en: '/en/talent/' },
  entreprises: { fr: '/entreprises/', en: '/en/companies/' },
  missions: { fr: '/missions/', en: '/en/missions/' },
  apropos: { fr: '/a-propos/', en: '/en/about/' },
  aide: { fr: '/aide/', en: '/en/help/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  confidentialite: { fr: '/confidentialite/', en: '/en/privacy/' },
  conditions: { fr: '/conditions-utilisation/', en: '/en/terms/' },
  mentions: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

export function route(key: RouteKey, locale: Locale): string {
  return routes[key][locale];
}

export const htmlLang: Record<Locale, string> = { fr: 'fr', en: 'en' };
export const ogLocale: Record<Locale, string> = { fr: 'fr_FR', en: 'en_GB' };

export const ui = {
  fr: {
    skip: 'Aller au contenu',
    mainNav: 'Navigation principale',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    homeLabel: 'CamPower, accueil',
    newTab: ' (s’ouvre dans un nouvel onglet)',
    switchLabel: 'English version',
    switchText: 'EN',
    social: 'CamPower sur les réseaux sociaux',
    socialOn: (network: string) => `CamPower sur ${network}`,
    downloads: 'Télécharger l’application',
    cameroonMap: 'Carte simplifiée du Cameroun',
    profileWord: 'Profil',
    companyWord: 'Entreprise',
    alt: {
      heroOffers: 'Écran de l’application CamPower montrant des offres',
      profile: 'Profil dans l’application CamPower',
      offersScreen: 'Écran des offres dans l’application CamPower',
      offers: 'Offres dans l’application CamPower',
      network: 'Réseau professionnel dans l’application CamPower',
      feed: 'Fil d’actualité dans l’application CamPower',
      profileCard: 'Carte de profil dans l’application CamPower',
      offerDetail: 'Détail d’une offre dans l’application CamPower',
      profileBrowse: 'Consultation de profils dans l’application CamPower',
      onPhone: 'Application CamPower sur téléphone',
    },
    aria: {
      talentsPanel: 'Ce que cette page explique',
      companyPanel: 'Pour votre organisation',
      weave: 'Ce qui avance ensemble',
      messageFlow: 'Parcours du message',
      intent: 'Motif du message',
      bridges: 'Aide et réseaux sociaux',
    },
    contact: {
      optional: 'Aucun motif n’est obligatoire.',
      subject: 'Objet proposé : {subject}. L’adresse reste {email}.',
    },
  },
  en: {
    skip: 'Skip to content',
    mainNav: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    homeLabel: 'CamPower, home',
    newTab: ' (opens in a new tab)',
    switchLabel: 'Version française',
    switchText: 'FR',
    social: 'CamPower on social media',
    socialOn: (network: string) => `CamPower on ${network}`,
    downloads: 'Download the app',
    cameroonMap: 'Simplified map of Cameroon',
    profileWord: 'Profile',
    companyWord: 'Company',
    alt: {
      heroOffers: 'CamPower app screen showing job offers',
      profile: 'Profile in the CamPower app',
      offersScreen: 'Offers screen in the CamPower app',
      offers: 'Offers in the CamPower app',
      network: 'Professional network in the CamPower app',
      feed: 'News feed in the CamPower app',
      profileCard: 'Profile card in the CamPower app',
      offerDetail: 'Offer details in the CamPower app',
      profileBrowse: 'Browsing profiles in the CamPower app',
      onPhone: 'CamPower app on a phone',
    },
    aria: {
      talentsPanel: 'What this page explains',
      companyPanel: 'For your organisation',
      weave: 'What moves forward together',
      messageFlow: 'How your message travels',
      intent: 'Reason for your message',
      bridges: 'Help and social media',
    },
    contact: {
      optional: 'Choosing a reason is optional.',
      subject: 'Suggested subject: {subject}. The address stays {email}.',
    },
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}

export function innerFooter(footer: HomepageContent['footer'], locale: Locale): HomepageContent['footer'] {
  const home = route('home', locale);
  return {
    ...footer,
    columns: footer.columns.map((column) => ({
      ...column,
      links: column.links.map((link) =>
        link.href.startsWith('#') && link.href !== '#mentions' ? { ...link, href: sitePath(`${home}${link.href}`) } : link,
      ),
    })),
  };
}
