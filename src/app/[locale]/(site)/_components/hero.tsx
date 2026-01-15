import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HomePageHeroBackground } from './hero-background';

export function HomePageHero() {
  return (
    <section>
      <HomePageHeroBackground />

      <div className='relative z-20 text-center text-white px-6 max-w-4xl mx-auto'>
        <div className='flex flex-col items-center'>
          <h1
            className='text-6xl md:text-7xl font-black tracking-wider text-white'
            style={{
              transformOrigin: 'center center',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            CROWN WELLNESS
          </h1>
        </div>
        <ScrollDownIndicator />
      </div>
    </section>
  );
}

function ScrollDownIndicator() {
  return (
    <Button className='flex flex-col items-center cursor-pointer' variant='ghost' render={<Link href='#experiences' />}>
      <p className='text-sm tracking-widest mb-4 text-gray-300'>Scroll down</p>
      <div className='flex flex-col items-center'>
        <ChevronDown size={24} className='animate-bounce text-white/80' />
        <ChevronDown size={24} className='animate-bounce text-white/60' style={{ animationDelay: '0.2s' }} />
      </div>
    </Button>
  );
}
