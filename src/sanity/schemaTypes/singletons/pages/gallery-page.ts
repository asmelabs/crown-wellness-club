import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const galleryPage = defineType({
	name: "galleryPage",
	title: "Gallery Page",
	type: "document",
	icon: ImageIcon,
	options: {
		singleton: true,
	},
	groups: [
		{ name: "seo", title: "SEO" },
		{ name: "header", title: "Header" },
		{ name: "categories", title: "Categories" },
		{ name: "images", title: "Images" },
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
		// CATEGORIES
		defineField({
			name: "categoriesHeaderIcon",
			title: "Header Icon",
			type: "icon",
			group: "categories",
		}),
		defineField({
			name: "categoriesTitle",
			title: "Title",
			type: "localizedString",
			group: "categories",
		}),
		defineField({
			name: "categoriesSubtitle",
			title: "Subtitle",
			type: "localizedString",
			group: "categories",
		}),
		// IMAGES
		defineField({
			name: "imagesTitle",
			title: "Title",
			type: "localizedString",
			group: "images",
		}),
		defineField({
			name: "imagesSubtitle",
			title: "Subtitle",
			type: "localizedString",
			group: "images",
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Gallery Page",
				subtitle: "/gallery",
				media: ImageIcon,
			};
		},
	},
});
