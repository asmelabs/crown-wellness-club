import { LogoIcon } from '@/components/brand/logo';
import { CTAButton } from '@/components/cta-button';
import { Link } from '@/i18n/navigation';

export function HeroCTA() {
  return (
    <Link href='#memberships'>
      <CTAButton>
        <LogoIcon className='size-6' />
        <span className='mx-2'>Join The Community</span>
      </CTAButton>
    </Link>
  );
}
