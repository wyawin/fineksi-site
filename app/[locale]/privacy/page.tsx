import { Metadata } from 'next'
import PrivacyPage from '@/components/PrivacyPage'

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

  const title = t('metadata.privacy.title')
  const description = t('metadata.privacy.description')

  const canonicalUrl = `https://fineksi.com/${locale}/privacy`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
export default function Privacy({ params: { locale } }: { params: { locale: string } }) {
  return <PrivacyPage locale={locale} />
}