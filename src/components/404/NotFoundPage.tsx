'use client';

import Link from 'next/link';
import { Button } from '@/components/ui';
import { profile } from '@/data/profile';
import { Badge } from '@/components/ui';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <svg className="w-24 h-24 mx-auto text-brand-blue-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1 className="text-display-xl font-bold text-brand-text-primary tracking-tight mb-4">404</h1>
        <h2 className="text-heading-lg font-semibold text-brand-text-secondary mb-4">Page Not Found</h2>
        <p className="text-body text-brand-text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          It might have been a security research note that was archived.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="/">
            <Button size="lg">Back to Home</Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="secondary">View Projects</Button>
          </Link>
        </div>

        <div className="card p-6 border-brand-gold-accent/30 bg-brand-gold-accent/5">
          <p className="text-body-sm text-brand-text-secondary mb-3">
            Looking for something specific? Try these sections:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/research">
              <Badge variant="blue" size="sm">Security Research</Badge>
            </Link>
            <Link href="/experience">
              <Badge variant="outline" size="sm">Experience</Badge>
            </Link>
            <Link href="/writing">
              <Badge variant="outline" size="sm">Writing</Badge>
            </Link>
            <Link href="/cv">
              <Badge variant="gold" size="sm">CV</Badge>
            </Link>
          </div>
        </div>

        <p className="mt-8 text-body-sm text-brand-text-muted">
          © {new Date().getFullYear()} {profile.name} — MasterGuyArjun
        </p>
      </div>
    </div>
  );
}