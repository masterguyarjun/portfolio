import { Metadata } from 'next';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact — Mallikharjun Swamy Sudnagunta',
  description: 'Get in touch with Mallikharjun Swamy Sudnagunta (MasterGuyArjun) for cybersecurity research, infrastructure engineering, security consulting, or freelance opportunities.',
  openGraph: {
    title: 'Contact — Mallikharjun Swamy Sudnagunta',
    description: 'Get in touch for cybersecurity research, infrastructure engineering, or security consulting opportunities.',
    type: 'website',
    siteName: 'MasterGuyArjun',
  },
  twitter: {
    card: 'summary',
    title: 'Contact — Mallikharjun Swamy Sudnagunta',
    description: 'Get in touch for cybersecurity research, infrastructure engineering, or security consulting.',
  },
  robots: {
    index: true,
    follow: true,
  },
};
