import { Metadata } from 'next'
import PrivacyPage from '@/components/PrivacyPage'

// Force SSR for this page
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Privacy Policy - How Fineksi Protects Your Data',
  description: 'Learn how Fineksi protects and handles your data with military-grade security, SOC 2 compliance, and GDPR adherence in our AI-powered financial services.',
  openGraph: {
    title: 'Privacy Policy - How Fineksi Protects Your Data',
    description: 'Learn how Fineksi protects and handles your data with military-grade security, SOC 2 compliance, and GDPR adherence in our AI-powered financial services.',
    url: 'https://fineksi.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Privacy() {
  return <PrivacyPage />
}