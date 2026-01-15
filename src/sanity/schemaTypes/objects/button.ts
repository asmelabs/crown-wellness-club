import { defineField, defineType } from 'sanity';

export const button = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'localizedString',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'iconPosition',
      title: 'Icon Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
          { title: 'Ghost', value: 'ghost' },
          { title: 'Link', value: 'link' },
          { title: 'Destructive', value: 'destructive' },
          { title: 'Destructive Outline', value: 'destructive-outline' },
        ],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'className',
      title: 'Tailwind CSS classes',
      type: 'string',
      description: 'Add Tailwind CSS classes to the button',
    }),
  ],
});
