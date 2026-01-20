import { defineField, defineType } from "sanity";

export const trainerSpeciality = defineType({
	name: "trainerSpeciality",
	title: "Trainer Speciality",
	type: "document",
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
});
