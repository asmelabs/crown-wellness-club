export function replaceDynamicLocaleParam<const Q extends string>(
	query: Q,
	locale: string,
) {
	const placeholderPattern = /\["\$locale"\]/g;
	const replacement = `["${locale}"]`;
	return query.replace(placeholderPattern, replacement);
}
