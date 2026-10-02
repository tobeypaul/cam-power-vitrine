import { siteConfig } from '../lib/site';
import type { ContactContent } from './types';

export const contactFr: ContactContent = {
  meta: {
    title: 'Contact — Écrire à CamPower',
    description:
      'Écrivez à CamPower à contact@cam-power.net pour une assistance, une question de professionnel ou d’entreprise. L’adresse est la même pour tous les motifs.',
  },
  hero: {
    eyebrow: 'Contact',
    title: 'Parlons-en.',
    lead: 'CamPower met à disposition un point de contact clair pour les professionnels, les entreprises et toute personne souhaitant obtenir une assistance ou échanger au sujet de la plateforme.',
  },
  intents: {
    title: 'Pourquoi souhaitez-vous nous contacter ?',
    dek: 'Ces motifs vous orientent. Ils n’ouvrent pas de file séparée. Chaque message part vers la même adresse.',
    choose: 'Choisir ce motif',
    items: [
      {
        title: 'Assistance CamPower',
        text: 'Une question reste ouverte après l’aide.',
        subject: 'Assistance CamPower',
      },
      {
        title: 'Professionnels',
        text: 'Une question sur CamPower ou sur votre usage de la plateforme.',
        subject: 'Professionnel',
      },
      {
        title: 'Entreprises',
        text: 'Une question sur les talents, le recrutement, les missions ou votre présence.',
        subject: 'Entreprise',
      },
      {
        title: 'Autre demande',
        text: 'Une demande légitime qui ne rentre pas dans les trois premiers motifs.',
        subject: 'Question CamPower',
      },
    ],
  },
  email: {
    title: 'Écrivez-nous',
    dek: 'L’adresse est la même pour tous les motifs. Elle reste visible, pour que vous sachiez où part le message.',
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: 'Nous écrire',
    optional: 'Aucun motif n’est obligatoire.',
    subjectPrefix: 'Objet proposé : ',
  },
  aide: {
    title: 'Vous cherchez d’abord une réponse ?',
    support: 'Les questions courantes et les premiers repères sont sur la page Aide. Contact sert à écrire directement à CamPower.',
    cta: 'Consulter l’aide',
    href: '/aide/',
  },
  linkedin: {
    title: 'Suivez CamPower',
    support: 'La page LinkedIn est une présence professionnelle. Ce n’est pas le canal d’assistance.',
    cta: 'Suivre CamPower sur LinkedIn',
    href: siteConfig.linkedInUrl,
  },
  application: {
    title: 'Vous souhaitez accéder directement à CamPower ?',
    cta: 'Accéder à CamPower',
    href: siteConfig.applicationUrl,
  },
};
