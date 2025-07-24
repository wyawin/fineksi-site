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
                src="/2.png" 
                alt="Fineksi Logo" 
                className="h-8 w-auto mr-2"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold bg-gradient-to-r from-[#1f51fe] to-[#fad85a] bg-clip-text text-transparent">Fineksi</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering financial institutions with next-generation AI, neural networks, 
              and cognitive automation for superhuman lending decisions.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-green-400 animate-pulse" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold">AI-Secured & SOC 2</div>
                <div className="text-xs text-gray-400">Military-Grade Security</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#1f51fe]">AI Platform</h3>
            <nav aria-label="AI Platform links">
              <ul className="space-y-2 text-gray-400">
                <li><a href={`/${currentLocale}#features`} className="hover:text-[#1f51fe] transition-colors">{t('nav.features')}</a></li>
                <li><a href={`/${currentLocale}/solutions`} className="hover:text-[#1f51fe] transition-colors">Solutions</a></li>
                <li><a href={`/${currentLocale}#benefits`} className="hover:text-white transition-colors">{t('nav.benefits')}</a></li>
                <li><a href="#" className="hover:text-[#1f51fe] transition-colors">AI Pricing</a></li>
                <li><a href="#" className="hover:text-[#1f51fe] transition-colors">Neural API Docs</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <nav aria-label="Company links">
              <ul className="space-y-2 text-gray-400">
                <li><a href={`/${currentLocale}/about`} className="hover:text-[#fad85a] transition-colors">{t('nav.about')}</a></li>
                <li><a href={`/${currentLocale}#contact`} className="hover:text-[#fad85a] transition-colors">Contact</a></li>
                <li><a href={`/${currentLocale}/privacy`} className="hover:text-[#fad85a] transition-colors">{t('nav.privacy')}</a></li>
                <li><a href={`/${currentLocale}/terms`} className="hover:text-[#fad85a] transition-colors">{t('nav.terms')}</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Fineksi. Powered by Advanced Neural Networks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer