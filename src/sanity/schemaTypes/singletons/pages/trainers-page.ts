import { UsersIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const trainersPage = defineType({
	name: "trainersPage",
	title: "Trainers Page",
	type: "document",
	icon: UsersIcon,
	options: {
		singleton: true,
	},
	groups: [
		{ name: "seo", title: "SEO" },
		{ name: "header", title: "Header" },
		{ name: "specialities", title: "Specialities" },
		{ name: "trainers", title: "Trainers" },
	],
	fields: [
		defineField({
			name: "seo",
			title: "SEO",
			type: "seo",
			group: "seo",
		}),
		// HEADER
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
			name: "stats",
			title: "Stats",
			type: "array",
			of: [{ type: "statCard" }],
			group: "header",
		}),
		// SPECIALITIES
		defineField({
			name: "specialitiesHeaderIcon",
			title: "Header Icon",
			type: "icon",
			group: "specialities",
		}),
		defineField({
			name: "specialitiesTitle",
			title: "Title",
			type: "localizedString",
			group: "specialities",
		}),
		defineField({
			name: "specialitiesSubtitle",
			title: "Subtitle",
			type: "localizedString",
			group: "specialities",
		}),
		// TRAINERS
		defineField({
			name: "trainersHeaderIcon",
			title: "Header Icon",
			type: "icon",
			group: "trainers",
		}),
		defineField({
			name: "trainersTitle",
			title: "Title",
			type: "localizedString",
			group: "trainers",
		}),
		defineField({
			name: "trainersSubtitle",
			title: "Subtitle",
			type: "localizedString",
			group: "trainers",
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Trainers Page",
				subtitle: "/trainers",
				media: UsersIcon,
			};
		},
	},
});
