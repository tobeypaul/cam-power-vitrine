import { siteConfig } from '../lib/site';
import type { StoreLink } from './types';

export const appStoresFr: StoreLink[] = [
  {
    kicker: 'Télécharger sur',
    name: 'Google Play',
    href: siteConfig.playStoreUrl,
    platform: 'android',
  },
  {
    kicker: 'Télécharger dans',
    name: 'l’App Store',
    href: siteConfig.appStoreUrl,
    platform: 'ios',
  },
];

export const appStoresEn: StoreLink[] = [
  {
    kicker: 'Get it on',
    name: 'Google Play',
    href: 'https://play.google.com/store/apps/details?id=com.campower&hl=en',
    platform: 'android',
  },
  {
    kicker: 'Download on the',
    name: 'App Store',
    href: siteConfig.appStoreUrl,
    platform: 'ios',
  },
];
