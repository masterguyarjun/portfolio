import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'vulndesk',
    name: 'VulnDesk',
    category: 'Security Tooling',
    description: 'A comprehensive vulnerability management and security automation platform designed for security researchers and bug bounty hunters. Integrates reconnaissance, scanning, and reporting workflows into a unified interface.',
    shortDescription: 'Vulnerability management and security automation platform for researchers',
    status: 'in-progress',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Security APIs'],
    features: [
      'Automated reconnaissance pipelines',
      'Vulnerability scanning orchestration',
      'Finding deduplication and triage',
      'Report generation and export',
      'Integration with bug bounty platforms',
      'Custom workflow automation',
    ],
    securityFocus: ['Reconnaissance Automation', 'Vulnerability Management', 'Security Workflow Orchestration'],
    githubUrl: 'https://github.com/masterguyarjun/vulndesk',
    liveUrl: undefined,
    screenshots: [],
    caseStudyUrl: undefined,
  },
  // Add more projects here as they become available
];

export const projectCategories = [
  'Security Tooling',
  'Web Application Security',
  'API Security',
  'Infrastructure',
  'Automation',
  'Research',
] as const;
