'use client';

import { cn } from '@/lib/utils';
import { forwardRef, AnchorHTMLAttributes } from 'react';

type ExternalLinkVariant = 'default' | 'icon-only' | 'card';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: React.ReactNode;
  variant?: ExternalLinkVariant;
  external?: boolean;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ className, label, icon, variant = 'default', external = true, children, ...props }, ref) => {
    const isExternal = external && props.href?.startsWith('http');
    const href = props.href;

    const baseClasses = 'inline-flex items-center gap-1.5 transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark-bg rounded-radius-sm';

    const variantClasses: Record<ExternalLinkVariant, string> = {
      default: 'text-brand-blue-accent hover:text-brand-blue-accent/80 font-medium text-body-sm',
      'icon-only': 'p-2 text-brand-text-secondary hover:text-brand-blue-accent bg-brand-dark-surface hover:bg-brand-dark-border rounded-radius-md',
      card: 'text-brand-blue-accent hover:text-brand-blue-accent/80 font-medium text-body-sm flex-1 truncate',
    };

    const linkProps = {
      ref,
      className: cn(baseClasses, variantClasses[variant], className),
      href,
      target: isExternal ? '_blank' : undefined,
      rel: isExternal ? 'noopener noreferrer' : undefined,
      'aria-label': isExternal ? `${label} (opens in new tab)` : label,
      ...props,
    };

    if (variant === 'icon-only') {
      return (
        <a {...linkProps} aria-label={props['aria-label'] || label}>
          {icon}
          <span className="sr-only">{label}</span>
        </a>
      );
    }

    const showExternalIcon = isExternal && variant !== ('icon-only' as ExternalLinkVariant);

    return (
      <a {...linkProps}>
        {icon && <span aria-hidden="true">{icon}</span>}
        {children || label}
        {showExternalIcon && (
          <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </a>
    );
  }
);

ExternalLink.displayName = 'ExternalLink';