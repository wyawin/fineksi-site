import { redirect } from 'next/navigation'

// Force dynamic rendering for SSR
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function RootPage() {
  // Redirect to default locale
  redirect('/en')
}