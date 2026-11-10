import { routes } from '../../i18n';
import { appStoresEn } from '../stores';
import type { MiniJobsContent } from '../types';

export const minijobsEn: MiniJobsContent = {
  meta: {
    title: 'Mini-jobs — Everyday short-term needs on CamPower',
    description:
      'Restaurants, shops, bakeries, hotels, households: post a short-term need on CamPower. Students, young people and anyone available can respond and be paid for the task.',
  },
  nav: [
    { label: 'Discover', href: routes.decouvrir.en },
    { label: 'Talent', href: routes.talents.en },
    { label: 'Companies', href: routes.entreprises.en },
    { label: 'Missions', href: routes.missions.en },
    { label: 'Mini-jobs', href: routes.minijobs.en, current: true },
    { label: 'About', href: routes.apropos.en },
  ],
  hero: {
    eyebrow: 'Mini-jobs',
    title: 'A short-term need. Someone available. A mini-\u2060job.',
    lead: 'Restaurants, small shops, bakeries, hotels, households, craftspeople: the informal sector has short-term needs every day. With CamPower Mini-jobs, they post those needs, and people available nearby can respond and be paid for the task.',
    explore: { label: 'See everyday needs', href: '#besoins' },
    imageAlt: 'A busy shopping street in Cameroon, with small businesses and a delivery rider on a motorbike',
    caption: 'AI-generated illustration.',
  },
  needs: {
    kicker: 'Who posts a mini-job?',
    title: 'Everyday needs, where the economy happens.',
    support:
      'An extra pair of hands for the lunch rush, a delivery, cleaning, a repair, home tutoring: every short-term need can become a mini-job.',
    items: [
      { image: 'restaurant', title: 'Restaurants', text: 'Help in the kitchen or dining room for a busy service.', alt: 'Kitchen help in a small restaurant' },
      { image: 'bakery', title: 'Bakeries', text: 'Stocking shelves, preparation or delivering the morning bread.', alt: 'A young man arranging bread in a neighbourhood bakery' },
      { image: 'shop', title: 'Shops and small businesses', text: 'Restocking, minding the counter, a one-off stock count.', alt: 'A shopkeeper serving a customer in a neighbourhood shop' },
      { image: 'hotel', title: 'Hotels', text: 'Extra help with rooms, reception or a busy weekend.', alt: 'Staff preparing a hotel room' },
      { image: 'household', title: 'Household help', text: 'Cleaning, ironing, help around the house for a day.', alt: 'A household helper folding laundry in a family living room' },
      { image: 'technician', title: 'Repairs and odd jobs', text: 'Electrical work, plumbing, DIY, at home.', alt: 'A technician repairing an electrical socket at home' },
      { image: 'delivery', title: 'Deliveries and errands', text: 'A parcel, a mail drop-off, an errand in town.', alt: 'A delivery rider on a motorbike handing a parcel to a shopkeeper' },
      { image: 'event', title: 'Events', text: 'Serving, welcoming guests or setting up for a party or ceremony.', alt: 'Staff serving guests at an outdoor celebration' },
      { image: 'carwash', title: 'Washing and upkeep', text: 'Car washing, cleaning, gardening.', alt: 'Two young men washing a car by hand' },
      { image: 'tailor', title: 'Tailoring and crafts', text: 'Extra help in the workshop before a deadline.', alt: 'A seamstress and her apprentice working in a workshop' },
      { image: 'student', title: 'Home tutoring', text: 'A tutor for one subject, a few hours a week.', alt: 'A student giving a maths lesson at home' },
    ],
  },
  people: {
    kicker: 'Who can respond?',
    title: 'Short-term work, for anyone who is available.',
    support:
      'A mini-job lets you put your time and know-how towards a need nearby, and be paid for the task.',
    items: [
      { title: 'Students', text: 'A student job between classes, in the evening or at the weekend.' },
      { title: 'Young job seekers', text: 'A first experience, references, occasional income.' },
      { title: 'Craftspeople and technicians', text: 'More jobs, close to home.' },
      { title: 'Anyone available', text: 'A few free hours that become useful work.' },
    ],
    imageAlt: 'A student giving a lesson at home',
  },
  how: {
    kicker: 'How it works',
    title: 'Easy to post, easy to find.',
    support:
      'Mini-jobs are in the Offers tab of the CamPower app. Each listing shows the task, the place, the pay, the duration and the schedule.',
    steps: [
      { label: 'Post', text: 'The business, establishment or household describes its need.' },
      { label: 'Apply', text: 'Interested people send their application.' },
      { label: 'Choose', text: 'Whoever posted reviews the applications and chooses.' },
      { label: 'Do the job', text: 'The task is carried out, as agreed.' },
    ],
    categoriesLabel: 'Some categories in the app',
    categories: ['Cleaning', 'Delivery', 'Gardening', 'Lessons', 'Odd jobs'],
    listAlt: 'List of mini-jobs in the CamPower app',
    detailAlt: 'Mini-job details in the CamPower app',
    note: 'Screens from the app, in French.',
  },
  economy: {
    kicker: 'Local economy',
    title: 'Keeping the economy moving, one need at a time.',
    support:
      'The informal sector supports a large part of the population in Cameroon. Mini-jobs make its needs visible, and let more people take part.',
    points: [
      { title: 'For those who post', text: 'Find help quickly, without long-term hiring.' },
      { title: 'For those who respond', text: 'Paid activities, at your own pace.' },
      { title: 'For the neighbourhood', text: 'Money that circulates where it is earned.' },
    ],
  },
  missions: {
    title: 'Mini-jobs and Missions',
    text: 'A mini-job is a concrete, short-term everyday task. A mission calls on a professional skill for a defined need. Both are part of the same CamPower ecosystem, alongside employment and the professional network.',
    cta: { label: 'Discover Missions', href: routes.missions.en },
  },
  stores: appStoresEn,
  disclaimer:
    'The photographs on this page are AI-generated illustrations. The people and businesses shown are fictional. Posting or viewing a mini-job does not guarantee a task or an income.',
  finale: {
    title: 'A need today? Some free time?',
    support: 'Post a mini-job or respond to those near you. The next step happens in the app.',
  },
};
