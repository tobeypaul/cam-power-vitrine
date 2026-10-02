import { aproposFr } from './a-propos';
import { decouvrirFr } from './decouvrir';
import { entreprisesFr } from './entreprises';
import { homepageFr } from './fr';
import { missionsFr } from './missions';
import { talentsFr } from './talents';
import type {
  AProposContent,
  DecouvrirContent,
  EntreprisesContent,
  HomepageContent,
  MissionsContent,
  TalentsContent,
} from './types';

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

const missionsCatalogs: Record<string, MissionsContent> = {
  fr: missionsFr,
};

export function getMissions(locale: string = defaultLocale): MissionsContent {
  const content = missionsCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}

const aproposCatalogs: Record<string, AProposContent> = {
  fr: aproposFr,
};

export function getAPropos(locale: string = defaultLocale): AProposContent {
  const content = aproposCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}

export function getEntreprises(locale: string = defaultLocale): EntreprisesContent {
  const content = entreprisesCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}
