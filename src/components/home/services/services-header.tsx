import { StarIcon } from 'lucide-react';

export function ServicesHeader() {
  return (
    <div className='space-y-5 text-center'>
      <div className='flex items-center justify-center'>
        <StarIcon className='size-12 text-primary' />
      </div>
      <h1 className='text-center text-4xl font-bold md:text-5xl lg:text-6xl'>
        Premium <span className='text-primary'>Experiences</span>
      </h1>
      <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
        Six distinct zones of luxury, each crafted to deliver world-class experiences while honoring Azerbaijan's
        cultural values.
      </p>
    </div>
  );
}
