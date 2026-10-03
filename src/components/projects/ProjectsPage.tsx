'use client';

import { SectionHeading } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui';
import { Badge, Tag } from '@/components/ui';
import { Button } from '@/components/ui';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/lib/utils';

export function ProjectsPage() {
  if (projects.length === 0) {
    return (
      <div className="min-h-screen">
        <section className="section relative overflow-hidden" aria-labelledby="projects-hero-title">
          <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
          <div className="container-custom relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 id="projects-hero-title" className="text-display-lg font-bold text-brand-text-primary tracking-tight mb-6">
                Projects
              </h1>
              <p className="text-body-lg text-brand-text-secondary mb-10">
                Security tooling, automation, and research projects. More projects will be added here.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-brand-dark-surface/50" aria-labelledby="projects-empty">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center" id="projects-empty">
              <Card padding="lg" className="bg-brand-dark-bg border-brand-dark-border">
                <div className="text-brand-text-secondary">
                  <svg className="mx-auto mb-4 w-16 h-16 text-brand-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  <p className="text-body-lg mb-2">No projects published yet</p>
                  <p className="text-body-sm">Projects will appear here as they are added to the portfolio data.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="section relative overflow-hidden" aria-labelledby="projects-hero-title">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="projects-hero-title" className="text-display-lg font-bold text-brand-text-primary tracking-tight mb-6">
              Projects
            </h1>
            <p className="text-body-lg text-brand-text-secondary mb-4">
              Security tooling, automation, and research projects.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {projectCategories.map((cat) => (
                <Badge key={cat} variant="outline" size="sm">{cat}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pb-16 lg:pb-24" aria-labelledby="projects-grid-title">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" id="projects-grid-title">
            {projects.map((project, index) => (
              <Card key={project.id} hover padding="lg" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <CardTitle className="text-heading-lg">{project.name}</CardTitle>
                      <Badge variant="blue" size="sm" className="mt-2">{project.category}</Badge>
                    </div>
                    <Badge variant={
                      project.status === 'active' ? 'blue' :
                      project.status === 'in-progress' ? 'gold' :
                      project.status === 'completed' ? 'outline' : 'outline'
                    } size="sm">
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-body text-brand-text-secondary flex-1 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  {project.securityFocus && project.securityFocus.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.securityFocus.map((focus) => (
                        <Badge key={focus} variant="red" size="sm">{focus}</Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature) => (
                      <Badge key={feature} variant="outline" size="sm" className="max-w-[200px] truncate">{feature}</Badge>
                    ))}
                    {project.features.length > 3 && (
                      <Badge variant="outline" size="sm">+{project.features.length - 3} more</Badge>
                    )}
                  </div>

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
    </div>
  );
}
