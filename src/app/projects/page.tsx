import { Metadata } from 'next';
import { ProjectsPage } from '@/components/projects/ProjectsPage';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Security tooling, automation, and research projects by Mallikharjun Swamy Sudnagunta — Cybersecurity Researcher and Infrastructure Engineer.',
};

export default function ProjectsPageRoute() {
  return <ProjectsPage />;
}
