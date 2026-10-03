'use client';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export function CTASection() {
  return (
    <section className="section relative overflow-hidden" aria-labelledby="cta-title">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-primary/10 via-transparent to-brand-red-primary/10" aria-hidden="true" />
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center card p-10 lg:p-16 border-brand-blue-primary/20 bg-brand-dark-surface/80">
          <h2 id="cta-title" className="text-display-md font-semibold text-brand-text-primary tracking-tight mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-body-lg text-brand-text-secondary mb-10 max-w-xl mx-auto">
            Open to remote cybersecurity opportunities, EU-based roles, and challenging security engineering positions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/cv">Download CV</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="mailto:masterguyarjun@gmail.com">Email Me</a>
            </Button>
          </div>
          <p className="mt-6 text-body-sm text-brand-text-muted">
            {new Date().getFullYear()} MasterGuyArjun — Mallikharjun Swamy Sudnagunta
          </p>
        </div>
      </div>
    </section>
  );
}
