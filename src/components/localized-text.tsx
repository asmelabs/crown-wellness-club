import { type LocalizedValue, resolveLocalizedValue } from "@/lib/utils";
import { PaintedText } from "./painted-text";

interface LocalizedTextProps
	extends Omit<React.ComponentProps<typeof PaintedText>, "text"> {
	text?: LocalizedValue;
	locale?: string;
	className?: string;
	enablePaintedText?: boolean;
}

export function LocalizedText({
	text,
	locale = "en",
	className,
	enablePaintedText = false,
	...props
}: LocalizedTextProps) {
	if (!text) return null;

	const resolvedText = resolveLocalizedValue(text, locale);

	if (enablePaintedText) {
		return <PaintedText text={resolvedText} className={className} {...props} />;
	}

	return <span className={className}>{resolvedText}</span>;
}
