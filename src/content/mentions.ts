import { siteConfig } from '../lib/site';
import type { MentionsContent } from './types';

/**
 * PROTOTYPE DATA — NOT VERIFIED.
 *
 * The bracketed operator fields below are dummy composition values.
 * They are not CamPower legal facts and must not be treated as verified.
 *
 * Replacement gate before any production publication:
 * PROTOTYPE DATA
 *   → VERIFIED OPERATOR EVIDENCE
 *   → PRODUCTION LEGAL CONTENT REVIEW
 *   → PRODUCTION-READY PUBLICATION
 *
 * Do not remove the visible prototype markings until that gate is passed.
 * CAMPOWER-FUP-LEGAL-OPERATOR-IDENTITY-001 stays open.
 */
export const mentionsIdentityPublicationGate = 'PROTOTYPE' as const;

export const mentionsFr: MentionsContent = {
  meta: {
    title: 'Mentions légales — Site Vitrine CamPower',
    description:
      'Mentions légales du Site Vitrine public de CamPower. L’identité de l’éditeur est une donnée de prototype, non vérifiée.',
  },
  hero: {
    eyebrow: 'Mentions légales',
    scope: 'Site Vitrine',
    title: 'Mentions légales',
    lead: 'Ces mentions identifient l’éditeur du Site Vitrine public de CamPower. Elles ne reprennent ni les conditions d’utilisation, ni la confidentialité, ni les règles de l’application.',
    support:
      'Les valeurs entre crochets sont des données de prototype. Elles ne sont pas vérifiées et ne sont pas destinées à une publication.',
  },
  identity: {
    title: 'Éditeur du Site Vitrine',
    lead: 'L’identité juridique de l’exploitant n’est pas établie. Les champs ci-dessous montrent seulement la place qu’elle occupera.',
    flag: 'Prototype — non vérifié',
    notice: 'Aucune de ces mentions entre crochets n’est un fait CamPower.',
    rows: [
      {
        label: 'Éditeur',
        value: '[Nom légal — donnée prototype]',
        status: 'prototype',
        statusLabel: 'Prototype',
      },
      {
        label: 'Forme juridique',
        value: '[Forme juridique — donnée prototype]',
        status: 'prototype',
        statusLabel: 'Prototype',
      },
      {
        label: 'Immatriculation',
        value: '[RCCM — donnée prototype]',
        status: 'prototype',
        statusLabel: 'Prototype',
      },
      {
        label: 'Contribuable',
        value: '[NIU — donnée prototype]',
        status: 'prototype',
        statusLabel: 'Prototype',
      },
      {
        label: 'Adresse',
        value: '[Adresse — donnée prototype]',
        status: 'prototype',
        statusLabel: 'Prototype',
      },
      {
        label: 'Téléphone',
        value: '[Téléphone — donnée prototype]',
        status: 'prototype',
        statusLabel: 'Prototype',
      },
      {
        label: 'Courriel',
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        status: 'established',
        statusLabel: 'Établi pour le site',
      },
    ],
  },
  hosting: {
    title: 'Hébergement',
    cardTitle: 'Hébergeur du Site Vitrine',
    text: 'L’hébergement de production du Site Vitrine n’est pas configuré. Cette page n’indique donc pas d’hébergeur.',
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
