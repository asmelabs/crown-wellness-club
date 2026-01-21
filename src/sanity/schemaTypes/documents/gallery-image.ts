import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { urlFor } from "@/sanity/lib/image";

export const galleryImage = defineType({
	name: "galleryImage",
	title: "Gallery Image",
	type: "document",
	icon: ImageIcon,
	fields: [
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
				accept: "image/png, image/jpeg, image/jpg, image/webp",
			},
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title.en",
				maxLength: 96,
			},
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "reference",
			to: [{ type: "galleryImageCategory" }],
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "localizedString",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "localizedText",
		}),
		defineField({
			name: "isFeatured",
			title: "Is Featured",
			type: "boolean",
			initialValue: false,
		}),
	],
	preview: {
		select: {
			title: "title.en",
			category: "category.title.en",
			image: "image",
		},
		prepare({ title, category, image }) {
			const url = urlFor(image).width(100).height(100).fit("crop").url();

			return {
				title: title,
				subtitle: category,
				imageUrl: url,
			};
		},
	},
});
