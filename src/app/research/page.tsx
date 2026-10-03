import { Metadata } from 'next';
import { ResearchPage } from '@/components/research/ResearchPage';

export const metadata: Metadata = {
  title: 'Security Research',
  description: 'Security research, vulnerability disclosures, and methodology of Mallikharjun Swamy Sudnagunta — Independent vulnerability researcher across YesWeHack, HackerOne, and Bugcrowd.',
};

export default function ResearchPageRoute() {
  return <ResearchPage />;
}
