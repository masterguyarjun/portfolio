'use client';

import { SectionHeading } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import { platforms, researchAreas, researchMethodology, selectedPublicResearch } from '@/data/research';
import { cn } from '@/lib/utils';

const getPlatformIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    yeswehack: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    hackerone: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 2.18l8.46 4.23L12 16.36 3.54 12.13 12 7.9zM4 8.82l8 4 8-4v6.36l-8 4-8-4V8.82z" />
      </svg>
    ),
    bugcrowd: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  };
  return icons[name] || null;
};

export function ResearchPage() {
  return (
    <div className="min-h-screen">
      <section className="section relative overflow-hidden" aria-labelledby="research-hero-title">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-blue-primary/10 to-brand-red-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="research-hero-title" className="text-display-lg font-bold text-brand-text-primary tracking-tight mb-6">
              Security Research
            </h1>
            <p className="text-body-lg text-brand-text-secondary mb-8 max-w-2xl mx-auto">
              Independent vulnerability research and responsible disclosure across authorized security programs.
              All testing conducted under strict Rules of Engagement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="red" size="md">Authorized Testing Only</Badge>
              <Badge variant="blue" size="md">Responsible Disclosure</Badge>
              <Badge variant="gold" size="md">Strict ROE</Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="platforms-title">
        <div className="container-custom">
          <SectionHeading
            id="platforms-title"
            title="Security Platforms"
            subtitle="Active participation across leading bug bounty and vulnerability disclosure platforms."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <Card key={platform.id} padding="lg" hover className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-radius-lg bg-brand-blue-primary/10 flex items-center justify-center text-brand-blue-accent">
                    {getPlatformIcon(platform.id)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading-md font-semibold text-brand-text-primary">{platform.name}</h3>
                    <p className="text-body-sm text-brand-text-secondary mt-1">{platform.description}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body-sm text-brand-blue-accent hover:text-brand-blue-primary transition-colors flex items-center gap-1"
                        aria-label={`View ${platform.name} profile (opens in new tab)`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        @{platform.username}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="methodology-title">
        <div className="container-custom">
          <SectionHeading
            id="methodology-title"
            title="Research Methodology"
            subtitle="Systematic approach to vulnerability discovery and responsible disclosure."
            align="center"
          />

          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {researchMethodology.map((step, index) => (
                <Card key={step.id} padding="md" className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-radius-full bg-brand-blue-primary/10 flex items-center justify-center text-brand-blue-accent font-mono text-heading-md">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-heading-sm font-semibold text-brand-text-primary">{step.title}</h4>
                    <p className="text-body-sm text-brand-text-secondary mt-1">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="areas-title">
        <div className="container-custom">
          <SectionHeading
            id="areas-title"
            title="Research Areas"
            subtitle="Technical domains and vulnerability classes actively researched."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto mb-12">
            {researchAreas.map((area) => (
              <Badge key={area.id} variant="outline" size="sm">{area.name}</Badge>
            ))}
          </div>

          {selectedPublicResearch.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-heading-lg font-semibold text-brand-text-primary mb-6 text-center">Selected Public Disclosures</h3>
              <div className="grid gap-4">
                {selectedPublicResearch.map((research: any) => (
                  <Card key={research.title} padding="md" hover>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h4 className="text-heading-md font-semibold text-brand-text-primary">{research.title}</h4>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <Badge variant="blue" size="sm">{research.platform}</Badge>
                          <Badge variant={research.severity === 'Critical' ? 'red' : research.severity === 'High' ? 'red' : 'gold'} size="sm">
                            {research.severity}
                          </Badge>
                          <Badge variant="outline" size="sm">{research.type}</Badge>
                          <span className="text-body-sm text-brand-text-muted">{research.target}</span>
                        </div>
                      </div>
                      <a
                        href={research.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost text-body-sm flex-shrink-0"
                        aria-label={`Read ${research.title} disclosure (opens in new tab)`}
                      >
                        Read Disclosure
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <Card padding="lg" className="bg-brand-dark-bg border-brand-dark-border">
                <div className="text-brand-text-secondary">
                  <svg className="mx-auto mb-4 w-12 h-12 text-brand-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  <p className="text-body">No public disclosures published yet.</p>
                  <p className="text-body-sm mt-2">Public vulnerability disclosures will appear here when available.</p>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
