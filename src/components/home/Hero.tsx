'use client';

import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/socials';
import { cn } from '@/lib/utils';

export function Hero() {
  const devLinks = socialLinks.filter((l) => l.category === 'development');

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
    };
    return icons[name] || null;
  };

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-bg via-brand-dark-bg to-brand-dark-surface" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-blue-primary/10 to-brand-blue-accent/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="container-custom relative py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-radius-full bg-brand-blue-primary/10 border border-brand-blue-primary/20 text-brand-blue-accent text-body-sm font-medium mb-8" role="status">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-accent opacity-75" aria-hidden="true" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-accent" aria-hidden="true" />
            </span>
            {profile.openToWork}
          </div>

          <img
            src="/brand/logo/masterguyarjun-logo.png"
            alt="MasterGuyArjun"
            className="mx-auto mb-8 h-24 w-auto lg:h-32 object-contain"
            aria-hidden="true"
          />

          <h1 id="hero-title" className="text-display-xl font-bold text-brand-text-primary tracking-tight mb-6 text-balance">
            Mallikharjun Swamy Sudnagunta
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {profile.title.secondary.map((title, i) => (
              <Badge key={i} variant="blue" size="md">
                {title}
              </Badge>
            ))}
          </div>

          <p className="text-body-lg text-brand-text-secondary max-w-2xl mx-auto mb-10 text-balance">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button size="lg" asChild>
              <a href="/research">View Security Research</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/projects">Explore Projects</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="/cv">View CV</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            {devLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-secondary hover:text-brand-blue-accent transition-colors duration-fast"
                aria-label={`${link.name} (opens in new tab)`}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-brand-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
