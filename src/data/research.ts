import type { ResearchArea, ResearchMethodologyStep } from './types';

export const researchAreas: ResearchArea[] = [
  { id: 'web-app-sec', name: 'Web Application Security' },
  { id: 'api-sec', name: 'API Security' },
  { id: 'auth', name: 'Authentication' },
  { id: 'authorization', name: 'Authorization' },
  { id: 'access-control', name: 'Access Control' },
  { id: 'business-logic', name: 'Business Logic' },
  { id: 'xss', name: 'XSS' },
  { id: 'sqli', name: 'SQL Injection' },
  { id: 'csrf', name: 'CSRF' },
  { id: 'info-disclosure', name: 'Information Disclosure' },
  { id: 'vuln-validation', name: 'Vulnerability Validation' },
  { id: 'reconnaissance', name: 'Reconnaissance' },
  { id: 'security-automation', name: 'Security Automation' },
  { id: 'attack-surface', name: 'Attack Surface Mapping' },
];

export const researchMethodology: ResearchMethodologyStep[] = [
  {
    id: 'reconnaissance',
    title: 'Reconnaissance',
    description: 'Passive and active information gathering to understand the target landscape',
  },
  {
    id: 'attack-surface-mapping',
    title: 'Attack Surface Mapping',
    description: 'Systematic identification and cataloging of all potential entry points',
  },
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'Targeted vulnerability discovery using automated and manual techniques',
  },
  {
    id: 'validation',
    title: 'Validation',
    description: 'Rigorous proof-of-concept development and impact verification',
  },
  {
    id: 'impact-analysis',
    title: 'Impact Analysis',
    description: 'Technical and business impact assessment with CVSS scoring',
  },
  {
    id: 'responsible-disclosure',
    title: 'Responsible Disclosure',
    description: 'Coordinated reporting through authorized channels with reproduction steps',
  },
  {
    id: 'remediation-guidance',
    title: 'Remediation Guidance',
    description: 'Architectural recommendations and mitigation strategies for developers',
  },
];

export const platforms = [
  {
    id: 'yeswehack',
    name: 'YesWeHack',
    username: 'arjun456',
    url: 'https://yeswehack.com/hunters/arjun456',
    description: 'Substantial report activity, security research history, vulnerability categories, responsible disclosure activity',
  },
  {
    id: 'hackerone',
    name: 'HackerOne',
    username: 'arjun456',
    url: 'https://hackerone.com/arjun456',
    description: 'Security research, vulnerability validation, and technical reporting',
  },
  {
    id: 'bugcrowd',
    name: 'Bugcrowd',
    username: 'arjunasha46',
    url: 'https://bugcrowd.com/h/arjunasha46',
    description: 'Gray-box penetration testing and enterprise security testing',
  },
];

export const selectedPublicResearch = [
  // Public disclosures can be added here
  // {
  //   id: 'cve-xxxx',
  //   title: 'Vulnerability Title',
  //   platform: 'YesWeHack',
  //   severity: 'High',
  //   type: 'XSS',
  //   target: 'example.com',
  //   date: '2024-01-15',
  //   url: 'https://yeswehack.com/...',
  // },
];
