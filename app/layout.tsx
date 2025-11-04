import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Migration Factory | Enterprise IT Consulting & Data Migration',
  description: 'Leading provider of IT consulting, data migration, data cleansing, data governance, and AI automation services for enterprise digital transformation and M&A projects.',
  keywords: [
    'IT consulting',
    'data migration',
    'AI automation',
    'data cleansing',
    'data governance',
    'enterprise solutions',
    'digital transformation',
    'M&A IT services',
    'AI agents',
    'data integration',
  ],
  authors: [{ name: 'Migration Factory' }],
  creator: 'Migration Factory',
  publisher: 'Migration Factory',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://migrationfactory.com',
    title: 'Migration Factory | Enterprise IT Consulting & Data Migration',
    description: 'We can do IT - Enterprise solutions for data migration, AI automation, and digital transformation.',
    siteName: 'Migration Factory',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Migration Factory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migration Factory | Enterprise IT Consulting',
    description: 'We can do IT - Enterprise solutions for data migration, AI automation, and digital transformation.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF8A00" />
      </head>
      <body className="theme-orange">{children}</body>
    </html>
  );
}
