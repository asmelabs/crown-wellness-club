import { CalendarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const event = defineType({
	name: "event",
	title: "Event",
	type: "document",
	icon: CalendarIcon,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "localizedString",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle",
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
			validation: (r) => r.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "localizedText",
		}),
		defineField({
			name: "date",
			title: "Event Date",
			type: "datetime",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "endDate",
			title: "End Date",
			type: "datetime",
			description: "Optional, for multi-day events",
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "localizedString",
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
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "localizedString" }],
		}),
	],
	preview: {
		select: {
			title: "title.en",
			date: "date",
		},
		prepare({ title, date }) {
			return {
				title: title,
				subtitle: date
					? new Date(date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})
					: "",
			};
		},
	},
});
