import { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'
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

  const title = t('metadata.about.title')
  const description = t('metadata.about.description')

  const canonicalUrl = `${SITE_CONFIG.baseUrl}/${locale}/about`

  return {
    title,
    description,
    openGraph: {
      title: `About ${t('site.name')} - Leading AI Experts in Financial Technology`,
      description,
      url: canonicalUrl,
    },
  }
}

export default function About({ params: { locale } }: { params: { locale: string } }) {
  return <AboutPage locale={locale} />
}