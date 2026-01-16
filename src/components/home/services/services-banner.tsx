import { UsersIcon } from "lucide-react";
import { Banner } from "@/components/banner";
import { PaintedText } from "@/components/painted-text";

interface ServiceBannerProps {
  title?: string;
  description?: string;
}

export function ServiceBanner({ title, description }: ServiceBannerProps) {
  const bannerTitle = title ? (
    <PaintedText text={title} />
  ) : (
    <PaintedText text="Cultural Excellence & Privacy" />
  );
  const bannerDescription =
    description ??
    "Our women's facilities span 800m² of completely private space, designed with deep respect for Azerbaijan's cultural values. Featuring dedicated female trainers, private changing areas, and women-only class schedules, we ensure comfort and modesty without compromising luxury.";

  return (
    <Banner
      title={bannerTitle}
      description={bannerDescription}
      header={<UsersIcon className="size-20 text-primary" />}
    />
  );
}
