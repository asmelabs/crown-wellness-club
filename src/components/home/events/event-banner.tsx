import { Banner } from '@/components/banner';
import { CTAButton } from '@/components/cta-button';

export function EventBanner() {
  return (
    <Banner
      title='Ready to Join Our Community?'
      description="Become part of Azerbaijan's most welcoming wellness community. Connect, grow, and achieve your goals together with us."
      footer={<CTAButton>Join Community</CTAButton>}
      titleClassName='text-4xl md:text-5xl'
      descriptionClassName='text-muted-foreground max-w-3xl'
      className='mt-12'
    />
  );
}
