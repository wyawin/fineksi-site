import React from 'react'
import { Brain, Shield } from 'lucide-react'

// Import translations directly
import enTranslations from '../public/locales/en/common.json'
import idTranslations from '../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

const Footer = ({ locale = 'en' }: { locale?: string }) => {
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  const currentLocale = locale || 'en'
  
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
            <p className="text-gray-400 mb-2 max-w-md">
              PT Finskor Teknologi Indonesia
            </p>
            <p className="text-gray-400 mb-6 max-w-md">
              Gedung AD Premier Office Park Lantai 9<br/>Jalan TB Simatupang No.5,  Kelurahan Ragunan, Kecamatan Pasar Minggu, Jakarta Selatan
            </p>
            {/* Contact Information */}
            <div className="flex space-x-10 mb-6">
              <div>
                <div className="font-medium text-white mb-1">Phone</div>
                <div className="space-y-3 text-gray-400 text-sm">+62 851 5907 9011</div>
              </div>
              <div>
                <div className="font-medium text-white mb-1">Email</div>
                <div className="space-y-3 text-gray-400 text-sm">support@fineksi.com</div>
              </div>
            </div>
            <div className="flex space-x-4">
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
            <p className="text-gray-400 text-xs mt-6 max-w-md">
              {t('footer.compliance')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <nav aria-label="links">
              <ul className="space-y-2 text-gray-400">
                <li><a href={`/${currentLocale}`} className="hover:text-[#1f51fe] transition-colors">{t('nav.home')}</a></li>
                <li><a href={`/${currentLocale}/solutions`} className="hover:text-[#1f51fe] transition-colors">{t('nav.solution')}</a></li>
                <li><a href={`/${currentLocale}#benefits`} className="hover:text-white transition-colors">{t('nav.benefits')}</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <nav aria-label="Company links">
              <ul className="space-y-2 text-gray-400">
                <li><a href={`/${currentLocale}/about`} className="hover:text-[#fad85a] transition-colors">{t('nav.about')}</a></li>
                <li><a href={`/${currentLocale}/privacy`} className="hover:text-[#fad85a] transition-colors">{t('nav.privacy')}</a></li>
                <li><a href={`/${currentLocale}/terms`} className="hover:text-[#fad85a] transition-colors">{t('nav.terms')}</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Fineksi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer