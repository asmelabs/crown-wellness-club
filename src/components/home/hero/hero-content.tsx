import { Logo } from "@/components/brand/logo";
import { PaintedText } from "@/components/painted-text";
import { HeroCTA } from "./hero-cta";

interface HeroContentProps {
  title: string;
  subtitle: string;
}

export function HeroContent({ title, subtitle }: HeroContentProps) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      {/* Eyebrow Text */}
      <PaintedText
        className="text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-6 font-medium"
        text={title}
        paintCount={2}
      />

      <Logo className="size-72 sm:size-80 md:size-96 text-white mx-auto" />

      {/* Subtitle */}
      <p className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        {subtitle}
      </p>

      {/* CTA Buttons */}
      <HeroCTA />
    </div>
  );
}
