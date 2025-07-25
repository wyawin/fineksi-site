'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Brain, Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

// Import translations directly
import enTranslations from '../public/locales/en/common.json'
import idTranslations from '../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

const Header = ({ locale = 'en' }: { locale?: string }) => {
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  // Force server-side navigation
  const handleNavigation = (path: string) => {
    window.location.href = path
  }
  
  const currentLocale = locale || 'en'
  
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm" role="banner" suppressHydrationWarning>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href={`/${currentLocale}`} className="flex-shrink-0 flex items-center">
              <img 
                src="/images/1.png" 
                alt="Fineksi Logo" 
                className="h-11 w-auto mr-2"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6" role="menubar">
              <a 
                href={`/${currentLocale}/solutions`} 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(`/${currentLocale}/solutions`) ? 'text-[#1f51fe]' : 'text-gray-600 hover:text-[#1f51fe]'
                }`}
                role="menuitem"
              >
                {t('nav.solution')}
              </a>
              <a 
                href={`/${currentLocale}/about`} 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(`/${currentLocale}/about`) ? 'text-[#1f51fe]' : 'text-gray-600 hover:text-[#1f51fe]'
                }`}
                role="menuitem"
              >
                {t('nav.about')}
              </a>
              <LanguageSwitcher currentLocale={currentLocale} />
              <a href={`/${currentLocale}#calendly-contact`} className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#1f51fe]/25 transition-all duration-200" role="menuitem">{t('nav.demo')}</a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher currentLocale={currentLocale} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#1f51fe] p-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
            <a 
              href={`/${currentLocale}/solutions`} 
              className={`block px-3 py-2 text-base font-medium ${
                isActive(`/${currentLocale}/solutions`) ? 'text-[#1f51fe]' : 'text-gray-600 hover:text-[#1f51fe]'
              }`}
            >
              {t('nav.solution')}
            </a>
            <a 
              href={`/${currentLocale}/about`} 
              className={`block px-3 py-2 text-base font-medium ${
                isActive(`/${currentLocale}/about`) ? 'text-[#1f51fe]' : 'text-gray-600 hover:text-[#1f51fe]'
              }`}
            >
              {t('nav.about')}
            </a>
            <a href={`/${currentLocale}#calendly-contact`} className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white block px-3 py-2 rounded-lg text-base font-medium mx-3 mt-4">{t('nav.demo')}</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header