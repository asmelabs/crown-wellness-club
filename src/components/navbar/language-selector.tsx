'use client';

import { useLocale } from 'next-intl';
import { languagesList } from '@/i18n/data';
import { Link, usePathname } from '@/i18n/navigation';

export function LanguageSelector() {
  const pathname = usePathname();
  const locale = useLocale();

  if (languagesList.length <= 1) return null;

  return (
    <div className='flex items-center space-x-4'>
      {languagesList.map((language, index) => (
        <div key={language.code} className='flex items-center'>
          <Link href={pathname} locale={language.code} replace className='text-sm'>
            {language.code === locale ? (
              <span className='text-white hover:text-primary transition-all duration-300'>
                {language.code.toUpperCase()}
              </span>
            ) : (
              <span className='text-muted-foreground hover:text-primary transition-all duration-300'>
                {language.code.toUpperCase()}
              </span>
            )}
          </Link>
          {index < languagesList.length - 1 && <span className='text-muted-foreground'>•</span>}
        </div>
      ))}
    </div>
  );
}
