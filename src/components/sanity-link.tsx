import { Link } from "@/i18n/navigation";
import { resolveLocalizedValue } from "@/lib/utils";
import type { Link as SanityLinkType } from "@/sanity/types";

interface SanityLinkProps {
	link?: SanityLinkType | null;
	children?: React.ReactNode;
}

export function SanityLink({ link, children }: SanityLinkProps) {
	if (!link || !link.href) return null;

	const { className, href, openInNewTab = false } = link;
	const text = link.text ? resolveLocalizedValue(link.text) : href;

	return (
		<Link
			href={href}
			target={openInNewTab ? "_blank" : "_self"}
			rel={openInNewTab ? "noreferrer" : undefined}
			className={className}
		>
			{children ?? text}
		</Link>
	);
}
