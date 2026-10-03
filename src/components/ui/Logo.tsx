'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'mark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  alt?: string;
}

const sizeClasses = {
  sm: 'h-6 w-auto',
  md: 'h-8 w-auto',
  lg: 'h-10 w-auto',
  xl: 'h-14 w-auto',
};

const markSizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
  xl: 'h-14 w-14',
};

export function Logo({ variant = 'full', size = 'md', className, alt = 'MasterGuyArjun' }: LogoProps) {
  const isMark = variant === 'mark';
  const src = isMark ? '/brand/logo/masterguyarjun-logo.png' : '/brand/logo/masterguyarjun-logo.png';

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        isMark ? markSizeClasses[size] : sizeClasses[size],
        'object-contain transition-opacity duration-fast',
        className
      )}
      width={isMark ? 32 : undefined}
      height={isMark ? 32 : undefined}
    />
  );
}

export function LogoText({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = {
    sm: 'text-body-sm',
    md: 'text-body',
    lg: 'text-body-lg',
  }[size];

  return (
    <span className={cn('font-semibold tracking-tight text-brand-text-primary', sizeClass, className)}>
      MasterGuyArjun
    </span>
  );
}

export function LogoWithText({ size = 'md', className, showMark = true }: { size?: 'sm' | 'md' | 'lg'; className?: string; showMark?: boolean }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {showMark && <Logo variant="mark" size={size} />}
      <LogoText size={size} />
    </div>
  );
}
