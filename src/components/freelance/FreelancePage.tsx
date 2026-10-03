'use client';

import { SectionHeading } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Badge, Button } from '@/components/ui';
import { freelancePlatforms, freelanceDescription, consultingHighlights } from '@/data/freelance';
import { socialLinks } from '@/data/socials';
import { cn } from '@/lib/utils';

const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    fiverr: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.18l8.46 4.23L12 16.36 3.54 12.13 12 7.9zM4 8.82l8 4 8-4v6.36l-8 4-8-4V8.82z" />
      </svg>
    ),
    behance: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
        <path d="M20.7 3H3.3C2.6 3 2 3.6 2 4.3v15.4c0 .7.6 1.3 1.3 1.3h17.4c.7 0 1.3-.6 1.3-1.3V4.3c0-.7-.6-1.3-1.3-1.3zm-10.2 8.7c0 2.4-1.9 4.4-4.3 4.4-2.4 0-4.3-2-4.3-4.4 0-2.4 1.9-4.4 4.3-4.4 2.3 0 4.2 2 4.3 4.4zM18 7.7c0 2.4-1.9 4.4-4.2 4.4-2.4 0-4.2-2-4.2-4.4 0-2.4 1.9-4.4 4.2-4.4 2.3 0 4.2 2 4.2 4.4z" />
      </svg>
    ),
    figma: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  };
  return icons[name] || null;
};

export function FreelancePage() {
  return (
    <div className="min-h-screen">
      <section className="section relative overflow-hidden" aria-labelledby="freelance-hero-title">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="freelance-hero-title" className="text-display-lg font-bold text-brand-text-primary tracking-tight mb-6">
              Freelance & Creative Work
            </h1>
            <p className="text-body-lg text-brand-text-secondary mb-8">
              Client consulting, freelance services, and design work — separate from cybersecurity research.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="blue" size="md">Infrastructure Consulting</Badge>
              <Badge variant="gold" size="md">Freelance Services</Badge>
              <Badge variant="outline" size="md">Design & Creative</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="platforms-title">
        <div className="container-custom">
          <SectionHeading
            id="platforms-title"
            title="Platforms & Profiles"
            subtitle="Verified presence across freelance marketplaces and design communities."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {freelancePlatforms.map((platform, index) => (
              <Card key={platform.name} hover padding="lg" className="group text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-6">
                  <div className={cn(
                    'inline-flex items-center justify-center w-16 h-16 rounded-radius-xl mb-4',
                    'group-hover:bg-brand-blue-primary/20 transition-colors duration-fast'
                  )}>
                    {getIcon(platform.icon)}
                  </div>
                  <CardTitle className="text-heading-lg">{platform.name}</CardTitle>
                </div>
                <p className="text-body text-brand-text-secondary mb-6">
                  {freelanceDescription[platform.icon as keyof typeof freelanceDescription] || 'Professional services and portfolio.'}
                </p>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center"
                  aria-label={`View ${platform.name} profile (opens in new tab)`}
                >
                  View Profile
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-dark-surface/50" aria-labelledby="consulting-title">
        <div className="container-custom">
          <SectionHeading
            id="consulting-title"
            title="Infrastructure Consulting Highlights"
            subtitle="15+ years of freelance infrastructure and web development consulting for SMB clients."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {consultingHighlights.map((highlight, index) => (
              <Card key={highlight} padding="lg" className="group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-radius-lg bg-brand-blue-primary/10 flex items-center justify-center text-brand-blue-accent group-hover:bg-brand-blue-primary/20 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <p className="text-body text-brand-text-secondary pt-1">{highlight}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="separation-title">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card padding="lg" className="border-brand-blue-primary/30 bg-brand-blue-primary/5">
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-brand-blue-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Clear Separation of Concerns
              </h3>
              <p className="text-body text-brand-text-secondary mb-4">
                This section covers freelance consulting, client work, and design/creative projects only.
                Cybersecurity research, vulnerability disclosures, and offensive security work are documented in the
                <a href="/research" className="link-internal">Security Research</a> section.
              </p>
              <p className="text-body text-brand-text-secondary">
                Infrastructure engineering experience (Linux administration, hosting, virtualization) is documented in the
                <a href="/experience" className="link-internal">Experience</a> section under Infrastructure & Consulting.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
