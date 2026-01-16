import { Banner } from "@/components/banner";
import { CTAButton } from "@/components/cta-button";

interface EventBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function EventBanner({
  title,
  description,
  buttonText,
}: EventBannerProps) {
  const bannerTitle = title ?? "Ready to Join Our Community?";
  const bannerDescription =
    description ??
    "Become part of Azerbaijan's most welcoming wellness community. Connect, grow, and achieve your goals together with us.";
  const ctaLabel = buttonText ?? "Join Community";

  return (
    <Banner
      title={bannerTitle}
      description={bannerDescription}
      footer={<CTAButton>{ctaLabel}</CTAButton>}
      titleClassName="text-4xl md:text-5xl"
      descriptionClassName="text-muted-foreground max-w-3xl"
      cardClassName="mt-12"
    />
  );
}
