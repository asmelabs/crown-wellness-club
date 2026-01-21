import { CheckmarkIcon, CreditCardIcon } from "@sanity/icons";
import { XIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const pricingPlan = defineType({
	name: "pricingPlan",
	title: "Pricing Plan",
	icon: CreditCardIcon,
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
			validation: (r) => r.required(),
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
			name: "order",
			title: "Order",
			type: "number",
		}),
		defineField({
			name: "isPopular",
			title: "Is Popular",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "accent",
			title: "Accent Color",
			type: "simplerColor",
			initialValue: "#00B4D8",
		}),
		defineField({
			name: "pricing",
			title: "Pricing",
			type: "object",
			fields: [
				defineField({ name: "perMonth", title: "Per Month", type: "number" }),
				defineField({ name: "perYear", title: "Per Year", type: "number" }),
			],
		}),
		defineField({
			name: "features",
			title: "Features",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "feature", title: "Feature", type: "localizedString" },
						{ name: "icon", title: "Icon", type: "string" },
						{
							name: "isAvailable",
							title: "Is Available",
							type: "boolean",
							initialValue: true,
						},
					],
					preview: {
						select: {
							feature: "feature.en",
							isAvailable: "isAvailable",
						},
						prepare({ feature, isAvailable }) {
							return {
								title: feature,
								media: isAvailable ? CheckmarkIcon : XIcon,
							};
						},
					},
				},
			],
		}),
		defineField({
			name: "action",
			title: "Action",
			type: "button",
		}),
	],
	preview: {
		select: {
			title: "name.en",
			subtitle: "subtitle.en",
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle: subtitle ?? "No Subtitle",
				media: CreditCardIcon,
			};
		},
	},
});
