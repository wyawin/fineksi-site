import React from 'react'
import { Shield, Lock, Eye, Database, AlertCircle, CheckCircle, FileText, Users, Mail } from 'lucide-react'

// Import translations directly
import enTranslations from '../public/locales/en/common.json'
import idTranslations from '../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

const PrivacyPage = ({ locale = 'en' }: { locale?: string }) => {
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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-16 pb-12 overflow-hidden" aria-labelledby="privacy-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-[#1f51fe] mr-3 animate-pulse" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('privacy.hero.badge')}</span>
            </div>
            <h1 id="privacy-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t('privacy.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('privacy.hero.subtitle')}
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <AlertCircle className="h-4 w-4 mr-2" aria-hidden="true" />
              {t('privacy.hero.last_updated')}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[#1f51fe]/5 to-[#fad85a]/5 p-8 rounded-2xl border border-[#1f51fe]/20 mb-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 id="privacy-overview" className="text-2xl font-bold text-gray-900 m-0">{t('privacy.overview.title')}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.overview.content')}
              </p>
            </div>
          </div>

          {/* Personal Information Definition */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">{t('privacy.sections.personal_information.title')}</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#1f51fe]">
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.personal_information.content')}
              </p>
            </div>
          </div>

          {/* Information Collection */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">{t('privacy.sections.collection.title')}</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.sections.collection.content')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy.sections.collection.web_server')}
                </p>
              </div>
            </div>
          </div>

          {/* Usage of Personal Information */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">{t('privacy.sections.usage.title')}</h2>
            </div>
            <div className="bg-gradient-to-r from-[#1f51fe]/5 to-[#072ba4]/5 p-6 rounded-lg border border-[#1f51fe]/20 mb-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacy.sections.usage.content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {t('privacy.sections.usage.purposes').map((purpose: string, index: number) => (
                  <li key={index}>{purpose}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Information Disclosure */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-[#072ba4] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">{t('privacy.sections.disclosure.title')}</h2>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-[#fad85a]">
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.disclosure.content')}
              </p>
            </div>
          </div>

          {/* Data Storage and Access */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">{t('privacy.sections.retention.title')}</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.sections.retention.content')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy.sections.retention.deletion')}
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">{t('privacy.sections.rights.title')}</h2>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('privacy.sections.rights.content')}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {t('privacy.sections.rights.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Making Requests */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">{t('privacy.sections.contact_requests.title')}</h2>
            </div>
            <div className="bg-[#1f51fe]/5 p-6 rounded-lg border border-[#1f51fe]/20">
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.contact_requests.content')}
              </p>
            </div>
          </div>

          {/* Policy Changes */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-[#f59e0b] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">{t('privacy.sections.changes.title')}</h2>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-[#f59e0b]">
              <p className="text-gray-700 leading-relaxed">
                {t('privacy.sections.changes.content')}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.sections.contact.title')}</h2>
            <div className="bg-gradient-to-r from-[#1f51fe]/5 to-[#fad85a]/5 p-8 rounded-2xl border border-[#1f51fe]/20">
              <p className="text-gray-700 leading-relaxed text-center">
                {t('privacy.sections.contact.content')}
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default PrivacyPage