'use client';

import { SectionHeading } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';
import { Badge } from '@/components/ui';
import { profile } from '@/data/profile';
import { experienceCategories } from '@/data/experience';
import { cn } from '@/lib/utils';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="section relative overflow-hidden" aria-labelledby="about-hero-title">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="about-hero-title" className="text-display-lg font-bold text-brand-text-primary tracking-tight mb-6">
              About Me
            </h1>
            <p className="text-body-lg text-brand-text-secondary mb-8 max-w-2xl mx-auto">
              {profile.summary}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {profile.title.secondary.map((title, i) => (
                <Badge key={i} variant="blue" size="md">
                  {title}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="career-journey-title">
        <div className="container-custom">
          <SectionHeading
            id="career-journey-title"
            title="Career Journey"
            subtitle="From infrastructure and operations to security research and engineering — a technology career spanning two decades."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experienceCategories.map((category, index) => (
              <Card key={category.id} hover padding="lg" className="h-full" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4">
                  <h3 className="text-heading-md font-semibold text-brand-text-primary mb-2">{category.label}</h3>
                  <p className="text-body-sm text-brand-text-secondary">{category.description}</p>
                </div>
                <div className="space-y-4">
                  {category.id === 'cybersecurity' && (
                    <>
                      <div className="p-4 rounded-radius-md bg-brand-red-primary/10 border border-brand-red-primary/20">
                        <h4 className="font-medium text-brand-text-primary mb-1">2022–Present</h4>
                        <p className="text-body-sm text-brand-text-secondary">Active security research across HackerOne, YesWeHack, and Bugcrowd</p>
                      </div>
                      <div className="p-4 rounded-radius-md bg-brand-blue-primary/10 border border-brand-blue-primary/20">
                        <h4 className="font-medium text-brand-text-primary mb-1">Specialties</h4>
                        <p className="text-body-sm text-brand-text-secondary">API Security, Web App Security, Vulnerability Validation, Business Logic</p>
                      </div>
                    </>
                  )}
                  {category.id === 'infrastructure' && (
                    <>
                      <div className="p-4 rounded-radius-md bg-brand-blue-primary/10 border border-brand-blue-primary/20">
                        <h4 className="font-medium text-brand-text-primary mb-1">2002–Present</h4>
                        <p className="text-body-sm text-brand-text-secondary">20+ years of Linux administration, hosting, virtualization, and infrastructure consulting</p>
                      </div>
                      <div className="p-4 rounded-radius-md bg-brand-gold-accent/10 border border-brand-gold-accent/20">
                        <h4 className="font-medium text-brand-text-primary mb-1">2010–Present</h4>
                        <p className="text-body-sm text-brand-text-secondary">Self-employed infrastructure consulting for SMB clients</p>
                      </div>
                    </>
                  )}
                  {category.id === 'additional' && (
                    <div className="p-4 rounded-radius-md bg-brand-gold-accent/10 border border-brand-gold-accent/20">
                      <h4 className="font-medium text-brand-text-primary mb-1">1999–2006</h4>
                      <p className="text-body-sm text-brand-text-secondary">Early career in data processing, warehouse operations, and IT project coordination</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-dark-surface/50" aria-labelledby="approach-title">
        <div className="container-custom">
          <SectionHeading
            id="approach-title"
            title="Working Approach"
            subtitle="How I approach security research, infrastructure engineering, and technical problem-solving."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Automation First',
                description: 'Build scripts, tools, and workflows to automate repetitive tasks. Manual work is for validation, not execution.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                    <path d="M2 9h20" />
                  </svg>
                ),
              },
              {
                title: 'Research-Driven',
                description: 'Deep-dive into target architecture before testing. Understanding the system reveals vulnerabilities scanners miss.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
              },
              {
                title: 'Authorized Only',
                description: 'All security testing conducted under strict Rules of Engagement on authorized programs only.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: 'AI-Assisted',
                description: 'Leverage AI for code analysis, script generation, research acceleration, and debugging — not replacement.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 10 10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <Card key={item.title} padding="lg" className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-radius-lg bg-brand-blue-primary/10 text-brand-blue-accent mb-4">
                  {item.icon}
                </div>
                <h3 className="text-heading-md font-semibold text-brand-text-primary mb-2">{item.title}</h3>
                <p className="text-body-sm text-brand-text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="background-title">
        <div className="container-custom">
          <SectionHeading
            id="background-title"
            title="Background & Education"
            subtitle="Formal education and continuous professional development."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card padding="lg">
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue-accent" aria-hidden="true" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-brand-text-primary">Krishna Memorial School</h4>
                  <p className="text-body-sm text-brand-text-secondary">Secondary School Education — Graduated 1995</p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold-accent" aria-hidden="true" />
                Professional Training
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-brand-text-primary">Web/Multimedia Management & Advanced Webmaster Architectures</h4>
                  <p className="text-body-sm text-brand-text-secondary">Udemy — 2020</p>
                </div>
                <div>
                  <h4 className="font-medium text-brand-text-primary">Digital Systems Communication & Cross-Media Engineering</h4>
                  <p className="text-body-sm text-brand-text-secondary">Udemy — 2019–2020</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 max-w-2xl mx-auto">
            <Card padding="lg" className="text-center">
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-4 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red-primary" aria-hidden="true" />
                Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {profile.languages.map((lang) => (
                  <Badge key={lang.name} variant="outline" size="md">
                    {lang.name}: {lang.proficiency}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
