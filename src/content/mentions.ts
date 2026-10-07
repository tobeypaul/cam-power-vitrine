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
 * Dispatch 005 records the same contradiction and does not choose a side.
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
    title: 'Éditeur du site',
    lead: 'Les mentions légales de la plateforme, consultées le 7 octobre 2026, publient CamPower comme éditeur et exploitant, la République du Cameroun, contact@campower.cm et « Direction de CamPower » comme directeur de la publication. Elles ne publient ni forme juridique, ni RCCM, ni NIU, ni adresse, ni téléphone, ni le nom d’une personne physique.',
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
        value: 'Hope Corporation, prestataire de développement logiciel',
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
        statusLabel: 'Non publié',
      },
      {
        label: 'Immatriculation',
        value: 'Non publiée',
        status: 'prototype',
        statusLabel: 'Non publié',
      },
      {
        label: 'Contribuable',
        value: 'Non publié',
        status: 'prototype',
        statusLabel: 'Non publié',
      },
      {
        label: 'Personne physique nommée',
        value: 'Non publiée',
        status: 'prototype',
        statusLabel: 'Non publié',
      },
      {
        label: 'Adresse',
        value: 'Non publiée',
        status: 'prototype',
        statusLabel: 'Non publié',
      },
      {
        label: 'Téléphone',
        value: 'Non publié',
        status: 'prototype',
        statusLabel: 'Non publié',
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
    text: 'Les mentions de la plateforme indiquent que la plateforme est hébergée sur des infrastructures cloud tierces, sans nommer l’hébergeur. Elles renvoient à l’éditeur pour toute information sur cet hébergeur. L’hébergeur de production du Site Vitrine n’est pas établi sur cette page.',
  },
  further: [
    {
      title: 'Développement',
      text: 'Les mentions légales de la plateforme indiquent que la solution numérique CamPower a été développée par Hope Corporation, prestataire de développement logiciel. Elles indiquent aussi que Hope Corporation n’est ni propriétaire, ni coéditeur de CamPower, n’est pas responsable du traitement des données personnelles des utilisateurs, et que l’exploitation du service et la responsabilité des données incombent exclusivement à CamPower. Cette page ne réinterprète pas ces phrases. Elle ne décide pas si Hope Corporation et HOPE CORPORATIONS sont la même personne morale.',
    },
    {
      title: 'Propriété intellectuelle',
      text: 'Les mentions de la plateforme indiquent que l’ensemble du contenu du site CAMPOWER, notamment les textes, graphiques, images, logos, icônes, vidéos, logiciels et bases de données, est la propriété exclusive de CamPower ou de ses partenaires, et est protégé par les lois camerounaises et internationales relatives à la propriété intellectuelle. Les conditions générales d’utilisation attribuent, de leur côté, les éléments de la plateforme à HOPE CORPORATIONS. Cette page ne choisit pas entre ces formulations.',
    },
    {
      title: 'Données personnelles',
      text: 'Les mentions de la plateforme indiquent que CamPower traite des données personnelles pour fournir et améliorer les services, et qu’un utilisateur peut exercer des droits d’accès, de rectification et de suppression à contact@campower.cm. Le Site Vitrine décrit ses propres limites sur sa page Confidentialité. La source publiée pour les traitements de l’application reste les conditions générales d’utilisation. Cette page ne recopie pas ces textes.',
      links: [
        { href: '/confidentialite/', label: 'Confidentialité du Site Vitrine' },
        { href: 'https://cam-power.net/cgu', label: 'https://cam-power.net/cgu' },
      ],
    },
    {
      title: 'Droit applicable',
      text: 'Les mentions de la plateforme sont régies par le droit camerounais. Elles attribuent aux tribunaux de Douala, République du Cameroun, la compétence exclusive pour les litiges relatifs à leur interprétation ou à leur exécution. Cette indication est celle publiée pour ces mentions. Elle ne désigne pas, à elle seule, le for du Site Vitrine.',
    },
  ],
  related: {
    title: 'Pages associées',
    lead: 'Les règles du site et la confidentialité ont chacune leur page. Les conditions de la plateforme restent sur la plateforme.',
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
      {
        title: 'Conditions de la plateforme',
        text: 'Source actuelle des conditions et des informations de confidentialité de l’application. Cette page ne la remplace pas.',
        href: 'https://cam-power.net/cgu',
        pathLabel: 'cam-power.net/cgu',
        cta: 'Ouvrir les CGU',
      },
      {
        title: 'Mentions de la plateforme',
        text: 'Source consultée pour les mentions de l’application. Cette page du Site Vitrine ne la recopie pas.',
        href: 'https://cam-power.net/mentions-legales',
        pathLabel: 'cam-power.net/mentions-legales',
        cta: 'Ouvrir les mentions',
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
