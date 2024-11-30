import { en } from "./locales/en";
import { ru } from "./locales/ru";

export const defaultLocale = "ru";

export const locales = {
  en,
  ru,
} as const;

export type LocaleType = keyof typeof locales;
export type TranslationType = (typeof locales)[LocaleType];

export const i18n = {
  defaultLocale,
  locales,
};

export const t = locales[defaultLocale];
