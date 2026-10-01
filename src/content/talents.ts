import { siteConfig } from '../lib/site';
import type { TalentsContent } from './types';

export const talentsFr: TalentsContent = {
  meta: {
    title: 'Talents — Votre parcours professionnel sur CamPower',
    description:
      'CamPower vous aide à présenter qui vous êtes, à faire connaître vos compétences et à élargir votre réseau. L’emploi et les missions s’y inscrivent, sans résumer la plateforme.',
  },
  nav: [
    { label: 'Découvrir', href: '/decouvrir/' },
    { label: 'Talents', href: '/talents/', current: true },
    { label: 'Entreprises', href: '/entreprises/' },
    { label: 'Missions' },
    { label: 'À propos' },
  ],
  hero: {
    eyebrow: 'Talents',
    title: 'Donnez de la visibilité à votre parcours professionnel.',
    lead: 'CamPower vous aide à présenter qui vous êtes, à faire connaître vos compétences et à élargir votre réseau. L’emploi et les missions s’y inscrivent, sans résumer la plateforme.',
    explore: { label: 'Découvrir pour les talents', href: '#parcours' },
    panelKicker: 'Pour vous',
    panelLine: 'Votre parcours professionnel se construit dans la durée.',
    dimensions: [
      { label: 'Identité', text: 'Qui vous êtes' },
      { label: 'Compétences', text: 'Ce que vous savez faire' },
      { label: 'Réseau', text: 'Avec qui vous avancez' },
      { label: 'Opportunités', text: 'Emploi et missions' },
    ],
  },
  identity: {
    kicker: 'Profil',
    title: 'Votre profil professionnel vous représente.',
    support:
      'Il rassemble votre expérience, votre direction et ce que vous savez faire. Il reste utile au-delà d’une recherche d’emploi.',
  },
  skills: {
    kicker: 'Compétences',
    title: 'Faites connaître vos compétences.',
    support:
      'Elles précisent ce que vous pouvez apporter. Elles complètent le profil et aident à comprendre votre savoir-faire.',
    items: [
      { label: 'Expérience', text: 'Ce que vous avez déjà accompli.' },
      { label: 'Savoir-faire', text: 'Ce que vous pouvez mettre en œuvre.' },
      { label: 'Direction', text: 'Le cap que vous donnez à la suite.' },
    ],
  },
  network: {
    kicker: 'Réseau',
    title: 'Construisez votre réseau professionnel.',
    support:
      'Une présence professionnelle ne s’arrête pas à un CV, ni à une candidature. Entrer en relation avec d’autres professionnels fait partie d’un parcours qui continue.',
  },
  opportunities: {
    eyebrow: 'Opportunités',
    title: 'Découvrez les opportunités qui vous correspondent.',
    support:
      'L’emploi en fait partie. Une mission aussi. Les offres sont une porte dans la même plateforme, pas sa définition.',
    root: 'Opportunités',
    branches: [
      { title: 'Emploi', text: 'Un rôle qui s’inscrit dans la durée.' },
      { title: 'Missions', text: 'Un besoin précis, une durée définie.' },
    ],
    note: 'Aperçu des offres dans l’application.',
  },
  routes: {
    eyebrow: 'Deux routes',
    title: 'Deux manières de mettre votre parcours en mouvement.',
    employment: {
      kicker: 'Emploi',
      title: 'Un emploi pour construire la suite.',
      text: 'Un rôle professionnel prolonge votre expérience. Il s’inscrit dans une progression, pas dans une recherche isolée.',
    },
    missions: {
      kicker: 'Missions',
      title: 'Une mission pour mettre vos compétences en action.',
      text: 'Une mission mobilise un savoir-faire pour un besoin précis, sur une durée définie. Elle ne se confond pas avec un emploi.',
    },
  },
  organisations: {
    eyebrow: 'Talents et organisations',
    title: 'Faites comprendre votre valeur professionnelle aux entreprises.',
    support:
      'Un profil clair aide une organisation à voir qui vous êtes, ce que vous avez fait et ce que vous pouvez apporter.',
    sides: [
      {
        title: 'De votre côté',
        text: 'Vous rendez visibles votre identité, votre expérience et vos compétences.',
      },
      {
        title: 'De leur côté',
        text: 'Une organisation peut consulter ce profil et y lire ce que vous pouvez apporter.',
      },
    ],
    note: 'Côté organisation, dans l’application.',
  },
  lifecycle: {
    title: 'Votre parcours continue sur CamPower.',
    support:
      'Le profil, les compétences, le réseau et les opportunités peuvent rester utiles lorsque vous êtes en poste, en évolution, ou en recherche.',
    steps: [
      { label: 'Profil', text: 'Qui vous êtes' },
      { label: 'Compétences', text: 'Ce que vous savez faire' },
      { label: 'Réseau', text: 'Vos relations professionnelles' },
      { label: 'Opportunités', text: 'Emploi et missions' },
      { label: 'Évolution', text: 'La suite de votre parcours' },
    ],
    note: 'Une façon de rester présent professionnellement, à chaque étape de votre parcours.',
  },
  cameroon: {
    title: 'Pensé pour les professionnels au Cameroun.',
    support:
      'CamPower relie, au Cameroun, les personnes qui construisent un parcours, les organisations et les opportunités locales.',
  },
  daily: {
    title: 'CamPower, partout avec vous.',
    support: 'Votre profil, votre réseau et vos opportunités restent accessibles sur votre téléphone.',
    storeKicker: 'Télécharger sur',
    storeName: 'Google Play',
    storeHref: siteConfig.playStoreUrl,
  },
  finale: {
    title: 'Faites avancer votre parcours professionnel avec CamPower.',
    support: 'Créez votre présence, entrez en relation, ou regardez une opportunité. La suite se passe dans l’application.',
  },
};
