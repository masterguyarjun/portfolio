'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui';
import { Badge } from '@/components/ui';
import { experience, experienceCategories } from '@/data/experience';
import { cn } from '@/lib/utils';
import { formatDateRange } from '@/lib/utils';

export function ExperiencePage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newSet = new Set(expandedItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedItems(newSet);
  };

  return (
    <div className="min-h-screen">
      <section className="section relative overflow-hidden" aria-labelledby="exp-hero-title">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="exp-hero-title" className="text-display-lg font-bold text-brand-text-primary tracking-tight mb-6">
              Professional Experience
            </h1>
            <p className="text-body-lg text-brand-text-secondary">
              A chronological timeline of roles across cybersecurity, infrastructure engineering, and consulting.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom pb-16 lg:pb-24">
        {experienceCategories.map((category) => {
          const categoryExperience = experience.filter((e) => e.category === category.id);
          if (categoryExperience.length === 0) return null;

          const categoryColor = category.id === 'cybersecurity' 
            ? 'bg-brand-red-primary/20 text-brand-red-primary border-brand-red-primary/30'
            : category.id === 'infrastructure'
            ? 'bg-brand-blue-primary/20 text-brand-blue-accent border-brand-blue-primary/30'
            : 'bg-brand-gold-accent/20 text-brand-gold-accent border-brand-gold-accent/30';

          return (
            <section key={category.id} className="mb-16 lg:mb-24" aria-labelledby={`${category.id}-title`}>
              <div className="flex items-center gap-4 mb-10">
                <div className={cn('px-4 py-2 rounded-radius-full text-heading-sm font-semibold', categoryColor)}>
                  {category.label}
                </div>
                <div className="flex-1 h-px bg-brand-dark-border" aria-hidden="true" />
              </div>

              <div className="space-y-6">
                {categoryExperience.map((exp, index) => (
                  <Card
                    key={exp.id}
                    hover
                    padding="none"
                    className="overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="p-6 pb-0">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-heading-md">{exp.title}</CardTitle>
                          <CardDescription className="mt-1">
                            <span className="font-medium text-brand-text-primary">{exp.organization}</span>
                            {exp.location && ` · ${exp.location}`}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Badge variant="outline" size="sm">{exp.employmentType}</Badge>
                          <span className="text-body-sm text-brand-text-muted whitespace-nowrap">
                            {formatDateRange(exp.startDate, exp.endDate)}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 pt-0">
                      <p className="text-body text-brand-text-secondary mb-4">{exp.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-heading-sm font-medium text-brand-text-primary mb-2">Key Responsibilities</h4>
                          <ul className="space-y-1.5" role="list">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="text-body-sm text-brand-text-secondary flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-primary/50 mt-1.5 flex-shrink-0" aria-hidden="true" />
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {exp.technologies.length > 0 && (
                          <div>
                            <h4 className="text-heading-sm font-medium text-brand-text-primary mb-2">Technologies & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
