'use client';

import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
  component?: React.ElementType;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, asChild, component: Component, href, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-radius-md transition-all duration-fast ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark-bg disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
      primary: 'bg-brand-blue-primary text-white hover:bg-brand-blue-primary/90 active:bg-brand-blue-primary shadow-shadow-md hover:shadow-shadow-brand-hover border border-transparent',
      secondary: 'bg-brand-dark-surface text-brand-text-primary border border-brand-dark-border hover:bg-brand-dark-border hover:border-brand-blue-primary/50',
      accent: 'bg-gradient-to-r from-brand-red-primary to-brand-gold-accent text-white hover:from-brand-red-primary/90 hover:to-brand-gold-accent/90 shadow-shadow-md hover:shadow-shadow-brand-hover border border-transparent',
      ghost: 'bg-transparent text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-dark-surface border border-transparent',
    };

    const sizeClasses = {
      sm: 'px-4 py-2 text-body-sm',
      md: 'px-6 py-3 text-body',
      lg: 'px-8 py-4 text-body-lg',
    };

    const finalClasses = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

    if (asChild && Component) {
      return (
        <Component
          ref={ref as any}
          className={finalClasses}
          {...props}
        >
          {isLoading && (
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {children}
        </Component>
      );
    }

    if (href) {
      const anchorProps = {
        href,
        className: finalClasses,
        children,
        target: (props as any).target,
        rel: (props as any).rel ?? 'noopener noreferrer',
        onClick: (props as any).onClick,
        onMouseEnter: (props as any).onMouseEnter,
        onMouseLeave: (props as any).onMouseLeave,
        onFocus: (props as any).onFocus,
        onBlur: (props as any).onBlur,
        onKeyDown: (props as any).onKeyDown,
        onKeyUp: (props as any).onKeyUp,
        id: (props as any).id,
        'aria-label': (props as any)['aria-label'],
        'aria-describedby': (props as any)['aria-describedby'],
        'aria-expanded': (props as any)['aria-expanded'],
        'aria-controls': (props as any)['aria-controls'],
        role: (props as any).role,
        tabIndex: (props as any).tabIndex,
        style: (props as any).style,
      };
      return <a ref={ref as React.Ref<HTMLAnchorElement>} {...anchorProps} />;
    }

    return (
      <button
        ref={ref}
        className={finalClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';