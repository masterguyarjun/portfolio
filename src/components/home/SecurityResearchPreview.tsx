'use client';

import { Card, CardContent, CardTitle, CardFooter } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import { platforms } from '@/data/research';
import { researchAreas } from '@/data/research';
import { cn } from '@/lib/utils';

const getPlatformIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
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
  };
  return icons[name] || null;
};

export function SecurityResearchPreview() {
  return (
    <section className="section" aria-labelledby="research-title">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16" id="research-title">
          <div>
            <h2 className="text-display-sm font-semibold text-brand-text-primary tracking-tight mb-3">
              Security Research
            </h2>
            <p className="text-body-lg text-brand-text-secondary max-w-xl">
              Independent vulnerability research and responsible disclosure across authorized security programs.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <a href="/research">View All Research</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
          {platforms.map((platform, index) => (
            <Card
              key={platform.id}
              hover
              padding="lg"
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  'flex-shrink-0 w-12 h-12 rounded-radius-lg flex items-center justify-center',
                  'group-hover:bg-brand-blue-primary/20 transition-colors duration-fast'
                )}>
                  {getPlatformIcon(platform.id)}
                </div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-heading-sm">{platform.name}</CardTitle>
                  <p className="text-body-sm text-brand-text-secondary mt-1">{platform.description}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="outline" size="sm">
                      @{platform.username}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardFooter className="pt-4">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost w-full justify-center text-body-sm"
                  aria-label={`View ${platform.name} profile (opens in new tab)`}
                >
                  View Profile
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-heading-lg font-semibold text-brand-text-primary mb-6 text-center">
            Research Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {researchAreas.map((area) => (
              <Badge key={area.id} variant="outline" size="sm">
                {area.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
