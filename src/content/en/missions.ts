import { routes } from '../../i18n';
import type { MissionsContent } from '../types';

export const missionsEn: MissionsContent = {
  meta: {
    title: 'Missions — A need, a skill, a mission on CamPower',
    description:
      'A CamPower mission connects a defined professional need with a skill to put into practice. It complements employment, within the same ecosystem.',
  },
  nav: [
    { label: 'Discover', href: routes.decouvrir.en },
    { label: 'Jobs', href: routes.emploi.en },
    { label: 'Talent', href: routes.talents.en },
    { label: 'Companies', href: routes.entreprises.en },
    { label: 'Missions', href: routes.missions.en, current: true },
    { label: 'Mini-jobs', href: routes.minijobs.en },
    { label: 'About', href: routes.apropos.en },
  ],
  hero: {
    eyebrow: 'Missions',
    title: 'A skill. A need. A mission.',
    lead: 'Sometimes an organisation has a defined professional need. A professional has skills to put into practice. Not everything goes through a permanent job. On CamPower, the mission is where that need and that skill can meet.',
    explore: { label: 'Discover missions', href: '#besoin' },
    joinLabel: 'A need and a skill meet in a mission',
    poles: [
      { kicker: 'Need', title: 'What is asked for', text: 'A defined professional need.' },
      { kicker: 'Skill', title: 'What can meet it', text: 'Know-how to put into practice.' },
    ],
    mission: { kicker: 'Mission', title: 'The meeting point', text: 'The opportunity that connects the two.' },
  },
  need: {
    kicker: 'The need',
    title: 'When a need becomes a mission.',
    support:
      'It starts with a specific need. Then comes the search for the skill that can meet it. The mission is the professional opportunity that connects the two. CamPower does not decide on the organisation’s behalf.',
    steps: [
      { label: 'Defined need', text: 'What needs to be done.' },
      { label: 'Skill sought', text: 'The useful know-how.' },
      { label: 'Mission', text: 'The opportunity that connects them.' },
    ],
    areasLabel: 'Some areas of skill, as examples.',
    areas: ['Technology', 'Communication', 'Design', 'Consulting', 'Project management', 'Specialist expertise'],
  },
  meeting: {
    kicker: 'Both sides',
    title: 'Two perspectives on the same need.',
    support:
      'On one side, a skill to put into practice. On the other, a defined need. The mission is where they meet, within the same ecosystem as employment and profiles.',
    professional: {
      kicker: 'Professional',
      title: 'Put your skills into action.',
      idea: 'What I can do.',
      text: 'A mission is a way to use a skill you already have. It can enrich your experience. It does not put you in a separate category.',
    },
    mission: {
      kicker: 'Mission',
      title: 'The meeting point',
      text: 'A defined need, a relevant skill.',
    },
    enterprise: {
      kicker: 'Company',
      title: 'Draw on a skill for a defined need.',
      idea: 'What we need.',
      text: 'The company expresses a specific need. The mission brings in a skill to meet it, without it necessarily being a permanent job.',
    },
  },
  opportunities: {
    eyebrow: 'Opportunities',
    title: 'Another kind of professional opportunity.',
    support:
      'Employment and missions are two doors on CamPower. One does not replace the other. You can move forward through one, the other, or both, depending on the moment.',
    root: 'Professional opportunities',
    branches: [
      { title: 'Employment', text: 'A long-term role, within a team.' },
      {
        title: 'Mission',
        text: 'An opportunity built around a defined need, with the skill that can meet it.',
      },
    ],
    note: 'Missions complement employment. They do not replace it.',
  },
  journey: {
    kicker: 'Journey',
    title: 'A mission is also part of a professional journey.',
    support:
      'Your profile says who you are. Your skills describe what you can do. A mission can become an experience along the way.',
    steps: [
      { label: 'Profile', text: 'Who you are' },
      { label: 'Skills', text: 'What you can do' },
      { label: 'Mission', text: 'Putting it into practice' },
      { label: 'Experience', text: 'What your journey keeps' },
    ],
    note: 'A way to read the journey. Not an automatic change to your profile.',
  },
  collaboration: {
    title: 'From need to professional collaboration.',
    support:
      'A need takes the form of a mission. A skill responds to it. Professional collaboration begins at that meeting point.',
    steps: [
      { label: 'Need', text: 'What is asked for' },
      { label: 'Mission', text: 'The defined opportunity' },
      { label: 'Skill', text: 'What can meet it' },
      { label: 'Collaboration', text: 'Working together' },
    ],
    note: 'The story stops at professional collaboration.',
  },
  ecosystem: {
    kicker: 'Ecosystem',
    title: 'Missions are part of CamPower.',
    support:
      'They are not a separate marketplace. Profiles, skills, the network, employment, missions and companies move forward together.',
    items: [
      { label: 'Profile' },
      { label: 'Skills' },
      { label: 'Network' },
      { label: 'Employment' },
      { label: 'Missions', current: true },
      { label: 'Mini-jobs' },
      { label: 'Companies' },
    ],
  },
  cameroon: {
    title: 'Designed for professional realities in Cameroon.',
    support:
      'In Cameroon, an organisation may have a specific skills need, and a professional may be looking for another kind of opportunity. CamPower connects these situations within the same ecosystem.',
  },
  finale: {
    title: 'A skill can meet a need.',
    support:
      'The next step happens in the app. CamPower brings the need, the skill and the mission together within the same professional ecosystem.',
  },
};
