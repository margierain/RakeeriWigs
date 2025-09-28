'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Globe, Star, Check, Truck, Shield, Award, TrendingUp, Package, Headphones } from 'lucide-react'

export function WholesalePage() {
  const [activePersona, setActivePersona] = useState('salon')

  const personas = [
    {
      id: 'salon',
      title: 'Salon Owners',
      subtitle: 'Add KSh 50K Monthly Revenue Without Adding Chairs',
      icon: Building2,
      description: 'Transform your salon into a wig destination. Our wholesale program helps salon owners increase revenue and attract new clients.',
      benefits: [
        'Add KSh 50K monthly revenue without adding chairs',
        'Attract new clients looking for wig services',
        'Increase average transaction value',
        'Build recurring revenue streams',
        'Professional training and support included'
      ],
      package: {
        name: 'Salon Starter Pack',
        price: 'KSh 150,000',
        originalPrice: 'KSh 200,000',
        includes: [
          '10 premium wigs (35% off retail)',
          'Free display stand with first order',
          'Professional training session',
          'Marketing materials and signage',
          '6 months WhatsApp support',
          'Priority restocking'
        ],
        minimum: '10 units per order'
      }
    },
    {
      id: 'reseller',
      title: 'Resellers/Online Sellers',
      subtitle: 'Start Your Wig Business with Just KSh 50,000',
      icon: Users,
      description: 'Perfect for entrepreneurs looking to start or expand their wig business. We provide everything you need to succeed.',
      benefits: [
        'Start with just KSh 50,000 investment',
        'Drop-shipping available',
        'Professional product photos provided',
        'Marketing support and training',
        'Flexible payment terms',
        'No minimum order requirements'
      ],
      package: {
        name: 'Entrepreneur Pack',
        price: 'KSh 50,000',
        originalPrice: 'KSh 75,000',
        includes: [
          '5 starter wigs (30% off retail)',
          'Professional product photos',
          'Marketing guide and templates',
          'Drop-shipping setup',
          '3 months WhatsApp support',
          'Business setup consultation'
        ],
        minimum: '5 units per order'
      }
    },
    {
      id: 'international',
      title: 'International Buyers',
      subtitle: 'Export-Quality Kenyan Wigs',
      icon: Globe,
      description: 'Premium quality wigs for international markets. We handle all export requirements and provide competitive pricing.',
      benefits: [
        'Export-quality standards',
        'Competitive international pricing',
        'Customs clearance assistance',
        'Bulk pricing tiers available',
        'Quality guarantee and certification',
        'Flexible shipping options'
      ],
      package: {
        name: 'Export Package',
        price: 'From KSh 2,500,000',
        originalPrice: 'KSh 3,000,000',
        includes: [
          '500+ units (40% off retail)',
          'Export documentation',
          'Customs clearance assistance',
          'Quality certificates',
          'Dedicated account manager',
          'Flexible payment terms'
        ],
        minimum: '100 units per order'
      }
    }
  ]

  const currentPersona = personas.find(p => p.id === activePersona) || personas[0]

  const pricingTiers = [
    {
      name: 'Bronze',
      units: '10-49',
      discount: '30%',
      price: 'KSh 150,000',
      features: [
        '30% off retail pricing',
        'Standard shipping',
        'Email support',
        'Monthly restocking'
      ]
    },
    {
      name: 'Silver',
      units: '50-99',
      discount: '35%',
      price: 'KSh 500,000',
      features: [
        '35% off retail pricing',
        'Free shipping',
        'Priority support',
        'Bi-weekly restocking',
        'Marketing materials'
      ]
    },
    {
      name: 'Gold',
      units: '100+',
      discount: '40%',
      price: 'KSh 1,000,000',
      features: [
        '40% off retail pricing',
        'Free shipping',
        'Dedicated account manager',
        'Weekly restocking',
        'Exclusive styles',
        'Custom packaging'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      business: 'Elegance Salon, Nairobi',
      type: 'Salon Owner',
      text: 'Since partnering with Rakeeri, our wig sales have increased by 300%. The quality is exceptional and our clients love the variety.',
      revenue: 'KSh 80K/month'
    },
    {
      name: 'Grace K.',
      business: 'Wig Empire Online',
      type: 'Online Reseller',
      text: 'The drop-shipping service is a game-changer. I can focus on marketing while Rakeeri handles fulfillment. My business has grown 500% in 6 months.',
      revenue: 'KSh 120K/month'
    },
    {
      name: 'Mary W.',
      business: 'African Beauty Export',
      type: 'International Buyer',
      text: 'The export quality is outstanding. Our customers in the US and UK love the authentic Kenyan wigs. The documentation process is seamless.',
      revenue: 'KSh 2M/month'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Stock Your Store with Kenya&apos;s Fastest-Moving Wigs
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              40% Margins Guaranteed. Join 50+ successful wholesale partners across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#partnership"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Building2 className="w-5 h-5 mr-2" />
                Start Partnership
              </motion.a>
              <motion.a
                href="https://wa.me/254700000000"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Headphones className="w-5 h-5 mr-2" />
                Contact Sales
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Wholesale Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
              <div className="text-gray-600">Average Margin</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Partner Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24hr</div>
              <div className="text-gray-600">Order Processing</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Buyer Personas */}
      <div id="partnership" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Choose Your Partnership Path
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer tailored wholesale solutions for different business types and scales
            </p>
          </motion.div>

          {/* Persona Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setActivePersona(persona.id)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activePersona === persona.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <persona.icon className="w-5 h-5 mr-2" />
                {persona.title}
              </button>
            ))}
          </div>

          {/* Persona Content */}
          <motion.div
            key={activePersona}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Column - Details */}
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  {currentPersona.title}
                </h3>
                <h4 className="text-xl text-blue-600 font-semibold mb-6">
                  {currentPersona.subtitle}
                </h4>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {currentPersona.description}
                </p>

                {/* Benefits */}
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits:</h5>
                  <div className="space-y-3">
                    {currentPersona.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package Details */}
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">{currentPersona.package.name}</h5>
                  <div className="flex items-baseline space-x-4 mb-4">
                    <span className="text-3xl font-bold text-blue-600">{currentPersona.package.price}</span>
                    {currentPersona.package.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">
                        {currentPersona.package.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Minimum: {currentPersona.package.minimum}
                  </div>
                  <div className="space-y-2">
                    {currentPersona.package.includes.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started with {currentPersona.title}
                </motion.button>
              </div>

              {/* Right Column - Visual */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12">
                <div className="space-y-8">
                  {/* Success Metrics */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-4">Success Metrics</h5>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Average Monthly Revenue</span>
                        <span className="font-semibold text-green-600">KSh 80K+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Profit Margin</span>
                        <span className="font-semibold text-green-600">40%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Customer Retention</span>
                        <span className="font-semibold text-green-600">85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">ROI Timeline</span>
                        <span className="font-semibold text-green-600">3-6 months</span>
                      </div>
                    </div>
                  </div>

                  {/* Support Features */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-4">Support Included</h5>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Truck className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-sm text-gray-700">Fast delivery</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-sm text-gray-700">Quality guarantee</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-sm text-gray-700">Training & support</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-sm text-gray-700">Marketing assistance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Wholesale Pricing Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the tier that matches your business scale and growth goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  tier.name === 'Silver' ? 'ring-2 ring-blue-600 scale-105' : ''
                }`}
              >
                {tier.name === 'Silver' && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{tier.discount}</div>
                    <div className="text-gray-600">off retail pricing</div>
                    <div className="text-lg text-gray-700 mt-4">{tier.units} units</div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-3 rounded-full font-semibold transition-colors duration-300 ${
                      tier.name === 'Silver'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Choose {tier.name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Success Stories from Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses that have partnered with Rakeeri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.business}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.type}</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    {testimonial.revenue} revenue
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Partner with Kenya&apos;s #1 Wig Brand?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join 50+ successful partners and start your wholesale journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/254700000000"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Headphones className="w-5 h-5 mr-2" />
                Contact Sales Team
              </motion.a>
              <motion.a
                href="mailto:wholesale@rakeeri.com"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Package className="w-5 h-5 mr-2" />
                Request Catalog
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
