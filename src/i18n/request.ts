import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

async function getMessages(locale: string) {
	try {
		return (await import(`../../messages/${locale}.json`)).default;
	} catch (error) {
		console.error(`Error loading messages for locale ${locale}:`, error);

		return {};
	}
}

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale;
	const locale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale;
	const messages = await getMessages(locale);

	return {
		locale,
		messages,
	};
});
