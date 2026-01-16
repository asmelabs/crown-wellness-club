import { Banner } from '@/components/banner';
import { PaintedText } from '@/components/painted-text';

export function InnovationBanner() {
  return (
    <Banner
      cardClassName='mt-12'
      title={<PaintedText text='Ready to Experience the Future?' paintCount='45%' />}
      titleClassName='text-4xl md:text-5xl -mt-5'
    />
  );
}
