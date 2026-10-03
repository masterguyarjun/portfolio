'use client';

import { cn } from '@/lib/utils';
import { ReactNode, HTMLAttributes } from 'react';

type CardElement = HTMLDivElement | HTMLElement;

interface CardProps extends HTMLAttributes<CardElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'article' | 'div' | 'section';
}

export function Card({ children, className, hover = false, padding = 'md', as: Component = 'article', ...props }: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <Component
      className={cn(
        'bg-brand-dark-surface border border-brand-dark-border rounded-radius-lg overflow-hidden transition-all duration-normal ease-out',
        hover && 'hover:border-brand-blue-primary/30 hover:shadow-shadow-lg hover:-translate-y-1',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('text-heading-md font-semibold text-brand-text-primary', className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-body-sm text-brand-text-secondary mt-1', className)}>{children}</p>;
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mt-4 pt-4 border-t border-brand-dark-border', className)}>{children}</div>;
}