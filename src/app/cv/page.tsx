import { Metadata } from 'next';
import { CVPage } from '@/components/cv/CVPage';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Curriculum Vitae of Mallikharjun Swamy Sudnagunta — Cybersecurity Researcher, Infrastructure Engineer, Security Engineer. View online or download PDF.',
};

export default function CVPageRoute() {
  return <CVPage />;
}
