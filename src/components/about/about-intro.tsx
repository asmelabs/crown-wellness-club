import type { Image } from "sanity";
import type { LocalizedValue } from "@/lib/utils";
import type { Banner, Icon } from "@/sanity/types";

interface AboutIntroProps {
	title: LocalizedValue;
	description: LocalizedValue;
	banner: Banner | null;
	image: Image | null;
	imageCaption: LocalizedValue;
	imageDescription: LocalizedValue;
	imageIcon: Icon | null;
}

export function AboutIntro({
	title,
	description,
	banner,
	image,
	imageCaption,
	imageDescription,
	imageIcon,
}: AboutIntroProps) {
	return <div />;
}
