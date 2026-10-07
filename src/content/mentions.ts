import { siteConfig } from '../lib/site';
import type { MentionsContent } from './types';

/**
 * Operator identity remains unresolved.
 *
 * On 7 October 2026 the application mentions légales name CamPower as editor.
 * The application CGU of the same day names HOPE CORPORATIONS.
 * Those two published statements are recorded. Neither supplies a registered
 * legal form, RCCM, NIU, address, or named publication director.
 *
 * CAMPOWER-FUP-LEGAL-OPERATOR-IDENTITY-001 stays open.
 */
export const mentionsIdentityPublicationGate = 'UNRESOLVED' as const;

export const mentionsFr: MentionsContent = {
  meta: {
    title: 'Mentions légales — Site Vitrine CamPower',
    description:
      'Mentions légales du Site Vitrine public de CamPower. L’identité juridique de l’exploitant n’est pas tranchée entre les pages publiées de la plateforme.',
  },
  hero: {
    eyebrow: 'Mentions légales',
    scope: 'Site Vitrine',
    title: 'Mentions légales',
    lead: 'Ces mentions concernent le Site Vitrine public de CamPower. Elles rapportent ce que les pages légales de la plateforme publient, sans choisir un exploitant que ces pages ne désignent pas de la même façon.',
    support:
      'Les pages de la plateforme ont été consultées le 7 octobre 2026. Les champs qui n’y figurent pas restent non établis.',
  },
  identity: {
    title: 'Ce que les pages de la plateforme publient',
    lead: 'Deux pages vivent sur la plateforme. Elles ne nomment pas le même éditeur. Aucune ne publie une immatriculation, un NIU ou une adresse.',
    flag: 'Identité non tranchée',
    notice:
      'Les mentions légales de la plateforme désignent CamPower. Les conditions générales d’utilisation désignent HOPE CORPORATIONS, société de droit camerounais. Hope Corporation y est aussi nommée comme prestataire de développement, et non comme éditeur.',
    rows: [
      {
        label: 'Éditeur selon les mentions de la plateforme',
        value: 'CamPower',
        status: 'established',
        statusLabel: 'Publié',
      },
      {
        label: 'Éditeur selon les CGU',
        value: 'HOPE CORPORATIONS, société de droit camerounais',
        status: 'established',
        statusLabel: 'Publié dans les CGU',
      },
      {
        label: 'Directeur de la publication',
        value: 'Direction de CamPower',
        status: 'established',
        statusLabel: 'Formulation publiée',
      },
      {
        label: 'Développement',
        value: 'Hope Corporation, indiquée comme prestataire et non comme éditeur',
        status: 'established',
        statusLabel: 'Publié',
      },
      {
        label: 'Pays',
        value: 'République du Cameroun',
        status: 'established',
        statusLabel: 'Publié',
      },
      {
        label: 'Forme juridique',
        value: 'Non publiée',
        status: 'prototype',
        statusLabel: 'Non établi',
      },
      {
        label: 'Immatriculation',
        value: 'Non publiée',
        status: 'prototype',
        statusLabel: 'Non établi',
      },
      {
        label: 'Contribuable',
        value: 'Non publié',
        status: 'prototype',
        statusLabel: 'Non établi',
      },
      {
        label: 'Adresse',
        value: 'Non publiée',
        status: 'prototype',
        statusLabel: 'Non établi',
      },
      {
        label: 'Téléphone',
        value: 'Non publié',
        status: 'prototype',
        statusLabel: 'Non établi',
      },
      {
        label: 'Courriel des mentions de la plateforme',
        value: 'contact@campower.cm',
        href: 'mailto:contact@campower.cm',
        status: 'established',
        statusLabel: 'Publié',
      },
      {
        label: 'Courriel du Site Vitrine',
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        status: 'established',
        statusLabel: 'Établi pour le site',
      },
    ],
  },
  hosting: {
    title: 'Hébergement',
    cardTitle: 'Hébergement publié et hébergement du site',
    text: 'Les mentions de la plateforme indiquent un hébergement sur des infrastructures cloud tierces, sans nommer l’hébergeur. L’hébergeur de production du Site Vitrine n’est pas établi sur cette page.',
  },
  related: {
    title: 'Pages associées',
    lead: 'Les règles du site et la confidentialité ont chacune leur page. Elles ne sont pas recopiées ici.',
    items: [
      {
        title: 'Conditions d’utilisation',
        text: 'Les règles d’utilisation du Site Vitrine public.',
        href: '/conditions-utilisation/',
        pathLabel: '/conditions-utilisation/',
        cta: 'Lire les conditions',
      },
      {
        title: 'Confidentialité',
        text: 'Les pratiques de confidentialité actuellement établies pour ce site.',
        href: '/confidentialite/',
        pathLabel: '/confidentialite/',
        cta: 'Lire la confidentialité',
      },
    ],
  },
  questions: {
    title: 'Une question sur ces mentions ?',
    support: 'Pour une question relative à ces mentions du Site Vitrine, écrivez à l’adresse ci-dessous.',
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: 'Nous écrire',
  },
};
