import { defineField, defineType } from "sanity";

export const banner = defineType({
	name: "banner",
	title: "Banner",
	type: "object",
	fields: [
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
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
			name: "buttons",
			title: "Buttons",
			type: "array",
			of: [{ type: "button" }],
		}),
	],
});
