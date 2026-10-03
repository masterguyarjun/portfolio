import { Metadata } from 'next';
import { FreelancePage } from '@/components/freelance/FreelancePage';

export const metadata: Metadata = {
  title: 'Freelance & Design',
  description: 'Freelance consulting, client work, and design portfolio of Mallikharjun Swamy Sudnagunta — Infrastructure consulting, Fiverr, Behance, and Figma.',
};

export default function FreelancePageRoute() {
  return <FreelancePage />;
}
