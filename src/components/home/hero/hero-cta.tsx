import { LogoIcon } from '@/components/brand/logo';
import { CTAButton } from '@/components/cta-button';
import { Link } from '@/i18n/navigation';

export function HeroCTA() {
  return (
    <CTAButton render={<Link href='#memberships' />}>
      <LogoIcon className='size-6' />
      <span className='mx-2'>Join The Community</span>
    </CTAButton>
  );
}
