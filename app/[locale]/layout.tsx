import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'

// Import translations directly
import enTranslations from '../../public/locales/en/common.json'
import idTranslations from '../../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

const inter = Inter({ subsets: ['latin'] })

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic'
export const revalidate = 0

// Generate metadata based on locale
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  const title = t('site.title')
  const description = t('site.description')
  const keywords = t('site.keywords')
  const ogLocale = locale === 'id' ? 'id_ID' : 'en_US'
  const canonicalUrl = `https://fineksi.com/${locale}`

  return {
    title: {
      default: title,
      template: `%s | ${t('site.name')}`
    },
    description,
    keywords: keywords.split(', '),
    authors: [{ name: 'Fineksi' }],
    creator: 'Fineksi',
    publisher: 'Fineksi',
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
      locale: ogLocale,
      url: canonicalUrl,
      siteName: t('site.name'),
      title,
      description,
      images: [
        {
          url: 'https://fineksi.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${t('site.name')} - AI-Powered Financial Technology`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://fineksi.com/twitter-image.jpg'],
      creator: '@fineksi',
    },
    verification: {
      google: 'your-google-verification-code',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': 'https://fineksi.com/en',
        'id': 'https://fineksi.com/id',
      },
    },
  }
}

const locales = ['en', 'id']

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound()
  }
  
  return (
    <html lang={locale}>
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
        <div className="min-h-screen bg-white">
          <Header locale={locale} />
          <main>
            {children}
          </main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  )
}