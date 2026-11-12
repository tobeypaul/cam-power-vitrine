import { routes } from '../../i18n';
import { siteConfig } from '../../lib/site';
import { appStoresEn } from '../stores';
import type { HomepageContent } from '../types';

const access = {
  label: 'Access CamPower',
  href: siteConfig.applicationUrl,
  external: true,
} as const;

export const homepageEn: HomepageContent = {
  meta: {
    title: 'CamPower — Talent, companies and opportunities in Cameroon',
    description:
      'CamPower connects talent, companies, skills and opportunities in Cameroon. Grow your professional network, find opportunities, recruit or offer a mission.',
  },
  nav: [
    { label: 'Discover', href: routes.decouvrir.en },
    { label: 'Jobs', href: routes.emploi.en },
    { label: 'Talent', href: routes.talents.en },
    { label: 'Companies', href: routes.entreprises.en },
    { label: 'Missions', href: routes.missions.en },
    { label: 'Mini-jobs', href: routes.minijobs.en },
    { label: 'About', href: routes.apropos.en },
  ],
  hero: {
    eyebrow: 'Professional platform · Cameroon',
    titleLines: ['Power up', 'your professional', 'future.'],
    lead: 'CamPower connects talent, companies, skills and opportunities in Cameroon. Grow your professional network, find opportunities, recruit or offer a mission.',
    discover: { label: 'Discover CamPower', href: '#besoins' },
    access,
    signals: ['Profile', 'Opportunities', 'Network', 'Missions'],
    chip: {
      kicker: 'Offer',
      title: 'Senior Accountant',
      meta: 'Yaoundé · Permanent',
    },
  },
  audiences: {
    titleLines: ['One platform.', 'Many needs.'],
    dek: 'Employment, recruitment and missions, on the same platform.',
    items: [
      {
        id: 'talents',
        title: 'Talent',
        body: 'Find opportunities, showcase your skills and grow your network.',
        cta: { label: 'Find opportunities', href: '#professionnels' },
        tone: 'default',
      },
      {
        id: 'entreprises',
        title: 'Companies',
        body: 'Recruit, spot skills and connect with the right professionals.',
        cta: { label: 'Find talent', href: '#organisations' },
        tone: 'emphasis',
      },
      {
        id: 'missions',
        title: 'Missions',
        body: 'Find or offer a skill for a mission, a project or a specific need.',
        cta: { label: 'Discover missions', href: '#action' },
        tone: 'default',
      },
    ],
  },
  product: {
    title: 'CamPower in action',
    dek: 'The essentials of the app, in a few screens.',
    left: ['Create your professional profile', 'Grow your network'],
    right: ['Discover opportunities', 'Find the right talent', 'Post a mission'],
  },
  steps: {
    title: 'How it works',
    items: [
      'Create your profile',
      'Present your skills or your needs',
      'Discover the right opportunities',
      'Connect and take action',
    ],
  },
  professionals: {
    id: 'professionnels',
    kicker: 'For professionals',
    titleLines: ['Your experience.', 'Your skills.', 'Your network.', 'Your opportunities.'],
    support: 'Present your background and reach the opportunities that match your skills.',
    cta: { label: 'Discover CamPower', href: '#talents' },
  },
  organisations: {
    id: 'organisations',
    kicker: 'For companies',
    title: 'Find the skills your organisation needs.',
    support: 'Post a need, browse profiles and connect with the right people.',
    cta: { label: 'CamPower for companies', href: '#entreprises' },
  },
  cameroon: {
    title: 'Designed for the realities of the Cameroonian market.',
    dek: 'CamPower is designed to connect talent, companies, skills, jobs, missions and local opportunities in Cameroon.',
    left: [
      { title: 'Cameroonian talent', body: 'Profiles and skills from the local market.' },
      { title: 'Companies', body: 'Recruitment and the search for skills.' },
      { title: 'Skills', body: 'The know-how attached to each profile.' },
    ],
    right: [
      { title: 'Jobs', body: 'Lasting or occasional opportunities.' },
      { title: 'Missions', body: 'Specific needs, a defined duration.' },
      { title: 'Opportunities', body: 'Jobs and missions together on CamPower.' },
    ],
  },
  minijobs: {
    kicker: 'Mini-jobs · Informal sector',
    title: 'Small everyday needs keep the economy moving.',
    support:
      'Restaurants, shops, bakeries, hotels, households and craftspeople post their short-term needs. Students, young people and anyone available respond and are paid for the task.',
    tiles: [
      { image: 'restaurant', label: 'Restaurants', alt: 'Kitchen help in a small restaurant' },
      { image: 'shop', label: 'Small shops', alt: 'A shopkeeper serving a customer in a neighbourhood shop' },
      { image: 'delivery', label: 'Deliveries', alt: 'A delivery rider on a motorbike handing over a parcel' },
      { image: 'household', label: 'Household help', alt: 'A household helper in a family living room' },
    ],
    cta: { label: 'Discover Mini-jobs', href: routes.minijobs.en },
    note: 'AI-generated illustrations. People and businesses are fictional.',
  },
  mobile: {
    title: 'CamPower, wherever you are.',
    dek: 'Check your profile, your opportunities and your missions from your phone.',
    stores: appStoresEn,
  },
  finale: {
    title: 'Ready to power up your opportunities?',
    support: 'Join CamPower and reach the talent, companies and opportunities of Cameroon.',
    cta: access,
  },
  footer: {
    tagline: 'A community, opportunities, a future.',
    columns: [
      {
        title: 'Discover',
        links: [
          { label: 'Jobs in Cameroon', href: routes.emploi.en },
          { label: 'About', href: routes.apropos.en },
          { label: 'Talent', href: routes.talents.en },
          { label: 'Companies', href: routes.entreprises.en },
          { label: 'Missions', href: routes.missions.en },
          { label: 'Mini-jobs', href: routes.minijobs.en },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Contact', href: routes.contact.en },
          { label: 'Help', href: routes.aide.en },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: routes.confidentialite.en },
          { label: 'Terms of use', href: routes.conditions.en },
          { label: 'Legal notice', href: routes.mentions.en },
        ],
      },
    ],
    email: { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    location: 'Cameroon',
    copyright: '© 2026 CamPower',
  },
};
