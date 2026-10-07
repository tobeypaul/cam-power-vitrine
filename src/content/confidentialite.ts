import { siteConfig } from '../lib/site';
import type { ConfidentialiteContent } from './types';

export const confidentialiteFr: ConfidentialiteContent = {
  meta: {
    title: 'Confidentialité — Site Vitrine CamPower',
    description:
      'Confidentialité du Site Vitrine public de CamPower, et résumé des informations publiées pour l’application, sans remplacer les conditions de la plateforme.',
  },
  hero: {
    eyebrow: 'Confidentialité',
    status: 'Site Vitrine et application',
    title: 'Votre confidentialité, expliquée clairement.',
    lead: 'Cette page indique ce qui s’applique lorsque vous consultez seulement le Site Vitrine, puis ce que les conditions de la plateforme publient pour l’application. Elle ne remplace pas ces conditions.',
  },
  scope: {
    title: 'Portée de cette information',
    lead: 'Cette information distingue le Site Vitrine public et la plateforme CamPower. Consulter ce site ne crée pas de compte et ne constitue pas une candidature.',
    coveredLabel: 'Ce site',
    coveredTitle: 'Le Site Vitrine public',
    coveredText:
      'Les pages d’information que vous consultez ici, y compris Aide et Contact. Les constats ci-dessous portent sur la version de ce site qui a été examinée.',
    pendingLabel: 'Autre surface',
    pendingTitle: 'La plateforme et l’application',
    pendingText:
      'Les comptes, les profils, les candidatures, les CV, les données de recruteurs, les paiements, les messages et les profils de candidature relèvent de l’application. Ce site ne les traite pas. Les éléments publiés à leur sujet sont résumés plus bas.',
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
    note: 'Ces constats concernent le Site Vitrine examiné. Les mentions de la plateforme indiquent, pour la plateforme seulement, que des cookies ou technologies similaires peuvent maintenir la session, mémoriser des préférences, analyser l’usage et sécuriser les fonctions réservées aux membres. Ces usages ne sont pas ceux de ce site.',
  },
  application: {
    title: 'Concernant l’application CamPower',
    paragraphs: [
      'Les conditions générales d’utilisation de la plateforme, en vigueur depuis le 21 juillet 2026 et consultées le 7 octobre 2026, décrivent des traitements propres à l’application. Le résumé qui suit ne recopie pas ces conditions.',
      'Ces conditions indiquent que la plateforme collecte notamment le nom, le prénom, l’adresse électronique, le téléphone, la ville, le CV, les compétences professionnelles, l’historique des candidatures et des données de navigation.',
      'Les finalités qui y figurent comprennent la gestion et la personnalisation du compte, la mise en relation des candidats et des recruteurs, l’amélioration du service et des recommandations personnalisées, les communications relatives au compte et aux offres, ainsi que le respect d’obligations légales.',
      'Les droits qui y sont indiqués sont l’accès, la rectification et la suppression. Les conditions indiquent de les exercer auprès de l’éditeur à contact@campower.cm. Cette adresse est le contact publié par les pages légales de la plateforme. Une question sur le Site Vitrine reste adressée à contact@cam-power.net.',
      'Les mêmes conditions citent la loi n° 2010/021 du 21 décembre 2010 régissant le commerce électronique et la loi n° 2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité. Elles désignent HOPE CORPORATIONS, société de droit camerounais, comme éditeur de la plateforme. Les mentions légales de la plateforme désignent CamPower. Cette page ne choisit pas entre ces deux formulations.',
    ],
    sourceHref: 'https://cam-power.net/cgu',
    sourceLabel: 'https://cam-power.net/cgu',
    sourceNote:
      'Ce lien ouvre les conditions générales d’utilisation publiées pour la plateforme. C’est la source actuelle pour les conditions et les informations de confidentialité de l’application. Cette page du Site Vitrine ne la remplace pas.',
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
      'Le résumé de l’application suit les conditions consultées le 7 octobre 2026. Il ne constitue pas un audit des traitements, ni un inventaire des durées de conservation, ni une procédure de suppression de compte.',
      'L’hébergement de production du Site Vitrine n’est pas arrêté sur cette page. Aucune durée de conservation n’est indiquée pour ce site.',
    ],
    updatedLabel: 'Dernière mise à jour',
    updated: '7 octobre 2026',
  },
};
