import { PresentationIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const service = defineType({
	name: "service",
	icon: PresentationIcon,
	title: "Service",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localizedString",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title.en",
				maxLength: 96,
			},
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
			name: "icon",
			title: "Icon",
			type: "icon",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "stats",
			title: "Stats",
			type: "array",
			of: [{ type: "card" }],
		}),
		defineField({
			name: "tag",
			title: "Tag",
			description:
				"Tag is being used to display a badge on the service's image's bottom right corner. E.g. 'Fitness', 'New', 'Popular' etc.",
			type: "localizedString",
		}),
		defineField({
			name: "featuresTitle",
			title: "Features Title",
			type: "localizedString",
		}),
		defineField({
			name: "features",
			title: "Features",
			type: "array",
			of: [{ type: "localizedString" }],
		}),
	],
	preview: {
		select: {
			title: "title.en",
			subtitle: "subtitle.en",
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle: subtitle ?? "No Subtitle",
				media: PresentationIcon,
			};
		},
	},
});
