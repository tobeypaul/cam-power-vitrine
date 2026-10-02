import type { EntreprisesContent } from './types';

export const entreprisesFr: EntreprisesContent = {
  meta: {
    title: 'Entreprises — Besoins, talents et compétences sur CamPower',
    description:
      'CamPower aide votre organisation à exprimer un besoin, à découvrir des professionnels et à mobiliser une compétence. Le recrutement et les missions sont deux façons d’avancer, dans le même écosystème.',
  },
  nav: [
    { label: 'Découvrir', href: '/decouvrir/' },
    { label: 'Talents', href: '/talents/' },
    { label: 'Entreprises', href: '/entreprises/', current: true },
    { label: 'Missions', href: '/missions/' },
    { label: 'À propos', href: '/a-propos/' },
  ],
  hero: {
    eyebrow: 'Entreprises',
    title: 'Les compétences dont votre entreprise a besoin sont au cœur de sa croissance.',
    lead: 'CamPower aide votre organisation à exprimer un besoin, à découvrir des professionnels et à mobiliser une compétence. Le recrutement et les missions sont deux façons d’avancer, dans le même écosystème.',
    explore: { label: 'Découvrir pour les entreprises', href: '#presence' },
    panelKicker: 'Pour votre organisation',
    panelLine: 'D’un besoin de compétence à des professionnels.',
    flow: [
      { label: 'Entreprise', text: 'Votre présence' },
      { label: 'Besoin', text: 'La compétence qui manque' },
      { label: 'Professionnels', text: 'Qui peut y répondre' },
    ],
  },
  presence: {
    kicker: 'Présence',
    title: 'Présentez votre entreprise professionnellement.',
    support:
      'Votre organisation a une identité, une activité et une place parmi les professionnels. CamPower permet de la rendre lisible, et pas seulement lorsqu’une offre est ouverte.',
    marks: [
      { label: 'Identité', text: 'Qui vous êtes comme organisation.' },
      { label: 'Activité', text: 'Ce que vous faites au quotidien.' },
      { label: 'Contexte', text: 'Le cadre dans lequel vos besoins apparaissent.' },
    ],
  },
  need: {
    kicker: 'Le besoin',
    title: 'Transformez un besoin en opportunité.',
    support:
      'Le point de départ est un besoin de compétence. Il peut appeler quelqu’un dans l’équipe, ou une compétence pour une durée définie. CamPower ne décide pas à votre place.',
    root: 'Besoin de compétence',
    branches: [
      {
        title: 'Recrutement',
        text: 'Une personne rejoint l’équipe et la compétence s’inscrit dans la durée.',
      },
      {
        title: 'Mission',
        text: 'Une compétence est mobilisée pour un besoin précis, sur une durée définie.',
      },
    ],
  },
  talents: {
    eyebrow: 'Talents',
    title: 'Découvrez des talents et leurs compétences.',
    support:
      'Les professionnels présentent leur parcours et leur savoir-faire. Votre entreprise peut consulter ces profils pour voir qui peut répondre au besoin. Cet écran est un aperçu d’interface, pas un portrait de l’ensemble des talents.',
    note: 'Consultation des profils, dans l’application.',
    imageAlt: 'Consultation de profils dans l’application CamPower',
  },
  routes: {
    eyebrow: 'Recrutement et missions',
    title: 'Deux façons de répondre, à partir du même besoin.',
    origin:
      'Les deux partent de l’entreprise. Les deux rencontrent des professionnels. Aucune des deux ne résume CamPower à elle seule.',
    hire: {
      kicker: 'Recrutement',
      title: 'Recrutez pour construire votre équipe.',
      idea: 'Intégrer durablement une compétence.',
      text: 'Un recrutement relie un besoin qui s’inscrit dans le temps à un professionnel. Il ne se réduit pas à publier une offre.',
      foot: 'Vers des professionnels',
    },
    mission: {
      kicker: 'Missions',
      title: 'Mobilisez des compétences pour une mission.',
      idea: 'Mobiliser une compétence pour un besoin défini.',
      text: 'Une mission répond à un besoin précis, avec une compétence et une durée. Elle ne se confond pas avec un recrutement durable.',
      foot: 'Vers des professionnels',
    },
  },
  community: {
    title: 'Deux besoins, une même communauté professionnelle.',
    support:
      'Le recrutement et les missions ne sont pas deux places séparées. Les professionnels, les compétences et les organisations se retrouvent dans le même écosystème CamPower.',
    items: ['Professionnels', 'Compétences', 'Organisations'],
  },
  network: {
    kicker: 'Réseau',
    title: 'Votre entreprise fait aussi partie du réseau professionnel.',
    support:
      'Une organisation n’est pas présente seulement lorsqu’elle cherche à recruter. Elle reste en relation avec des professionnels, des compétences et l’activité qui continue.',
  },
  lifecycle: {
    title: 'Du besoin à l’équipe, votre entreprise continue d’avancer.',
    support:
      'L’entreprise exprime un besoin, rencontre des talents, et peut y répondre par un recrutement ou une mission. L’équipe et l’activité continuent ensuite.',
    steps: [
      { label: 'Entreprise', text: 'Votre présence' },
      { label: 'Besoin', text: 'La compétence recherchée' },
      { label: 'Talents', text: 'Les professionnels' },
      { label: 'Recrutement / Mission', text: 'Deux façons de répondre' },
      { label: 'Équipe & activité', text: 'La suite de l’organisation' },
    ],
    note: 'L’entreprise reste présente professionnellement, avec ses équipes et son activité.',
  },
  cameroon: {
    title: 'Pensé pour les entreprises au Cameroun.',
    support:
      'CamPower est conçu pour les organisations qui travaillent au Cameroun, avec des professionnels et des compétences du marché local.',
  },
  finale: {
    title: 'Connectez les besoins de votre entreprise aux compétences qui peuvent les faire avancer.',
    support:
      'Exprimez un besoin, découvrez des professionnels, ou proposez une mission. La suite se passe dans l’application.',
  },
};
