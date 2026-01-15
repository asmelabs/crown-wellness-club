import type React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { GridPattern } from './grid-pattern';

interface BannerProps extends Omit<React.ComponentProps<typeof CardContent>, 'children' | 'title'> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  cardClassName?: string;
  gridPatternClassName?: string;
  gridPatternProps?: Omit<React.ComponentProps<typeof GridPattern>, 'className'>;

  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  footerClassName?: string;
}

export function Banner({
  header,
  title,
  subtitle,
  description,
  children,
  footer,
  className,
  cardClassName,
  gridPatternClassName,
  gridPatternProps,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  footerClassName,
  ...props
}: BannerProps) {
  return (
    <Card className={cn('bg-primary/20 max-w-5xl px-12 rounded-3xl mx-auto pt-12', cardClassName)}>
      <CardContent className={cn('flex flex-col items-center gap-4', className)} {...props}>
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={'4 2'}
          className={cn(
            'opacity-70 mask-[radial-gradient(300px_circle_at_center,white,transparent)]',
            gridPatternClassName
          )}
          {...gridPatternProps}
        />
        {header}
        <h3 className={cn('text-center text-6xl font-bold', titleClassName)}>{title}</h3>
        {subtitle && (
          <p className={cn('text-center tracking-wide leading-relaxed text-lg', subtitleClassName)}>{subtitle}</p>
        )}
        {children}
        {description && (
          <p className={cn('text-center tracking-wide leading-relaxed text-md', descriptionClassName)}>{description}</p>
        )}
      </CardContent>
      {footer && <CardFooter className={cn('flex justify-center mt-2', footerClassName)}>{footer}</CardFooter>}
    </Card>
  );
}
