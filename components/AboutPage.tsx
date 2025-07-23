import React from 'react'
import Image from 'next/image'
import { Brain, Users, Target, Award, Sparkles, Bot, Cpu, Network } from 'lucide-react'

// Import translations directly
import enTranslations from '../public/locales/en/common.json'
import idTranslations from '../public/locales/id/common.json'

const translations = {
  en: enTranslations,
  id: idTranslations
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
  
  const currentLocale = locale || 'en'
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50 pt-16 pb-20 overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-[#1f51fe] mr-3 animate-pulse" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">About Fineksi</span>
            </div>
            <h1 id="about-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pioneering the Future of 
              <span className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] bg-clip-text text-transparent"> AI-Powered Finance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing financial services with cutting-edge artificial intelligence, 
              neural networks, and cognitive automation to create superhuman lending capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white" aria-labelledby="mission-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
                <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">Our AI Mission</span>
              </div>
              <h2 id="mission-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Democratizing AI for Financial Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Fineksi, we believe that every financial institution deserves access to 
                world-class artificial intelligence. Our mission is to transform the lending landscape 
                through advanced neural networks, cognitive automation, and predictive analytics.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just building software – we're creating an AI-powered ecosystem that 
                empowers banks, multifinance companies, and P2P platforms to make faster, 
                more accurate, and more inclusive lending decisions.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 rounded-2xl blur-xl" aria-hidden="true"></div>
                <Image 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
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

      {/* Values Section */}
      <section className="py-20 bg-gray-50 relative" aria-labelledby="values-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1f51fe]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#fad85a]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">Our AI Values</span>
            </div>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Trust, Powered by Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every AI model we train and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#1f51fe]/30 hover:shadow-lg hover:shadow-[#1f51fe]/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#1f51fe]/10 to-blue-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Bot className="h-8 w-8 text-[#1f51fe]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We push the boundaries of what's possible with artificial intelligence, 
                constantly innovating to deliver superhuman performance in financial analysis.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#072ba4]/30 hover:shadow-lg hover:shadow-[#072ba4]/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#072ba4]/10 to-purple-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Network className="h-8 w-8 text-[#072ba4]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI models are explainable and auditable. We believe in transparent 
                algorithms that financial institutions can trust and regulators can understand.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#fad85a]/50 hover:shadow-lg hover:shadow-[#fad85a]/20 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#fad85a]/20 to-yellow-500/20 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="h-8 w-8 text-[#f59e0b]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every AI system we build incorporates military-grade security, ensuring 
                your data and your customers' information remain protected at all times.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Your success is our success. We're committed to delivering AI solutions 
                that drive measurable business outcomes and competitive advantages.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Like our AI models, we never stop learning. We continuously improve our 
                technology and adapt to the evolving needs of the financial industry.
              </p>
            </article>

            <article className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="h-8 w-8 text-orange-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ethical AI</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to responsible AI development, ensuring our models are 
                fair, unbiased, and promote financial inclusion for all communities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">Our AI Team</span>
            </div>
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class AI Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of experience in artificial intelligence, machine learning, 
              and financial technology to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="text-center group">
              <div className="relative mb-6">
                <Image 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Dr. Sarah Chen - Chief AI Officer and former Google AI researcher"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#1f51fe]/20 group-hover:border-[#1f51fe]/40 transition-all duration-300"
                  width={128}
                  height={128}
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Chen</h3>
              <p className="text-[#1f51fe] font-medium mb-3">Chief AI Officer</p>
              <p className="text-gray-600 text-sm">
                Former Google AI researcher with 15+ years in neural networks and deep learning. 
                PhD in Computer Science from Stanford.
              </p>
            </article>

            <article className="text-center group">
              <div className="relative mb-6">
                <Image 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Michael Rodriguez - Head of ML Engineering"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#1f51fe]/20 group-hover:border-[#1f51fe]/40 transition-all duration-300"
                  width={128}
                  height={128}
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Rodriguez</h3>
              <p className="text-[#072ba4] font-medium mb-3">Head of ML Engineering</p>
              <p className="text-gray-600 text-sm">
                Ex-Tesla AI engineer specializing in computer vision and document analysis. 
                Built production ML systems serving millions of users.
              </p>
            </article>

            <article className="text-center group">
              <div className="relative mb-6">
                <Image 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Dr. Emily Watson - Director of Financial AI"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-[#1f51fe]/20 group-hover:border-[#1f51fe]/40 transition-all duration-300"
                  width={128}
                  height={128}
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-[#1f51fe]/10 to-[#fad85a]/10 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Emily Watson</h3>
              <p className="text-[#f59e0b] font-medium mb-3">Director of Financial AI</p>
              <p className="text-gray-600 text-sm">
                Former JPMorgan Chase quantitative analyst with expertise in credit risk modeling 
                and regulatory compliance in AI systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1f51fe]/5 via-[#fad85a]/5 to-[#1f51fe]/5 border-y border-[#1f51fe]/10" aria-labelledby="company-stats-heading">
        <h2 id="company-stats-heading" className="sr-only">Company Statistics</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#1f51fe] to-[#072ba4] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-600 text-sm">AI Experts</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#fad85a] to-[#f59e0b] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                100+
              </div>
              <div className="text-gray-600 text-sm">Financial Institutions</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                10M+
              </div>
              <div className="text-gray-600 text-sm">Documents Processed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                99.8%
              </div>
              <div className="text-gray-600 text-sm">AI Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" aria-labelledby="about-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
            <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">Join the AI Revolution</span>
          </div>
          <h2 id="about-cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience the Future of Finance?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how Fineksi can transform your lending operations with 
            cutting-edge artificial intelligence and neural network technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`/${currentLocale}#contact`} 
              className="bg-gradient-to-r from-[#1f51fe] to-[#072ba4] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-[#1f51fe]/25 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
              aria-label="Schedule AI Demo - Contact Us"
            >
              Schedule AI Demo
              <Brain className="ml-2 h-5 w-5 group-hover:animate-pulse" aria-hidden="true" />
            </a>
            <a 
              href={`/${currentLocale}#features`} 
              className="border-2 border-[#1f51fe]/30 text-[#1f51fe] px-8 py-4 rounded-lg text-lg font-semibold hover:border-[#1f51fe] hover:bg-[#1f51fe]/5 transition-all duration-200 flex items-center justify-center group"
              aria-label="Explore AI Features - Learn More"
            >
              Explore AI Features
              <Sparkles className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage