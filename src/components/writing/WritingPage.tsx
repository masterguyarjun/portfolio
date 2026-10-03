'use client';

import { SectionHeading } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui';
import { Badge, Button } from '@/components/ui';
import { articles, writingCategories, writingDescription } from '@/data/writing';
import { cn } from '@/lib/utils';

export function WritingPage() {
  return (
    <div className="min-h-screen">
      <section className="section relative overflow-hidden" aria-labelledby="writing-hero-title">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="writing-hero-title" className="text-display-lg font-bold text-brand-text-primary tracking-tight mb-6">
              Writing & Case Studies
            </h1>
            <p className="text-body-lg text-brand-text-secondary mb-8 max-w-2xl mx-auto">
              Technical writeups, vulnerability case studies, and security research publications.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {writingCategories.map((cat) => (
                <Badge key={cat} variant="outline" size="sm">{cat}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="articles-title">
        <div className="container-custom">
          <SectionHeading
            id="articles-title"
            title="Published Articles"
            subtitle="Technical content sharing knowledge from security research and infrastructure engineering."
            align="center"
          />

          {articles.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <Card padding="lg" className="bg-brand-dark-bg border-brand-dark-border">
                <div className="text-brand-text-secondary">
                  <svg className="mx-auto mb-4 w-16 h-16 text-brand-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <p className="text-body-lg mb-2">{writingDescription}</p>
                  <p className="text-body-sm">Articles will appear here when published.</p>
                </div>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {articles.map((article, index) => (
                <Card key={article.id} hover padding="lg" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <Badge variant="blue" size="sm">{article.category}</Badge>
                    <CardTitle className="text-heading-md mt-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-brand-text-secondary mb-4">{article.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" size="sm">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-body-sm text-brand-text-muted">
                      <span>{article.publishDate}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                  {article.url && (
                    <CardFooter className="pt-4">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost w-full justify-center text-body-sm"
                        aria-label={`Read ${article.title} (opens in new tab)`}
                      >
                        Read Article
                      </a>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-brand-dark-surface/50" aria-labelledby="future-title">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="future-title" className="text-display-sm font-semibold text-brand-text-primary tracking-tight mb-4">
              Future Publications
            </h2>
            <p className="text-body-lg text-brand-text-secondary mb-8">
              Planned topics for upcoming technical writeups and case studies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {[
                'Business Logic Vulnerabilities in Modern APIs',
                'Automated Reconnaissance Workflows for Bug Bounty',
                'API Authentication Bypass Patterns',
                'Linux Infrastructure Hardening for Security Researchers',
                'Security Automation with Custom Tooling',
                'Vulnerability Validation Methodologies',
              ].map((topic, index) => (
                <div key={topic} className="flex items-center gap-3 p-3 rounded-radius-md bg-brand-dark-bg border border-brand-dark-border group hover:border-brand-blue-primary/30 transition-colors" style={{ animationDelay: `${index * 100}ms` }}>
                  <svg className="w-5 h-5 text-brand-blue-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span className="text-body text-brand-text-secondary group-hover:text-brand-text-primary transition-colors">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
