import { defineField, defineType } from "sanity";

export const card = defineType({
  name: "card",
  title: "Card",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/png, image/jpeg, image/jpg, image/webp",
      },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "icon",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "localizedString" }],
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "localizedString",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "localizedString",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localizedText",
    }),
    defineField({
      name: "primaryColor",
      title: "Primary Color",
      type: "simplerColor",
    }),
    defineField({
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "button" }],
    }),
  ],
});
