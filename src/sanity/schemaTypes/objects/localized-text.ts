import { defineField, defineType } from "sanity";
import { languagesList } from "@/i18n/data";

export const localizedText = defineType({
	name: "localizedText",
	title: "Localized Text",
	type: "object",
	description:
		"A text area that can change via the language of the application",
	fields: languagesList.map((language) =>
		defineField({
			name: language.code,
			title: language.nativeName,
			type: "text",
			placeholder: `Enter the text in ${language.englishName}`,
			rows: 3,
		}),
	),
});
