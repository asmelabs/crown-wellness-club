import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ScrollDownIndicator() {
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
