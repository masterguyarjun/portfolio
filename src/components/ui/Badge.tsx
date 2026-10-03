'use client';

import { cn } from '@/lib/utils';
import { ReactNode, HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'blue' | 'red' | 'gold' | 'default' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'default', size = 'md', className, ...props }: BadgeProps) {
  const variantClasses = {
    blue: 'bg-brand-blue-primary/20 text-brand-blue-accent border border-brand-blue-primary/30',
    red: 'bg-brand-red-primary/20 text-brand-red-primary border border-brand-red-primary/30',
    gold: 'bg-brand-gold-accent/20 text-brand-gold-accent border border-brand-gold-accent/30',
    default: 'bg-brand-dark-border text-brand-text-secondary',
    outline: 'bg-transparent text-brand-text-primary border border-brand-dark-border',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-caption',
    md: 'px-2.5 py-0.5 text-caption',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-radius-sm border',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span className={cn('inline-flex items-center px-2 py-1 rounded-radius-sm text-caption font-medium bg-brand-dark-border text-brand-text-secondary', className)}>
      {children}
    </span>
  );
}
