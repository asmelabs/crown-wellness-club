import { CogIcon, EarthGlobeIcon, EnvelopeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Settings",
  icon: CogIcon,
  type: "document",
  options: {
    singleton: true,
  },
  groups: [
    { name: "general", title: "General", default: true },
    { name: "contact", title: "Contact Information", icon: EnvelopeIcon },
    { name: "social", title: "Social Media", icon: EarthGlobeIcon },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "general",
    }),

    // contact
    defineField({
      name: "address",
      title: "Address",
      type: "localizedText",
      group: "contact",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "workingHours",
      title: "Working Hours",
      type: "array",
      group: "contact",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "days",
              title: "Days",
              type: "localizedString",
              description: "e.g., 'Monday - Friday'",
            },
            {
              name: "hours",
              title: "Hours",
              type: "string",
              description: "e.g., '06:00 - 23:00'",
            },
          ],
          preview: {
            select: {
              days: "days.en",
              hours: "hours",
            },
            prepare({ days, hours }) {
              return {
                title: days,
                subtitle: hours,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "mapEmbed",
      title: "Google Maps Embed URL",
      type: "url",
      group: "contact",
      description: "Embed URL from Google Maps",
    }),

    // social
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      group: "social",
      fields: [
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
        { name: "tiktok", title: "TikTok", type: "url" },
        { name: "telegram", title: "Telegram", type: "url" },
        { name: "whatsapp", title: "WhatsApp", type: "url" },
      ],
    }),

    // seo
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "seo",
      group: "seo",
      description:
        "Default SEO settings used when pages don't specify their own",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
        media: CogIcon,
      };
    },
  },
});
