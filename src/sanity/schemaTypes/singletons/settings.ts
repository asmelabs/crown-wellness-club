import { CogIcon, EarthGlobeIcon, EnvelopeIcon } from "@sanity/icons";
import { LayoutGridIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const settings = defineType({
	name: "settings",
	title: "Settings",
	icon: CogIcon,
	type: "document",
	options: {
		singleton: true,
	},
	groups: [
		{ name: "general", title: "General", default: true },
		{ name: "contact", title: "Contact Information", icon: EnvelopeIcon },
		{ name: "social", title: "Social Media", icon: EarthGlobeIcon },
		{
			name: "pageRendering",
			title: "Dynamic Page Rendering",
			icon: LayoutGridIcon,
		},
		{ name: "seo", title: "SEO" },
	],
	fields: [
		defineField({
			name: "siteName",
			title: "Site Name",
			type: "string",
			group: "general",
		}),
		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
			group: "general",
		}),

		// contact
		defineField({
			name: "address",
			title: "Address",
			type: "localizedText",
			group: "contact",
		}),
		defineField({
			name: "phone",
			title: "Phone Number",
			type: "string",
			group: "contact",
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			group: "contact",
		}),
		defineField({
			name: "workingHours",
			title: "Working Hours",
			type: "array",
			group: "contact",
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
			name: "mapEmbed",
			title: "Google Maps Embed URL",
			type: "url",
			group: "contact",
			description: "Embed URL from Google Maps",
		}),

		// social
		defineField({
			name: "socialLinks",
			title: "Social Links",
			type: "object",
			group: "social",
			fields: [
				{ name: "instagram", title: "Instagram", type: "url" },
				{ name: "facebook", title: "Facebook", type: "url" },
				{ name: "youtube", title: "YouTube", type: "url" },
				{ name: "tiktok", title: "TikTok", type: "url" },
				{ name: "telegram", title: "Telegram", type: "url" },
				{ name: "whatsapp", title: "WhatsApp", type: "url" },
			],
		}),

		// seo
		defineField({
			name: "defaultSeo",
			title: "Default SEO",
			type: "seo",
			group: "seo",
			description:
				"Default SEO settings used when pages don't specify their own",
		}),

		// page rendering
		defineField({
			name: "pageRendering",
			title: "List of pages to render",
			type: "array",
			group: "pageRendering",
			description:
				"List of the pages that will be included on the website. For example, if you disable the gallery page, it will both be removed from navbar, and the page will show 404 not found error.",
			of: [{ type: "string" }],
			options: {
				list: [
					{ title: "Home Page", value: "home" },
					{ title: "Gallery Page", value: "gallery" },
					{ title: "Trainers Page", value: "trainers" },
					{ title: "About Page", value: "about" },
				],
				layout: "grid",
			},
			initialValue: ["home", "gallery", "trainers", "about"],
		}),
	],
	preview: {
		prepare() {
			return {
				title: "Site Settings",
				media: CogIcon,
			};
		},
	},
});
