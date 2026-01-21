import { StarIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const trainerSpeciality = defineType({
	name: "trainerSpeciality",
	title: "Trainer Speciality",
	type: "document",
	icon: StarIcon,
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "localizedString",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name.en",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "localizedString",
		}),
		defineField({
			name: "icon",
			title: "Icon",
			type: "icon",
		}),
	],
	preview: {
		select: {
			name: "name.en",
			description: "description.en",
		},
		prepare({ name, description }) {
			return {
				title: name,
				subtitle: description ?? "No Description",
				media: StarIcon,
			};
		},
	},
});
