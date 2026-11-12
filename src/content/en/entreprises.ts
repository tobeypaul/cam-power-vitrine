import { routes } from '../../i18n';
import type { EntreprisesContent } from '../types';

export const entreprisesEn: EntreprisesContent = {
  meta: {
    title: 'Companies — Needs, talent and skills on CamPower',
    description:
      'Express a need, discover professionals and draw on a skill in Cameroon. Recruitment and missions move forward within the same CamPower ecosystem.',
  },
  nav: [
    { label: 'Discover', href: routes.decouvrir.en },
    { label: 'Jobs', href: routes.emploi.en },
    { label: 'Talent', href: routes.talents.en },
    { label: 'Companies', href: routes.entreprises.en, current: true },
    { label: 'Missions', href: routes.missions.en },
    { label: 'Mini-jobs', href: routes.minijobs.en },
    { label: 'About', href: routes.apropos.en },
  ],
  hero: {
    eyebrow: 'Companies',
    title: 'The skills your company needs are at the heart of its growth.',
    lead: 'CamPower helps your organisation express a need, discover professionals and draw on a skill. Recruitment and missions are two ways forward, within the same ecosystem.',
    explore: { label: 'Explore for companies', href: '#presence' },
    panelKicker: 'For your organisation',
    panelLine: 'From a skills need to professionals.',
    flow: [
      { label: 'Company', text: 'Your presence' },
      { label: 'Need', text: 'The missing skill' },
      { label: 'Professionals', text: 'Who can meet it' },
    ],
  },
  presence: {
    kicker: 'Presence',
    title: 'Present your company professionally.',
    support:
      'Your organisation has an identity, an activity and a place among professionals. CamPower helps make it clear, and not only when a vacancy is open.',
    marks: [
      { label: 'Identity', text: 'Who you are as an organisation.' },
      { label: 'Activity', text: 'What you do every day.' },
      { label: 'Context', text: 'The setting in which your needs arise.' },
    ],
  },
  need: {
    kicker: 'The need',
    title: 'Turn a need into an opportunity.',
    support:
      'The starting point is a skills need. It may call for someone to join the team, or for a skill over a defined period. CamPower does not decide for you.',
    root: 'Skills need',
    branches: [
      {
        title: 'Recruitment',
        text: 'Someone joins the team and the skill becomes part of it for the long term.',
      },
      {
        title: 'Mission',
        text: 'A skill is brought in for a specific need, over a defined period.',
      },
    ],
  },
  talents: {
    eyebrow: 'Talent',
    title: 'Discover talent and their skills.',
    support:
      'Professionals present their background and their know-how. Your company can browse these profiles to see who can meet the need. This screen is a preview of the interface, not a portrait of all the talent on the platform.',
    note: 'Browsing profiles, in the app.',
    imageAlt: 'Browsing profiles in the CamPower app',
  },
  routes: {
    eyebrow: 'Recruitment and missions',
    title: 'Two ways to respond, starting from the same need.',
    origin:
      'Both start with the company. Both meet professionals. Neither one sums up CamPower on its own.',
    hire: {
      kicker: 'Recruitment',
      title: 'Recruit to build your team.',
      idea: 'Bring a skill in for the long term.',
      text: 'Recruitment connects a long-term need with a professional. It is more than posting a job offer.',
      foot: 'Towards professionals',
    },
    mission: {
      kicker: 'Missions',
      title: 'Draw on skills for a mission.',
      idea: 'Bring in a skill for a defined need.',
      text: 'A mission meets a specific need, with a skill and a duration. It is not the same as long-term recruitment.',
      foot: 'Towards professionals',
    },
  },
  community: {
    title: 'Two needs, one professional community.',
    support:
      'Recruitment and missions are not two separate marketplaces. Professionals, skills and organisations meet within the same CamPower ecosystem.',
    items: ['Professionals', 'Skills', 'Organisations'],
  },
  network: {
    kicker: 'Network',
    title: 'Your company is part of the professional network too.',
    support:
      'An organisation is not present only when it is recruiting. It stays connected with professionals, skills and ongoing activity.',
  },
  lifecycle: {
    title: 'From need to team, your company keeps moving forward.',
    support:
      'The company expresses a need, meets talent, and can respond through recruitment or a mission. The team and the activity then carry on.',
    steps: [
      { label: 'Company', text: 'Your presence' },
      { label: 'Need', text: 'The skill you are looking for' },
      { label: 'Talent', text: 'The professionals' },
      { label: 'Recruitment / Mission', text: 'Two ways to respond' },
      { label: 'Team & activity', text: 'What comes next for the organisation' },
    ],
    note: 'The company keeps a professional presence, with its teams and its activity.',
  },
  cameroon: {
    title: 'Designed for companies in Cameroon.',
    support:
      'CamPower is designed for organisations working in Cameroon, with professionals and skills from the local market.',
  },
  finale: {
    title: 'Connect your company’s needs with the skills that can move them forward.',
    support: 'Express a need, discover professionals, or offer a mission. The next step happens in the app.',
  },
};
