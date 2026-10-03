'use client';

import { Badge } from '@/components/ui';
import { SectionHeading } from '@/components/ui';
import { cn } from '@/lib/utils';

const capabilities = {
  'Security Testing': [
    'Burp Suite Professional',
    'OWASP ZAP',
    'Nuclei / Custom Templates',
    'FFUF / Gobuster / Dirsearch',
    'SQLMap',
    'Custom Python/Bash Scripts',
  ],
  'Reconnaissance & Discovery': [
    'Subdomain Enumeration',
    'Attack Surface Mapping',
    'Asset Discovery & Monitoring',
    'Technology Fingerprinting',
    'API Endpoint Discovery',
    'Parameter Discovery',
  ],
  'Vulnerability Classes': [
    'XSS (Reflected, Stored, DOM)',
    'SQL Injection',
    'CSRF',
    'Authentication Bypass',
    'Authorization Flaws (IDOR, BOLA)',
    'Business Logic Vulnerabilities',
    'Server-Side Request Forgery (SSRF)',
    'Template Injection (SSTI)',
    'Information Disclosure',
  ],
  'Infrastructure & Automation': [
    'Linux Systems Administration',
    'Docker / Containerization',
    'Nginx / Apache Configuration',
    'CI/CD Pipeline Security',
    'Infrastructure as Code',
    'Network Configuration & Hardening',
    'Backup & Disaster Recovery',
    'Server Migration & Optimization',
  ],
  'Development & Tooling': [
    'Python (Automation, Tooling)',
    'Bash/Shell Scripting',
    'Git Version Control',
    'REST/GraphQL API Testing',
    'Postman / Custom Clients',
    'Markdown Documentation',
    'Jira / Confluence',
  ],
};

export function TechnicalCapabilities() {
  return (
    <section className="section" aria-labelledby="capabilities-title">
      <div className="container-custom">
        <SectionHeading
          id="capabilities-title"
          title="Technical Capabilities"
          subtitle="Tools, methodologies, and technical domains applied across security research and infrastructure engineering."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(capabilities).map(([category, items], catIndex) => (
            <div key={category} className="card p-6 group" style={{ animationDelay: `${catIndex * 100}ms` }}>
              <h3 className="text-heading-md font-semibold text-brand-text-primary mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-blue-accent" aria-hidden="true" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, itemIndex) => (
                  <Badge
                    key={item}
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-brand-blue-primary/10 group-hover:border-brand-blue-primary/50 group-hover:text-brand-blue-accent transition-all duration-fast"
                    style={{ animationDelay: `${catIndex * 100 + itemIndex * 50}ms` }}
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
