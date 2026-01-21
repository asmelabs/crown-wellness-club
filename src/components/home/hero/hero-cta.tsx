"use client";

import { useTranslations } from "next-intl";
import { LogoIcon } from "@/components/brand/logo";
import { CTAButton } from "@/components/cta-button";

interface HeroCTAProps extends React.ComponentProps<typeof CTAButton> {}

export function HeroCTA({ ...props }: HeroCTAProps) {
	const t = useTranslations("home.hero.cta");

	const handleScroll = () => {
		window.location.href = "#memberships";
	};

	return (
		<CTAButton {...props} onClick={handleScroll}>
			<LogoIcon className="size-6" />
			<span className="mx-2">{t("text")}</span>
		</CTAButton>
	);
}
