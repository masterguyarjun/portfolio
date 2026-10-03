import type { SocialLink } from './types';

export const socialLinks: SocialLink[] = [
  // Development
  { name: 'GitHub', url: 'https://github.com/masterguyarjun', icon: 'github', category: 'development' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/masterguyarjun/', icon: 'linkedin', category: 'development' },

  // Security Platforms
  { name: 'YesWeHack', url: 'https://yeswehack.com/hunters/arjun456', icon: 'yeswehack', category: 'security' },
  { name: 'HackerOne', url: 'https://hackerone.com/arjun456', icon: 'hackerone', category: 'security' },
  { name: 'Bugcrowd', url: 'https://bugcrowd.com/h/arjunasha46', icon: 'bugcrowd', category: 'security' },

  // Freelance
  { name: 'Fiverr', url: 'https://fiverr.com/kispvtltd', icon: 'fiverr', category: 'freelance' },

  // Design
  { name: 'Behance', url: 'https://behance.net/masterguyarjun', icon: 'behance', category: 'design' },
  { name: 'Figma', url: 'https://figma.com/@masterguyarjun', icon: 'figma', category: 'design' },
];

export const socialCategories = [
  { id: 'development', label: 'Development', icon: 'code' },
  { id: 'security', label: 'Security Platforms', icon: 'shield' },
  { id: 'freelance', label: 'Freelance', icon: 'briefcase' },
  { id: 'design', label: 'Design', icon: 'palette' },
] as const;
