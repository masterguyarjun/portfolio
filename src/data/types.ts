export interface Experience {
  id: string;
  category: 'cybersecurity' | 'infrastructure' | 'additional';
  title: string;
  organization: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  status: 'active' | 'completed' | 'archived' | 'in-progress';
  technologies: string[];
  features: string[];
  securityFocus?: string[];
  githubUrl?: string;
  liveUrl?: string;
  screenshots?: string[];
  caseStudyUrl?: string;
}

export interface ResearchArea {
  id: string;
  name: string;
  description?: string;
}

export interface ResearchMethodologyStep {
  id: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  category: 'development' | 'security' | 'freelance' | 'design';
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 1-5
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  location?: string;
}

export interface Training {
  title: string;
  provider: string;
  startDate: string;
  endDate: string;
}

export interface CVData {
  profile: {
    name: string;
    brand: string;
    email: string;
    location: string;
    title: string;
    summary: string;
  };
  skills: {
    core: string[];
    technical: string[];
    security: string[];
    tools: string[];
  };
  experience: Experience[];
  projects: Project[];
  research: {
    platforms: string[];
    areas: ResearchArea[];
    methodology: ResearchMethodologyStep[];
  };
  education: Education[];
  training: Training[];
  languages: { name: string; proficiency: string }[];
  links: Record<string, string>;
}
