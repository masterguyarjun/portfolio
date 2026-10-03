'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
}

interface NavigationItem {
  label: string;
  href: string;
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex flex-col bg-brand-dark-bg border-l border-brand-dark-border transition-transform duration-normal ease-out',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="flex items-center justify-between p-4 border-b border-brand-dark-border">
        <Logo variant="mark" size="lg" />
        <button
          onClick={onClose}
          className="p-2 rounded-radius-md text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-dark-surface transition-colors duration-fast focus-visible:ring-2 focus-visible:ring-brand-blue-accent"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 py-6 px-4 overflow-y-auto" aria-label="Main navigation">
        <ul className="space-y-2" role="list">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className={cn(
                  'block px-4 py-3 rounded-radius-lg text-body-lg font-medium transition-colors duration-fast',
                  'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-dark-surface'
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-brand-dark-border space-y-3">
        <a
          href="mailto:masterguyarjun@gmail.com"
          className="btn btn-secondary w-full justify-center"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Contact Me
        </a>
      </div>
    </div>
  );
}
