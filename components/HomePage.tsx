'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  Shield, 
  Zap, 
  FileCheck, 
  Brain, 
  ChevronRight, 
  CheckCircle, 
  ArrowRight,
  Building2,
  CreditCard,
  TrendingUp,
  Clock,
  Users,
  Lock,
  Eye,
  BarChart3,
  Cpu,
  Network,
  Sparkles,
  Bot,
  Layers,
  Scan
} from 'lucide-react'

// Import translations directly
import enTranslations from '../public/locales/en/common.json'
import idTranslations from '../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
}

const HomePage = ({ locale = 'en' }: { locale?: string }) => {
  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[locale as keyof typeof translations] || translations.en
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  const logos = [
    {
      "id": "restock",
      "name": "Restock",
      "image": "/images/clients/logo-restock.png"
    },
    {
      "id": "modalrakyat",
      "name": "Modal Rakyat",
      "image": "/images/clients/logo-modalrakyat.png"
    },
    {
      "id": "pegadaian",
      "name": "Pegadaian",
      "image": "/images/clients/logo-pegadaian.png"
    },
    {
      "id": "komunal",
      "name": "Komunal",
      "image": "/images/clients/logo-komunal.png"
    },
    {
      "id": "alami",
      "name": "Alami",
      "image": "/images/clients/logo-alami.png"
    },
    {
      "id": "bprkertiawan",
      "name": "BPR Kertiawan",
      "image": "/images/clients/logo-bprkertiawan.png"
    },
    {
      "id": "cicil",
      "name": "Cicil",
      "image": "/images/clients/logo-cicil.png"
    },
    {
      "id": "ifscapital",
      "name": "IFS Capital",
      "image": "/images/clients/logo-ifscapital.png"
    },
    {
      "id": "mekar",
      "name": "Mekar",
      "image": "/images/clients/logo-mekar.png"
    },
    {
      "id": "radanafinance",
      "name": "Radana Finance",
      "image": "/images/clients/logo-radanafinance.png"
    },
    {
      "id": "hijra",
      "name": "Bank Hijra",
      "image": "/images/clients/logo-hijra.png"
    },
    {
      "id": "venteny",
      "name": "Venteny",
      "image": "/images/clients/logo-venteny.png"
    },
    {
      "id": "bprperdana",
      "name": "BPR Perdana",
      "image": "/images/clients/logo-bprperdana.png"
    },
  ];
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-16 pb-20 overflow-hidden" aria-labelledby="hero-heading">
        {/* Animated Background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="bg-[#1f51fe] rounded-full w-1 h-1 animate-pulse" style={{ animationDelay: `${i * 50}ms` }}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 relative z-10">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <Sparkles className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                  <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('hero.badge')}</span>
                </div>
                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="#calendly-contact" 
                    className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-[#1f51fe]/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
                    aria-label={`${t('hero.cta_primary')} - Request Demo`}
                  >
                    {t('hero.cta_primary')}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 rounded-2xl blur-xl" aria-hidden="true"></div>
                <Image 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Financial technology automation"
                  className="relative rounded-2xl shadow-2xl border border-[#1f51fe]/20"
                  width={800}
                  height={600}
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-[#1f51fe]/20">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 p-3 rounded-lg mr-4">
                      <Bot className="h-6 w-6 text-[#1f51fe]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{t('hero.stat_label')}</p>
                      <p className="text-2xl font-bold text-gray-900">{t('hero.stat_value')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Carousel Section */}
      <section className="py-20 bg-white relative overflow-hidden" aria-labelledby="clients-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Logo Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-marquee hover:pause-marquee">
                {/* First set of logos */}
                <div className="flex items-center justify-around min-w-full flex-shrink-0 gap-8 md:gap-12">
                  {logos.map((client: any) => (
                    <div key={`first-${client.id}`} className="flex-shrink-0 group">
                      <img 
                        src={client.image}
                        alt={`${client.name}`}
                        className="h-8 md:h-8 w-auto"
                        title={client.name}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Second set of logos (duplicate for seamless loop) */}
                <div className="flex items-center justify-around min-w-full flex-shrink-0 gap-8 md:gap-12 ml-8 md:ml-12">
                  {logos.map((client: any) => (
                    <div key={`second-${client.id}`} className="flex-shrink-0 group cursor-pointer">
                      <img 
                        src={client.image}
                        alt={`${client.name}`}
                        className="h-8 md:h-8 w-auto"
                        title={client.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Gradient overlays for seamless effect */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" aria-hidden="true"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative" aria-labelledby="features-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Cpu className="h-8 w-8 text-[#1f51fe] mr-3 animate-pulse" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('features.badge')}</span>
            </div>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#1f51fe]/30 hover:shadow-lg hover:shadow-[#1f51fe]/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#1f51fe]/10 to-blue-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <FileCheck className="h-8 w-8 text-[#1f51fe]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('features.ai_document.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.ai_document.description')}
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#072ba4]/30 hover:shadow-lg hover:shadow-[#072ba4]/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#072ba4]/10 to-red-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-[#072ba4]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('features.fraud_detection.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.fraud_detection.description')}
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#fad85a]/50 hover:shadow-lg hover:shadow-[#fad85a]/20 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#fad85a]/20 to-yellow-500/20 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-[#f59e0b] animate-pulse" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('features.cognitive_analysis.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.cognitive_analysis.description')}
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('features.lightning_fast.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.lightning_fast.description')}
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Lock className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('features.ai_secured.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.ai_secured.description')}
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-orange-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('features.predictive.title')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.predictive.description')}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus" className="py-20 bg-gray-50 relative" aria-labelledby="whyus-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1f51fe]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#fad85a]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
            <div>
              <div className="flex items-center mb-4">
                <Network className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('whyus.badge')}</span>
              </div>
              <h2 id="whyus-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t('whyus.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-2 rounded-lg mr-4 mt-1">
                    <TrendingUp className="h-5 w-5 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('whyus.large_document.title')}</h3>
                    <p className="text-gray-600">{t('whyus.large_document.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#072ba4]/10 to-red-500/10 p-2 rounded-lg mr-4 mt-1">
                    <Clock className="h-5 w-5 text-[#072ba4]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('whyus.long_process.title')}</h3>
                    <p className="text-gray-600">{t('whyus.long_process.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#1f51fe]/10 to-blue-500/10 p-2 rounded-lg mr-4 mt-1">
                    <Shield className="h-5 w-5 text-[#1f51fe]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('whyus.fraud_detection.title')}</h3>
                    <p className="text-gray-600">{t('whyus.fraud_detection.description')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#fad85a]/20 to-yellow-500/20 p-2 rounded-lg mr-4 mt-1">
                    <Bot className="h-5 w-5 text-[#f59e0b]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('whyus.hidden_risk.title')}</h3>
                    <p className="text-gray-600">{t('whyus.hidden_risk.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 rounded-2xl blur-xl" aria-hidden="true"></div>
                <Image 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Business growth analytics dashboard showing improved performance metrics and ROI from AI implementation"
                  className="relative rounded-2xl shadow-xl border border-[#1f51fe]/20"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white relative" aria-labelledby="how-it-works-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Layers className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('workflow.badge')}</span>
            </div>
            <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('workflow.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('workflow.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="text-center group" role="article">
              <div className="relative">
                <div className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-[#1f51fe]/25">
                  <Scan className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#1f51fe] to-[#072ba4] mx-auto animate-ping opacity-20" aria-hidden="true"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('workflow.ingestion.title')}</h3>
              <p className="text-gray-600">
                {t('workflow.ingestion.description')}
              </p>
            </div>

            <div className="text-center group" role="article">
              <div className="relative">
                <div className="bg-gradient-to-r from-[#fad85a] to-[#f59e0b] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-[#fad85a]/25">
                  <Brain className="h-8 w-8 animate-pulse" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#fad85a] to-[#f59e0b] mx-auto animate-ping opacity-20 delay-300" aria-hidden="true"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('workflow.analysis.title')}</h3>
              <p className="text-gray-600">
                {t('workflow.analysis.description')}
              </p>
            </div>

            <div className="text-center group" role="article">
              <div className="relative">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-green-500/25">
                  <Sparkles className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-600 mx-auto animate-ping opacity-20 delay-700" aria-hidden="true"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('workflow.insights.title')}</h3>
              <p className="text-gray-600">
                {t('workflow.insights.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1f51fe]/5 via-[#fad85a]/5 to-[#1f51fe]/5 border-y border-[#1f51fe]/10" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Solutions</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#1f51fe] to-[#072ba4] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                40x
              </div>
              <div className="text-gray-600 text-sm">{t('stats.faster')}</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#fad85a] to-[#f59e0b] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                80%
              </div>
              <div className="text-gray-600 text-sm">{t('stats.productivity')}</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-gray-600 text-sm">{t('stats.human_error')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50 relative" aria-labelledby="industries-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('industries.badge')}</span>
            </div>
            <h2 id="industries-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('industries.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('industries.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#1f51fe]/30 shadow-lg hover:shadow-[#1f51fe]/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#1f51fe]/10 to-blue-500/10 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="h-10 w-10 text-[#1f51fe]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('industries.banks.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('industries.banks.description')}
              </p>
              <ul className="space-y-2">
                {t('industries.banks.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#1f51fe] mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#072ba4]/30 shadow-lg hover:shadow-[#072ba4]/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#072ba4]/10 to-purple-500/10 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="h-10 w-10 text-[#072ba4]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('industries.multifinance.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('industries.multifinance.description')}
              </p>
              <ul className="space-y-2">
                {t('industries.multifinance.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#072ba4] mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-500/30 shadow-lg hover:shadow-green-500/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-10 w-10 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('industries.p2p.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('industries.p2p.description')}
              </p>
              <ul className="space-y-2">
                {t('industries.p2p.features').map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[#1f51fe]/5 via-[#fad85a]/5 to-[#1f51fe]/5 relative overflow-hidden" aria-labelledby="contact-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1f51fe]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
            <div className="text-gray-900">
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('contact.badge')}</span>
              </div>
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-6">{t('contact.title')}</h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('contact.subtitle')}
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#1f51fe] to-[#072ba4] bg-clip-text text-transparent">40x</div>
                  <div className="text-gray-500 text-sm">{t('stats.faster')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#fad85a] to-[#f59e0b] bg-clip-text text-transparent">80%</div>
                  <div className="text-gray-500 text-sm">{t('stats.productivity')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">95%</div>
                  <div className="text-gray-500 text-sm">{t('stats.human_error')}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0" id="calendly-contact">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#1f51fe]/20">
                <div className="flex items-center mb-6">
                  <Bot className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-gray-900">{t('contact.calendly.title')}</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {t('contact.calendly.description')}
                  </p>
                  
                  {/* Calendly Integration */}
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                          <Bot className="h-8 w-8 text-[#1f51fe] animate-pulse" aria-hidden="true" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('contact.calendly.meeting_title')}</h4>
                      <p className="text-gray-600 text-sm mb-6">{t('contact.calendly.meeting_description')}</p>
                      
                      {/* Calendly Button */}
                      <a
                        href="https://calendly.com/business-fineksi/45min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#1f51fe]/25 transition-all duration-200 transform hover:scale-105 group"
                        aria-label={`${t('contact.calendly.schedule_button')} - Open Calendly`}
                      >
                        {t('contact.calendly.schedule_button')}
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Alternative Contact Methods */}
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('contact.calendly.alternative_title')}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 w-20">{t('footer.whatsapp')}:</span>
                        <span className="text-[#1f51fe]">+62 851 5907 9011</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-900 w-20">{t('footer.email')}:</span>
                        <span className="text-[#1f51fe]">support@fineksi.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage