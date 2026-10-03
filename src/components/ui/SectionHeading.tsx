'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  showDivider?: boolean;
  id?: string;
}

export function SectionHeading({ title, subtitle, align = 'left', className, showDivider = false, id }: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left';
  const maxWidthClass = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={cn('mb-10 lg:mb-12', alignClasses, maxWidthClass, className)}>
      {showDivider && (
        <div className={cn('mb-4 h-px w-12 bg-gradient-to-r from-brand-blue-primary to-brand-blue-accent', align === 'center' ? 'mx-auto' : '')} />
      )}
      <h2 id={id} className="text-display-sm font-semibold text-brand-text-primary tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-body-lg text-brand-text-secondary max-w-2xl', align === 'center' ? 'mx-auto' : '')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
