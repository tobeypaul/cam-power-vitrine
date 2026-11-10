import { routes } from '../../i18n';
import { siteConfig } from '../../lib/site';
import type { ConditionsContent } from '../types';

export const conditionsEn: ConditionsContent = {
  meta: {
    title: 'Terms of use of the public website — CamPower',
    description:
      'Terms of use of the CamPower public website. They do not define the terms of the platform or the app.',
  },
  hero: {
    eyebrow: 'Terms of use',
    scope: 'Public website',
    title: 'Terms of use of the public website',
    lead: 'These terms only cover the use of the CamPower public website. They explain what the site is, the essential rules for using it, and the limits of what the information shown here amounts to.',
    support:
      'They concern this public website. The terms of the platform and the app are published separately. Browsing this website does not mean accepting those app terms. This English version is a translation provided for convenience; the French version of this page is the reference.',
  },
  scope: {
    title: 'What do these terms apply to?',
    coveredLabel: 'These terms cover',
    coveredTitle: 'The CamPower public website',
    coveredText:
      'The information pages you read here, including the presentation of CamPower, help and contact. They are made available on this website. Reading them is not a signed acceptance.',
    outsideLabel: 'They do not define',
    outsideTitle: 'The contractual terms of the CamPower platform or app',
    outsideText:
      'The general terms of use (CGU) of the platform are published in French at https://cam-power.net/cgu. The version consulted on 7 October 2026 has been in force since 21 July 2026. It covers, among other things, accounts, profiles, offers, short missions, published content, messaging and subscriptions. Acceptance is provided for when an account is created. This website does not repeat those obligations.',
  },
  purpose: {
    title: 'A public website with information about CamPower',
    lead: 'The public website introduces CamPower. It does not open an account.',
    items: [
      {
        title: 'Presenting CamPower',
        text: 'The site presents the product and how it is introduced to the public.',
      },
      {
        title: 'Explaining the ecosystem',
        text: 'It describes the professional environment CamPower is part of.',
      },
      {
        title: 'Presenting the audiences',
        text: 'It sets out the main audiences and what the product lets them consider.',
      },
      {
        title: 'Pointing the way',
        text: 'It helps people understand CamPower, then directs those who are interested to CamPower and to the official destinations provided.',
      },
    ],
    infoTitle: 'Information, not a specific commitment',
    infoText:
      'The content of the public website is primarily informative and presentational. Information about employment, recruitment, opportunities, Missions, talent or companies does not, on its own, constitute an employment contract, a recruitment commitment or a specific Mission contract.',
  },
  use: {
    title: 'Using the public website appropriately',
    lead: 'The site is open for browsing. A few limits are enough.',
    items: [
      'Do not deliberately disrupt the site.',
      'Do not attempt access that is not offered.',
      'Do not introduce malicious code.',
      'Do not use the site unlawfully.',
    ],
    indexing:
      'Ordinary indexing by search engines, and legitimate discovery of this public website, remain allowed.',
  },
  ip: {
    title: 'Content, brand and illustrations',
    lead: 'The public website includes the CamPower brand, its design and its text. You may browse it normally. Please do not present this site, this brand or this content as your own.',
    support:
      'This page does not claim that a trademark is registered. The platform’s general terms of use and its legal notice do not name the same holder of the platform’s elements. This page does not choose between the two.',
    thirdParty:
      'The presence of a third-party name, brand or element in an illustration or a screenshot does not, on its own, mean that there is a partnership, affiliation or endorsement by that third party.',
  },
  leave: {
    title: 'When you leave the public website',
    lead: 'The site may take you to other places. Those that are not CamPower apply their own terms.',
    destinations: [
      { title: 'CamPower app', text: 'cam-power.net' },
      { title: 'Platform CGU', text: 'cam-power.net/cgu' },
      { title: 'Google Play', text: 'The app listing' },
      { title: 'App Store', text: 'The app listing' },
      { title: 'Facebook', text: 'CamPower’s page' },
      { title: 'TikTok', text: 'CamPower’s account' },
      { title: 'LinkedIn', text: 'CamPower’s page' },
      { title: 'Your email app', text: siteConfig.email },
    ],
    appTitle: 'The app is still CamPower',
    appParagraphs: [
      'The CamPower app is part of the CamPower product. The fact that it falls outside these terms does not present it as a service unrelated to CamPower.',
      'Opening it from the public website does not mean that these terms set the app’s rules. Choosing “Access CamPower” does not mean accepting the general terms of use published at https://cam-power.net/cgu.',
    ],
  },
  availability: {
    title: 'Availability and changes to the site',
    items: [
      {
        title: 'The site may change',
        text: 'The information on the public website may be updated as the product evolves. Such updates do not change the platform’s general terms of use, which remain published on their own page.',
      },
      {
        title: 'Access may be interrupted',
        text: 'Browsing may sometimes be interrupted. No permanent availability or service level is promised. This page does not provide for shutting down the whole CamPower platform.',
      },
    ],
  },
  limits: {
    title: 'What the information on this site is not',
    lead: 'Presenting opportunities or capabilities on the public website does not, by itself, create a commitment.',
    items: [
      {
        title: 'Not an employment relationship',
        text: 'A page on this site does not create an employment contract.',
      },
      {
        title: 'Not a recruitment',
        text: 'This page does not commit CamPower to recruit, nor a company to select a candidate.',
      },
      {
        title: 'Not a Mission contract',
        text: 'This page does not form a Mission contract between the people concerned.',
      },
    ],
    note: 'Visiting the public website does not guarantee a job, a recruitment, a candidate, a Mission, or any professional or commercial result.',
  },
  privacy: {
    title: 'Privacy',
    text: 'The privacy practices currently established for the public website are set out on the Privacy page. This page does not repeat them or widen their scope.',
    href: routes.confidentialite.en,
    pathLabel: routes.confidentialite.en,
    cta: 'Read the Privacy page',
  },
  law: {
    title: 'Applicable framework',
    text: 'Questions about these terms of the public website are considered in light of applicable Cameroonian law. This page does not designate a court, an arbitration body or a mediator. The platform’s general terms of use name, for themselves, the courts of Douala. That jurisdiction is not adopted here for the public website.',
  },
  questions: {
    title: 'A question about these terms?',
    support: 'For a question about these terms of the public website, write to the address below.',
    address: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    cta: 'Write to us',
  },
};
