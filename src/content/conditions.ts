import { siteConfig } from '../lib/site';
import type { ConditionsContent } from './types';

export const conditionsFr: ConditionsContent = {
  meta: {
    title: 'Conditions d’utilisation du Site Vitrine — CamPower',
    description:
      'Conditions d’utilisation du Site Vitrine public de CamPower. Elles ne définissent pas les conditions de la plateforme ou de l’application.',
  },
  hero: {
    eyebrow: 'Conditions d’utilisation',
    scope: 'Site Vitrine',
    title: 'Conditions d’utilisation du Site Vitrine',
    lead: 'Ces conditions encadrent uniquement l’utilisation du Site Vitrine public de CamPower. Elles expliquent la nature du site, les règles essentielles de son utilisation et les limites de ce que les informations présentées constituent.',
    support:
      'Elles concernent ce site public, et non l’ensemble de l’application CamPower. Les consulter ou parcourir le site n’emporte pas acceptation de conditions d’application qui ne sont pas publiées ici.',
  },
  scope: {
    title: 'À quoi s’appliquent ces conditions ?',
    coveredLabel: 'Ces conditions couvrent',
    coveredTitle: 'Le Site Vitrine public de CamPower',
    coveredText:
      'Les pages d’information consultées ici, notamment la présentation de CamPower, l’aide et le contact. Elles sont mises à disposition sur ce site. Leur lecture n’est pas une acceptation signée.',
    outsideLabel: 'Elles ne définissent pas',
    outsideTitle: 'Les conditions contractuelles de la plateforme ou de l’application CamPower',
    outsideText:
      'Comptes, profils, recrutement, candidatures, Missions, messages et contenus déposés dans l’application relèvent d’autres règles. Ces règles ne sont pas établies sur ce site.',
  },
  purpose: {
    title: 'Un site public d’information sur CamPower',
    lead: 'Le Site Vitrine fait connaître CamPower. Il n’ouvre pas de compte.',
    items: [
      {
        title: 'Présenter CamPower',
        text: 'Le site expose le produit et la manière dont il se présente au public.',
      },
      {
        title: 'Expliquer l’écosystème',
        text: 'Il décrit l’environnement professionnel dans lequel CamPower s’inscrit.',
      },
      {
        title: 'Présenter les audiences',
        text: 'Il indique les principaux publics et ce que le produit leur permet d’envisager.',
      },
      {
        title: 'Orienter plus loin',
        text: 'Il aide à comprendre CamPower, puis dirige les personnes intéressées vers CamPower et les destinations officielles prévues.',
      },
    ],
    infoTitle: 'Des informations, pas un engagement particulier',
    infoText:
      'Les contenus du Site Vitrine sont avant tout informatifs et de présentation. La présence d’informations sur l’emploi, le recrutement, les opportunités, les Missions, les talents ou les entreprises ne constitue pas, à elle seule, un contrat d’emploi, un engagement de recrutement ou un contrat de Mission déterminé.',
  },
  use: {
    title: 'Utiliser le Site Vitrine de manière appropriée',
    lead: 'Le site est ouvert à la consultation. Quelques limites suffisent.',
    items: [
      'Ne pas perturber volontairement le fonctionnement du site.',
      'Ne pas tenter un accès qui n’est pas offert.',
      'Ne pas introduire de code malveillant.',
      'Ne pas utiliser le site de manière illicite.',
    ],
    indexing:
      'L’indexation ordinaire par les moteurs de recherche, et la découverte légitime de ce site public, restent permises.',
  },
  ip: {
    title: 'Contenus, marque et illustrations',
    lead: 'Le Site Vitrine comprend la marque CamPower, sa conception et ses textes. Vous pouvez le consulter normalement. Il convient de ne pas présenter ce site, cette marque ou ces contenus comme les vôtres.',
    support:
      'Cette page n’affirme pas qu’une marque est déposée, ni que chaque élément visuel appartient à CamPower quelle que soit son origine. Une règle plus précise sur la propriété ou les licences reste à confirmer.',
    thirdParty:
      'La présence d’un nom, d’une marque ou d’un élément tiers dans une illustration ou une capture d’écran ne signifie pas, à elle seule, qu’il existe un partenariat, une affiliation ou une approbation par ce tiers.',
  },
  leave: {
    title: 'Lorsque vous quittez le Site Vitrine',
    lead: 'Le site peut vous conduire vers d’autres surfaces. Celles qui ne sont pas CamPower appliquent leurs propres conditions.',
    destinations: [
      { title: 'Application CamPower', text: 'cam-power.net' },
      { title: 'Google Play', text: 'La fiche de l’application' },
      { title: 'LinkedIn', text: 'La page de CamPower' },
      { title: 'Votre messagerie', text: siteConfig.email },
    ],
    appTitle: 'L’application reste CamPower',
    appParagraphs: [
      'L’application CamPower est une surface du produit CamPower. Le fait qu’elle se trouve hors de ces conditions ne la présente pas comme un service étranger à CamPower.',
      'Y accéder depuis le Site Vitrine ne signifie pas que ces conditions définissent toutes les règles de l’application. Choisir « Accéder à CamPower » n’emporte pas acceptation de conditions d’application.',
    ],
  },
  availability: {
    title: 'Disponibilité et évolution du site',
    items: [
      {
        title: 'Le site peut évoluer',
        text: 'Les contenus d’information du Site Vitrine peuvent être mis à jour à mesure que le produit évolue. Cette mise à jour ne modifie pas un contrat d’application qui n’est pas défini ici.',
      },
      {
        title: 'L’accès peut être interrompu',
        text: 'La consultation peut parfois être interrompue. Aucune disponibilité permanente ni niveau de service n’est promis. Cette page ne prévoit pas l’arrêt de l’ensemble de la plateforme CamPower.',
      },
    ],
  },
  limits: {
    title: 'Ce que les informations du site ne constituent pas',
    lead: 'Le seul fait de présenter des opportunités ou des capacités sur le Site Vitrine ne crée pas un engagement.',
    items: [
      {
        title: 'Pas une relation d’emploi',
        text: 'Une page de ce site n’établit pas un contrat de travail.',
      },
      {
        title: 'Pas un recrutement',
        text: 'Cette page n’engage pas CamPower à recruter, ni une entreprise à retenir un candidat.',
      },
      {
        title: 'Pas un contrat de Mission',
        text: 'Cette page ne forme pas un contrat de Mission entre les personnes concernées.',
      },
    ],
    note: 'La visite du Site Vitrine ne garantit ni un emploi, ni un recrutement, ni un candidat, ni une Mission, ni un résultat professionnel ou commercial.',
  },
  privacy: {
    title: 'Confidentialité',
    text: 'Les pratiques de confidentialité actuellement établies pour le Site Vitrine sont indiquées sur la page Confidentialité. Cette page ne les reprend pas et n’en élargit pas la portée.',
    href: '/confidentialite/',
    pathLabel: '/confidentialite/',
    cta: 'Lire la page Confidentialité',
  },
  law: {
    title: 'Cadre applicable',
    text: 'Les questions relatives à ces conditions sont envisagées au regard du droit camerounais applicable. Cette page ne désigne ni tribunal, ni organe d’arbitrage ou de médiation, et elle n’affirme pas une conformité générale.',
  },
  questions: {
    title: 'Une question sur ces conditions ?',
    support: 'Pour une question relative à ces conditions du Site Vitrine, écrivez à l’adresse ci-dessous.',
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: 'Nous écrire',
  },
};
