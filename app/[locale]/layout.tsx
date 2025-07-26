import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { SITE_CONFIG } from '@/config/site'
import Script from 'next/script'
import GoogleAnalytics from '@/components/GoogleAnalytics'

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
  const canonicalUrl = `${SITE_CONFIG.baseUrl}/${locale}`

  return {
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    title: {
      default: title,
      template: `%s | ${t('site.name')}`
    },
    description,
    keywords: keywords.split(', '),
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
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
          url: `${SITE_CONFIG.baseUrl}/images/twitter-image.png`,
          width: 1200,
          height: 630,
          alt: `${t('site.name')}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_CONFIG.baseUrl}/images/twitter-image.png`],
      creator: `@${SITE_CONFIG.name}`,
    },
    verification: {
      google: 'your-google-verification-code',
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${SITE_CONFIG.baseUrl}/en`,
        'id': `${SITE_CONFIG.baseUrl}/id`,
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
        <link rel="icon" href="/images/favicon.png" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
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
        <div className="min-h-screen bg-white">
          <GoogleAnalytics />
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