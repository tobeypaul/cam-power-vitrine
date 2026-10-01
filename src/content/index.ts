import { decouvrirFr } from './decouvrir';
import { entreprisesFr } from './entreprises';
import { homepageFr } from './fr';
import { talentsFr } from './talents';
import type { DecouvrirContent, EntreprisesContent, HomepageContent, TalentsContent } from './types';

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

const decouvrirCatalogs: Record<string, DecouvrirContent> = {
  fr: decouvrirFr,
};

export function getDecouvrir(locale: string = defaultLocale): DecouvrirContent {
  const content = decouvrirCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}

const talentsCatalogs: Record<string, TalentsContent> = {
  fr: talentsFr,
};

export function getTalents(locale: string = defaultLocale): TalentsContent {
  const content = talentsCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}

const entreprisesCatalogs: Record<string, EntreprisesContent> = {
  fr: entreprisesFr,
};

export function getEntreprises(locale: string = defaultLocale): EntreprisesContent {
  const content = entreprisesCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}
