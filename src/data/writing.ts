export interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
  publishDate: string;
  readTime: string;
  url?: string;
  tags: string[];
}

export const articles: Article[] = [
  // Articles will be added here when published
  // {
  //   id: 'article-1',
  //   title: 'Understanding Business Logic Vulnerabilities in Modern APIs',
  //   category: 'API Security',
  //   description: 'A deep dive into how business logic flaws differ from traditional technical vulnerabilities and why they require different detection approaches.',
  //   publishDate: '2024-03-15',
  //   readTime: '12 min',
  //   url: 'https://blog.masterguyarjun.online/business-logic-vulns',
  //   tags: ['API Security', 'Business Logic', 'Bug Bounty'],
  // },
];

export const writingCategories = [
  'Security Research',
  'Application Security',
  'API Security',
  'Infrastructure',
  'Automation',
  'Technical Projects',
] as const;

export const writingDescription = 'Technical writeups and case studies will be published here.';
