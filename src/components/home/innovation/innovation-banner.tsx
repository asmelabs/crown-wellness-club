import { Banner } from "@/components/banner";
import type { LocalizedValue } from "@/lib/utils";

interface InnovationBannerProps {
  title?: LocalizedValue;
  description?: LocalizedValue;
}

export function InnovationBanner({
  title,
  description,
}: InnovationBannerProps) {
  return (
    <Banner
      cardClassName="mt-12"
      title={title}
      titleProps={{ enablePaintedText: true, paintCount: "45%" }}
      description={description}
      descriptionProps={{ enablePaintedText: true, paintCount: "45%" }}
      titleClassName="text-4xl md:text-5xl -mt-5"
    />
  );
}
