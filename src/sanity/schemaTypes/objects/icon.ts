// LUCIDE ICONS

import { defineType } from "sanity";
// import { IconComboboxInput } from "@/sanity/components/icon-combobox-input";
import { iconList } from "../helpers";

export const icon = defineType({
	name: "icon",
	type: "string",
	// components: {
	// 	input: IconComboboxInput,
	// },
	options: {
		list: iconList,
		layout: "dropdown",
	},
});
