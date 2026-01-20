import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
	name: "aboutPage",
	title: "About Page",
	type: "document",
	icon: BookIcon,
	options: {
		singleton: true,
	},
	groups: [
		{ name: "seo", title: "SEO" },
		{ name: "header", title: "Header" },
		{ name: "intro", title: "Intro" },
		{ name: "stats", title: "Stats" },
		{ name: "differences", title: "Differences" },
		{ name: "values", title: "Values" },
		{ name: "vision", title: "Vision" },
	],
	fields: [
		defineField({
			name: "seo",
			title: "SEO",
			type: "seo",
			group: "seo",
		}),
		/** HEADER */
		defineField({
			name: "pageHeaderIcon",
			title: "Page Header Icon",
			type: "icon",
			group: "header",
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "localizedString",
			group: "header",
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle",
			type: "localizedString",
			group: "header",
		}),
		defineField({
			name: "aboutAnnoc",
			title: "Announcement",
			type: "localizedString",
			group: "header",
		}),
		/** INTRO */
		defineField({
			name: "introTitle",
			title: "Introduction title",
			type: "localizedString",
			group: "intro",
		}),
		defineField({
			name: "introDesc",
			title: "Introduction description",
			type: "localizedText",
			group: "intro",
		}),
		defineField({
			name: "introBanner",
			title: "Introduction banner",
			type: "banner",
			group: "intro",
		}),
		defineField({
			name: "introImage",
			title: "Introduction image",
			type: "image",
			options: {
				hotspot: true,
			},
			group: "intro",
		}),
		defineField({
			name: "introImageCaption",
			title: "Introduction image caption",
			type: "localizedString",
			group: "intro",
		}),
		defineField({
			name: "introImageDescription",
			title: "Introduction image description",
			type: "localizedString",
			group: "intro",
		}),
		defineField({
			name: "introImageIcon",
			title: "Introduction image icon",
			type: "icon",
			group: "intro",
		}),
		/** STATS */
		defineField({
			name: "statsTitle",
			title: "Stats title",
			type: "localizedString",
			group: "stats",
		}),
		defineField({
			name: "statsDescription",
			title: "Stats description",
			type: "localizedString",
			group: "stats",
		}),
		defineField({
			name: "statsIcon",
			title: "Stats icon",
			type: "icon",
			group: "stats",
		}),
		defineField({
			name: "statsList",
			title: "Stats list",
			type: "array",
			of: [{ type: "statCard" }],
			group: "stats",
		}),
		/** DIFFERENCES */
		defineField({
			name: "differencesTitle",
			title: "Differences title",
			type: "localizedString",
			group: "differences",
		}),
		defineField({
			name: "differencesDescription",
			title: "Differences description",
			type: "localizedString",
			group: "differences",
		}),
		defineField({
			name: "differencesIcon",
			title: "Differences icon",
			type: "icon",
			group: "differences",
		}),
		defineField({
			name: "differencesList",
			title: "Differences list",
			type: "array",
			of: [{ type: "card" }],
			group: "differences",
		}),
		/** VALUES */
		defineField({
			name: "valuesTitle",
			title: "Values title",
			type: "localizedString",
			group: "values",
		}),
		defineField({
			name: "valuesDescription",
			title: "Values description",
			type: "localizedString",
			group: "values",
		}),
		defineField({
			name: "valuesList",
			title: "Values list",
			type: "array",
			of: [{ type: "card" }],
			group: "values",
		}),
		/** VISION */
		defineField({
			name: "visionTitle",
			title: "Vision title",
			type: "localizedString",
			group: "vision",
		}),
		defineField({
			name: "visionDescription",
			title: "Vision description",
			type: "localizedString",
			group: "vision",
		}),
		defineField({
			name: "visionList",
			title: "Vision list",
			type: "array",
			of: [{ type: "card" }],
			group: "vision",
		}),
	],
});
