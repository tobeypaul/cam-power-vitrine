import { siteConfig } from '../../lib/site';
import type { ConfidentialiteContent } from '../types';

export const confidentialiteEn: ConfidentialiteContent = {
  meta: {
    title: 'Privacy — CamPower public website',
    description:
      'Privacy on the CamPower public website, and a summary of the information published for the app, without replacing the platform’s terms.',
  },
  hero: {
    eyebrow: 'Privacy',
    status: 'Public website and app',
    title: 'Your privacy, clearly explained.',
    lead: 'This page explains what applies when you only browse the public website, then what the platform’s terms publish for the app. It does not replace those terms.',
  },
  scope: {
    title: 'Scope of this information',
    lead: 'This information distinguishes the public website from the CamPower platform. Browsing this site does not create an account and is not an application.',
    coveredLabel: 'This site',
    coveredTitle: 'The public website',
    coveredText:
      'The information pages you read here, including Help and Contact. The findings below concern the version of this site that was reviewed.',
    pendingLabel: 'Another surface',
    pendingTitle: 'The platform and the app',
    pendingText:
      'Accounts, profiles, applications, CVs, recruiter data, payments, messages and candidate profiles belong to the app. This site does not process them. What has been published about them is summarised below.',
  },
  practices: {
    title: 'What the public website currently does',
    dek: 'These points describe the public website that was reviewed. They do not describe the CamPower app.',
    items: [
      {
        title: 'No account on this site',
        text: 'The public website offers no sign-up or log-in. It does not create a CamPower account.',
      },
      {
        title: 'No contact form',
        text: 'The site does not collect your message. Writing to CamPower opens your own email app.',
      },
      {
        title: 'No tracking identified',
        text: 'No visitor analytics or tracking tool has been identified in the current version of the public website.',
      },
      {
        title: 'No cookies identified',
        text: 'In the version of the public website currently reviewed, no cookie has been identified as being set by the site.',
      },
    ],
    fonts:
      'The fonts in this version are served with the site. Loading the reviewed pages does not call an external font service. The search on the Help page runs within the page, over the topics and questions shown there.',
    hosting:
      'When the public website goes live on its production hosting, that hosting may process technical connection information. This will be specified once the hosting has been decided. No retention period is given here.',
  },
  email: {
    title: 'When you write to us',
    lead: 'The message is sent from your own email app. The public website does not keep it.',
    steps: [
      { title: 'Public website', text: 'You choose “Write to us”.' },
      { title: 'Your email app', text: 'You write and send the message.' },
      { title: siteConfig.email, text: 'The destination address stays the same.' },
    ],
    note: 'On the Contact page, a reason can only suggest the subject of the message. It does not create a ticket, an account or a separate queue. This information does not describe how the receiving email service later keeps the message.',
  },
  cookies: {
    title: 'Cookies and audience measurement',
    items: [
      {
        title: 'Cookies',
        text: 'In the version of the public website currently reviewed, no cookie has been identified as being set by the site.',
      },
      {
        title: 'Audience measurement',
        text: 'No visitor analytics or tracking tool has been identified in the current version of the public website.',
      },
    ],
    note: 'These findings concern the public website reviewed. The platform’s legal notice states, for the platform only, that cookies or similar technologies may maintain the session, remember preferences, analyse usage and secure member-only features. Those uses are not this site’s.',
  },
  application: {
    title: 'About the CamPower app',
    paragraphs: [
      'The platform’s general terms of use (CGU), in force since 21 July 2026 and consulted on 7 October 2026, describe processing that is specific to the app. They are published in French. The summary below does not reproduce them.',
      'Those terms state that the platform collects, among other things, surname, first name, email address, telephone, city, CV, professional skills, application history and browsing data.',
      'The purposes listed include managing and personalising the account, connecting candidates and recruiters, improving the service and personalised recommendations, communications about the account and offers, and compliance with legal obligations.',
      'The rights listed are access, rectification and deletion. The terms say to exercise them with the publisher at contact@campower.cm. That address is the contact published by the platform’s legal pages. A question about the public website should still go to contact@cam-power.net.',
      'The same terms cite Law No. 2010/021 of 21 December 2010 governing electronic commerce (loi n° 2010/021 du 21 décembre 2010 régissant le commerce électronique) and Law No. 2010/012 of 21 December 2010 on cybersecurity and cybercrime (loi n° 2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité). They name HOPE CORPORATIONS, a company governed by Cameroonian law (société de droit camerounais), as publisher of the platform. The platform’s legal notice names CamPower. This page does not choose between the two.',
    ],
    sourceHref: 'https://cam-power.net/cgu',
    sourceLabel: 'https://cam-power.net/cgu',
    sourceNote:
      'This link opens the general terms of use published for the platform, in French. It is the current source for the app’s terms and privacy information. This page of the public website does not replace it.',
  },
  questions: {
    title: 'A question about your data or your privacy?',
    support:
      'For a question or request about privacy, write to the address below. This page does not offer a form.',
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: 'Write to us',
  },
  evolve: {
    title: 'Information that will evolve',
    paragraphs: [
      'The app summary follows the terms consulted on 7 October 2026. It is not an audit of processing, an inventory of retention periods, or an account-deletion procedure.',
      'The production hosting of the public website is not decided on this page. No retention period is given for this site.',
      'This English version is a translation provided for convenience. The French version of this page is the reference.',
    ],
    updatedLabel: 'Last updated',
    updated: '7 October 2026',
  },
};
