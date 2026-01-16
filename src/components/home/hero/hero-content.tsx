import { Logo } from '@/components/brand/logo';
import { HeroCTA } from './hero-cta';

export function HeroContent() {
  return (
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
      <HeroCTA />
    </div>
  );
}
