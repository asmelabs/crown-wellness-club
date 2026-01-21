import { LinkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const link = defineType({
	type: "object",

	name: "link",
	icon: LinkIcon,
	title: "Link",
	description: "A link to a page or external URL",

	fieldsets: [
		{ name: "destination", title: "Destination" },
		{ name: "content", title: "Content" },
		{ name: "appearance", title: "Appearance" },
	],
	fields: [
		// Destination
		defineField({
			name: "href",
			title: "URL",
			type: "url",
			fieldset: "destination",
		}),
		defineField({
			name: "openInNewTab",
			title: "Open in New Tab",
			type: "boolean",
			fieldset: "destination",
			initialValue: false,
		}),
		// Content
		defineField({
			name: "text",
			title: "Link Text",
			type: "localizedString",
			fieldset: "content",
		}),
		// Appearance
		defineField({
			name: "className",
			title: "Tailwind CSS classes",
			type: "string",
			fieldset: "appearance",
			description: "Add Tailwind CSS classes to the link",
		}),
	],
	preview: {
		select: {
			text: "text.en",
			href: "href",
		},
		prepare({ text, href }) {
			return {
				title: text ?? "No Text",
				subtitle: href ?? "No Href",
			};
		},
	},
});
