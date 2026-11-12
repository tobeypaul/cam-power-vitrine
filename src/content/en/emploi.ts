import { routes } from '../../i18n';
import type { GuideContent, GuideKey } from '../types';

/*
 * English copy for the employment page. Same structure as ../emploi.ts.
 * Job offers are not public yet: they are read inside CamPower after signing in,
 * so this page sends people to CamPower rather than listing offers.
 * Rules: no figures we cannot source, no promise of a job, a task or an income,
 * and no claim about a feature the application does not have.
 */

export const guidesEn: Record<GuideKey, GuideContent> = {
  emploi: {
    meta: {
      title: 'Jobs in Cameroon — Job offers on CamPower',
      description:
        'Job offers, missions and mini-jobs in Cameroon: see the offers companies post on CamPower, on the web or in the Android and iPhone app.',
    },
    crumb: 'Jobs in Cameroon',
    hero: {
      eyebrow: 'Jobs · Cameroon',
      title: 'Finding a job in Cameroon',
      lead: 'Job offers from companies in Cameroon are on CamPower. Open CamPower, create your profile and apply directly, on the web or from your phone.',
      points: [
        'Job offers posted by companies in Cameroon',
        'Missions and mini-jobs as well as employment',
        'Apply and talk to recruiters in one place',
      ],
      cta: 'See job offers on CamPower',
      note: 'Offers are viewed in CamPower once you are signed in. On the web, Android and iPhone.',
      screen: 'welcome',
    },
    sections: [
      {
        id: 'everywhere',
        kicker: 'Across Cameroon',
        title: 'Jobs, missions and mini-jobs across the country',
        paragraphs: [
          'CamPower is open to candidates and companies all over Cameroon: Douala, Yaoundé, Bafoussam, Buea, Garoua, Bamenda, Limbe, Kribi and beyond. Add your city to your profile so companies near you can find you.',
          'Beyond salaried jobs, CamPower brings together two other ways of working:',
        ],
        list: [
          'Job: a position in a company or organisation, under the contract stated in the offer.',
          'Mission: a defined professional need, met by a specific skill.',
          'Mini-job: a short-term need posted by a restaurant, shop, hotel or household.',
        ],
      },
      {
        id: 'offers',
        kicker: 'Job offers',
        title: 'Job offers are on CamPower',
        paragraphs: [
          'Companies post their job offers directly on CamPower. Each offer shows the city and the type of contract. To read them and apply, just open CamPower and sign in.',
        ],
        steps: [
          { label: 'Open CamPower', text: 'At cam-power.net, or in the Android or iPhone app.' },
          { label: 'Create your profile', text: 'Your background, your skills and your city: recruiters find you more easily.' },
          { label: 'Browse offers', text: 'Look through the offers companies post and follow the ones you like.' },
          { label: 'Apply and talk', text: 'Respond to the offers that match you and chat with the recruiter.' },
        ],
        cta: true,
      },
      {
        id: 'tips',
        kicker: 'Tips',
        title: 'Making your application count',
        paragraphs: ['A few simple habits help you stand out with recruiters.'],
        list: [
          'Complete your profile: a complete profile builds trust and is easier to find.',
          'Tailor each application, mentioning the required skills you genuinely have.',
          'State your city and availability clearly.',
          'Highlight English–French bilingualism if you have it: it is a sought-after asset in Cameroon.',
        ],
      },
      {
        id: 'safety',
        kicker: 'Safety',
        title: 'Spotting a suspicious job offer',
        paragraphs: ['Fake job offers exist everywhere. Whatever platform you use, be careful if:'],
        list: [
          'you are asked to pay to get a job, an interview or a compulsory training course;',
          'the advertised salary is very high for few requirements, with no clearly identified company;',
          'you are pushed to decide immediately or to send personal documents without an interview.',
        ],
      },
    ],
    related: {
      title: 'Discover CamPower',
      support: 'CamPower connects talent, companies and opportunities in Cameroon.',
      links: [
        { label: 'Talent', text: 'Build a professional profile that represents you.', href: routes.talents.en },
        { label: 'Mini-jobs', text: 'Everyday short-term needs, for students and anyone available.', href: routes.minijobs.en },
        { label: 'Missions', text: 'A defined need, a skill, a mission.', href: routes.missions.en },
        { label: 'Companies', text: 'For organisations: post a need and find the right profile.', href: routes.entreprises.en },
      ],
    },
    faq: {
      title: 'Frequently asked questions about jobs in Cameroon',
      items: [
        {
          question: 'Where can I find job offers in Cameroon?',
          answer: 'On CamPower. Open cam-power.net or the Android or iPhone app, sign in and browse the offers companies have posted.',
        },
        {
          question: 'Do I need an account to see the offers?',
          answer: 'Yes. Offers are viewed in CamPower once you are signed in. Creating your profile also lets recruiters find you.',
        },
        {
          question: 'Are there offers in Douala, Yaoundé or my city?',
          answer:
            'CamPower is open to companies all over Cameroon. The offers available depend on what companies post: open CamPower to see the current ones.',
        },
        {
          question: 'Can I look for a job from my phone?',
          answer: 'Yes. The CamPower app is available on Google Play and the App Store, and the service also works in a web browser.',
        },
        {
          question: 'What is the difference between a job, a mission and a mini-job?',
          answer:
            'A job is a position in an organisation. A mission meets a defined professional need with a specific skill. A mini-job is an everyday short-term need posted by a business, a hotel or a household.',
        },
        {
          question: 'Can a recruiter ask me for money to get a job?',
          answer:
            'Be wary of any request to pay for a job or an interview. It is a common sign of a scam. If in doubt, do not pay and look into the company.',
        },
      ],
    },
    finale: {
      title: 'Job offers are waiting for you on CamPower.',
      support: 'Open CamPower, create your profile and respond to the offers that match you.',
    },
  },
};
