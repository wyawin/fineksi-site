'use client'

import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  FileText, 
  BarChart3, 
  Scale, 
  Car, 
  CreditCard, 
  Receipt, 
  Upload, 
  Brain, 
  UserCheck, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Eye,
  Building2,
  Home,
  FileCheck,
  Banknote,
  Calculator,
  Scan,
  Bot,
  Users
} from 'lucide-react'

// Import translations directly
import enTranslations from '../public/locales/en/common.json'
import idTranslations from '../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing to prevent re-triggering
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isVisible] as const
}

const SolutionsPage = ({ locale = 'en' }: { locale?: string }) => {
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  // Scroll animation refs
  const [heroRef, heroVisible] = useScrollAnimation(0.1)
  const [documentsRef, documentsVisible] = useScrollAnimation(0.1)
  const [workflowRef, workflowVisible] = useScrollAnimation(0.1)
  const [benefitsRef, benefitsVisible] = useScrollAnimation(0.1)
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1)
  
  const currentLocale = locale || 'en'
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-16 pb-20 overflow-hidden" aria-labelledby="solutions-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div 
          ref={heroRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Scan className="h-8 w-8 text-[#1f51fe] mr-3 animate-pulse" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('solutions.hero.badge')}</span>
            </div>
            <h1 id="solutions-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('solutions.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('solutions.hero.subtitle')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`} style={{ transitionDelay: heroVisible ? '200ms' : '0ms' }}>
              <a 
                href={`/${currentLocale}#calendly-contact`} 
                className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-[#1f51fe]/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
                aria-label={`${t('solutions.hero.cta_primary')} - Request Demo`}
              >
                {t('solutions.hero.cta_primary')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-20 bg-white relative" aria-labelledby="document-types-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={documentsRef}
            className={`text-center mb-16 relative z-10 transition-all duration-1000 ${
              documentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-8 w-8 text-[#1f51fe] mr-3" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('solutions.documents.badge')}</span>
            </div>
            <h2 id="document-types-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('solutions.documents.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.documents.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Bank Statement Analysis */}
            <article className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#1f51fe]/30 hover:shadow-lg hover:shadow-[#1f51fe]/10 transition-all duration-500 group ${
              documentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: documentsVisible ? '200ms' : '0ms' }}>
              <div className="bg-gradient-to-r from-[#1f51fe]/10 to-blue-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Banknote className="h-8 w-8 text-[#1f51fe]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.documents.bank_statement.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('solutions.documents.bank_statement.description')}
              </p>
              <ul className="space-y-2">
                {t('solutions.documents.bank_statement.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#1f51fe] mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            {/* Financial Statement Analysis */}
            <article className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#072ba4]/30 hover:shadow-lg hover:shadow-[#072ba4]/10 transition-all duration-500 group ${
              documentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: documentsVisible ? '300ms' : '0ms' }}>
              <div className="bg-gradient-to-r from-[#072ba4]/10 to-purple-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-[#072ba4]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.documents.financial_statement.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('solutions.documents.financial_statement.description')}
              </p>
              <ul className="space-y-2">
                {t('solutions.documents.financial_statement.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#072ba4] mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            {/* Legal Documents */}
            <article className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-500 group ${
              documentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: documentsVisible ? '400ms' : '0ms' }}>
              <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Scale className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.documents.legal_documents.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('solutions.documents.legal_documents.description')}
              </p>
              <ul className="space-y-2">
                {t('solutions.documents.legal_documents.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            {/* Collateral Documents */}
            <article className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-500 group ${
              documentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: documentsVisible ? '500ms' : '0ms' }}>
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Home className="h-8 w-8 text-orange-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.documents.collateral_documents.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('solutions.documents.collateral_documents.description')}
              </p>
              <ul className="space-y-2">
                {t('solutions.documents.collateral_documents.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-orange-600 mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            {/* Identity Documents */}
            <article className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-500 group ${
              documentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: documentsVisible ? '600ms' : '0ms' }}>
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.documents.identity_documents.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('solutions.documents.identity_documents.description')}
              </p>
              <ul className="space-y-2">
                {t('solutions.documents.identity_documents.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            {/* Invoice & Purchase Orders */}
            <article className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#fad85a]/50 hover:shadow-lg hover:shadow-[#fad85a]/20 transition-all duration-500 group ${
              documentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: documentsVisible ? '700ms' : '0ms' }}>
              <div className="bg-gradient-to-r from-[#fad85a]/20 to-yellow-500/20 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Receipt className="h-8 w-8 text-[#f59e0b]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.documents.operation_documents.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('solutions.documents.operation_documents.description')}
              </p>
              <ul className="space-y-2">
                {t('solutions.documents.operation_documents.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#f59e0b] mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Additional Documents */}
          <div className={`mt-12 text-center relative z-10 transition-all duration-1000 ${
            documentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: documentsVisible ? '800ms' : '0ms' }}>
            <div className="bg-gradient-to-r from-[#1f51fe]/5 to-[#fad85a]/5 p-8 rounded-2xl border border-[#1f51fe]/20">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-gray-900">{t('solutions.documents.additional.title')}</h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                {t('solutions.documents.additional.description')}
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {t('solutions.documents.additional.types').map((type: string, index: number) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{type}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
                {t('solutions.documents.additional.and_many_more')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 relative" aria-labelledby="how-it-works-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={workflowRef}
            className={`text-center mb-16 relative z-10 transition-all duration-1000 ${
              workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('solutions.workflow.badge')}</span>
            </div>
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('solutions.workflow.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('solutions.workflow.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1: Upload */}
            <div className={`text-center group transition-all duration-700 ${
              workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: workflowVisible ? '200ms' : '0ms' }} role="article">
              <div className="relative mb-6">
                <div className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-[#1f51fe]/25">
                  <Upload className="h-10 w-10" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-[#1f51fe] to-[#072ba4] mx-auto animate-ping opacity-20" aria-hidden="true"></div>
                <div className="bg-[#1f51fe] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto -mt-2 relative z-10">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.workflow.upload.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('solutions.workflow.upload.description')}
              </p>
            </div>

            {/* Step 2: AI Process */}
            <div className={`text-center group transition-all duration-700 ${
              workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: workflowVisible ? '400ms' : '0ms' }} role="article">
              <div className="relative mb-6">
                <div className="bg-gradient-to-r from-[#fad85a] to-[#f59e0b] text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-[#fad85a]/25">
                  <Brain className="h-10 w-10 animate-pulse" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-[#fad85a] to-[#f59e0b] mx-auto animate-ping opacity-20 delay-300" aria-hidden="true"></div>
                <div className="bg-[#f59e0b] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto -mt-2 relative z-10">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.workflow.ai_process.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('solutions.workflow.ai_process.description')}
              </p>
            </div>

            {/* Step 3: Human Validation */}
            <div className={`text-center group transition-all duration-700 ${
              workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: workflowVisible ? '600ms' : '0ms' }} role="article">
              <div className="relative mb-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-green-500/25">
                  <UserCheck className="h-10 w-10" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-teal-600 mx-auto animate-ping opacity-20 delay-700" aria-hidden="true"></div>
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto -mt-2 relative z-10">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.workflow.human_validation.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('solutions.workflow.human_validation.description')}
              </p>
            </div>

            {/* Step 4: Credit Analysis Ready */}
            <div className={`text-center group transition-all duration-700 ${
              workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: workflowVisible ? '800ms' : '0ms' }} role="article">
              <div className="relative mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-purple-500/25">
                  <TrendingUp className="h-10 w-10" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto animate-ping opacity-20 delay-1000" aria-hidden="true"></div>
                <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto -mt-2 relative z-10">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('solutions.workflow.insights_ready.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('solutions.workflow.insights_ready.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white relative" aria-labelledby="solutions-benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
            <div 
              ref={benefitsRef}
              className={`transition-all duration-1000 ${
                benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('solutions.benefits.badge')}</span>
              </div>
              <h2 id="solutions-benefits-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('solutions.benefits.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#1f51fe]/10 to-blue-500/10 p-2 rounded-lg mr-4 mt-1">
                    <Zap className="h-5 w-5 text-[#1f51fe]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('solutions.benefits.speed.title')}</h3>
                    <p className="text-gray-600">{t('solutions.benefits.speed.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#072ba4]/10 to-purple-500/10 p-2 rounded-lg mr-4 mt-1">
                    <Shield className="h-5 w-5 text-[#072ba4]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('solutions.benefits.accuracy.title')}</h3>
                    <p className="text-gray-600">{t('solutions.benefits.accuracy.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-2 rounded-lg mr-4 mt-1">
                    <Eye className="h-5 w-5 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('solutions.benefits.frauds.title')}</h3>
                    <p className="text-gray-600">{t('solutions.benefits.frauds.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#fad85a]/20 to-yellow-500/20 p-2 rounded-lg mr-4 mt-1">
                    <Calculator className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('solutions.benefits.cost_effective.title')}</h3>
                    <p className="text-gray-600">{t('solutions.benefits.cost_effective.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`mt-12 lg:mt-0 transition-all duration-1000 ${
              benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: benefitsVisible ? '200ms' : '0ms' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 rounded-2xl blur-xl" aria-hidden="true"></div>
                <Image 
                  src="/images/whyus.svg" 
                  alt="AI-powered document analysis dashboard showing real-time processing and validation workflow"
                  className="relative"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1f51fe]/5 via-[#fad85a]/5 to-[#1f51fe]/5 relative overflow-hidden" aria-labelledby="solutions-cta-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1f51fe]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div 
          ref={ctaRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
            <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('solutions.cta.badge')}</span>
          </div>
          <h2 id="solutions-cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('solutions.cta.title')}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('solutions.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`} style={{ transitionDelay: ctaVisible ? '200ms' : '0ms' }}>
            <a 
              href={`/${currentLocale}#calendly-contact`} 
              className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-[#1f51fe]/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
              aria-label={`${t('solutions.cta.demo')} - Request Demo`}
            >
              {t('solutions.cta.demo')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionsPage