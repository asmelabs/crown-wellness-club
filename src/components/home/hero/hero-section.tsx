import { HeroBackground } from './hero-background';
import { HeroContent } from './hero-content';
import { ScrollDownIndicator } from './scroll-down-indicator';

export function HeroSection() {
  return (
    <section id='hero' className='relative h-screen w-full overflow-hidden'>
      {/* Background Layer */}
      <HeroBackground />

      {/* Content Layer */}
      <div className='relative z-20 h-full flex flex-col items-center justify-center px-6'>
        <HeroContent />

        {/* Scroll Down Indicator */}
        <ScrollDownIndicator />
      </div>
    </section>
  );
}
