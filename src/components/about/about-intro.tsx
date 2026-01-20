import type { Image } from "sanity";
import type { LocalizedValue } from "@/lib/utils";
import type { Banner, Icon, LocalizedRichText } from "@/sanity/types";

interface AboutIntroProps {
	title: LocalizedValue;
	description: LocalizedValue;
	banner: Banner | null;
	imageUrl: string | null;
	imageCaption: LocalizedValue;
	imageDescription: LocalizedValue;
	imageIcon: Icon | null;
}

export function AboutIntro({
	title,
	description,
	banner,
	imageUrl,
	imageCaption,
	imageDescription,
	imageIcon,
}: AboutIntroProps) {
	return <div />;
}
