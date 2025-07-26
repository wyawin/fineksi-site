import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@/config/site'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: SITE_CONFIG.siteTitle,
    template: '%s | Fineksi'
  },
  description: SITE_CONFIG.siteDescription,
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
    url: SITE_CONFIG.baseUrl,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.siteTitle,
    description: SITE_CONFIG.siteDescription,
    images: [
      {
        url: `${SITE_CONFIG.baseUrl}/images/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.siteTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.siteTitle,
    description: SITE_CONFIG.siteDescription,
    images: [`${SITE_CONFIG.baseUrl}/images/twitter-image.png`],
    creator: '@fineksi',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: SITE_CONFIG.baseUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.gaTrackingId}`}
          strategy="afterInteractive"
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE_CONFIG.gaTrackingId}');
          `}
        </Script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": SITE_CONFIG.name,
              "description": SITE_CONFIG.description,
              "url": SITE_CONFIG.baseUrl,
              "logo": `${SITE_CONFIG.baseUrl}/images/1.png`,
              "foundingDate": SITE_CONFIG.foundingYear,
              "industry": SITE_CONFIG.industry,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": SITE_CONFIG.phone,
                "contactType": "support",
                "email": SITE_CONFIG.email
              },
              "sameAs": [
                SITE_CONFIG.linkedinLink,
                SITE_CONFIG.twitterLink
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