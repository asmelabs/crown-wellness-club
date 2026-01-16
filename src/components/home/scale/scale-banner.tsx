import { Banner } from "@/components/banner";
import { LogoIcon } from "@/components/brand/logo";
import { PaintedText } from "@/components/painted-text";

interface ScaleBannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function ScaleBanner({
  title,
  subtitle,
  description,
}: ScaleBannerProps) {
  const bannerTitle = title ? (
    <PaintedText text={title} paintCount={1} />
  ) : (
    <PaintedText
      text="First interactive fitness in Azerbaijan"
      paintCount={1}
    />
  );
  const bannerSubtitle = subtitle ?? "Luxury Wellness Destination";
  const bannerDescription =
    description ??
    "Pioneering the future of premium fitness and wellness in Baku with unprecedented luxury, cultural sensitivity, and world-class amenities. Setting new standards that honor both international excellence and local values.";

  return (
    <Banner
      header={<LogoIcon className="size-20 text-primary" />}
      title={bannerTitle}
      subtitle={bannerSubtitle}
      description={bannerDescription}
      titleClassName="text-4xl md:text-5xl"
      subtitleClassName="text-primary text-sm uppercase tracking-[0.3em]"
      descriptionClassName="text-muted-foreground max-w-3xl"
    />
  );
}
