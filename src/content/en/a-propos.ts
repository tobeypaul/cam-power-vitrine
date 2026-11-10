import { routes } from '../../i18n';
import type { AProposContent } from '../types';

export const aproposEn: AProposContent = {
  meta: {
    title: 'About — Why CamPower exists',
    description:
      'CamPower was born from an ambition: to better connect talent, skills, companies and opportunities in Cameroon, in a professional space designed to support careers and needs over time.',
  },
  nav: [
    { label: 'Discover', href: routes.decouvrir.en },
    { label: 'Talent', href: routes.talents.en },
    { label: 'Companies', href: routes.entreprises.en },
    { label: 'Missions', href: routes.missions.en },
    { label: 'Mini-jobs', href: routes.minijobs.en },
    { label: 'About', href: routes.apropos.en, current: true },
  ],
  hero: {
    eyebrow: 'About',
    title: 'Building more connections between talent and opportunities.',
    lead: 'CamPower is a professional ecosystem built around people, skills, organisations and opportunities. It is designed in Cameroon, to support careers and needs over time.',
    explore: { label: 'Discover our ambition', href: '#ambition' },
    sources: [
      { title: 'Talent', text: 'The people' },
      { title: 'Skills', text: 'What they can do' },
      { title: 'Companies', text: 'The organisations' },
    ],
    gathered: 'brought together in',
    hub: { title: 'CamPower', text: 'The space that connects' },
    toward: 'towards',
    destination: { title: 'Opportunities', text: 'What can open up' },
    caption: 'People, skills and organisations, brought together in CamPower, towards opportunities.',
  },
  purpose: {
    kicker: 'Why',
    title: 'Why CamPower exists.',
    statement:
      'CamPower was born from an ambition: to help better connect talent, skills, companies and opportunities in Cameroon, within a professional space designed to support careers and professional needs over time.',
    mark: 'An ambition. Not a result already achieved.',
    support: 'This ambition starts from ordinary professional situations. It does not put numbers on them.',
    realities: [
      {
        title: 'Being understood',
        text: 'A professional needs to express who they are in their working life.',
      },
      {
        title: 'Making a skill clear',
        text: 'Know-how is easier to recognise once it has been put into words.',
      },
      {
        title: 'Finding the right capability',
        text: 'An organisation needs access to skills that relate to what it is looking for.',
      },
      {
        title: 'Relying on relationships',
        text: 'A professional relationship has value, even outside an ongoing recruitment.',
      },
      {
        title: 'Allowing different forms',
        text: 'An opportunity does not always take the same form.',
      },
    ],
  },
  conviction: {
    kicker: 'Conviction',
    title: 'Our conviction',
    quote: 'A professional opportunity does not always begin with a job offer.',
    support:
      'It can come from an identity, skills, relationships, organisations, a job or a mission. CamPower connects these elements. This order is one way to read them, not an automatic sequence.',
    steps: [
      { title: 'Identity', text: 'Who you are professionally.' },
      { title: 'Skills', text: 'What you can do.' },
      { title: 'Connections', text: 'The links that make it useful.' },
      { title: 'Opportunities', text: 'What can open up next.' },
    ],
    enterprise: {
      kicker: 'Companies',
      title: 'In the same space',
      text: 'Organisations take part in this ecosystem. They are not a compulsory step within it.',
    },
  },
  ecosystem: {
    kicker: 'Together',
    title: 'A platform built around professional life.',
    support:
      'Talent, skills, network, companies and opportunities only make sense together. CamPower exists to hold that link, not to reduce professional life to a single door.',
    items: ['Talent', 'Skills', 'Network', 'Companies', 'Opportunities'],
    formsLabel: 'Two forms of opportunity, on an equal footing',
    forms: [
      { title: 'Employment', text: 'A long-term place.' },
      { title: 'Mission', text: 'A response to a defined need.' },
    ],
    note: 'Neither employment nor missions define CamPower on their own.',
  },
  community: {
    kicker: 'Community',
    title: 'A community, not just a platform.',
    support:
      'CamPower is not meant to be a place you open only to look for a job, recruit or find a mission. The intention is a professional presence that continues: making yourself understood, staying connected, and seeing opportunities in the same space.',
    tagline: 'A community, opportunities, a future.',
  },
  cameroon: {
    title: 'Designed for Cameroon.',
    support:
      'CamPower is built with the working lives of people and the needs of organisations in Cameroon in mind. Professionals, organisations, skills, connections, employment, missions and opportunities all belong to the same space here.',
  },
  vision: {
    kicker: 'Vision',
    title: 'Our vision',
    lead: 'To make CamPower a professional space where skills can be better understood, connections more useful and opportunities more accessible.',
    aims: ['Skills better understood', 'More useful connections', 'More accessible opportunities'],
    toward: 'A more connected professional life',
    note: 'A direction. Not something already achieved.',
  },
  growth: {
    kicker: 'Growth',
    title: 'CamPower grows with its community.',
    support:
      'CamPower is not designed as a fixed product. Its direction should keep responding to the needs of professionals and organisations. This describes an intention, not a process already in place.',
  },
  finale: {
    title: 'Be part of the CamPower professional ecosystem.',
    support: 'A community, opportunities, a future.',
  },
};
