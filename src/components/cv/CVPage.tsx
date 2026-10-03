'use client';

import { useEffect, useState } from 'react';
import { SectionHeading } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Badge, Button } from '@/components/ui';
import { cvData, cvPdfPath } from '@/data/cv';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { formatDateRange } from '@/lib/utils';
import { cn } from '@/lib/utils';

export function CVPage() {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    window.print();
    setTimeout(() => setIsPrinting(false), 100);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPdfPath;
    link.download = 'Mallikharjun-Swamy-Sudnagunta-CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen no-print:pb-16">
      <header className="no-print section relative overflow-hidden" aria-labelledby="cv-hero-title">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <h1 id="cv-hero-title" className="text-display-lg font-bold text-brand-text-primary tracking-tight mb-4">
                  Curriculum Vitae
                </h1>
                <p className="text-body-lg text-brand-text-secondary">
                  Mallikharjun Swamy Sudnagunta — Cybersecurity Researcher, Infrastructure Engineer, Security Engineer
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button onClick={handlePrint} variant="secondary" disabled={isPrinting}>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5" />
                    <path d="M18 18h2a2 2 0 0 0 2-2v-5" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  {isPrinting ? 'Preparing...' : 'Print CV'}
                </Button>
                <Button onClick={handleDownload} variant="ghost">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </Button>
              </div>
            </div>

            <div className="card p-6 border-brand-blue-primary/20 bg-brand-blue-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-heading-md font-semibold text-brand-text-primary">Mallikharjun Swamy Sudnagunta</p>
                  <p className="text-body text-brand-text-secondary mt-1">Cybersecurity Researcher · Infrastructure Engineer · Security Engineer</p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-body-sm text-brand-text-muted">Location</p>
                  <p className="text-body text-brand-text-primary">{cvData.profile.location}</p>
                </div>
                <div className="text-right md:text-left">
                  <p className="text-body-sm text-brand-text-muted">Contact</p>
                  <a href={`mailto:${cvData.profile.email}`} className="link-internal text-body text-brand-text-primary">{cvData.profile.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom max-w-4xl px-4 sm:px-6 lg:px-8" id="cv-content">
        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="summary-title">
          <h2 id="summary-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Professional Summary
          </h2>
          <p className="text-body text-brand-text-secondary print:text-brand-text-secondary leading-relaxed">
            {cvData.profile.summary}
          </p>
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="skills-title">
          <h2 id="skills-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Core Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-3">Security Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.core.map((skill) => (
                  <Badge key={skill} variant="blue" size="sm">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.technical.map((skill) => (
                  <Badge key={skill} variant="outline" size="sm">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-3">Security Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.security.map((skill) => (
                  <Badge key={skill} variant="red" size="sm">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-3">Development & Tooling</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.tools.map((skill) => (
                  <Badge key={skill} variant="outline" size="sm">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="cybersec-exp-title">
          <h2 id="cybersec-exp-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Cybersecurity Experience
          </h2>
          <div className="space-y-6">
            {experience.filter((e) => e.category === 'cybersecurity').map((exp) => (
              <Card key={exp.id} padding="md" className="print:shadow-none print:border print:border-gray-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-heading-md font-semibold text-brand-text-primary print:text-brand-text-primary">{exp.title}</h3>
                    <p className="text-body text-brand-text-secondary print:text-brand-text-secondary">{exp.organization} · {exp.employmentType} · {exp.location}</p>
                  </div>
                  <span className="text-body-sm text-brand-text-muted print:text-brand-text-muted whitespace-nowrap">{formatDateRange(exp.startDate, exp.endDate)}</span>
                </div>
                <p className="text-body text-brand-text-secondary print:text-brand-text-secondary mb-3">{exp.description}</p>
                <ul className="space-y-1.5" role="list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-body-sm text-brand-text-secondary print:text-brand-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-primary/50 mt-1.5 flex-shrink-0 print:bg-black" aria-hidden="true" />
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="infra-exp-title">
          <h2 id="infra-exp-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Infrastructure & Consulting Experience
          </h2>
          <div className="space-y-6">
            {experience.filter((e) => e.category === 'infrastructure').map((exp) => (
              <Card key={exp.id} padding="md" className="print:shadow-none print:border print:border-gray-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-heading-md font-semibold text-brand-text-primary print:text-brand-text-primary">{exp.title}</h3>
                    <p className="text-body text-brand-text-secondary print:text-brand-text-secondary">{exp.organization} · {exp.employmentType} · {exp.location}</p>
                  </div>
                  <span className="text-body-sm text-brand-text-muted print:text-brand-text-muted whitespace-nowrap">{formatDateRange(exp.startDate, exp.endDate)}</span>
                </div>
                <p className="text-body text-brand-text-secondary print:text-brand-text-secondary mb-3">{exp.description}</p>
                <ul className="space-y-1.5" role="list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-body-sm text-brand-text-secondary print:text-brand-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-accent/50 mt-1.5 flex-shrink-0 print:bg-black" aria-hidden="true" />
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="additional-exp-title">
          <h2 id="additional-exp-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Additional Experience
          </h2>
          <div className="space-y-6">
            {experience.filter((e) => e.category === 'additional').map((exp) => (
              <Card key={exp.id} padding="md" className="print:shadow-none print:border print:border-gray-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-heading-md font-semibold text-brand-text-primary print:text-brand-text-primary">{exp.title}</h3>
                    <p className="text-body text-brand-text-secondary print:text-brand-text-secondary">{exp.organization} · {exp.employmentType} · {exp.location}</p>
                  </div>
                  <span className="text-body-sm text-brand-text-muted print:text-brand-text-muted whitespace-nowrap">{formatDateRange(exp.startDate, exp.endDate)}</span>
                </div>
                <p className="text-body text-brand-text-secondary print:text-brand-text-secondary mb-3">{exp.description}</p>
                <ul className="space-y-1.5" role="list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-body-sm text-brand-text-secondary print:text-brand-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-accent/50 mt-1.5 flex-shrink-0 print:bg-black" aria-hidden="true" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="projects-title">
          <h2 id="projects-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Selected Projects
          </h2>
          {projects.length > 0 ? (
            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project.id} padding="md" className="print:shadow-none print:border print:border-gray-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-heading-md font-semibold text-brand-text-primary print:text-brand-text-primary">{project.name}</h3>
                      <p className="text-body-sm text-brand-text-secondary print:text-brand-text-secondary">{project.category} · {project.status}</p>
                    </div>
                  </div>
                  <p className="text-body text-brand-text-secondary print:text-brand-text-secondary mb-3">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" size="sm">{tech}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-body text-brand-text-secondary print:text-brand-text-secondary">No projects published yet.</p>
          )}
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="research-title">
          <h2 id="research-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Security Research
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-2 print:text-brand-text-primary">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.research.platforms.map((platform) => (
                  <Badge key={platform} variant="red" size="sm">{platform}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-2 print:text-brand-text-primary">Research Areas</h3>
              <div className="flex flex-wrap gap-2">
                {cvData.research.areas.map((area) => (
                  <Badge key={area.id} variant="outline" size="sm">{area.name}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-2 print:text-brand-text-primary">Methodology</h3>
              <ol className="space-y-1.5" role="list">
                {cvData.research.methodology.map((step, i) => (
                  <li key={step.id} className="text-body-sm text-brand-text-secondary print:text-brand-text-secondary flex items-start gap-2">
                    <span className="font-mono text-brand-blue-accent print:text-black flex-shrink-0">{i + 1}.</span>
                    <span>{step.title}: {step.description}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="education-title">
          <h2 id="education-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Education
          </h2>
          <div className="space-y-4">
            {cvData.education.map((edu) => (
              <div key={edu.institution} className="print:border-b print:border-gray-200 print:pb-3">
                <h3 className="text-heading-md font-semibold text-brand-text-primary print:text-brand-text-primary">{edu.institution}</h3>
                <p className="text-body text-brand-text-secondary print:text-brand-text-secondary">{edu.degree}{edu.field ? ` — ${edu.field}` : ''}</p>
                <p className="text-body-sm text-brand-text-muted print:text-brand-text-muted">{edu.startDate} – {edu.endDate} · {edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="training-title">
          <h2 id="training-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Additional Training
          </h2>
          <div className="space-y-4">
            {cvData.training.map((tr) => (
              <div key={tr.title} className="print:border-b print:border-gray-200 print:pb-3">
                <h3 className="text-heading-md font-semibold text-brand-text-primary print:text-brand-text-primary">{tr.title}</h3>
                <p className="text-body text-brand-text-secondary print:text-brand-text-secondary">{tr.provider} · {tr.startDate} – {tr.endDate}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-b border-brand-dark-border print:pb-4 print:border-brand-dark-border" aria-labelledby="languages-title">
          <h2 id="languages-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {cvData.languages.map((lang) => (
              <Badge key={lang.name} variant="outline" size="md">{lang.name}: {lang.proficiency}</Badge>
            ))}
          </div>
        </section>

        <section className="py-8 print:pb-4" aria-labelledby="links-title">
          <h2 id="links-title" className="text-heading-lg font-semibold text-brand-text-primary mb-4 print:text-brand-text-primary">
            Professional Links
          </h2>
          <div className="flex flex-wrap gap-3">
            {Object.entries(cvData.links).map(([key, url]) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-body-sm no-print:hidden" aria-label={`${key} (opens in new tab)`}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="no-print border-t border-brand-dark-border py-8">
        <div className="container-custom text-center">
          <p className="text-body-sm text-brand-text-muted">
            © {new Date().getFullYear()} Mallikharjun Swamy Sudnagunta — MasterGuyArjun
          </p>
          <p className="text-body-sm text-brand-text-muted mt-1">
            Cybersecurity Researcher · Infrastructure Engineer · Security Engineer
          </p>
        </div>
      </footer>
    </div>
  );
}
