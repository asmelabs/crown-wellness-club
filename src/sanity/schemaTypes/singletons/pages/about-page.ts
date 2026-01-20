import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const aboutPage = defineType({
	name: "aboutPage",
	title: "About Page",
	type: "document",
	icon: BookIcon,
	options: {
		singleton: true,
	},
	groups: [],
	fields: [],
});
