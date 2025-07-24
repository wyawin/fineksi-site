import React from 'react'
import { FileText, Shield, AlertTriangle, Clock } from 'lucide-react'

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
            
            {/* Acceptance of Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 id="acceptance-terms" className="text-2xl font-bold text-gray-900 m-0">{t('terms.sections.acceptance.title')}</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#1f51fe]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('terms.sections.acceptance.content')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('terms.sections.acceptance.additional')}
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 id="service-description" className="text-2xl font-bold text-gray-900 mb-4">{t('terms.sections.service_description.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('terms.sections.service_description.content')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">Our services include but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {t('terms.sections.service_description.services').map((service: string, index: number) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.sections.user_responsibilities.title')}</h2>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-[#fad85a] mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-[#f59e0b] mr-2 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Important Compliance Requirements</h3>
                    <p className="text-gray-700 text-sm">
                      {t('terms.sections.user_responsibilities.warning')}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">{t('terms.sections.user_responsibilities.content')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                {t('terms.sections.user_responsibilities.items').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Data and Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Processing and Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take data security and privacy seriously. Our AI systems process financial documents and personal 
                information in accordance with industry best practices and applicable data protection regulations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Data Security</h3>
                  <p className="text-gray-700 text-sm">
                    All data is encrypted in transit and at rest using military-grade encryption standards.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
                  <p className="text-gray-700 text-sm">
                    Our systems are SOC 2 compliant and adhere to GDPR, CCPA, and other privacy regulations.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                For detailed information about how we collect, use, and protect your data, please refer to our 
                <a href="/privacy" className="text-[#1f51fe] hover:underline ml-1">Privacy Policy</a>.
              </p>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service Availability and Performance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to maintain high availability and performance of our AI services, we cannot guarantee 
                uninterrupted access or error-free operation.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>We target 99.9% uptime for our AI processing services</li>
                <li>Scheduled maintenance will be communicated in advance when possible</li>
                <li>AI model accuracy rates are based on historical performance and may vary</li>
                <li>Processing times may vary based on document complexity and system load</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fineksi retains all rights, title, and interest in our AI models, algorithms, software, 
                and related intellectual property.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">What You Can Do:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Use our services according to your subscription plan</li>
                  <li>Integrate our APIs into your applications</li>
                  <li>Access and use the results of our AI analysis</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">What You Cannot Do:</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Copy, modify, or reverse engineer our AI models</li>
                  <li>Resell or redistribute our services without permission</li>
                  <li>Use our technology to create competing services</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-[#fad85a] mb-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Important:</strong> Our AI services are tools to assist in decision-making. Final credit decisions 
                  and regulatory compliance remain the responsibility of the financial institution.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, CogniCredit AI shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to loss of profits, 
                data, or business opportunities.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate the service agreement with appropriate notice as specified in your 
                service contract. Upon termination:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access to our AI services will be discontinued</li>
                <li>Data will be handled according to our data retention policy</li>
                <li>Outstanding fees remain payable</li>
                <li>Confidentiality obligations continue to apply</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes 
                via email or through our service platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.sections.contact.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('terms.sections.contact.content')}
              </p>
              <div className="bg-[#1f51fe]/5 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Legal Department</h3>
                    <p className="text-gray-700 text-sm">{t('terms.sections.contact.legal')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Support</h3>
                    <p className="text-gray-700 text-sm">{t('terms.sections.contact.support')}</p>
                  </div>
                </div>
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}

export default TermsPage