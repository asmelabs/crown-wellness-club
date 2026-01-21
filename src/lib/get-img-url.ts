import type { Image } from "sanity";
import { urlFor } from "@/sanity/lib/image";

export function getImgUrl(img: Image | null | undefined) {
	if (!img || !img.asset || !img.asset._ref) return null;

	return urlFor(img.asset._ref).url();
}
