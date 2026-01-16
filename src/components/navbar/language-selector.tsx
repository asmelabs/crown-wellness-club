'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { navbarLanguages } from './data';

export function LanguageSelector() {
  const pathname = usePathname();
  const locale = useLocale();

  if (navbarLanguages.length <= 1) return null;

  return (
    <div className='flex items-center space-x-4'>
      {navbarLanguages.map((language, index) => (
        <div key={language.code} className='flex items-center'>
          <Link href={pathname} locale={language.code} replace className='text-sm'>
            {language.code === locale ? (
              <span className='text-foreground hover:text-primary transition-all duration-300'>
                {language.code.toUpperCase()}
              </span>
            ) : (
              <span className='text-muted-foreground hover:text-primary transition-all duration-300'>
                {language.code.toUpperCase()}
              </span>
            )}
          </Link>
          {index < navbarLanguages.length - 1 && <span className='text-muted-foreground'>•</span>}
        </div>
      ))}
    </div>
  );
}
