import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type LocalizedValue =
	| {
			_type: "localizedString" | "localizedText" | "localizedRichText";
			en?: string;
	  }
	| undefined
	| string
	| undefined
	| null;

export function resolveLocalizedValue(value?: LocalizedValue, locale = "en") {
	if (!value) return "";
	if (typeof value === "string") return value;

	const { en } = value ?? {};
	const locales = { en };
	const localizedValue = locales[locale as keyof typeof locales] ?? en ?? "";

	return localizedValue;
}
