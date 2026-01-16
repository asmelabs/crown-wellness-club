import { UsersIcon } from 'lucide-react';
import { Banner } from '@/components/banner';
import { PaintedText } from '@/components/painted-text';

export function ServiceBanner() {
  return (
    <Banner
      title={<PaintedText text='Cultural Excellence & Privacy' />}
      description="Our women's facilities span 800m² of completely private space, designed with deep respect for Azerbaijan's cultural values. Featuring dedicated female trainers, private changing areas, and women-only class schedules, we ensure comfort and modesty without compromising luxury."
      header={<UsersIcon className='size-20 text-primary' />}
    />
  );
}
