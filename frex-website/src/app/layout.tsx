// This file has been replaced by layout.tsx
// The contents of this file are no longer needed.
// Please refer to layout.tsx for the updated layout.
import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: 'Frex - Building the Foundational Layer for Tomorrow',
    template: '%s | Frex',
  },
  description:
    'Frex converges cutting-edge software, quantum computing, and doctrinal research to engineer the core systems on which our future will be built.',
  keywords: [
    'quantum computing',
    'AI governance',
    'doctrinal systems',
    'futuristic research',
    'software technology',
  ],
  authors: [{ name: 'Frex' }],
  creator: 'Frex',
  publisher: 'Frex',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://frex.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frex.com',
    title: 'Frex - Building the Foundational Layer for Tomorrow',
    description: 'Cutting-edge research in quantum computing and doctrinal systems',
    siteName: 'Frex',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Frex - Building the Future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frex - Building the Foundational Layer for Tomorrow',
    description: 'Cutting-edge research in quantum computing and doctrinal systems',
    images: ['/og-image.jpg'],
    creator: '@frex',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: 'Frex - Building the Foundational Layer for Tomorrow',
    template: '%s | Frex',
  },
  description:
    'Frex converges cutting-edge software, quantum computing, and doctrinal research to engineer the core systems on which our future will be built.',
  keywords: [
    'quantum computing',
    'AI governance',
    'doctrinal systems',
    'futuristic research',
    'software technology',
  ],
  authors: [{ name: 'Frex' }],
  creator: 'Frex',
  publisher: 'Frex',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://frex.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frex.com',
    title: 'Frex - Building the Foundational Layer for Tomorrow',
    description: 'Cutting-edge research in quantum computing and doctrinal systems',
    siteName: 'Frex',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Frex - Building the Future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frex - Building the Foundational Layer for Tomorrow',
    description: 'Cutting-edge research in quantum computing and doctrinal systems',
    images: ['/og-image.jpg'],
    creator: '@frex',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
