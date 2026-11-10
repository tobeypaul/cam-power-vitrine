import { routes } from '../../i18n';
import { siteConfig } from '../../lib/site';
import type { MentionsContent } from '../types';

export const mentionsEn: MentionsContent = {
  meta: {
    title: 'Legal notice — CamPower public website',
    description:
      'Legal notice of the CamPower public website. The operator’s legal identity is not settled between the platform’s published pages.',
  },
  hero: {
    eyebrow: 'Legal notice',
    scope: 'Public website',
    title: 'Legal notice',
    lead: 'This notice concerns the CamPower public website. It reports what the platform’s legal pages publish, without choosing an operator that those pages do not name in the same way.',
    support:
      'The platform’s pages, published in French, were consulted on 7 October 2026. Fields that do not appear there remain unestablished. This English version is a translation provided for convenience; the French version of this page is the reference.',
  },
  identity: {
    title: 'Website publisher',
    lead: 'The platform’s legal notice (mentions légales), consulted on 7 October 2026, names CamPower as publisher and operator, the Republic of Cameroon, contact@campower.cm, and “Direction de CamPower” (CamPower management) as publication director. It does not publish a legal form, an RCCM trade register number, a NIU taxpayer number, an address, a telephone number or the name of a natural person.',
    flag: 'Identity not settled',
    notice:
      'The platform’s legal notice names CamPower. The general terms of use (CGU) name HOPE CORPORATIONS, a company governed by Cameroonian law (société de droit camerounais). Hope Corporation is also named there as the development provider, not as publisher.',
    rows: [
      {
        label: 'Publisher according to the platform’s legal notice',
        value: 'CamPower',
        status: 'established',
        statusLabel: 'Published',
      },
      {
        label: 'Publisher according to the CGU',
        value: 'HOPE CORPORATIONS, société de droit camerounais',
        status: 'established',
        statusLabel: 'Published in the CGU',
      },
      {
        label: 'Publication director',
        value: 'Direction de CamPower',
        status: 'established',
        statusLabel: 'Published wording',
      },
      {
        label: 'Development',
        value: 'Hope Corporation, software development provider',
        status: 'established',
        statusLabel: 'Published',
      },
      {
        label: 'Country',
        value: 'Republic of Cameroon',
        status: 'established',
        statusLabel: 'Published',
      },
      {
        label: 'Legal form',
        value: 'Not published',
        status: 'prototype',
        statusLabel: 'Not published',
      },
      {
        label: 'Registration (RCCM)',
        value: 'Not published',
        status: 'prototype',
        statusLabel: 'Not published',
      },
      {
        label: 'Taxpayer number (NIU)',
        value: 'Not published',
        status: 'prototype',
        statusLabel: 'Not published',
      },
      {
        label: 'Named natural person',
        value: 'Not published',
        status: 'prototype',
        statusLabel: 'Not published',
      },
      {
        label: 'Address',
        value: 'Not published',
        status: 'prototype',
        statusLabel: 'Not published',
      },
      {
        label: 'Telephone',
        value: 'Not published',
        status: 'prototype',
        statusLabel: 'Not published',
      },
      {
        label: 'Email in the platform’s legal notice',
        value: 'contact@campower.cm',
        href: 'mailto:contact@campower.cm',
        status: 'established',
        statusLabel: 'Published',
      },
      {
        label: 'Public website email',
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        status: 'established',
        statusLabel: 'Established for this site',
      },
    ],
  },
  hosting: {
    title: 'Hosting',
    cardTitle: 'Published hosting and this site’s hosting',
    text: 'The platform’s legal notice states that the platform is hosted on third-party cloud infrastructure, without naming the host. It refers readers to the publisher for any information about the host. The production host of the public website is not established on this page.',
  },
  further: [
    {
      title: 'Development',
      text: 'The platform’s legal notice states that the CamPower digital solution was developed by Hope Corporation, a software development provider. It also states that Hope Corporation is neither owner nor co-publisher of CamPower, is not responsible for processing users’ personal data, and that operating the service and responsibility for data rest exclusively with CamPower. This page does not reinterpret those statements. It does not decide whether Hope Corporation and HOPE CORPORATIONS are the same legal entity.',
    },
    {
      title: 'Intellectual property',
      text: 'The platform’s legal notice states that all content of the CAMPOWER site, including texts, graphics, images, logos, icons, videos, software and databases, is the exclusive property of CamPower or its partners, and is protected by Cameroonian and international intellectual property law. The general terms of use, for their part, attribute the platform’s elements to HOPE CORPORATIONS. This page does not choose between the two.',
    },
    {
      title: 'Personal data',
      text: 'The platform’s legal notice states that CamPower processes personal data to provide and improve its services, and that a user can exercise rights of access, rectification and deletion at contact@campower.cm. The public website describes its own limits on its Privacy page. The published source for the app’s processing remains the general terms of use. This page does not reproduce those texts.',
      links: [
        { href: routes.confidentialite.en, label: 'Privacy on the public website' },
        { href: 'https://cam-power.net/cgu', label: 'https://cam-power.net/cgu' },
      ],
    },
    {
      title: 'Applicable law',
      text: 'The platform’s legal notice is governed by Cameroonian law. It gives the courts of Douala, Republic of Cameroon, exclusive jurisdiction over disputes about its interpretation or performance. That statement is the one published for that notice. It does not, by itself, designate the forum for the public website.',
    },
  ],
  related: {
    title: 'Related pages',
    lead: 'The site’s rules and privacy each have their own page. The platform’s terms stay on the platform.',
    items: [
      {
        title: 'Terms of use',
        text: 'The rules for using the CamPower public website.',
        href: routes.conditions.en,
        pathLabel: routes.conditions.en,
        cta: 'Read the terms',
      },
      {
        title: 'Privacy',
        text: 'The privacy practices currently established for this site.',
        href: routes.confidentialite.en,
        pathLabel: routes.confidentialite.en,
        cta: 'Read the privacy page',
      },
      {
        title: 'Platform terms',
        text: 'The current source for the app’s terms and privacy information, in French. This page does not replace it.',
        href: 'https://cam-power.net/cgu',
        pathLabel: 'cam-power.net/cgu',
        cta: 'Open the CGU',
      },
      {
        title: 'Platform legal notice',
        text: 'The source consulted for the app’s legal notice, in French. This page of the public website does not copy it.',
        href: 'https://cam-power.net/mentions-legales',
        pathLabel: 'cam-power.net/mentions-legales',
        cta: 'Open the legal notice',
      },
    ],
  },
  questions: {
    title: 'A question about this notice?',
    support: 'For a question about this legal notice of the public website, write to the address below.',
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: 'Write to us',
  },
};
