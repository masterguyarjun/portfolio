'use client';

import { Card, CardContent, CardTitle, CardFooter } from '@/components/ui';
import { Badge, Tag } from '@/components/ui';
import { Button } from '@/components/ui';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

export function SelectedProjects() {
  if (projects.length === 0) {
    return (
      <section className="section bg-brand-dark-surface/50" aria-labelledby="projects-title">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16" id="projects-title">
            <h2 className="text-display-sm font-semibold text-brand-text-primary tracking-tight mb-4">
              Selected Projects
            </h2>
            <p className="text-body-lg text-brand-text-secondary">
              Security tooling and research projects. More projects will be added here.
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <Card padding="lg" className="bg-brand-dark-bg border-brand-dark-border">
              <div className="text-brand-text-secondary">
                <svg className="mx-auto mb-4 w-12 h-12 text-brand-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <p className="text-body">No projects published yet.</p>
                <p className="text-body-sm mt-2">Projects will appear here as they are added to the portfolio data.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" aria-labelledby="projects-title">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16" id="projects-title">
          <div>
            <h2 className="text-display-sm font-semibold text-brand-text-primary tracking-tight mb-3">
              Selected Projects
            </h2>
            <p className="text-body-lg text-brand-text-secondary max-w-xl">
              Security tooling, automation, and research projects.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <a href="/projects">View All Projects</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <Card key={project.id} hover padding="lg" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <CardTitle className="text-heading-md">{project.name}</CardTitle>
                    <Badge variant="blue" size="sm" className="mt-2">{project.category}</Badge>
                  </div>
                  <Badge variant={project.status === 'active' ? 'blue' : project.status === 'in-progress' ? 'gold' : 'outline'} size="sm">
                    {project.status}
                  </Badge>
                </div>
                <p className="text-body text-brand-text-secondary flex-1 mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                  {project.technologies.length > 5 && (
                    <Tag>+{project.technologies.length - 5} more</Tag>
                  )}
                </div>
                {project.securityFocus && project.securityFocus.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.securityFocus.map((focus) => (
                      <Badge key={focus} variant="red" size="sm">{focus}</Badge>
                    ))}
                  </div>
                )}
                <CardFooter className="pt-4 border-t border-brand-dark-border">
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub (opens in new tab)`}>
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live (opens in new tab)`}>
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.caseStudyUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read ${project.name} case study (opens in new tab)`}>
                          Case Study
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
