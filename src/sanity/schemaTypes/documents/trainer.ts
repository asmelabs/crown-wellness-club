import { defineField, defineType } from "sanity";

/**
 * FIELDS:
 *
 * - name+
 * - slug+
 * - gender+ ("male" | "female")
 * - experience+ (number) // in years
 * - workingHours+ (array of objects) // days and hours
 * - tags (array of localizedString)
 * - bio+ (localizedText)
 * - title+ (localizedString)
 * - image+ (image)
 * - languages (array of localizedString)
 * - socialLinks (object) // instagram, facebook, youtube, tiktok, telegram, whatsapp
 * - primaryColor (simplerColor)
 * - seo
 */

export const trainer = defineType({
	name: "trainer",
	title: "Trainer",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "bio",
			title: "Bio",
			type: "localizedText",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "localizedString",
			validation: (Rule) => Rule.required(),
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
			name: "gender",
			title: "Gender",
			type: "string",
			options: {
				list: ["male", "female"],
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "localizedString" }],
			initialValue: [],
		}),
		defineField({
			name: "languages",
			title: "Languages",
			type: "array",
			of: [{ type: "localizedString" }],
			validation: (Rule) => Rule.required().min(1).max(10),
		}),
		defineField({
			name: "experience",
			title: "Experience",
			type: "number",
			validation: (Rule) => Rule.required().min(1).max(100),
		}),
		defineField({
			name: "workingHours",
			title: "Working Hours",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "days",
							title: "Days",
							type: "localizedString",
							description: "e.g., 'Monday - Friday'",
						},
						{
							name: "hours",
							title: "Hours",
							type: "string",
							description: "e.g., '06:00 - 23:00'",
						},
					],
					preview: {
						select: {
							days: "days.en",
							hours: "hours",
						},
						prepare({ days, hours }) {
							return {
								title: days,
								subtitle: hours,
							};
						},
					},
				},
			],
		}),
		defineField({
			name: "socialLinks",
			title: "Social Links",
			type: "object",
			fields: [
				{ name: "instagram", title: "Instagram", type: "url" },
				{ name: "facebook", title: "Facebook", type: "url" },
				{ name: "youtube", title: "YouTube", type: "url" },
				{ name: "tiktok", title: "TikTok", type: "url" },
				{ name: "telegram", title: "Telegram", type: "url" },
				{ name: "whatsapp", title: "WhatsApp", type: "url" },
			],
		}),
		defineField({
			name: "primaryColor",
			title: "Primary Color",
			type: "simplerColor",
		}),
		defineField({
			name: "defaultSeo",
			title: "Default SEO",
			type: "seo",
			description:
				"Default SEO settings used when pages don't specify their own",
		}),
	],
});
