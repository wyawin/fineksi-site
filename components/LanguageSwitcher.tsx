'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

const LanguageSwitcher = ({ currentLocale = 'en' }: { currentLocale?: string }) => {
  const pathname = usePathname()
  const locales = ['en', 'id']

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    window.location.href = newPath
  }

  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 text-gray-600 hover:text-[#1f51fe] transition-colors">
        <Globe className="h-4 w-4 mr-1" aria-hidden="true" />
        <span className="text-sm font-medium uppercase">{currentLocale}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {locales?.map((lng) => (
          <button
            key={lng}
            onClick={() => switchLanguage(lng)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
              currentLocale === lng ? 'text-[#1f51fe] font-medium' : 'text-gray-700'
            }`}
          >
            {lng === 'en' ? 'English' : 'Bahasa Indonesia'}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher