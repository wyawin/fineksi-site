'use client'

import React, { useState, useEffect } from 'react'
import { Linkedin } from 'lucide-react'
import { SITE_CONFIG } from '@/config/site'
import { detectCountryFromIP, isIndonesia } from '@/utils/ipDetection'

// Import translations directly
import enTranslations from '../public/locales/en/common.json'
import idTranslations from '../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

const Footer = ({ locale = 'en' }: { locale?: string }) => {
  const [isFromIndonesia, setIsFromIndonesia] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const countryInfo = await detectCountryFromIP()
        setIsFromIndonesia(isIndonesia(countryInfo.countryCode))
      } catch (error) {
        console.error('Failed to detect country:', error)
        // Default to Singapore entity on error
        setIsFromIndonesia(false)
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [])

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  const currentLocale = locale || 'en'

  // Get appropriate legal entity information based on location
  const getLegalEntityInfo = () => {
    if (isLoading) {
      // Show Indonesia entity as default while loading
      return {
        name: SITE_CONFIG.idLegalEntity,
        address: SITE_CONFIG.idAddress
      }
    }

    if (isFromIndonesia) {
      return {
        name: SITE_CONFIG.idLegalEntity,
        address: SITE_CONFIG.idAddress
      }
    } else {
      return {
        name: SITE_CONFIG.sgLegalEntity,
        address: SITE_CONFIG.sgAddress
      }
    }
  }

  const legalEntity = getLegalEntityInfo()
  
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/images/2.png" 
                alt="Fineksi Logo" 
                className="h-8 w-auto mr-2"
                width={32}
                height={32}
              />
            </div>
            <p className="text-gray-400 mb-2 max-w-md" suppressHydrationWarning>
              {legalEntity.name}
            </p>
            <p className="text-gray-400 mb-6 max-w-md" suppressHydrationWarning>
              {legalEntity.address}
            </p>
            {/* Contact Information */}
            <div className="flex space-x-10 mb-6">
              <div>
                <div className="font-medium text-white mb-1">{t('footer.whatsapp')}</div>
                <div className="space-y-3 text-gray-400 text-sm">{SITE_CONFIG.phone}</div>
              </div>
              <div>
                <div className="font-medium text-white mb-1">{t('footer.email')}</div>
                <div className="space-y-3 text-gray-400 text-sm">{SITE_CONFIG.email}</div>
              </div>
            </div>
            <div className="flex space-x-4">
             
              {
                isFromIndonesia ?
                  <>
                    {/* Komdigi Logo */} 
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-3 space-y-2 sm:space-y-0 bg-white/10 px-4 py-3 rounded-lg hover:bg-white/20 transition-colors">
                      <img 
                        src="/images/komdigi-2024.png" 
                        alt="Komdigi - Ministry of Communication and Digital Indonesia"
                        className="w-10 h-10 object-contain bg-white rounded p-1"
                        width={40}
                        height={40}
                      />
                      <div className="text-xs text-gray-300 text-center sm:text-left">
                        <div className="font-semibold">Komdigi</div>
                        <div className="text-gray-400">{t('footer.compliance_item.registered')}</div>
                      </div>
                    </div>
                  </>
                : null
              }
              
              {
                isFromIndonesia ?
                  <>
                    {/* AFTECh Logo */}
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-3 space-y-2 sm:space-y-0 bg-white/10 px-4 py-3 rounded-lg hover:bg-white/20 transition-colors">
                      <img 
                        src="/images/fintech-aftech.png" 
                        alt="AFTECH - Asosiasi Fintech Indonesia (Indonesian Fintech Association)"
                        className="w-10 h-10 object-contain bg-white rounded p-1"
                        width={40}
                        height={40}
                      />
                      <div className="text-xs text-gray-300 text-center sm:text-left">
                        <div className="font-semibold">AFTECH</div>
                        <div className="text-gray-400">{t('footer.compliance_item.member')}</div>
                      </div>
                    </div>
                  </>
                : null
              }
              
              {/* ISO 27001:2013 Logo */}
              <div className="flex flex-col sm:flex-row items-center sm:space-x-3 space-y-2 sm:space-y-0 bg-white/10 px-4 py-3 rounded-lg hover:bg-white/20 transition-colors">
                <img 
                  src="/images/iso270012022.png" 
                  alt="ISO 27001:2013 - Information Security Management System Certification"
                  className="w-10 h-10 object-contain bg-white rounded p-1"
                  width={40}
                  height={40}
                />
                <div className="text-xs text-gray-300 text-center sm:text-left">
                  <div className="font-semibold">ISO 27001:2022</div>
                  <div className="text-gray-400">{t('footer.compliance_item.certified')}</div>
                </div>
              </div>
            </div>
            {
              isFromIndonesia ? 
              <p className="text-gray-400 text-xs mt-6 max-w-md">
                {t('footer.compliance')}
              </p> : null
            }
            
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.link_title')}</h3>
            <nav aria-label="links">
              <ul className="space-y-2 text-gray-400">
                <li><a href={`/${currentLocale}`} className="hover:text-[#1f51fe] transition-colors">{t('nav.home')}</a></li>
                <li><a href={`/${currentLocale}/solutions`} className="hover:text-[#1f51fe] transition-colors">{t('nav.solution')}</a></li>
                <li><a href={`/${currentLocale}#whyus`} className="hover:text-white transition-colors">{t('nav.whyus')}</a></li>
                <li><a href={SITE_CONFIG.blogLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#1f51fe] transition-colors">{t('nav.blog')}</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company_title')}</h3>
            <nav aria-label="Company links">
              <ul className="space-y-2 text-gray-400">
                <li><a href={`/${currentLocale}/about`} className="hover:text-[#fad85a] transition-colors">{t('nav.about')}</a></li>
                <li><a href={`/${currentLocale}/privacy`} className="hover:text-[#fad85a] transition-colors">{t('nav.privacy')}</a></li>
                <li><a href={`/${currentLocale}/terms`} className="hover:text-[#fad85a] transition-colors">{t('nav.terms')}</a></li>
              </ul>
            </nav>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.follow_us')}</h3>
            <div className="flex space-x-4">
              <a 
                href={SITE_CONFIG.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors group"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white group-hover:text-[#0077b5] transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer