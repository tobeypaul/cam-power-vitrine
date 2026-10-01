import { homepageFr } from './fr';
import type { HomepageContent } from './types';

const catalogs: Record<string, HomepageContent> = {
  fr: homepageFr,
};

export const defaultLocale = 'fr';

export function getHomepage(locale: string = defaultLocale): HomepageContent {
  const content = catalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}

export function availableLocales(): string[] {
  return Object.keys(catalogs);
}
