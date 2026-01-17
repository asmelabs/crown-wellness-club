import type { LocalizedValue } from "@/lib/utils";
import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { ScrollDownIndicator } from "./scroll-down-indicator";

interface HeroSectionProps {
  title?: LocalizedValue;
  subtitle?: LocalizedValue;
  bgVideoUrl?: string;
}

export function HeroSection({ title, subtitle, bgVideoUrl }: HeroSectionProps) {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Layer */}
      <HeroBackground bgVideoUrl={bgVideoUrl} />

      {/* Content Layer */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        <HeroContent title={title} subtitle={subtitle} />

        {/* Scroll Down Indicator */}
        <ScrollDownIndicator />
      </div>
    </section>
  );
}
