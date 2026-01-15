import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Logo, LogoIcon } from '@/components/brand/logo';
import { CTAButton } from '@/components/cta-button';
import { Button } from '@/components/ui/button';
import { HomePageHeroBackground } from './hero-background';

export function HomePageHero() {
  return (
    <section className='relative h-screen w-full overflow-hidden'>
      {/* Background Layer */}
      <HomePageHeroBackground />

      {/* Content Layer */}
      <div className='relative z-20 h-full flex flex-col items-center justify-center px-6'>
        <div className='text-center max-w-4xl mx-auto'>
          {/* Eyebrow Text */}
          <p className='text-sm md:text-base tracking-[0.3em] uppercase text-white/70 mb-6 font-medium'>
            Premium Fitness <span className='text-primary'>& Wellness</span>
          </p>

          <Logo className='size-72 sm:size-80 md:size-96 text-white mx-auto' />

          {/* Subtitle */}
          <p className='text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light'>
            Elevate your lifestyle with world-class facilities, expert trainers, and a community dedicated to your
            transformation.
          </p>

          {/* CTA Buttons */}
          <CTAButton render={<Link href='#memberships' />}>
            <LogoIcon className='size-6' />
            <span className='mx-2'>Join The Community</span>
          </CTAButton>
        </div>

        {/* Scroll Down Indicator */}
        <ScrollDownIndicator />
      </div>
    </section>
  );
}

function ScrollDownIndicator() {
  return (
    <div className='absolute bottom-8 left-1/2 -translate-x-1/2'>
      <Button
        className='flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors'
        variant='ghost'
        render={<Link href='#experiences' />}
      >
        <span className='text-xs tracking-[0.2em] uppercase'>Scroll</span>
        <div className='flex flex-col items-center -space-y-3'>
          <ChevronDown size={20} className='animate-bounce' />
          <ChevronDown size={20} className='animate-bounce opacity-60' style={{ animationDelay: '0.15s' }} />
        </div>
      </Button>
    </div>
  );
}
