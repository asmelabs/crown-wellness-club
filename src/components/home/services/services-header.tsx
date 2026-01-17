import { StarIcon } from "lucide-react";
import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";

interface ServicesHeaderProps {
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
}

export function ServicesHeader({ title, subtitle }: ServicesHeaderProps) {
	return (
		<div className="space-y-5 text-center">
			<div className="flex items-center justify-center">
				<StarIcon className="size-12 text-primary" />
			</div>

			<h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
				<LocalizedText text={title} enablePaintedText={true} />
			</h1>

			<LocalizedText
				text={subtitle}
				className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg"
			/>
		</div>
	);
}
