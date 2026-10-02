import { siteConfig } from '../lib/site';
import type { ConfidentialiteContent } from './types';

export const confidentialiteFr: ConfidentialiteContent = {
  meta: {
    title: 'Confidentialité — Site Vitrine CamPower',
    description:
      'Information intermédiaire sur les pratiques de confidentialité actuellement établies pour le Site Vitrine public de CamPower.',
  },
  hero: {
    eyebrow: 'Confidentialité',
    status: 'Information intermédiaire',
    title: 'Votre confidentialité, expliquée clairement.',
    lead: 'Cette page indique ce qui est établi aujourd’hui lorsque vous consultez le site public de CamPower, et la limite de cette information.',
  },
  scope: {
    title: 'Portée de cette information',
    lead: 'Cette information décrit les pratiques de confidentialité actuellement établies pour le Site Vitrine public de CamPower. Les informations relatives aux traitements effectués au sein de la plateforme et de l’application CamPower seront complétées lorsque les éléments techniques et opérationnels nécessaires auront été consolidés.',
    coveredLabel: 'Couvert aujourd’hui',
    coveredTitle: 'Le Site Vitrine public',
    coveredText:
      'Les pages d’information que vous consultez ici, y compris Aide et Contact. Les constats ci-dessous portent sur la version de ce site qui a été examinée.',
    pendingLabel: 'À compléter',
    pendingTitle: 'La plateforme et l’application',
    pendingText:
      'Les traitements liés aux comptes, aux profils, au recrutement, aux missions, aux messages et aux notifications ne sont pas décrits ici. Ils ne sont pas encore établis dans cette information.',
  },
  practices: {
    title: 'Ce que fait actuellement le Site Vitrine',
    dek: 'Ces points décrivent le site public examiné. Ils ne décrivent pas l’application CamPower.',
    items: [
      {
        title: 'Pas de compte sur ce site',
        text: 'Le Site Vitrine ne propose ni inscription ni connexion. Il ne crée pas de compte CamPower.',
      },
      {
        title: 'Pas de formulaire de contact',
        text: 'Le site ne recueille pas votre message. Écrire à CamPower ouvre votre application de messagerie.',
      },
      {
        title: 'Pas de suivi identifié',
        text: 'Aucun outil d’analyse ou de suivi des visiteurs n’a été identifié dans l’implémentation actuelle du Site Vitrine.',
      },
      {
        title: 'Aucun cookie identifié',
        text: 'Dans la version actuellement examinée du Site Vitrine, aucun cookie n’a été identifié comme étant déposé par le site.',
      },
    ],
    fonts:
      'Les polices de cette version sont fournies avec le site. Le chargement des pages examinées n’appelle pas un service externe de polices. La recherche de la page Aide s’effectue dans la page, parmi les sujets et les questions qui y figurent.',
    hosting:
      'Lorsque le Site Vitrine sera mis en ligne sur son hébergement de production, cet hébergement pourra traiter des informations techniques de connexion. Ce point sera précisé lorsque l’hébergement aura été arrêté. Aucune durée de conservation n’est indiquée ici.',
  },
  email: {
    title: 'Lorsque vous nous écrivez',
    lead: 'Le message part de votre messagerie. Le Site Vitrine ne le conserve pas.',
    steps: [
      { title: 'Site Vitrine', text: 'Vous choisissez « Nous écrire ».' },
      { title: 'Votre messagerie', text: 'Vous rédigez et envoyez le message.' },
      { title: siteConfig.email, text: 'L’adresse de destination reste la même.' },
    ],
    note: 'Sur la page Contact, un motif peut seulement proposer l’objet du message. Il ne crée ni ticket, ni compte, ni file séparée. Cette information ne décrit pas la conservation ultérieure du courriel par le service de messagerie qui le reçoit.',
  },
  cookies: {
    title: 'Cookies et mesure d’audience',
    items: [
      {
        title: 'Cookies',
        text: 'Dans la version actuellement examinée du Site Vitrine, aucun cookie n’a été identifié comme étant déposé par le site.',
      },
      {
        title: 'Mesure d’audience',
        text: 'Aucun outil d’analyse ou de suivi des visiteurs n’a été identifié dans l’implémentation actuelle du Site Vitrine.',
      },
    ],
    note: 'Ces constats concernent le Site Vitrine examiné. Ils ne portent pas sur l’application CamPower.',
  },
  application: {
    title: 'Concernant l’application CamPower',
    paragraphs: [
      'CamPower ne se limite pas à ce site d’information. La plateforme et l’application servent des échanges professionnels plus larges. Le positionnement public évoque des profils, des compétences, des opportunités, le recrutement, les missions et le réseau professionnel.',
      'Cette page ne transforme pas ces descriptions en inventaire des données traitées. Une description complète de ces traitements exige des éléments techniques et opérationnels qui ne sont pas disponibles aujourd’hui. Ils seront ajoutés lorsqu’ils auront été consolidés.',
    ],
  },
  questions: {
    title: 'Une question sur vos données ou votre confidentialité ?',
    support:
      'Pour une question ou une demande relative à la confidentialité, écrivez à l’adresse ci-dessous. Aucun formulaire n’est proposé sur cette page.',
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: 'Nous écrire',
  },
  evolve: {
    title: 'Une information appelée à évoluer',
    paragraphs: [
      'Cette information intermédiaire sera mise à jour lorsque les éléments relatifs à l’application et à l’hébergement de production auront été consolidés. Les travaux de confidentialité de CamPower sont menés au regard du cadre camerounais applicable, notamment la loi n° 2024/017 du 23 décembre 2024 relative à la protection des données à caractère personnel.',
      'Cette page n’indique ni enregistrement, ni autorisation, ni certification. Elle ne fixe pas de durée de conservation et ne décrit pas de procédure de suppression de compte.',
    ],
    updatedLabel: 'Dernière mise à jour',
    updated: '2 octobre 2026',
  },
};
