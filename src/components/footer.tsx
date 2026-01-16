import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

const tiktokPath =
  'M16.7 2.1c.6 3.4 2.6 6 5.8 6.2v3.6c-1.9.1-3.6-.4-5.2-1.5v7.1c0 4.2-3.4 7.6-7.6 7.6-4.2 0-7.6-3.4-7.6-7.6 0-4.7 4.4-8.2 9-7.4v3.8c-1.3-.4-2.7 0-3.6 1-2.1 2.4-.6 6.1 2.8 6.1 1.9 0 3.4-1.5 3.4-3.4V2.1h3z';

export function Footer() {
  return (
    <footer className='border-t border-border/60 bg-background'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-6'>
        <p className='text-sm text-muted-foreground'>
          © {new Date().getFullYear()} Crown Wellness Club. All rights reserved.
        </p>
        <div className='flex items-center gap-2'>
          <Link href='https://facebook.com' target='_blank' rel='noreferrer'>
            <Button size='icon' variant='ghost' aria-label='Facebook'>
              <Facebook className='size-4.5' />
            </Button>
          </Link>
          <Link href='https://instagram.com' target='_blank' rel='noreferrer'>
            <Button size='icon' variant='ghost' aria-label='Instagram'>
              <Instagram className='size-4.5' />
            </Button>
          </Link>
          <Link href='https://tiktok.com' target='_blank' rel='noreferrer'>
            <Button size='icon' variant='ghost' aria-label='TikTok'>
              <svg viewBox='0 0 24 24' aria-hidden='true' className='size-4.5 fill-current'>
                <path d={tiktokPath} />
              </svg>
            </Button>
          </Link>
          <Link href='https://youtube.com' target='_blank' rel='noreferrer'>
            <Button size='icon' variant='ghost' aria-label='YouTube'>
              <Youtube className='size-4.5' />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
