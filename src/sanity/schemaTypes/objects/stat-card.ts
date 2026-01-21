import { ChartNoAxesCombined } from "lucide-react";
import { defineField, defineType } from "sanity";

export const statCard = defineType({
	name: "statCard",
	title: "Statistic Card",
	type: "object",
	description: "It is being used to display a statistical data on a card.",
	icon: ChartNoAxesCombined,
	fields: [
		defineField({
			name: "icon",
			title: "Icon",
			type: "icon",
			description: "The icon to display on the card.",
		}),
		defineField({
			name: "value",
			title: "Value",
			type: "string",
			description: "The value to display on the card.",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "valueSuffix",
			title: "Value Suffix",
			type: "localizedString",
			description:
				'The suffix to display after the value. E.g. "years", "clients", "+", "%" etc.',
		}),
		defineField({
			name: "valuePrefix",
			title: "Value Prefix",
			type: "localizedString",
			description:
				'The prefix to display before the value. E.g. "$", "+", etc.',
		}),
		defineField({
			name: "label",
			title: "Label",
			type: "localizedString",
			description: "The label to display on the card.",
		}),
	],
	preview: {
		select: {
			value: "value",
			valueSuffix: "valueSuffix.en",
			valuePrefix: "valuePrefix.en",
			label: "label.en",
		},
		prepare({ value, valueSuffix, valuePrefix, label }) {
			const valueText = !value
				? "No Value"
				: `${valuePrefix ? `${valuePrefix} ` : ""}${value}${valueSuffix ? ` ${valueSuffix}` : ""}`;
			return {
				title: valueText,
				subtitle: label ?? "No Label",
				media: ChartNoAxesCombined,
			};
		},
	},
});
