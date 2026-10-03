export const profile = {
  name: 'Mallikharjun Swamy Sudnagunta',
  brand: 'MasterGuyArjun',
  location: 'India',
  email: 'masterguyarjun@gmail.com',
  title: {
    primary: 'Cybersecurity Researcher',
    secondary: ['Infrastructure Engineer', 'Security Engineer'],
  },
  summary: 'Technology professional with extensive experience across Linux infrastructure, systems administration, security research, offensive security, automation and security engineering.',
  specialties: [
    'Application Security',
    'API Security',
    'Vulnerability Research',
    'Offensive Security',
    'Security Automation',
    'Linux Infrastructure',
  ],
  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Telugu', proficiency: 'Native' },
    { name: 'Hindi', proficiency: 'Fluent' },
  ],
  socials: {
    github: 'https://github.com/masterguyarjun',
    linkedin: 'https://www.linkedin.com/in/masterguyarjun/',
    yeswehack: 'https://yeswehack.com/hunters/arjun456',
    hackerone: 'https://hackerone.com/arjun456',
    bugcrowd: 'https://bugcrowd.com/h/arjunasha46',
    fiverr: 'https://fiverr.com/kispvtltd',
    behance: 'https://behance.net/masterguyarjun',
    figma: 'https://figma.com/@masterguyarjun',
  },
  openToWork: 'Open to remote cybersecurity opportunities and EU-based roles.',
};

export type Profile = typeof profile;
