import { aideFr } from './aide';
import { conditionsFr } from './conditions';
import { confidentialiteFr } from './confidentialite';
import { contactFr } from './contact';
import { aproposFr } from './a-propos';
import { decouvrirFr } from './decouvrir';
import { entreprisesFr } from './entreprises';
import { homepageFr } from './fr';
import { missionsFr } from './missions';
import { talentsFr } from './talents';
import type {
  AideContent,
  ConditionsContent,
  ConfidentialiteContent,
  ContactContent,
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

const aideCatalogs: Record<string, AideContent> = {
  fr: aideFr,
};

export function getAide(locale: string = defaultLocale): AideContent {
  const content = aideCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}

const contactCatalogs: Record<string, ContactContent> = {
  fr: contactFr,
};

const confidentialiteCatalogs: Record<string, ConfidentialiteContent> = {
  fr: confidentialiteFr,
};

const conditionsCatalogs: Record<string, ConditionsContent> = {
  fr: conditionsFr,
};

export function getConditions(locale: string = defaultLocale): ConditionsContent {
  const content = conditionsCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}

export function getConfidentialite(locale: string = defaultLocale): ConfidentialiteContent {
  const content = confidentialiteCatalogs[locale];
  if (!content) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return content;
}

export function getContact(locale: string = defaultLocale): ContactContent {
  const content = contactCatalogs[locale];
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
