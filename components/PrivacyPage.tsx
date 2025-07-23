import React from 'react'
import { Shield, Lock, Eye, Database, AlertCircle, CheckCircle } from 'lucide-react'

const PrivacyPage = ({ locale = 'en' }: { locale?: string }) => {
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
              <span className="text-[#1f51fe] font-semibold text-sm uppercase tracking-wider">Privacy & Security</span>
            </div>
            <h1 id="privacy-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your privacy and data security are fundamental to Fineksi's AI-powered financial services.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <AlertCircle className="h-4 w-4 mr-2" aria-hidden="true" />
              Last updated: January 15, 2025
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
                <Lock className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
                <h2 id="privacy-overview" className="text-2xl font-bold text-gray-900 m-0">Privacy Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fineksi is committed to protecting your privacy and maintaining the highest standards of data security. 
                This Privacy Policy explains how we collect, use, process, and safeguard information when you use our 
                AI-powered document automation and credit analysis services.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">SOC 2 Compliant</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">GDPR Compliant</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Lock className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">End-to-End Encrypted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-[#1f51fe] mr-2" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">1. Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Account Information</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Name, email address, and contact information</li>
                  <li>Company name and business details</li>
                  <li>Account credentials and authentication data</li>
                  <li>Billing and payment information</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Financial Documents and Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Documents uploaded for AI processing (bank statements, loan applications, etc.)</li>
                  <li>Extracted data from financial documents</li>
                  <li>Credit scores and financial analysis results</li>
                  <li>Fraud detection and risk assessment data</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Usage and Technical Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>API usage logs and performance metrics</li>
                  <li>System access logs and security events</li>
                  <li>Device information and IP addresses</li>
                  <li>Service usage patterns and preferences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use the collected information solely to provide and improve our AI-powered financial services:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#1f51fe]/10 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-[#1f51fe]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Delivery</h3>
                    <p className="text-gray-700 text-sm">Process documents, detect fraud, and provide credit analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#072ba4]/10 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-[#072ba4]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">AI Model Training</h3>
                    <p className="text-gray-700 text-sm">Improve our neural networks and machine learning algorithms</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#fad85a]/20 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-[#f59e0b]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Account Management</h3>
                    <p className="text-gray-700 text-sm">Manage your account, billing, and customer support</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500/10 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Security Monitoring</h3>
                    <p className="text-gray-700 text-sm">Detect and prevent unauthorized access and fraud</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-500/10 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Compliance</h3>
                    <p className="text-gray-700 text-sm">Meet regulatory requirements and legal obligations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500/10 p-2 rounded-lg mr-3 mt-1">
                    <CheckCircle className="h-4 w-4 text-orange-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Improvement</h3>
                    <p className="text-gray-700 text-sm">Analyze usage patterns to enhance our AI services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-[#1f51fe] mr-2 animate-pulse" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">3. Data Security Measures</h2>
            </div>
            
            <div className="bg-gradient-to-r from-[#1f51fe]/5 to-[#072ba4]/5 p-8 rounded-2xl border border-[#1f51fe]/20 mb-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                We implement military-grade security measures to protect your data throughout its lifecycle:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-[#1f51fe] mr-2" aria-hidden="true" />
                    Encryption & Protection
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• AES-256 encryption for data at rest</li>
                    <li>• TLS 1.3 encryption for data in transit</li>
                    <li>• End-to-end encryption for sensitive documents</li>
                    <li>• Regular security audits and penetration testing</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Eye className="h-5 w-5 text-[#072ba4] mr-2" aria-hidden="true" />
                    Access Controls
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Multi-factor authentication (MFA)</li>
                    <li>• Role-based access control (RBAC)</li>
                    <li>• Zero-trust security architecture</li>
                    <li>• Continuous monitoring and logging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
            
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We Do NOT Sell Your Data</h3>
                  <p className="text-gray-700 text-sm">
                    Fineksi never sells, rents, or trades your personal information or financial data to third parties.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share information only in the following limited circumstances:
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                <p className="text-gray-700 text-sm">
                  Trusted third-party service providers who assist in delivering our services, 
                  subject to strict confidentiality agreements.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                <p className="text-gray-700 text-sm">
                  When required by law, court order, or government regulation, 
                  we may disclose information to comply with legal obligations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Business Transfers</h3>
                <p className="text-gray-700 text-sm">
                  In the event of a merger, acquisition, or sale of assets, 
                  data may be transferred as part of the business transaction.
                </p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention and Deletion</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We retain your information only as long as necessary to provide our services and comply with legal obligations:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Account Data</h3>
                <p className="text-2xl font-bold text-[#1f51fe] mb-1">Active + 7 years</p>
                <p className="text-gray-700 text-xs">For compliance purposes</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Processing Logs</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">90 days</p>
                <p className="text-gray-700 text-xs">For system monitoring</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Document Cache</h3>
                <p className="text-2xl font-bold text-[#f59e0b] mb-1">30 days</p>
                <p className="text-gray-700 text-xs">For processing optimization</p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                  <span className="text-gray-900 font-medium">Access your data</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                  <span className="text-gray-900 font-medium">Correct inaccurate data</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                  <span className="text-gray-900 font-medium">Delete your data</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                  <span className="text-gray-900 font-medium">Restrict processing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                  <span className="text-gray-900 font-medium">Data portability</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" aria-hidden="true" />
                  <span className="text-gray-900 font-medium">Withdraw consent</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1f51fe]/5 p-6 rounded-lg mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Exercise Your Rights</h3>
              <p className="text-gray-700 text-sm mb-3">
                To exercise any of these rights, please contact our privacy team:
              </p>
              <p className="text-[#1f51fe] font-medium">support@fineksi.com</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="bg-gradient-to-r from-[#1f51fe]/5 to-[#fad85a]/5 p-8 rounded-2xl border border-[#1f51fe]/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Privacy Officer</h3>
                  <p className="text-gray-700 text-sm mb-1">Email: privacy@fineksi.com</p>
                  <p className="text-gray-700 text-sm">Response time: Within 48 hours</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Data Protection</h3>
                  <p className="text-gray-700 text-sm mb-1">Email: dpo@fineksi.com</p>
                  <p className="text-gray-700 text-sm">For GDPR-related inquiries</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default PrivacyPage