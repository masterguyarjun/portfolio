'use client';

import { Card, CardContent, CardTitle } from '@/components/ui';
import { Badge } from '@/components/ui';

const focusAreas = [
  {
    title: 'Application Security',
    description: 'Web application vulnerability assessment, secure code review, and security testing methodologies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'API Security',
    description: 'REST/GraphQL API security testing, authentication/authorization flaws, and business logic vulnerabilities.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Vulnerability Research',
    description: 'Zero-day hunting, exploit development, and advanced vulnerability analysis across web and API surfaces.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Offensive Security',
    description: 'Authorized penetration testing, red team exercises, and adversary simulation under strict ROE.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Security Automation',
    description: 'Custom tooling, reconnaissance automation, scanning orchestration, and workflow optimization.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    title: 'Linux Infrastructure',
    description: 'Systems administration, server hardening, virtualization, networking, and infrastructure automation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M4 9h16M4 14h16" />
      </svg>
    ),
  },
];

export function ProfessionalFocus() {
  return (
    <section className="section bg-brand-dark-surface/50" aria-labelledby="focus-title">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16" id="focus-title">
          <h2 className="text-display-sm font-semibold text-brand-text-primary tracking-tight mb-4">
            Professional Focus
          </h2>
          <p className="text-body-lg text-brand-text-secondary">
            Core specialties built on 20+ years of technology experience spanning infrastructure, security research, and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <Card
              key={area.title}
              hover
              padding="lg"
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-radius-lg bg-brand-blue-primary/10 text-brand-blue-accent mb-4 group-hover:bg-brand-blue-primary/20 group-hover:text-brand-blue-accent transition-colors duration-fast">
                  {area.icon}
                </div>
                <CardTitle className="text-heading-md">{area.title}</CardTitle>
                <p className="text-body text-brand-text-secondary mt-2 flex-1">{area.description}</p>
                <Badge variant="outline" size="sm" className="mt-4 self-start">
                  Core Specialty
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
