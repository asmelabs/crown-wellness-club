import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const hero = [
  defineField({
    name: "bgVideo",
    title: "Background Video",
    type: "file",
    options: {
      accept: "video/*",
    },
    group: "hero",
  }),
  defineField({
    name: "heroTitle",
    title: "Title",
    type: "localizedString",
    group: "hero",
  }),
  defineField({
    name: "heroSubtitle",
    title: "Subtitle",
    type: "localizedString",
    group: "hero",
  }),
];

const services = [
  defineField({
    name: "servicesTitle",
    title: "Title",
    type: "localizedString",
    group: "services",
  }),
  defineField({
    name: "servicesSubtitle",
    title: "Subtitle",
    type: "localizedString",
    group: "services",
  }),
  defineField({
    name: "servicesList",
    title: "Services List",
    type: "array",
    of: [{ type: "service" }],
    group: "services",
  }),
  defineField({
    name: "servicesBanner",
    title: "Banner",
    type: "banner",
    group: "services",
  }),
];

const scale = [
  defineField({
    name: "scaleTitle",
    title: "Title",
    type: "localizedString",
    group: "scale",
  }),
  defineField({
    name: "scaleSubtitle",
    title: "Subtitle",
    type: "localizedString",
    group: "scale",
  }),
  defineField({
    name: "scaleList",
    title: "List",
    type: "array",
    of: [{ type: "card" }],
    group: "scale",
  }),
  defineField({
    name: "scaleBanner",
    title: "Banner",
    type: "banner",
    group: "scale",
  }),
];
const innovation = [
  defineField({
    name: "innovationTitle",
    title: "Title",
    type: "localizedString",
    group: "innovation",
  }),
  defineField({
    name: "innovationSubtitle",
    title: "Subtitle",
    type: "localizedString",
    group: "innovation",
  }),
  defineField({
    name: "innovationStatsList",
    title: "Stats List",
    type: "array",
    of: [{ type: "card" }],
    group: "innovation",
  }),
  defineField({
    name: "innovationList",
    title: "List",
    type: "array",
    of: [{ type: "card" }],
    group: "innovation",
  }),
  defineField({
    name: "innovationBanner",
    title: "Banner",
    type: "banner",
    group: "innovation",
  }),
];
const community = [
  defineField({
    name: "communityTitle",
    title: "Title",
    type: "localizedString",
    group: "community",
  }),
  defineField({
    name: "communitySubtitle",
    title: "Subtitle",
    type: "localizedString",
    group: "community",
  }),
  defineField({
    name: "communityStatsList",
    title: "Stats List",
    type: "array",
    of: [{ type: "card" }],
    group: "community",
  }),
  defineField({
    name: "communityList",
    title: "List",
    type: "array",
    of: [{ type: "card" }],
    group: "community",
  }),
  defineField({
    name: "communityBanner",
    title: "Banner",
    type: "banner",
    group: "community",
  }),
];
const events = [
  defineField({
    name: "eventsTitle",
    title: "Title",
    type: "localizedString",
    group: "events",
  }),
  defineField({
    name: "eventsSubtitle",
    title: "Subtitle",
    type: "localizedString",
    group: "events",
  }),
  defineField({
    name: "eventsList",
    title: "List",
    type: "array",
    of: [{ type: "event" }],
    group: "events",
  }),
];
const memberships = [
  defineField({
    name: "membershipsAnnoc",
    title: "Announcement",
    type: "localizedString",
    group: "memberships",
  }),
  defineField({
    name: "membershipsTitle",
    title: "Title",
    type: "localizedString",
    group: "memberships",
  }),
  defineField({
    name: "membershipsSubtitle",
    title: "Subtitle",
    type: "localizedString",
    group: "memberships",
  }),
  defineField({
    name: "membershipsPlans",
    title: "Plans",
    type: "array",
    of: [{ type: "pricingPlan" }],
    group: "memberships",
  }),
  defineField({
    name: "membershipsBanner",
    title: "Banner",
    type: "banner",
    group: "memberships",
  }),
];

const contact = [
  defineField({
    name: "contactTitle",
    title: "Title",
    type: "localizedString",
    group: "contact",
  }),
  defineField({
    name: "contactSubtitle",
    title: "Subtitle",
    type: "localizedString",
    group: "contact",
  }),
];

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  icon: HomeIcon,
  type: "document",
  groups: [
    { name: "seo", title: "SEO" },

    { name: "hero", title: "Hero" },
    { name: "services", title: "Services" },
    { name: "scale", title: "Impressive Scale" },
    { name: "innovation", title: "Innovation & Technology" },
    { name: "community", title: "Community & Lifestyle" },
    { name: "events", title: "Events" },
    { name: "memberships", title: "Memberships" },
    { name: "contact", title: "Contact" },
  ],
  fields: [
    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),

    ...hero,
    ...services,
    ...scale,
    ...innovation,
    ...community,
    ...events,
    ...memberships,
    ...contact,
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
        subtitle: "/",
        media: HomeIcon,
      };
    },
  },
});
