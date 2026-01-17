import { getTranslations } from "next-intl/server";
import { LogoIcon } from "@/components/brand/logo";
import { CTAButton } from "@/components/cta-button";
import { Link } from "@/i18n/navigation";

interface HeroCTAProps extends React.ComponentProps<typeof CTAButton> {}

export async function HeroCTA({ ...props }: HeroCTAProps) {
	const t = await getTranslations("home.hero.cta");

	return (
		<Link href="#memberships">
			<CTAButton {...props}>
				<LogoIcon className="size-6" />
				<span className="mx-2">{t("text")}</span>
			</CTAButton>
		</Link>
	);
}
