'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + searchParams.toString()
      
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}