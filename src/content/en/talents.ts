import { routes } from '../../i18n';
import { appStoresEn } from '../stores';
import type { TalentsContent } from '../types';

export const talentsEn: TalentsContent = {
  meta: {
    title: 'Talent — Your professional journey on CamPower',
    description:
      'CamPower helps you present who you are, make your skills known and widen your network. Jobs and missions are part of it, without defining the platform.',
  },
  nav: [
    { label: 'Discover', href: routes.decouvrir.en },
    { label: 'Jobs', href: routes.emploi.en },
    { label: 'Talent', href: routes.talents.en, current: true },
    { label: 'Companies', href: routes.entreprises.en },
    { label: 'Missions', href: routes.missions.en },
    { label: 'Mini-jobs', href: routes.minijobs.en },
    { label: 'About', href: routes.apropos.en },
  ],
  hero: {
    eyebrow: 'Talent',
    title: 'Give your professional journey the visibility it deserves.',
    lead: 'CamPower helps you present who you are, make your skills known and widen your network. Jobs and missions are part of it, without defining the platform.',
    explore: { label: 'Explore for talent', href: '#parcours' },
    panelKicker: 'For you',
    panelLine: 'Your professional journey is built over time.',
    dimensions: [
      { label: 'Identity', text: 'Who you are' },
      { label: 'Skills', text: 'What you can do' },
      { label: 'Network', text: 'Who you move forward with' },
      { label: 'Opportunities', text: 'Jobs and missions' },
    ],
  },
  identity: {
    kicker: 'Profile',
    title: 'Your professional profile represents you.',
    support:
      'It brings together your experience, your direction and what you can do. It stays useful beyond a job search.',
  },
  skills: {
    kicker: 'Skills',
    title: 'Make your skills known.',
    support:
      'They show what you can bring. They complete your profile and help others understand your know-how.',
    items: [
      { label: 'Experience', text: 'What you have already achieved.' },
      { label: 'Know-how', text: 'What you can put into practice.' },
      { label: 'Direction', text: 'Where you want to go next.' },
    ],
  },
  network: {
    kicker: 'Network',
    title: 'Build your professional network.',
    support:
      'A professional presence does not stop at a CV or an application. Connecting with other professionals is part of a journey that continues.',
  },
  opportunities: {
    eyebrow: 'Opportunities',
    title: 'Discover the opportunities that suit you.',
    support:
      'Employment is part of it. So is a mission. Offers are one door on the same platform, not its definition.',
    root: 'Opportunities',
    branches: [
      { title: 'Employment', text: 'A role that lasts over time.' },
      { title: 'Missions', text: 'A specific need, a defined period.' },
    ],
    note: 'A preview of offers in the app.',
  },
  routes: {
    eyebrow: 'Two routes',
    title: 'Two ways to set your journey in motion.',
    employment: {
      kicker: 'Employment',
      title: 'A job to build what comes next.',
      text: 'A professional role extends your experience. It is part of a progression, not an isolated search.',
    },
    missions: {
      kicker: 'Missions',
      title: 'A mission to put your skills into action.',
      text: 'A mission calls on your know-how for a specific need, over a defined period. It is not the same as a job.',
    },
  },
  organisations: {
    eyebrow: 'Talent and organisations',
    title: 'Help companies understand your professional value.',
    support:
      'A clear profile helps an organisation see who you are, what you have done and what you can bring.',
    sides: [
      {
        title: 'On your side',
        text: 'You make your identity, your experience and your skills visible.',
      },
      {
        title: 'On their side',
        text: 'An organisation can view this profile and see what you can bring.',
      },
    ],
    note: 'The organisation view, in the app.',
  },
  lifecycle: {
    title: 'Your journey continues on CamPower.',
    support:
      'Your profile, skills, network and opportunities can stay useful whether you are in a role, changing direction or looking.',
    steps: [
      { label: 'Profile', text: 'Who you are' },
      { label: 'Skills', text: 'What you can do' },
      { label: 'Network', text: 'Your professional relationships' },
      { label: 'Opportunities', text: 'Jobs and missions' },
      { label: 'Growth', text: 'The next step in your journey' },
    ],
    note: 'A way to keep a professional presence at every stage of your journey.',
  },
  cameroon: {
    title: 'Designed for professionals in Cameroon.',
    support:
      'CamPower connects people building a career in Cameroon with organisations and local opportunities.',
  },
  daily: {
    title: 'CamPower, wherever you are.',
    support: 'Your profile, your network and your opportunities stay within reach on your phone.',
    stores: appStoresEn,
  },
  finale: {
    title: 'Move your professional journey forward with CamPower.',
    support: 'Build your presence, connect with others, or look at an opportunity. The next step happens in the app.',
  },
};
