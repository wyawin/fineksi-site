'use client'

import React, { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Globe, ChevronDown } from 'lucide-react'

const LanguageSwitcher = ({ currentLocale = 'en' }: { currentLocale?: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const locales = ['en', 'id']

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    setIsOpen(false)
    window.location.href = newPath
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-gray-600 hover:text-[#1f51fe] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1f51fe] focus:ring-opacity-50 rounded-md"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 mr-1" aria-hidden="true" />
        <span className="text-sm font-medium uppercase">{currentLocale}</span>
        <ChevronDown 
          className={`h-3 w-3 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          aria-hidden="true" 
        />
      </button>
      
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div className="fixed inset-0 z-40 md:hidden" onClick={() => setIsOpen(false)} />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transform opacity-100 scale-100 transition-all duration-200">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {locales?.map((lng) => (
                <button
                  key={lng}
                  onClick={() => switchLanguage(lng)}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${
                    currentLocale === lng ? 'text-[#1f51fe] font-medium bg-blue-50' : 'text-gray-700'
                  }`}
                  role="menuitem"
                >
                  <span>{lng === 'en' ? 'English' : 'Bahasa Indonesia'}</span>
                  {currentLocale === lng && (
                    <div className="w-2 h-2 bg-[#1f51fe] rounded-full" aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSwitcher