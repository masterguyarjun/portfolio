'use client';

import { cn } from '@/lib/utils';
import { experienceCategories, experience } from '@/data/experience';

const milestones = [
  { year: '1999–2002', title: 'Early Career', description: 'Data processing, warehouse operations, information management', category: 'additional' },
  { year: '2002–2004', title: 'Linux Systems & Help Desk', description: 'EPIC-NIC: Linux admin, Windows/macOS support, network hardening', category: 'infrastructure' },
  { year: '2004–2006', title: 'IT Project Coordination', description: 'PVR Projects: Project tracking, timeline coordination, budget alignment', category: 'infrastructure' },
  { year: '2010–Present', title: 'Infrastructure Consulting', description: 'Self-employed: Client infrastructure, hosting, virtualization, WordPress', category: 'infrastructure' },
  { year: '2017–2019', title: 'Logistics Operations', description: 'Swiggy Instamart: Fleet logistics and delivery operations', category: 'additional' },
  { year: '2022–Present', title: 'Security Research', description: 'HackerOne, YesWeHack, Bugcrowd: Vulnerability research, offensive security', category: 'cybersecurity' },
];

const categoryColors: Record<string, string> = {
  cybersecurity: 'bg-brand-red-primary/20 text-brand-red-primary border-brand-red-primary/30',
  infrastructure: 'bg-brand-blue-primary/20 text-brand-blue-accent border-brand-blue-primary/30',
  additional: 'bg-brand-gold-accent/20 text-brand-gold-accent border-brand-gold-accent/30',
};

export function CareerSnapshot() {
  return (
    <section className="section bg-brand-dark-surface/50" aria-labelledby="career-title">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16" id="career-title">
          <h2 className="text-display-sm font-semibold text-brand-text-primary tracking-tight mb-4">
            Career Snapshot
          </h2>
          <p className="text-body-lg text-brand-text-secondary">
            A technology career evolving from infrastructure and operations into security research and engineering.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue-primary/30 via-brand-blue-primary/10 to-brand-red-primary/30 -translate-x-1/2" aria-hidden="true" />

          <div className="space-y-10 relative">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={cn('relative flex items-start gap-6', index % 2 === 0 ? 'md:ml-auto md:mr-16 md:text-right' : 'md:mr-auto md:ml-16')}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={cn(
                  'absolute left-1/2 top-2 w-4 h-4 rounded-full border-4 -translate-x-1/2 z-10 flex-shrink-0',
                  categoryColors[milestone.category] || 'bg-brand-dark-border'
                )} aria-hidden="true" />

                <div className={cn('flex-1 min-w-0', index % 2 === 0 ? 'md:pr-4' : 'md:pl-4')}>
                  <div className={cn('inline-flex items-center gap-2 px-3 py-1 rounded-radius-md text-caption font-medium mb-2', categoryColors[milestone.category])}>
                    {milestone.year}
                  </div>
                  <h3 className="text-heading-md font-semibold text-brand-text-primary mb-1">{milestone.title}</h3>
                  <p className="text-body-sm text-brand-text-secondary">{milestone.description}</p>
                </div>

                <div className={cn('w-20 flex-shrink-0 text-center', index % 2 === 0 ? 'md:order-2' : 'md:order-1')}>
                  <div className={cn('w-px h-20 bg-brand-dark-border', index < milestones.length - 1 ? '' : 'hidden')} aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {experienceCategories.map((cat) => (
            <div key={cat.id} className="text-center p-6 rounded-radius-lg bg-brand-dark-bg border border-brand-dark-border">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-radius-full text-caption font-medium mb-4"
                style={{
                  backgroundColor: cat.id === 'cybersecurity' ? 'rgba(225, 29, 46, 0.2)' : cat.id === 'infrastructure' ? 'rgba(11, 61, 145, 0.2)' : 'rgba(245, 184, 0, 0.2)',
                  color: cat.id === 'cybersecurity' ? '#E11D2E' : cat.id === 'infrastructure' ? '#00A3FF' : '#F5B800',
                  borderColor: cat.id === 'cybersecurity' ? 'rgba(225, 29, 46, 0.3)' : cat.id === 'infrastructure' ? 'rgba(11, 61, 145, 0.3)' : 'rgba(245, 184, 0, 0.3)',
                }}
              >
                {cat.label}
              </div>
              <p className="text-body text-brand-text-secondary">{cat.description}</p>
              <p className="text-body-lg font-semibold text-brand-text-primary mt-2">
                {experience.filter((e) => e.category === cat.id).length} Roles
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
