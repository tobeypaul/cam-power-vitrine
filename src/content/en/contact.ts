import { routes } from '../../i18n';
import { siteConfig } from '../../lib/site';
import type { ContactContent } from '../types';

export const contactEn: ContactContent = {
  meta: {
    title: 'Contact — Write to CamPower',
    description:
      'Write to CamPower at contact@cam-power.net for support, or a question as a professional or a company. The address is the same whatever your reason.',
  },
  hero: {
    eyebrow: 'Contact',
    title: 'Let’s talk.',
    lead: 'CamPower offers one clear point of contact for professionals, companies and anyone who wants support or to talk about the platform.',
  },
  intents: {
    title: 'Why would you like to contact us?',
    dek: 'These reasons point you in the right direction. They do not open separate queues. Every message goes to the same address.',
    choose: 'Choose this reason',
    items: [
      {
        title: 'CamPower support',
        text: 'A question is still open after reading the help.',
        subject: 'CamPower support',
      },
      {
        title: 'Professionals',
        text: 'A question about CamPower or how you use the platform.',
        subject: 'Professional',
      },
      {
        title: 'Companies',
        text: 'A question about talent, recruitment, missions or your presence.',
        subject: 'Company',
      },
      {
        title: 'Other request',
        text: 'A legitimate request that does not fit the first three reasons.',
        subject: 'CamPower question',
      },
    ],
  },
  email: {
    title: 'Write to us',
    dek: 'The address is the same for every reason. It stays visible, so you know where your message goes.',
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: 'Write to us',
  },
  aide: {
    title: 'Looking for an answer first?',
    support: 'Common questions and first pointers are on the Help page. Contact is for writing to CamPower directly.',
    cta: 'Read the help',
    href: routes.aide.en,
  },
  social: {
    title: 'Follow CamPower',
    support: 'CamPower is on Facebook, TikTok and LinkedIn. These pages are not support channels: for a request, write to the address above.',
  },
  application: {
    title: 'Want to go straight to CamPower?',
    cta: 'Access CamPower',
    href: siteConfig.applicationUrl,
  },
};
