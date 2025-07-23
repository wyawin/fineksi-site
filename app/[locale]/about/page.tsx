import { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'

// Force SSR for this page
export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'About Us - Leading AI Experts in Financial Technology',
  description: 'Meet the world-class AI team behind Fineksi. Learn about our mission to democratize AI for financial institutions and our cutting-edge neural network technology.',
  openGraph: {
    title: 'About Fineksi - Leading AI Experts in Financial Technology',
    description: 'Meet the world-class AI team behind Fineksi. Learn about our mission to democratize AI for financial institutions and our cutting-edge neural network technology.',
    url: 'https://fineksi.com/about',
  },
}

export default function About({ params: { locale } }: { params: { locale: string } }) {
  return <AboutPage locale={locale} />
}