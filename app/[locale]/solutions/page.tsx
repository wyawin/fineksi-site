import { Metadata } from 'next'
import SolutionsPage from '@/components/SolutionsPage'

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

  const canonicalUrl = `https://fineksi.com/${locale}/solutions`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
  }
}
export default function Solutions({ params: { locale } }: { params: { locale: string } }) {
  return <SolutionsPage locale={locale} />
}