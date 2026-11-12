import { routes } from '../../i18n';
import { appStoresEn } from '../stores';
import type { DecouvrirContent } from '../types';

export const decouvrirEn: DecouvrirContent = {
  meta: {
    title: 'Discover CamPower — The professional ecosystem',
    description:
      'CamPower connects your professional identity, skills, network, opportunities, recruitment and missions. See how they work together, in Cameroon.',
  },
  nav: [
    { label: 'Discover', href: routes.decouvrir.en, current: true },
    { label: 'Jobs', href: routes.emploi.en },
    { label: 'Talent', href: routes.talents.en },
    { label: 'Companies', href: routes.entreprises.en },
    { label: 'Missions', href: routes.missions.en },
    { label: 'Mini-jobs', href: routes.minijobs.en },
    { label: 'About', href: routes.apropos.en },
  ],
  hero: {
    eyebrow: 'Discover CamPower',
    titleLines: ['How CamPower', 'supports your', 'professional life.'],
    lead: 'CamPower connects your professional identity, your skills, your network, opportunities, recruitment and missions. This page shows how these parts work together, in Cameroon.',
    ecosystem: { label: 'See the ecosystem', href: '#ensemble' },
    spine: ['Profile', 'Skills', 'Network', 'Opportunities', 'Recruitment', 'Missions'],
    spineNote: 'Six parts. One platform.',
  },
  possibilities: {
    titleLines: ['One professional platform,', 'many possibilities.'],
    dek: 'None of these parts is enough to describe CamPower on its own. Each one prepares the next.',
    steps: [
      'Present who you are.',
      'Show what you can do.',
      'Connect with others.',
      'Discover jobs and missions.',
      'Meet talent.',
      'Meet a specific need.',
    ],
  },
  identity: {
    kicker: 'Your professional identity',
    title: 'Your profile brings together who you are and what you can do.',
    support:
      'It presents your background, your skills and your professional presence. It is the starting point, not an isolated record.',
  },
  network: {
    kicker: 'Grow your network',
    title: 'The network extends the profile.',
    support:
      'CamPower lets you connect with other professionals. The platform does not stop at a job offer.',
  },
  opportunities: {
    eyebrow: 'Discover opportunities',
    title: 'Employment is part of it. It does not sum up CamPower.',
    support:
      'An opportunity can be a job, a mission or a specific need. Offers are one door among others on the same platform.',
  },
  meeting: {
    title: 'Talent and companies meet.',
    dek: 'On one side, professionals presenting their background. On the other, organisations looking for a skill. CamPower brings them together.',
    professionalsTitle: 'For professionals',
    professionalsBody: 'They show their experience and discover needs that match their skills.',
    organisationsTitle: 'For organisations',
    organisationsBody: 'They browse profiles and connect with the right people.',
  },
  missions: {
    eyebrow: 'Work differently with missions',
    title: 'Another route, within the same ecosystem.',
    support:
      'A mission calls on a skill for a specific need, over a defined period. It sits alongside employment and recruitment.',
    leftTitle: 'Employment and recruitment',
    leftBody: 'Lasting opportunities, and organisations looking for talent.',
    rightTitle: 'Missions',
    rightBody: 'A specific need, a skill, a defined period. Always within CamPower.',
  },
  ecosystem: {
    title: 'Everything works together.',
    dek: 'The profile carries your identity. Skills describe your know-how. The network connects people. Opportunities open doors, including employment. Recruitment brings talent and organisations together. Missions offer another way to work together.',
    chain: ['Profile', 'Skills', 'Network', 'Opportunities', 'Recruitment', 'Missions'],
  },
  cameroon: {
    title: 'Designed for the realities of the Cameroonian market.',
    dek: 'CamPower is designed to connect talent, companies, skills and local opportunities in Cameroon.',
  },
  daily: {
    title: 'CamPower in your everyday life.',
    support: 'Your profile, network, opportunities and missions stay within reach on your phone.',
    stores: appStoresEn,
  },
  finale: {
    title: 'Now you can see how CamPower fits together.',
    support: 'The next step happens in the app: create your profile, connect with others, or discover an opportunity.',
  },
};
