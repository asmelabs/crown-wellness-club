import { Banner } from "@/components/banner";
import { PaintedText } from "@/components/painted-text";

interface InnovationBannerProps {
  title?: string;
  description?: string;
}

export function InnovationBanner({
  title,
  description,
}: InnovationBannerProps) {
  const bannerTitle = title ? (
    <PaintedText text={title} paintCount="45%" />
  ) : (
    <PaintedText text="Ready to Experience the Future?" paintCount="45%" />
  );

  return (
    <Banner
      cardClassName="mt-12"
      title={bannerTitle}
      description={description}
      titleClassName="text-4xl md:text-5xl -mt-5"
    />
  );
}
