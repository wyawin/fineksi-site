import { Metadata } from 'next'
import SolutionsPage from '@/components/SolutionsPage'
import { SITE_CONFIG } from '@/config/site'

// Import translations directly
import enTranslations from '../../../public/locales/en/common.json'
import idTranslations from '../../../public/locales/id/common.json'

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

  const title = t('metadata.solutions.title')
  const description = t('metadata.solutions.description')
  const keywords = t('site.keywords')
  const ogLocale = locale === 'id' ? 'id_ID' : 'en_US'

  const canonicalUrl = `${SITE_CONFIG.baseUrl}/${locale}/solutions`

  return {
    title,
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
      siteName: SITE_CONFIG.name,
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/twitter-image.png`,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_CONFIG.name}`,
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
        'en': `${SITE_CONFIG.baseUrl}/en/solutions`,
        'id': `${SITE_CONFIG.baseUrl}/id/solutions`,
      },
    },
  }
}
export default function Solutions({ params: { locale } }: { params: { locale: string } }) {
  return <SolutionsPage locale={locale} />
}