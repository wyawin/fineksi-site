'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Brain, Users, Target, Award, Sparkles, Bot, Cpu, Network } from 'lucide-react'

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

const AboutPage = ({ locale = 'en' }: { locale?: string }) => {
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
  const [visionRef, visionVisible] = useScrollAnimation(0.1)
  const [missionRef, missionVisible] = useScrollAnimation(0.1)
  const [investorsRef, investorsVisible] = useScrollAnimation(0.1)
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1)
  
  const currentLocale = locale || 'en'
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-16 pb-20 overflow-hidden" aria-labelledby="about-hero-heading">
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
              <Brain className="h-8 w-8 text-[#1f51fe] mr-3 animate-pulse" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('about.hero.badge')}</span>
            </div>
            <h1 id="about-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white" aria-labelledby="vision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className={`mt-12 lg:mt-0 mb-12 lg:mb-0 order-2 lg:order-1 transition-all duration-1000 ${
              visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: visionVisible ? '200ms' : '0ms' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fad85a]/10 to-[#1f51fe]/10 rounded-2xl blur-xl" aria-hidden="true"></div>
                <Image 
                  src="/images/fineksi-vision.jpg" 
                  alt="Futuristic AI technology visualization showing global financial network connections and intelligent automation systems"
                  className="relative rounded-2xl shadow-xl border border-[#1f51fe]/20"
                  width={800}
                  height={600}
                />
              </div>
            </div>
            <div 
              ref={visionRef}
              className={`order-1 lg:order-2 transition-all duration-1000 ${
                visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="flex items-center mb-4">
                <Sparkles className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('about.vision.badge')}</span>
              </div>
              <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.vision.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.vision.description1')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-[#1f51fe]/5 via-[#fad85a]/5 to-[#1f51fe]/5 relative" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div 
              ref={missionRef}
              className={`transition-all duration-1000 ${
                missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('about.mission.badge')}</span>
              </div>
              <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.mission.description1')}
              </p>
            </div>
            <div className={`mt-12 lg:mt-0 transition-all duration-1000 ${
              missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: missionVisible ? '200ms' : '0ms' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 rounded-2xl blur-xl" aria-hidden="true"></div>
                <Image 
                  src="/images/fineksi-mission.jpg" 
                  alt="Professional AI technology team working on advanced machine learning algorithms for financial services"
                  className="relative rounded-2xl shadow-xl border border-[#1f51fe]/20"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 bg-white" aria-labelledby="about-investors-heading">
        <div 
          ref={investorsRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            investorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <h3 className={`text-2xl font-bold text-gray-900 mb-8 transition-all duration-700 ${
              investorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>{t('about.investors.title1')}</h3>
            <div className={`flex justify-center items-center space-x-12 mb-16 transition-all duration-700 ${
              investorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`} style={{ transitionDelay: investorsVisible ? '200ms' : '0ms' }}> 
              <div className="group">
                <img 
                  src="/images/logo-iterative.png" 
                  alt="Iterative"
                  className="h-6 sm:h-8 md:h-10 w-auto"
                />
              </div>
              <div className="group">
                <img 
                  src="/images/logo-tenity.png" 
                  alt="Tenity"
                  className="h-6 sm:h-8 md:h-10 w-auto"
                />
              </div>
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold text-gray-900 mb-8 transition-all duration-700 ${
                investorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: investorsVisible ? '400ms' : '0ms' }}>{t('about.investors.title2')}</h3>
              <div className={`grid grid-cols-3 sm:flex sm:flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 transition-all duration-700 ${
                investorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: investorsVisible ? '600ms' : '0ms' }}>
                <div className="group flex justify-center items-center">
                  <img 
                    src="/images/logo-bni_ventures.png" 
                    alt="BNI Ventures"
                    className="h-8 sm:h-8 md:h-10 w-auto"
                  />
                </div>
                <div className="group flex justify-center items-center">
                  <img 
                    src="/images/logo-shinhanfuturelab.png" 
                    alt="Shinhan Future's Lab"
                    className="h-11 sm:h-11 md:h-12 w-auto"
                  />
                </div>
                <div className="group flex justify-center items-center">
                  <img 
                    src="/images/logo-nvidia_inception_program.png" 
                    alt="NVIDIA Inception Program"
                    className="h-8 sm:h-8 md:h-10 w-auto"
                  />
                </div>
                <div className="group flex justify-center items-center">
                  <img 
                    src="/images/logo-googleforstartup.png" 
                    alt="Google for Startup"
                    className="h-11 sm:h-11 md:h-12 w-auto"
                  />
                </div>
                <div className="group flex justify-center items-center">
                  <img 
                    src="/images/logo-startupstudio.png" 
                    alt="Startup Studio"
                    className="h-8 sm:h-8 md:h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1f51fe]/5 via-[#fad85a]/5 to-[#1f51fe]/5 border-y border-[#1f51fe]/10" aria-labelledby="about-cta-heading">
        <div 
          ref={ctaRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">{t('about.cta.badge')}</span>
          </div>
          <h2 id="about-cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('about.cta.subtitle')}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`} style={{ transitionDelay: ctaVisible ? '200ms' : '0ms' }}>
            <a 
              href={`/${currentLocale}#calendly-contact`} 
              className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-[#1f51fe]/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
              aria-label={`${t('about.cta.demo')} - Contact Us`}
            >
              {t('about.cta.demo')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage