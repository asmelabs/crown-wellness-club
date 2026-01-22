import { urlFor } from "@/sanity/lib/image";

export function getImgUrl(
	img: { asset?: { _ref: string | null } | null } | null | undefined,
) {
	if (!img || !img.asset || !img.asset._ref) return null;

	return urlFor(img.asset._ref).url();
}
