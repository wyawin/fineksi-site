import React from 'react'
import { FileText, Clock } from 'lucide-react'

// Import translations directly
import enTranslations from '../public/locales/en/common.json'
import idTranslations from '../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

const TermsPage = ({ locale = 'en' }: { locale?: string }) => {
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-16 pb-12 overflow-hidden" aria-labelledby="terms-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-[#1f51fe] mr-3" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('terms.hero.badge')}</span>
            </div>
            <h1 id="terms-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('terms.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('terms.hero.subtitle')}
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
              {t('terms.hero.last_updated')}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed">
                {t('terms.sections.introduction.content')}
              </p>
            </div>

            {/* Platform Usage */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.platform_usage.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.platform_usage.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Representations and Warranties */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.representations_warranties.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.representations_warranties.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Event of Default */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.event_of_default.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.event_of_default.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Liabilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.liabilities.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.liabilities.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.intellectual_property.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.intellectual_property.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Governing Laws */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.governing_laws.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.governing_laws.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Dispute Settlement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.dispute_settlement.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.dispute_settlement.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.contact_us.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.contact_us.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Others */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('terms.sections.others.title')}</h2>
              <div className="space-y-4">
                {t('terms.sections.others.content').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}

export default TermsPage