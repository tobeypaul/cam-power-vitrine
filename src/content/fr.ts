import { siteConfig } from '../lib/site';
import type { HomepageContent } from './types';

const access = {
  label: 'Accéder à CamPower',
  href: siteConfig.applicationUrl,
  external: true,
} as const;

export const homepageFr: HomepageContent = {
  meta: {
    title: 'CamPower — Talents, entreprises et opportunités au Cameroun',
    description:
      'CamPower connecte les talents, les entreprises, les compétences et les opportunités au Cameroun. Développez votre réseau professionnel, trouvez des opportunités, recrutez ou proposez une mission.',
  },
  nav: [
    { label: 'Découvrir', href: '#besoins' },
    { label: 'Talents', href: '#talents' },
    { label: 'Entreprises', href: '#entreprises' },
    { label: 'Missions', href: '#missions' },
    { label: 'À propos', href: '#apropos' },
  ],
  hero: {
    eyebrow: 'Plateforme professionnelle · Cameroun',
    titleLines: ['Donnez de la', 'puissance', 'à votre avenir', 'professionnel.'],
    lead: 'CamPower connecte les talents, les entreprises, les compétences et les opportunités au Cameroun. Développez votre réseau professionnel, trouvez des opportunités, recrutez ou proposez une mission.',
    discover: { label: 'Découvrir CamPower', href: '#besoins' },
    access,
    signals: ['Profil', 'Opportunités', 'Réseau', 'Missions'],
    chip: {
      kicker: 'Offre',
      title: 'Comptable Senior',
      meta: 'Yaoundé · CDI',
    },
  },
  audiences: {
    titleLines: ['Une plateforme.', 'Plusieurs besoins.'],
    dek: 'L’emploi, le recrutement et les missions, dans la même plateforme.',
    items: [
      {
        id: 'talents',
        title: 'Talents',
        body: 'Trouvez des opportunités, présentez vos compétences et développez votre réseau.',
        cta: { label: 'Trouver des opportunités', href: '#professionnels' },
        tone: 'default',
      },
      {
        id: 'entreprises',
        title: 'Entreprises',
        body: 'Recrutez, repérez des compétences et échangez avec les professionnels adaptés.',
        cta: { label: 'Trouver des talents', href: '#organisations' },
        tone: 'emphasis',
      },
      {
        id: 'missions',
        title: 'Missions',
        body: 'Trouvez ou proposez une compétence pour une mission, un projet ou un besoin précis.',
        cta: { label: 'Découvrir les missions', href: '#action' },
        tone: 'default',
      },
    ],
  },
  product: {
    title: 'CamPower en action',
    dek: 'L’essentiel de l’application, en quelques écrans.',
    left: ['Créez votre profil professionnel', 'Développez votre réseau'],
    right: ['Découvrez des opportunités', 'Trouvez les bons talents', 'Publiez une mission'],
  },
  steps: {
    title: 'Comment ça marche',
    items: [
      'Créez votre profil',
      'Présentez vos compétences ou vos besoins',
      'Découvrez les bonnes opportunités',
      'Connectez-vous et passez à l’action',
    ],
  },
  professionals: {
    id: 'professionnels',
    kicker: 'Pour les professionnels',
    titleLines: ['Votre expérience.', 'Vos compétences.', 'Votre réseau.', 'Vos opportunités.'],
    support: 'Présentez votre parcours et accédez aux opportunités qui correspondent à vos compétences.',
    cta: { label: 'Découvrir CamPower', href: '#talents' },
  },
  organisations: {
    id: 'organisations',
    kicker: 'Pour les entreprises',
    title: 'Trouvez les compétences dont votre organisation a besoin.',
    support: 'Publiez un besoin, consultez des profils et entrez en relation avec les bonnes personnes.',
    cta: { label: 'CamPower pour les entreprises', href: '#entreprises' },
  },
  cameroon: {
    title: 'Pensé pour les réalités du marché camerounais.',
    dek: 'CamPower est conçu pour relier, au Cameroun, les talents, les entreprises, les compétences, les emplois, les missions et les opportunités locales.',
    left: [
      { title: 'Talents camerounais', body: 'Profils et compétences du marché local.' },
      { title: 'Entreprises', body: 'Recrutement et recherche de compétences.' },
      { title: 'Compétences', body: 'Savoir-faire associé à chaque profil.' },
    ],
    right: [
      { title: 'Emplois', body: 'Opportunités durables ou ponctuelles.' },
      { title: 'Missions', body: 'Besoins précis, durée définie.' },
      { title: 'Opportunités', body: 'Emplois et missions réunis sur CamPower.' },
    ],
  },
  mobile: {
    title: 'CamPower, partout avec vous.',
    dek: 'Consultez votre profil, vos opportunités et vos missions depuis votre téléphone.',
    storeKicker: 'Télécharger sur',
    storeName: 'Google Play',
    storeHref: siteConfig.playStoreUrl,
  },
  finale: {
    title: 'Prêt à donner de la puissance à vos opportunités ?',
    support: 'Rejoignez CamPower et accédez aux talents, aux entreprises et aux opportunités du Cameroun.',
    cta: access,
  },
  footer: {
    tagline: 'Une communauté, des opportunités, un avenir.',
    columns: [
      {
        title: 'Découvrir',
        links: [
          { label: 'À propos', href: '#apropos' },
          { label: 'Talents', href: '#talents' },
          { label: 'Entreprises', href: '#entreprises' },
          { label: 'Missions', href: '#missions' },
        ],
      },
      {
        title: 'Assistance',
        links: [
          { label: 'Contact', href: `mailto:${siteConfig.email}` },
          { label: 'Aide', href: `mailto:${siteConfig.email}` },
        ],
      },
      {
        title: 'Légal',
        links: [
          { label: 'Confidentialité', href: '#mentions' },
          { label: 'Conditions d’utilisation', href: '#mentions' },
          { label: 'Mentions légales', href: '#mentions' },
        ],
      },
    ],
    email: { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    location: 'Cameroun',
    linkedIn: { label: 'LinkedIn', href: siteConfig.linkedInUrl, external: true },
    copyright: '© 2026 CamPower',
  },
};
