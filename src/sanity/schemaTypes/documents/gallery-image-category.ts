import { ImagesIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const galleryImageCategory = defineType({
	name: "galleryImageCategory",
	title: "Gallery Image Category",
	type: "document",
	icon: ImagesIcon,
	fields: [
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
			name: "icon",
			title: "Icon",
			type: "icon",
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
	],
	preview: {
		select: {
			title: "title.en",
			subtitle: "subtitle.en",
		},
		prepare({ title, subtitle }) {
			return {
				title: title,
				subtitle: subtitle ? subtitle : "No Subtitle",
				media: ImagesIcon,
			};
		},
	},
});
