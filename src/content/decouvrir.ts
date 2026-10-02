import { siteConfig } from '../lib/site';
import type { DecouvrirContent } from './types';

export const decouvrirFr: DecouvrirContent = {
  meta: {
    title: 'Découvrir CamPower — L’écosystème professionnel',
    description:
      'CamPower relie votre identité professionnelle, vos compétences, votre réseau, les opportunités, le recrutement et les missions. Découvrez comment ces parties avancent ensemble, au Cameroun.',
  },
  nav: [
    { label: 'Découvrir', href: '/decouvrir/', current: true },
    { label: 'Talents', href: '/talents/' },
    { label: 'Entreprises', href: '/entreprises/' },
    { label: 'Missions', href: '/missions/' },
    { label: 'À propos', href: '/a-propos/' },
  ],
  hero: {
    eyebrow: 'Découvrir CamPower',
    titleLines: ['Comment CamPower', 'accompagne votre', 'vie professionnelle.'],
    lead: 'CamPower relie votre identité professionnelle, vos compétences, votre réseau, les opportunités, le recrutement et les missions. Cette page montre comment ces parties avancent ensemble, au Cameroun.',
    ecosystem: { label: 'Voir l’écosystème', href: '#ensemble' },
    spine: ['Profil', 'Compétences', 'Réseau', 'Opportunités', 'Recrutement', 'Missions'],
    spineNote: 'Six parties. Une plateforme.',
  },
  possibilities: {
    titleLines: ['Une plateforme professionnelle,', 'plusieurs possibilités.'],
    dek: 'Aucune de ces parties ne suffit à décrire CamPower. Chacune prépare la suivante.',
    steps: [
      'Présenter qui vous êtes.',
      'Montrer ce que vous savez faire.',
      'Entrer en relation.',
      'Découvrir emplois et missions.',
      'Rencontrer des talents.',
      'Répondre à un besoin précis.',
    ],
  },
  identity: {
    kicker: 'Votre identité professionnelle',
    title: 'Votre profil rassemble qui vous êtes et ce que vous savez faire.',
    support:
      'Il présente votre parcours, vos compétences et votre présence professionnelle. C’est le point de départ, pas une fiche isolée.',
  },
  network: {
    kicker: 'Développez votre réseau',
    title: 'Le réseau prolonge le profil.',
    support:
      'CamPower permet d’entrer en relation avec d’autres professionnels. La plateforme ne s’arrête pas à une offre d’emploi.',
  },
  opportunities: {
    eyebrow: 'Découvrez des opportunités',
    title: 'L’emploi en fait partie. Il ne résume pas CamPower.',
    support:
      'Une opportunité peut être un emploi, une mission ou un besoin précis. Les offres sont une porte parmi d’autres dans la même plateforme.',
  },
  meeting: {
    title: 'Talents et entreprises se rencontrent.',
    dek: 'D’un côté, des professionnels qui présentent leur parcours. De l’autre, des organisations qui cherchent une compétence. CamPower les met en relation.',
    professionalsTitle: 'Côté professionnels',
    professionalsBody:
      'Ils montrent leur expérience et découvrent des besoins qui correspondent à leurs compétences.',
    organisationsTitle: 'Côté organisations',
    organisationsBody: 'Elles consultent des profils et entrent en relation avec les personnes adaptées.',
  },
  missions: {
    eyebrow: 'Travaillez autrement avec les missions',
    title: 'Une autre route, dans le même écosystème.',
    support:
      'Une mission mobilise une compétence pour un besoin précis, sur une durée définie. Elle coexiste avec l’emploi et le recrutement.',
    leftTitle: 'Emploi et recrutement',
    leftBody: 'Des opportunités durables, et des organisations qui cherchent des talents.',
    rightTitle: 'Missions',
    rightBody: 'Un besoin précis, une compétence, une durée définie. Toujours dans CamPower.',
  },
  ecosystem: {
    title: 'Tout fonctionne ensemble.',
    dek: 'Le profil porte l’identité. Les compétences précisent le savoir-faire. Le réseau relie les personnes. Les opportunités ouvrent des portes, dont l’emploi. Le recrutement fait se rencontrer talents et organisations. Les missions proposent une autre façon de collaborer.',
    chain: ['Profil', 'Compétences', 'Réseau', 'Opportunités', 'Recrutement', 'Missions'],
  },
  cameroon: {
    title: 'Pensé pour les réalités du marché camerounais.',
    dek: 'CamPower est conçu pour relier, au Cameroun, les talents, les entreprises, les compétences et les opportunités locales.',
  },
  daily: {
    title: 'CamPower dans votre quotidien.',
    support: 'Le profil, le réseau, les opportunités et les missions restent accessibles depuis votre téléphone.',
    storeKicker: 'Télécharger sur',
    storeName: 'Google Play',
    storeHref: siteConfig.playStoreUrl,
  },
  finale: {
    title: 'Vous voyez comment CamPower se tient.',
    support:
      'La suite se passe dans l’application : créer votre profil, entrer en relation, ou découvrir une opportunité.',
  },
};
