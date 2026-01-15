import { defineField, defineType } from 'sanity';

export const pageSection = defineType({
  name: 'pageSection',
  title: 'Page Section',
  type: 'object',
  fieldsets: [{ name: 'content', title: 'Content' }],
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      fieldset: 'content',
      name: 'title',
      title: 'Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedText',
    }),
  ],
});
