import type { Locale } from '../i18n';
import { aproposFr } from './a-propos';
import { aideFr } from './aide';
import { conditionsFr } from './conditions';
import { confidentialiteFr } from './confidentialite';
import { contactFr } from './contact';
import { decouvrirFr } from './decouvrir';
import { aproposEn } from './en/a-propos';
import { aideEn } from './en/aide';
import { conditionsEn } from './en/conditions';
import { confidentialiteEn } from './en/confidentialite';
import { contactEn } from './en/contact';
import { decouvrirEn } from './en/decouvrir';
import { entreprisesEn } from './en/entreprises';
import { homepageEn } from './en/home';
import { mentionsEn } from './en/mentions';
import { minijobsEn } from './en/minijobs';
import { missionsEn } from './en/missions';
import { talentsEn } from './en/talents';
import { entreprisesFr } from './entreprises';
import { homepageFr } from './fr';
import { mentionsFr } from './mentions';
import { minijobsFr } from './minijobs';
import { missionsFr } from './missions';
import { talentsFr } from './talents';
import type {
  AideContent,
  AProposContent,
  ConditionsContent,
  ConfidentialiteContent,
  ContactContent,
  DecouvrirContent,
  EntreprisesContent,
  HomepageContent,
  MentionsContent,
  MiniJobsContent,
  MissionsContent,
  TalentsContent,
} from './types';

export { defaultLocale } from '../i18n';

const homepage: Record<Locale, HomepageContent> = { fr: homepageFr, en: homepageEn };
const decouvrir: Record<Locale, DecouvrirContent> = { fr: decouvrirFr, en: decouvrirEn };
const talents: Record<Locale, TalentsContent> = { fr: talentsFr, en: talentsEn };
const entreprises: Record<Locale, EntreprisesContent> = { fr: entreprisesFr, en: entreprisesEn };
const missions: Record<Locale, MissionsContent> = { fr: missionsFr, en: missionsEn };
const minijobs: Record<Locale, MiniJobsContent> = { fr: minijobsFr, en: minijobsEn };
const apropos: Record<Locale, AProposContent> = { fr: aproposFr, en: aproposEn };
const aide: Record<Locale, AideContent> = { fr: aideFr, en: aideEn };
const contact: Record<Locale, ContactContent> = { fr: contactFr, en: contactEn };
const confidentialite: Record<Locale, ConfidentialiteContent> = { fr: confidentialiteFr, en: confidentialiteEn };
const conditions: Record<Locale, ConditionsContent> = { fr: conditionsFr, en: conditionsEn };
const mentions: Record<Locale, MentionsContent> = { fr: mentionsFr, en: mentionsEn };

export const getHomepage = (locale: Locale) => homepage[locale];
export const getDecouvrir = (locale: Locale) => decouvrir[locale];
export const getTalents = (locale: Locale) => talents[locale];
export const getEntreprises = (locale: Locale) => entreprises[locale];
export const getMissions = (locale: Locale) => missions[locale];
export const getMiniJobs = (locale: Locale) => minijobs[locale];
export const getAPropos = (locale: Locale) => apropos[locale];
export const getAide = (locale: Locale) => aide[locale];
export const getContact = (locale: Locale) => contact[locale];
export const getConfidentialite = (locale: Locale) => confidentialite[locale];
export const getConditions = (locale: Locale) => conditions[locale];
export const getMentions = (locale: Locale) => mentions[locale];
