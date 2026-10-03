import { Metadata } from 'next';
import { ExperiencePage } from '@/components/experience/ExperiencePage';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience of Mallikharjun Swamy Sudnagunta — Cybersecurity Researcher, Infrastructure Engineer, and Security Engineer.',
};

export default function ExperiencePageRoute() {
  return <ExperiencePage />;
}
