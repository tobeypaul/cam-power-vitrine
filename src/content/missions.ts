import type { MissionsContent } from './types';

export const missionsFr: MissionsContent = {
  meta: {
    title: 'Missions — Un besoin, une compétence, une mission sur CamPower',
    description:
      'Une mission CamPower relie un besoin professionnel défini et une compétence à mettre en pratique. Elle complète l’emploi, dans le même écosystème que les profils, le réseau et les entreprises.',
  },
  nav: [
    { label: 'Découvrir', href: '/decouvrir/' },
    { label: 'Talents', href: '/talents/' },
    { label: 'Entreprises', href: '/entreprises/' },
    { label: 'Missions', href: '/missions/', current: true },
    { label: 'À propos', href: '/a-propos/' },
  ],
  hero: {
    eyebrow: 'Missions',
    title: 'Une compétence. Un besoin. Une mission.',
    lead: 'Une organisation a parfois un besoin professionnel défini. Un professionnel a des compétences à mettre en pratique. Tout ne passe pas par un emploi durable. Sur CamPower, la mission est le point où ce besoin et cette compétence peuvent se rencontrer.',
    explore: { label: 'Découvrir les missions', href: '#besoin' },
    joinLabel: 'Un besoin et une compétence se rencontrent dans une mission',
    poles: [
      { kicker: 'Besoin', title: 'Ce qui est demandé', text: 'Un besoin professionnel défini.' },
      { kicker: 'Compétence', title: 'Ce qui peut y répondre', text: 'Un savoir-faire à mettre en pratique.' },
    ],
    mission: { kicker: 'Mission', title: 'Le point de rencontre', text: 'L’opportunité qui relie les deux.' },
  },
  need: {
    kicker: 'Le besoin',
    title: 'Quand un besoin devient une mission.',
    support:
      'On part d’un besoin précis. On cherche la compétence qui peut y répondre. La mission est l’opportunité professionnelle qui relie les deux. CamPower ne décide pas à la place de l’organisation.',
    steps: [
      { label: 'Besoin défini', text: 'Ce qui doit être fait.' },
      { label: 'Compétence recherchée', text: 'Le savoir-faire utile.' },
      { label: 'Mission', text: 'L’opportunité qui les relie.' },
    ],
    areasLabel: 'Des domaines de compétence, à titre d’exemple.',
    areas: ['Technologie', 'Communication', 'Design', 'Conseil', 'Gestion de projet', 'Expertise métier'],
  },
  meeting: {
    kicker: 'Les deux côtés',
    title: 'Autour du même besoin, deux regards.',
    support:
      'D’un côté, une compétence à mettre en pratique. De l’autre, un besoin défini. La mission est le lieu de cette rencontre, dans le même écosystème que l’emploi et les profils.',
    professional: {
      kicker: 'Professionnel',
      title: 'Mettez vos compétences en action.',
      idea: 'Ce que je sais faire.',
      text: 'Une mission est une façon d’utiliser une compétence déjà là. Elle peut enrichir l’expérience. Elle ne range pas la personne dans une catégorie à part.',
    },
    mission: {
      kicker: 'Mission',
      title: 'Le point de rencontre',
      text: 'Un besoin défini, une compétence pertinente.',
    },
    enterprise: {
      kicker: 'Entreprise',
      title: 'Mobilisez une compétence pour un besoin défini.',
      idea: 'Ce dont nous avons besoin.',
      text: 'L’entreprise exprime un besoin précis. La mission mobilise une compétence pour y répondre, sans que cela soit forcément un emploi durable.',
    },
  },
  opportunities: {
    eyebrow: 'Opportunités',
    title: 'Une autre forme d’opportunité professionnelle.',
    support:
      'L’emploi et la mission sont deux portes dans CamPower. L’une n’efface pas l’autre. On peut avancer par l’une, par l’autre, ou par les deux, selon le moment.',
    root: 'Opportunités professionnelles',
    branches: [
      { title: 'Emploi', text: 'Un rôle qui s’inscrit dans la durée, au sein d’une équipe.' },
      {
        title: 'Mission',
        text: 'Une opportunité autour d’un besoin défini, avec la compétence qui peut y répondre.',
      },
    ],
    note: 'Les missions complètent l’emploi. Elles ne le remplacent pas.',
  },
  journey: {
    kicker: 'Parcours',
    title: 'Une mission fait aussi partie d’un parcours professionnel.',
    support:
      'Le profil dit qui vous êtes. Les compétences précisent ce que vous savez faire. Une mission peut devenir une expérience dans ce parcours.',
    steps: [
      { label: 'Profil', text: 'Qui vous êtes' },
      { label: 'Compétences', text: 'Ce que vous savez faire' },
      { label: 'Mission', text: 'Une mise en pratique' },
      { label: 'Expérience', text: 'Ce que le parcours retient' },
    ],
    note: 'Une lecture du parcours. Pas une modification automatique du profil.',
  },
  collaboration: {
    title: 'Du besoin à la collaboration professionnelle.',
    support:
      'Un besoin prend la forme d’une mission. Une compétence y répond. La collaboration professionnelle commence à ce point de rencontre.',
    steps: [
      { label: 'Besoin', text: 'Ce qui est demandé' },
      { label: 'Mission', text: 'L’opportunité définie' },
      { label: 'Compétence', text: 'Ce qui peut y répondre' },
      { label: 'Collaboration', text: 'Le travail en commun' },
    ],
    note: 'Le récit s’arrête à la collaboration professionnelle.',
  },
  ecosystem: {
    kicker: 'Écosystème',
    title: 'Les Missions font partie de CamPower.',
    support:
      'Elles ne forment pas une place à part. Le profil, les compétences, le réseau, l’emploi, les missions et les entreprises avancent ensemble.',
    items: [
      { label: 'Profil' },
      { label: 'Compétences' },
      { label: 'Réseau' },
      { label: 'Emploi' },
      { label: 'Missions', current: true },
      { label: 'Entreprises' },
    ],
  },
  cameroon: {
    title: 'Pensé pour les réalités professionnelles au Cameroun.',
    support:
      'Au Cameroun, une organisation peut avoir un besoin précis de compétence, et un professionnel peut chercher une autre forme d’opportunité. CamPower relie ces situations dans le même écosystème.',
  },
  finale: {
    title: 'Une compétence peut répondre à un besoin.',
    support:
      'La suite se passe dans l’application. CamPower réunit le besoin, la compétence et la mission dans le même écosystème professionnel.',
  },
};
