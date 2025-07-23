import { Metadata } from 'next'
import TermsPage from '@/components/TermsPage'

// Force SSR for this page
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Terms and Conditions - Fineksi Service Agreement',
  description: 'Read the terms and conditions for using Fineksi\'s document automation and credit analysis services. Updated January 2025.',
  openGraph: {
    title: 'Terms and Conditions - Fineksi Service Agreement',
    description: 'Read the terms and conditions for using Fineksi\'s document automation and credit analysis services. Updated January 2025.',
    url: 'https://fineksi.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Terms() {
  return <TermsPage />
}