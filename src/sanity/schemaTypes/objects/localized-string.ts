import { defineField, defineType } from 'sanity';
import { languagesList } from '@/i18n/data';

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'object',
  description: 'A simple text field that can change via the language of the application',
  fields: languagesList.map((language) =>
    defineField({
      name: language.code,
      title: language.nativeName,
      type: 'string',
      placeholder: `Enter the text in ${language.englishName}`,
    })
  ),
});
