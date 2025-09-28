import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { PerformanceMonitor, ServiceWorkerRegistration, ResourcePreloader } from '@/components/PerformanceOptimizer'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Rakeeri Wigs - Kenya's #1 Wig Expert | Transform Your Confidence",
  description: "Join 269,000+ confident women who've discovered their perfect wig match. Premium wigs, free styling, nationwide delivery in 24 hours. Pay on delivery.",
  keywords: "wigs in Kenya, human hair wigs Nairobi, wig shops Kenya, Rakeeri Wigs, wig training Kenya",
  authors: [{ name: "Rakeeri Wigs" }],
  creator: "Rakeeri Wigs",
  publisher: "Rakeeri Wigs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rakeeri.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rakeeri Wigs - Kenya's #1 Wig Expert",
    description: "Transform your confidence with premium wigs. 269K+ followers trust Rakeeri for natural-looking wigs.",
    url: 'https://rakeeri.com',
    siteName: 'Rakeeri Wigs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rakeeri Wigs - Kenya\'s #1 Wig Expert',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rakeeri Wigs - Kenya's #1 Wig Expert",
    description: "Transform your confidence with premium wigs. 269K+ followers trust Rakeeri for natural-looking wigs.",
    images: ['/og-image.jpg'],
    creator: '@rakeeri',
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.placeholder.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ea580c" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
        <ResourcePreloader />
        {children}
      </body>
    </html>
  );
}