import { siteConfig } from '../lib/site';
import type { AideContent } from './types';

export const aideFr: AideContent = {
  meta: {
    title: 'Aide — Questions fréquentes sur CamPower',
    description:
      'Trouvez une réponse parmi les sujets d’aide CamPower, ou écrivez à CamPower si votre question n’y figure pas.',
  },
  hero: {
    eyebrow: 'Aide',
    title: 'Comment pouvons-nous vous aider ?',
    lead: 'Parcourez les sujets courants, lisez les réponses déjà disponibles, puis écrivez à CamPower si la question reste ouverte.',
    searchLabel: 'Rechercher dans l’aide',
    searchPlaceholder: 'Rechercher dans l’aide',
    hint: 'Cette recherche parcourt uniquement les sujets et les questions de cette page.',
    empty: 'Vous ne trouvez pas ce que vous cherchez ?',
    emptyLink: 'Contactez CamPower.',
  },
  topics: {
    title: 'Choisissez un sujet',
    items: [
      {
        title: 'Compte & accès',
        text: 'Où ouvrir CamPower et l’application.',
        action: 'Voir les questions',
        terms: 'compte accès application android',
        icon: 'key',
      },
      {
        title: 'Profil & compétences',
        text: 'Comprendre le profil et les compétences.',
        action: 'Voir les questions',
        terms: 'profil compétences identité',
        icon: 'user',
      },
      {
        title: 'Opportunités & candidatures',
        text: 'L’emploi, et les autres formes d’opportunité.',
        action: 'Voir les questions',
        terms: 'opportunités candidatures emploi',
        icon: 'brief',
      },
      {
        title: 'Entreprises & recrutement',
        text: 'Besoins, talents et recrutement.',
        action: 'Voir les questions',
        terms: 'entreprises recrutement organisations',
        icon: 'org',
      },
      {
        title: 'Missions',
        text: 'Un besoin défini et une compétence.',
        action: 'Voir les questions',
        terms: 'missions besoin compétence',
        icon: 'meet',
      },
      {
        title: 'Confidentialité & sécurité',
        text: 'Une question sur vos données : écrire à CamPower.',
        action: 'Contacter CamPower',
        terms: 'confidentialité sécurité données',
        icon: 'shield',
        href: '#contact',
      },
    ],
  },
  faq: {
    title: 'Questions fréquentes',
    dek: 'Quelques réponses déjà établies. Cette page ne décrit pas les écrans de l’application un par un.',
    items: [
      {
        question: 'Qu’est-ce que CamPower ?',
        answer:
          'CamPower est un écosystème professionnel. Il relie les personnes, les compétences, les organisations et les opportunités, au Cameroun.',
        terms: 'qu’est-ce que campower écosystème personnes compétences organisations opportunités cameroun profil',
      },
      {
        question: 'À qui s’adresse CamPower ?',
        answer: 'CamPower s’adresse aux professionnels et aux organisations. Les deux avancent dans le même espace.',
        terms: 'à qui s’adresse campower professionnels organisations entreprises talents profil',
      },
      {
        question: 'CamPower est-il uniquement destiné à la recherche d’emploi ?',
        answer:
          'Non. L’emploi en fait partie, avec l’identité professionnelle, les compétences, le réseau et les missions. Aucune de ces portes ne définit CamPower à elle seule.',
        terms: 'uniquement recherche d’emploi identité compétences réseau missions opportunités candidatures',
      },
      {
        question: 'Quelle est la différence entre un emploi et une mission ?',
        answer:
          'L’emploi est une place qui s’inscrit dans la durée. La mission relie un besoin défini et une compétence. Les missions complètent l’emploi. Elles ne le remplacent pas.',
        terms: 'différence emploi mission besoin compétence durée missions',
      },
      {
        question: 'Où puis-je accéder à CamPower ?',
        answer: 'L’application est accessible à l’adresse ',
        link: { label: 'cam-power.net', href: siteConfig.applicationUrl },
        after: '.',
        terms: 'où accéder campower application compte accès cam-power.net',
      },
      {
        question: 'Une application Android est-elle disponible ?',
        answer: 'Oui. L’application Android est disponible sur ',
        link: { label: 'Google Play', href: siteConfig.playStoreUrl },
        after: '.',
        terms: 'application android google play compte accès',
      },
    ],
  },
  paths: {
    title: 'Vous êtes professionnel ou entreprise ?',
    dek: 'Deux façons de vous orienter. Ce ne sont pas des espaces d’assistance séparés.',
    professional: {
      kicker: 'Professionnel',
      title: 'Votre parcours',
      links: [
        { label: 'Profil', terms: 'profil compétences' },
        { label: 'Compétences', terms: 'profil compétences' },
        { label: 'Opportunités', terms: 'opportunités candidatures' },
        { label: 'Candidatures', terms: 'opportunités candidatures' },
        { label: 'Missions', terms: 'missions besoin' },
      ],
    },
    enterprise: {
      kicker: 'Entreprise',
      title: 'Votre besoin',
      links: [
        { label: 'Présence professionnelle', terms: 'entreprises recrutement' },
        { label: 'Talents', terms: 'entreprises recrutement' },
        { label: 'Recrutement', terms: 'entreprises recrutement' },
        { label: 'Missions', terms: 'missions besoin' },
      ],
    },
  },
  escalation: {
    title: 'Vous ne trouvez pas votre réponse ?',
    support: 'Écrivez à CamPower. Cette page ne remplace pas le contact direct, et elle n’ouvre pas de formulaire.',
    contactLabel: 'Contacter CamPower',
    contactHref: `mailto:${siteConfig.email}`,
    emailLabel: siteConfig.email,
    accessLabel: 'Accéder à CamPower',
    accessHref: siteConfig.applicationUrl,
  },
};
