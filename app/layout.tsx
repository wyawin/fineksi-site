import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: {
    default: 'Fineksi - AI-Powered Document Automation for Financial Institutions',
    template: '%s | Fineksi'
  },
  description: 'Transform your credit process with advanced AI document automation, fraud detection, and cognitive analysis. Trusted by banks, multifinance, and P2P lending platforms.',
  keywords: ['AI document automation', 'financial technology', 'credit analysis', 'fraud detection', 'neural networks', 'banking AI', 'fintech', 'document processing'],
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
    url: 'https://fineksi.com',
    siteName: 'Fineksi',
    title: 'Fineksi - AI-Powered Document Automation for Financial Institutions',
    description: 'Transform your credit process with advanced AI document automation, fraud detection, and cognitive analysis. Trusted by banks, multifinance, and P2P lending platforms.',
    images: [
      {
        url: 'https://fineksi.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fineksi - AI-Powered Financial Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fineksi - AI-Powered Document Automation for Financial Institutions',
    description: 'Transform your credit process with advanced AI document automation, fraud detection, and cognitive analysis. Trusted by banks, multifinance, and P2P lending platforms.',
    images: ['https://fineksi.com/twitter-image.jpg'],
    creator: '@fineksi',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://fineksi.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable Next.js client-side navigation
              if (typeof window !== 'undefined') {
                window.__NEXT_DATA__ = window.__NEXT_DATA__ || {};
                window.__NEXT_DATA__.props = window.__NEXT_DATA__.props || {};
                window.__NEXT_DATA__.props.pageProps = window.__NEXT_DATA__.props.pageProps || {};
                window.__NEXT_DATA__.props.pageProps.router = { push: function(url) { window.location.href = url; } };
              }
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fineksi",
              "description": "AI-powered document automation and credit analysis for financial institutions",
              "url": "https://fineksi.com",
              "logo": "https://fineksi.com/logo.png",
              "foundingDate": "2024",
              "industry": "Financial Technology",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service",
                "email": "contact@fineksi.com"
              },
              "sameAs": [
                "https://linkedin.com/company/fineksi",
                "https://twitter.com/fineksi"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}