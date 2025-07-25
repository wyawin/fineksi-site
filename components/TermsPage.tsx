import React from 'react'
import { FileText, Shield, AlertTriangle, Clock, Users, Scale, Lock, Globe, Phone, Settings } from 'lucide-react'

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
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 id="introduction" className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.introduction.title')}</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#1f51fe]">
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.sections.introduction.content')}
                </p>
              </div>
            </div>

            {/* Platform Usage */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.platform_usage.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('terms.sections.platform_usage.content')}
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">User Responsibilities:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {t('terms.sections.platform_usage.responsibilities').map((responsibility: string, index: number) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-gray-900 mb-3">Prohibited Activities:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {t('terms.sections.platform_usage.prohibited_activities').map((activity: string, index: number) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Representations and Warranties */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.representations.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('terms.sections.representations.content')}
              </p>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {t('terms.sections.representations.warranties').map((warranty: string, index: number) => (
                    <li key={index}>{warranty}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Event of Default */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-[#f59e0b] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.default_events.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('terms.sections.default_events.content')}
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-[#fad85a] mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Events that constitute default:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {t('terms.sections.default_events.events').map((event: string, index: number) => (
                    <li key={index}>{event}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-gray-900 mb-3">Company's rights upon default:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {t('terms.sections.default_events.company_rights').map((right: string, index: number) => (
                    <li key={index}>{right}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Liabilities */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-[#072ba4] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.liabilities.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('terms.sections.liabilities.content')}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Company Disclaimers:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {t('terms.sections.liabilities.company_disclaimers').map((disclaimer: string, index: number) => (
                    <li key={index}>{disclaimer}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.intellectual_property.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('terms.sections.intellectual_property.content')}
              </p>
              <div className="bg-[#1f51fe]/5 p-6 rounded-lg border border-[#1f51fe]/20">
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.sections.intellectual_property.ownership')}
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.governing_law.title')}</h2>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.sections.governing_law.content')}
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Scale className="h-6 w-6 text-[#072ba4] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.dispute_resolution.title')}</h2>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.sections.dispute_resolution.content')}
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.contact.title')}</h2>
              </div>
              <div className="bg-[#1f51fe]/5 p-6 rounded-lg border border-[#1f51fe]/20">
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.sections.contact.content')}
                </p>
              </div>
            </div>

            {/* Miscellaneous */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Settings className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.miscellaneous.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('terms.sections.miscellaneous.content')}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Additional Terms:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {t('terms.sections.miscellaneous.additional_terms').map((term: string, index: number) => (
                    <li key={index}>{term}</li>
                  ))}
                </ul>
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}

export default TermsPage