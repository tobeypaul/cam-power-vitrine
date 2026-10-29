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
