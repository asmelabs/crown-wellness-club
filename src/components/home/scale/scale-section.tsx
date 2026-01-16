import { scaleItems } from './data';
import { ScaleBanner } from './scale-banner';
import { ScaleGrid } from './scale-grid';
import { ScaleHeader } from './scale-header';

export function ScaleSection() {
  return (
    <section id='impressive-scale' className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <ScaleHeader />
        <div className='mt-12 space-y-8'>
          <ScaleGrid items={scaleItems} />
          <ScaleBanner />
        </div>
      </div>
    </section>
  );
}
