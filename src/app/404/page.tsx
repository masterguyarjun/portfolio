import { NotFoundPage } from '@/components/404/NotFoundPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found — MasterGuyArjun',
  description: 'The page you&apos;re looking for doesn&apos;t exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFoundPageWrapper() {
  return <NotFoundPage />;
}