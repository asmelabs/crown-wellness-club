import { languagesList } from "@/i18n/data";
import type { NavbarItemType } from "./types";

export const navbarItems = [
	{
		title: "Home",
		slug: "home",
		href: "/",
	},
	{
		title: "About Us",
		slug: "about",
		href: "/about",
	},
	{
		title: "Trainers",
		slug: "trainers",
		href: "/trainers",
	},
	{
		title: "Gallery",
		slug: "gallery",
		href: "/gallery",
	},
] as const satisfies NavbarItemType[];

export const navbarLanguages = languagesList;
