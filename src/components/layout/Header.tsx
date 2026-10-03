'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Logo, LogoWithText } from '@/components/ui';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Security Research', href: '/research' },
  { label: 'Projects', href: '/projects' },
  { label: 'Freelance & Design', href: '/freelance' },
  { label: 'Writing', href: '/writing' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-brand-dark-bg/80 backdrop-blur-md border-b border-brand-dark-border">
        <div className="container-custom h-full" />
      </header>
    );
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-normal ease-out',
          isScrolled
            ? 'bg-brand-dark-bg/95 backdrop-blur-md border-b border-brand-dark-border shadow-shadow-lg'
            : 'bg-brand-dark-bg/80 backdrop-blur-md border-b border-transparent'
        )}
        role="banner"
      >
        <div className="container-custom h-full">
          <div className="flex items-center justify-between h-full gap-4">
            <Link href="/" className="flex items-center gap-2" aria-label="MasterGuyArjun - Home">
              <Logo variant="mark" size="lg" />
              <LogoText size="md" />
            </Link>

            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              <ul className="flex items-center gap-1" role="list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'px-3 py-2 rounded-radius-md text-body-sm font-medium transition-colors duration-fast',
                        'text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-dark-surface'
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:masterguyarjun@gmail.com" className="btn btn-primary text-body-sm">
                Contact
              </a>
            </div>

            <button
              className="md:hidden p-2 rounded-radius-md text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-dark-surface transition-colors duration-fast focus-visible:ring-2 focus-visible:ring-brand-blue-accent"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}

function LogoText({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = {
    sm: 'text-body-sm',
    md: 'text-body',
    lg: 'text-body-lg',
  }[size];

  return (
    <span className={cn('font-semibold tracking-tight text-brand-text-primary hidden sm:block', sizeClass)}>
      MasterGuyArjun
    </span>
  );
}
