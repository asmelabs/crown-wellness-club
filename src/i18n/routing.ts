import { defineRouting } from 'next-intl/routing';
import { defaultLocale, locales } from './data';

export const routing = defineRouting({
  locales,
  defaultLocale,
});
