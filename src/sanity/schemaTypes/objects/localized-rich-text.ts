import { defineArrayMember, defineField, defineType } from 'sanity';
import { languagesList } from '@/i18n/data';

const blockContent = defineArrayMember({
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'H1', value: 'h1' },
    { title: 'H2', value: 'h2' },
    { title: 'H3', value: 'h3' },
    { title: 'H4', value: 'h4' },
    { title: 'Blockquote', value: 'blockquote' },
  ],
  marks: {
    decorators: [
      { title: 'Bold', value: 'bold' },
      { title: 'Italic', value: 'italic' },
      { title: 'Underline', value: 'underline' },
      { title: 'Strike', value: 'strike-through' },
    ],
    annotations: [
      {
        name: 'link',
        type: 'link',
        title: 'Link',
      },
    ],
  },
});

export const localizedRichText = defineType({
  name: 'localizedRichText',
  title: 'Localized Content Editor',
  type: 'object',
  fields: languagesList.map((language) =>
    defineField({
      name: language.code,
      title: language.nativeName,
      type: 'array',
      of: [blockContent],
    })
  ),
});
