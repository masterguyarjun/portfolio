'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui';
import { Logo, LogoWithText } from '@/components/ui';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/socials';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const devLinks = socialLinks.filter((l) => l.category === 'development');
  const securityLinks = socialLinks.filter((l) => l.category === 'security');
  const freelanceLinks = socialLinks.filter((l) => l.category === 'freelance');
  const designLinks = socialLinks.filter((l) => l.category === 'design');

  const getIcon = (name: string) => {
    const icons: Record<string, React.ReactNode> = {
      github: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      yeswehack: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      hackerone: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.18l8.46 4.23L12 16.36 3.54 12.13 12 7.9zM4 8.82l8 4 8-4v6.36l-8 4-8-4V8.82z" />
        </svg>
      ),
      bugcrowd: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      fiverr: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.18l8.46 4.23L12 16.36 3.54 12.13 12 7.9zM4 8.82l8 4 8-4v6.36l-8 4-8-4V8.82z" />
        </svg>
      ),
      behance: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
          <path d="M20.7 3H3.3C2.6 3 2 3.6 2 4.3v15.4c0 .7.6 1.3 1.3 1.3h17.4c.7 0 1.3-.6 1.3-1.3V4.3c0-.7-.6-1.3-1.3-1.3zm-10.2 8.7c0 2.4-1.9 4.4-4.3 4.4-2.4 0-4.3-2-4.3-4.4 0-2.4 1.9-4.4 4.3-4.4 2.3 0 4.2 2 4.3 4.4zM18 7.7c0 2.4-1.9 4.4-4.2 4.4-2.4 0-4.2-2-4.2-4.4 0-2.4 1.9-4.4 4.2-4.4 2.3 0 4.2 2 4.2 4.4z" />
        </svg>
      ),
      figma: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    };
    return icons[name] || null;
  };

  return (
    <footer className="bg-brand-dark-bg border-t border-brand-dark-border" role="contentinfo">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="MasterGuyArjun - Home">
              <Logo variant="mark" size="xl" />
              <LogoWithText size="lg" />
            </Link>
            <p className="text-body text-brand-text-secondary max-w-xs mb-6">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.title.secondary.map((title, i) => (
                <Badge key={i} variant="outline" size="sm">
                  {title}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-heading-sm font-semibold text-brand-text-primary mb-4">Development</h3>
            <ul className="space-y-2" role="list">
              {devLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-brand-text-secondary hover:text-brand-blue-accent transition-colors duration-fast flex items-center gap-2"
                    aria-label={`${link.name} (opens in new tab)`}
                  >
                    {getIcon(link.icon)}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-heading-sm font-semibold text-brand-text-primary mb-4">Security Platforms</h3>
            <ul className="space-y-2" role="list">
              {securityLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-brand-text-secondary hover:text-brand-blue-accent transition-colors duration-fast flex items-center gap-2"
                    aria-label={`${link.name} (opens in new tab)`}
                  >
                    {getIcon(link.icon)}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-heading-sm font-semibold text-brand-text-primary mb-4">Freelance & Design</h3>
            <ul className="space-y-2" role="list">
              {[
                ...freelanceLinks,
                ...designLinks,
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-brand-text-secondary hover:text-brand-blue-accent transition-colors duration-fast flex items-center gap-2"
                    aria-label={`${link.name} (opens in new tab)`}
                  >
                    {getIcon(link.icon)}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 lg:mt-12 pt-8 border-t border-brand-dark-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-body-sm text-brand-text-muted text-center md:text-left">
              © {currentYear} MasterGuyArjun — Mallikharjun Swamy Sudnagunta. All rights reserved.
            </p>
            <p className="text-body-sm text-brand-text-muted text-center md:text-right">
              Cybersecurity Researcher • Infrastructure Engineer • Security Engineer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
