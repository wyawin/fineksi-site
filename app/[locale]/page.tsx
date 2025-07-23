import { Metadata } from 'next'
import HomePage from '@/components/HomePage'

// Force SSR for this page
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Fineksi - AI-Powered Document Automation for Financial Institutions',
  description: 'Transform your credit process with advanced AI document automation, fraud detection, and cognitive analysis. Trusted by banks, multifinance, and P2P lending platforms.',
  openGraph: {
    title: 'Fineksi - AI-Powered Document Automation for Financial Institutions',
    description: 'Transform your credit process with advanced AI document automation, fraud detection, and cognitive analysis. Trusted by banks, multifinance, and P2P lending platforms.',
    url: 'https://fineksi.com',
    images: [
      {
        url: 'https://fineksi.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fineksi Platform',
      },
    ],
  },
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return <HomePage locale={locale} />
}