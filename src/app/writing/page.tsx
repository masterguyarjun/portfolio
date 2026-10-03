import { Metadata } from 'next';
import { WritingPage } from '@/components/writing/WritingPage';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Technical writeups, case studies, and security research publications by Mallikharjun Swamy Sudnagunta — Cybersecurity Researcher.',
};

export default function WritingPageRoute() {
  return <WritingPage />;
}
