import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";

interface ContactHeaderProps {
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
}

export function ContactHeader({ title, subtitle }: ContactHeaderProps) {
	return (
		<div className="space-y-4 text-center">
			<h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
				<LocalizedText
					text={title || "Get In Touch"}
					enablePaintedText={true}
				/>
			</h1>
			<p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
				<LocalizedText text={subtitle} />
			</p>
		</div>
	);
}
