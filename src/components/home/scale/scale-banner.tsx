import { Banner } from '@/components/banner';
import { LogoIcon } from '@/components/brand/logo';
import { PaintedText } from '@/components/painted-text';

export function ScaleBanner() {
  return (
    <Banner
      header={<LogoIcon className='size-20 text-primary' />}
      title={<PaintedText text='First interactive fitness in Azerbaijan' paintCount={1} />}
      subtitle='Luxury Wellness Destination'
      description='Pioneering the future of premium fitness and wellness in Baku with unprecedented luxury, cultural sensitivity, and world-class amenities. Setting new standards that honor both international excellence and local values.'
      titleClassName='text-4xl md:text-5xl'
      subtitleClassName='text-primary text-sm uppercase tracking-[0.3em]'
      descriptionClassName='text-muted-foreground max-w-3xl'
    />
  );
}
