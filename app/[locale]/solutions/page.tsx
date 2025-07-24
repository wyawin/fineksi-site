import { Metadata } from 'next'
import SolutionsPage from '@/components/SolutionsPage'

// Force SSR for this page
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'AI Document Analysis Solutions - Comprehensive Financial Document Processing',
  description: 'Discover Fineksi\'s comprehensive AI-powered document analysis solutions for banks, multifinance, and P2P lending. Process bank statements, financial reports, legal documents, and more with 99.8% accuracy.',
  openGraph: {
    title: 'AI Document Analysis Solutions - Comprehensive Financial Document Processing',
    description: 'Discover Fineksi\'s comprehensive AI-powered document analysis solutions for banks, multifinance, and P2P lending. Process bank statements, financial reports, legal documents, and more with 99.8% accuracy.',
    url: 'https://fineksi.com/solutions',
  },
}

export default function Solutions({ params: { locale } }: { params: { locale: string } }) {
  return <SolutionsPage locale={locale} />
}