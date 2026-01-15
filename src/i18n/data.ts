export const defaultLocale = 'en';
export const locales = ['en'] as const;

export type Locale = (typeof locales)[number];

export type LanguageObject = {
  code: Locale;
  nativeName: string;
  name: string; // name in azerbaijani
  englishName: string;
  direction: 'ltr' | 'rtl';
  emoji: string;
};

export const languages = {
  en: {
    code: 'en',
    direction: 'ltr',
    emoji: '🇬🇧',
    name: 'İngilis dili',
    nativeName: 'English',
    englishName: 'English',
  },
} as const satisfies Record<Locale, LanguageObject>;

export const languagesList = Object.values(languages);
