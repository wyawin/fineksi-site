import { Metadata } from 'next'
import HomePage from '@/components/HomePage'

// Import translations directly
import enTranslations from '../../public/locales/en/common.json'
import idTranslations from '../../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

// Force SSR for this page
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
    title,
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

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return <HomePage locale={locale} />
}