import { defineField, defineType } from "sanity";

function checkHref(href: string, baseUrl: string): URL | null {
	try {
		if (href.startsWith("http")) {
			return new URL(href);
		}

		const resolvedHref = href.startsWith("/") ? href.slice(1) : href;
		const resolvedBaseUrl = baseUrl.endsWith("/")
			? baseUrl.slice(0, -1)
			: baseUrl;
		return new URL(`${resolvedBaseUrl}/${resolvedHref}`);
	} catch (error) {
		console.error(error);
		return null;
	}
}

export const button = defineType({
	name: "button",
	title: "Button",
	type: "object",
	fields: [
		defineField({
			name: "text",
			title: "Text",
			type: "localizedString",
		}),
		defineField({
			name: "href",
			title: "URL",
			description:
				"To make the button link to an external URL, or internale page section or other pages.",
			type: "string",
			validation: (r) =>
				r.custom((value) => {
					if (!value) return true; // it is optional
					const url = checkHref(
						value,
						process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
					);

					if (url) return true;
					return "Invalid URL or pathname";
				}),
		}),
		defineField({
			name: "icon",
			title: "Icon",
			type: "icon",
		}),
		defineField({
			name: "iconPosition",
			title: "Icon Position",
			type: "string",
			options: {
				list: [
					{ title: "Left", value: "left" },
					{ title: "Right", value: "right" },
				],
			},
			initialValue: "left",
		}),
		defineField({
			name: "variant",
			title: "Variant",
			type: "string",
			options: {
				list: [
					{ title: "Primary", value: "default" },
					{ title: "Secondary", value: "secondary" },
					{ title: "Outline", value: "outline" },
					{ title: "Ghost", value: "ghost" },
					{ title: "Link", value: "link" },
					{ title: "Destructive", value: "destructive" },
					{ title: "Destructive Outline", value: "destructive-outline" },
				],
			},
			initialValue: "default",
		}),
		defineField({
			name: "className",
			title: "Tailwind CSS classes",
			type: "string",
			description: "Add Tailwind CSS classes to the button",
		}),
	],
});
