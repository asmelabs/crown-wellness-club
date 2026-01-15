import { PresentationIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  icon: PresentationIcon,
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{ type: 'card' }],
    }),
    defineField({
      name: 'action',
      title: 'Action',
      type: 'button',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'localizedString' }],
    }),
    defineField({
      name: 'featuresTitle',
      title: 'Features Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'localizedString' }],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'subtitle.en',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle, media: PresentationIcon };
    },
  },
});
