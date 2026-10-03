import { Metadata } from 'next';
import { AboutPage } from '@/components/about/AboutPage';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Mallikharjun Swamy Sudnagunta — Cybersecurity Researcher, Infrastructure Engineer, and Security Engineer with 20+ years of technology experience.',
};

export default function AboutPageRoute() {
  return <AboutPage />;
}
