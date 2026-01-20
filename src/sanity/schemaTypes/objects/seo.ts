import { defineField, defineType } from "sanity";

export const seo = defineType({
	name: "seo",
	title: "SEO",
	description: "SEO information for the page",
	type: "object",
	fieldsets: [{ name: "og", title: "Open Graph" }],
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localizedString",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "localizedText",
		}),
		defineField({
			fieldset: "og",
			name: "ogTitle",
			title: "Open Graph Title",
			type: "localizedString",
		}),
		defineField({
			fieldset: "og",
			name: "ogDescription",
			title: "Open Graph Description",
			type: "localizedText",
		}),
		defineField({
			fieldset: "og",
			name: "ogImage",
			title: "Open Graph Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
	],
});
