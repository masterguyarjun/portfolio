import type { CVData, Education, Training } from './types';
import { experience } from './experience';
import { projects } from './projects';
import { researchAreas, researchMethodology, platforms } from './research';
import { profile } from './profile';

export const education: Education[] = [
  {
    institution: 'Krishna Memorial School',
    degree: 'Secondary School Education',
    field: 'General',
    startDate: '1990',
    endDate: '1995',
    location: 'India',
  },
];

export const training: Training[] = [
  {
    title: 'Web/Multimedia Management & Advanced Webmaster Architectures',
    provider: 'Udemy',
    startDate: '2020',
    endDate: '2020',
  },
  {
    title: 'Digital Systems Communication & Cross-Media Engineering',
    provider: 'Udemy',
    startDate: '2019',
    endDate: '2020',
  },
];

export const cvData: CVData = {
  profile: {
    name: profile.name,
    brand: profile.brand,
    email: profile.email,
    location: profile.location,
    title: `${profile.title.primary} • ${profile.title.secondary.join(' • ')}`,
    summary: profile.summary,
  },
  skills: {
    core: [
      'Application Security',
      'API Security',
      'Vulnerability Research',
      'Offensive Security',
      'Security Automation',
      'Linux Infrastructure',
    ],
    technical: [
      'Linux Systems Administration',
      'Networking & Protocols',
      'Virtualization (KVM, VMware, Docker)',
      'Web Servers (Nginx, Apache)',
      'Database Systems (MySQL, PostgreSQL)',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Cloud Platforms (AWS, GCP basics)',
    ],
    security: [
      'Burp Suite Professional',
      'FFUF / Gobuster / Dirsearch',
      'Nuclei / Nuclei Templates',
      'SQLMap',
      'OWASP ZAP',
      'Custom Python/Bash Automation',
      'Reconnaissance Frameworks',
      'Attack Surface Mapping',
      'Vulnerability Validation',
      'Threat Modeling',
    ],
    tools: [
      'Python',
      'Bash/Shell Scripting',
      'Git',
      'Docker',
      'VS Code',
      'Postman',
      'Jira/Confluence',
      'Markdown/Documentation',
    ],
  },
  experience: experience,
  projects: projects,
  research: {
    platforms: platforms.map((p) => p.name),
    areas: researchAreas,
    methodology: researchMethodology,
  },
  education: education,
  training: training,
  languages: profile.languages,
  links: profile.socials,
};

export const cvPdfPath = '/cv/Mallikharjun-Swamy-Sudnagunta-CV.pdf';
