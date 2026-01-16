import { PaintedText } from '@/components/painted-text';
import { scaleItems } from './data';
import { ScaleBanner } from './scale-banner';
import { ScaleGrid } from './scale-grid';

export function ScaleSection() {
  return (
    <section id='impressive-scale' className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
            <PaintedText text='Impressive Scale' />
          </h1>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
            First interactive fitness in Azerbaijan luxury wellness club sets unprecedented standards with world-class
            facilities and cultural excellence.
          </p>
        </div>
        <div className='mt-12 space-y-8'>
          <ScaleGrid items={scaleItems} />
          <ScaleBanner />
        </div>
      </div>
    </section>
  );
}
