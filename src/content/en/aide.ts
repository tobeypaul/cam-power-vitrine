import { routes } from '../../i18n';
import { siteConfig } from '../../lib/site';
import { appStoresEn } from '../stores';
import type { AideContent } from '../types';

export const aideEn: AideContent = {
  meta: {
    title: 'Help — Frequently asked questions about CamPower',
    description:
      'Find an answer among the CamPower help topics, or write to CamPower if your question is not covered.',
  },
  hero: {
    eyebrow: 'Help',
    title: 'How can we help you?',
    lead: 'Browse common topics, read the answers already available, then write to CamPower if your question is still open.',
    searchLabel: 'Search help',
    searchPlaceholder: 'Search help',
    hint: 'This search only covers the topics and questions on this page.',
    empty: 'Can’t find what you are looking for?',
    emptyLink: 'Contact CamPower.',
  },
  topics: {
    title: 'Choose a topic',
    items: [
      {
        title: 'Account & access',
        text: 'Where to open CamPower and the app.',
        action: 'See the questions',
        terms: 'account access app android iphone',
        icon: 'key',
      },
      {
        title: 'Profile & skills',
        text: 'Understanding the profile and skills.',
        action: 'See the questions',
        terms: 'profile skills identity',
        icon: 'user',
      },
      {
        title: 'Opportunities & applications',
        text: 'Employment, and other forms of opportunity.',
        action: 'See the questions',
        terms: 'opportunities applications employment',
        icon: 'brief',
      },
      {
        title: 'Companies & recruitment',
        text: 'Needs, talent and recruitment.',
        action: 'See the questions',
        terms: 'companies recruitment organisations',
        icon: 'org',
      },
      {
        title: 'Missions',
        text: 'A defined need and a skill.',
        action: 'See the questions',
        terms: 'missions need skill',
        icon: 'meet',
      },
      {
        title: 'Privacy & security',
        text: 'A question about your data: write to CamPower.',
        action: 'Contact CamPower',
        terms: 'privacy security data',
        icon: 'shield',
        href: routes.contact.en,
      },
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    dek: 'A few answers that are already established. This page does not describe the app’s screens one by one.',
    items: [
      {
        question: 'What is CamPower?',
        answer:
          'CamPower is a professional ecosystem. It connects people, skills, organisations and opportunities, in Cameroon.',
        terms: 'what is campower ecosystem people skills organisations opportunities cameroon profile',
      },
      {
        question: 'Who is CamPower for?',
        answer: 'CamPower is for professionals and organisations. Both move forward in the same space.',
        terms: 'who is campower for professionals organisations companies talent profile',
      },
      {
        question: 'Is CamPower only for job seekers?',
        answer:
          'No. Employment is part of it, alongside professional identity, skills, the network and missions. None of these doors defines CamPower on its own.',
        terms: 'only job search identity skills network missions opportunities applications',
      },
      {
        question: 'What is the difference between a job and a mission?',
        answer:
          'A job is a long-term place. A mission connects a defined need with a skill. Missions complement employment. They do not replace it.',
        terms: 'difference job employment mission need skill duration missions',
      },
      {
        question: 'Where can I access CamPower?',
        answer: 'The application is available at ',
        link: { label: 'cam-power.net', href: siteConfig.applicationUrl },
        after: '.',
        terms: 'where access campower application app account cam-power.net',
      },
      {
        question: 'Is there an Android app?',
        answer: 'Yes. The Android app is available on ',
        link: { label: 'Google Play', href: appStoresEn[0]!.href },
        after: '.',
        terms: 'app android google play account access',
      },
      {
        question: 'Is there an iPhone app?',
        answer: 'Yes. The iPhone app is available on the ',
        link: { label: 'App Store', href: siteConfig.appStoreUrl },
        after: '.',
        terms: 'app iphone ios apple app store account access',
      },
    ],
  },
  paths: {
    title: 'Are you a professional or a company?',
    dek: 'Two ways to find your bearings. They are not separate support channels.',
    professional: {
      kicker: 'Professional',
      title: 'Your journey',
      links: [
        { label: 'Profile', terms: 'profile skills' },
        { label: 'Skills', terms: 'profile skills' },
        { label: 'Opportunities', terms: 'opportunities applications' },
        { label: 'Applications', terms: 'opportunities applications' },
        { label: 'Missions', terms: 'missions need' },
      ],
    },
    enterprise: {
      kicker: 'Company',
      title: 'Your need',
      links: [
        { label: 'Professional presence', terms: 'companies recruitment' },
        { label: 'Talent', terms: 'companies recruitment' },
        { label: 'Recruitment', terms: 'companies recruitment' },
        { label: 'Missions', terms: 'missions need' },
      ],
    },
  },
  escalation: {
    title: 'Can’t find your answer?',
    support: 'Write to CamPower. This page does not replace direct contact, and it does not open a form.',
    contactLabel: 'Contact CamPower',
    contactHref: routes.contact.en,
    emailLabel: siteConfig.email,
    accessLabel: 'Access CamPower',
    accessHref: siteConfig.applicationUrl,
  },
};
