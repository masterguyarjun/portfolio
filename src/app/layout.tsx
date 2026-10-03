import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import { SkipLink } from '@/components/ui';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://masterguyarjun.online'),
  title: {
    default: 'Mallikharjun Swamy Sudnagunta | Cybersecurity Researcher & Infrastructure Engineer',
    template: '%s | MasterGuyArjun',
  },
  description: 'Cybersecurity researcher and infrastructure engineer specializing in application security, API security, vulnerability research, security automation and Linux infrastructure.',
  keywords: [
    'cybersecurity researcher',
    'infrastructure engineer',
    'security engineer',
    'application security',
    'API security',
    'vulnerability research',
    'offensive security',
    'security automation',
    'Linux infrastructure',
    'bug bounty',
    'penetration testing',
  ],
  authors: [{ name: 'Mallikharjun Swamy Sudnagunta', url: 'https://masterguyarjun.online' }],
  creator: 'MasterGuyArjun',
  publisher: 'MasterGuyArjun',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://masterguyarjun.online',
    siteName: 'MasterGuyArjun',
    title: 'Mallikharjun Swamy Sudnagunta | Cybersecurity Researcher & Infrastructure Engineer',
    description: 'Cybersecurity researcher and infrastructure engineer specializing in application security, API security, vulnerability research, security automation and Linux infrastructure.',
    images: [
      {
        url: '/brand/social/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MasterGuyArjun - Mallikharjun Swamy Sudnagunta | Cybersecurity Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mallikharjun Swamy Sudnagunta | Cybersecurity Researcher & Infrastructure Engineer',
    description: 'Cybersecurity researcher and infrastructure engineer specializing in application security, API security, vulnerability research, security automation and Linux infrastructure.',
    images: ['/brand/social/og-image.png'],
    creator: '@masterguyarjun',
  },
  icons: {
    icon: '/brand/favicon/favicon.ico',
    shortcut: '/brand/favicon/favicon-16x16.png',
    apple: '/brand/favicon/apple-touch-icon.png',
  },
  manifest: '/brand/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B0F1A' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F1A' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-dark-bg text-brand-text-primary antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1 pt-16" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
