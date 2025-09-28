'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Users, Scissors, Star, Check, Clock, MessageCircle } from 'lucide-react'

export function ServicesPage() {
  const [activeTab, setActiveTab] = useState('training')

  const services = [
    {
      id: 'training',
      title: 'Wig Training Program',
      subtitle: 'From Kitchen Table to KSh 100K Months',
      price: 'KSh 30,000',
      originalValue: 'KSh 120,000',
      duration: '30 Days',
      description: 'The Exact Wig-Making System That&apos;s Created 50+ Successful Entrepreneurs in Kenya',
      icon: GraduationCap,
      badge: 'Most Popular',
      cta: 'Join Next Cohort',
      href: '/services/training',
      features: [
        '30-Day Hands-On Training (KSh 50,000 value)',
        'Lifetime Access to Private Mentor Group (KSh 20,000 value)',
        'Starter Kit with Professional Tools (KSh 15,000 value)',
        'Marketing & Business Setup Guide (KSh 10,000 value)',
        'Certificate of Completion (Priceless for credibility)',
        '6 Months WhatsApp Support (KSh 25,000 value)'
      ],
      successStories: [
        {
          name: 'Sarah M.',
          location: 'Nairobi',
          story: 'Went from unemployed to KSh 80K/month',
          image: '/api/placeholder/80/80'
        },
        {
          name: 'Grace K.',
          location: 'Mombasa',
          story: 'Now runs 3 successful wig businesses',
          image: '/api/placeholder/80/80'
        },
        {
          name: 'Mary W.',
          location: 'Kisumu',
          story: 'Trained 15+ women in her community',
          image: '/api/placeholder/80/80'
        }
      ],
      curriculum: [
        'Week 1: Foundation & Basic Techniques',
        'Week 2: Advanced Styling & Customization',
        'Week 3: Business Setup & Marketing',
        'Week 4: Client Management & Scaling'
      ]
    },
    {
      id: 'consultation',
      title: 'Personal Consultation',
      subtitle: 'One-on-One Expert Guidance',
      price: 'KSh 5,000',
      duration: '1 Hour',
      description: 'Get personalized advice from Kenya&apos;s most trusted wig expert. Perfect for first-time buyers or specific styling needs.',
      icon: Users,
      badge: 'New',
      cta: 'Book Consultation',
      href: '/services/consultation',
      features: [
        'One-on-one video consultation',
        'Personalized wig recommendations',
        'Style and color matching',
        'Care and maintenance guide',
        'Follow-up support for 30 days'
      ],
      process: [
        'Book your consultation slot',
        'Fill out our style questionnaire',
        'Video call with Rakeeri',
        'Receive personalized recommendations',
        '30-day follow-up support'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Wig Design',
      subtitle: 'Bespoke Wigs for Special Occasions',
      price: 'From KSh 45,000',
      duration: '2-3 Weeks',
      description: 'Bespoke wigs designed specifically for you. Perfect for special occasions or unique requirements.',
      icon: Scissors,
      badge: 'Premium',
      cta: 'Start Custom Order',
      href: '/services/custom',
      features: [
        'Custom design consultation',
        'Premium materials selection',
        'Professional craftsmanship',
        'Multiple fitting sessions',
        'Lifetime maintenance support'
      ],
      process: [
        'Initial design consultation',
        'Material selection & approval',
        'First fitting & adjustments',
        'Final fitting & styling',
        'Delivery & care instructions'
      ]
    }
  ]

  const currentService = services.find(s => s.id === activeTab) || services[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Transform Your Life with Rakeeri
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Whether you want to learn the craft, get personalized advice, or create something unique - we&apos;ve got you covered
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#services"
                className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Start Your Transformation
              </motion.a>
              <motion.a
                href="https://wa.me/254700000000"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Tabs */}
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each service is designed to help you achieve your goals, whether that&apos;s starting a business or finding your perfect wig
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === service.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              <service.icon className="w-5 h-5 mr-2" />
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Service Details */}
            <div className="p-8 lg:p-12">
              {/* Badge */}
              <div className="mb-6">
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentService.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
                {currentService.title}
              </h3>
              <h4 className="text-xl text-orange-600 font-semibold mb-6">
                {currentService.subtitle}
              </h4>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {currentService.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline space-x-4 mb-2">
                  <span className="text-4xl font-bold text-gray-900">{currentService.price}</span>
                  {currentService.originalValue && (
                    <span className="text-2xl text-gray-500 line-through">
                      {currentService.originalValue}
                    </span>
                  )}
                </div>
                {currentService.originalValue && (
                  <div className="text-green-600 font-medium mb-2">
                    Save KSh 90,000 (75% off)
                  </div>
                )}
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{currentService.duration}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-900 mb-4">What You Get:</h5>
                <div className="space-y-3">
                  {currentService.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href={currentService.href}
                className="inline-flex items-center justify-center w-full bg-orange-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {currentService.cta}
              </motion.a>
            </div>

            {/* Right Column - Visual Content */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 lg:p-12">
              {activeTab === 'training' && (
                <div className="space-y-8">
                  {/* Success Stories */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Success Stories</h5>
                    <div className="space-y-4">
                      {currentService.successStories?.map((story, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                              {story.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{story.name}</div>
                              <div className="text-sm text-gray-600">{story.location}</div>
                              <div className="text-sm text-orange-600 font-medium">{story.story}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Curriculum */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">4-Week Curriculum</h5>
                    <div className="space-y-2">
                      {currentService.curriculum?.map((week, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{week}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Urgency Elements */}
                  <div className="bg-orange-600 text-white rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-sm font-medium mb-2">Limited Time Offer</div>
                      <div className="text-lg font-semibold mb-2">Next cohort starts March 15th</div>
                      <div className="text-sm opacity-90">Only 8 spots remaining</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'consultation' && (
                <div className="space-y-8">
                  {/* Process */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h5>
                    <div className="space-y-3">
                      {currentService.process?.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-3">Perfect For:</h5>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-600 mr-2" />
                        <span>First-time wig buyers</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-600 mr-2" />
                        <span>Specific styling needs</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-600 mr-2" />
                        <span>Color matching</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-green-600 mr-2" />
                        <span>Care and maintenance</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'custom' && (
                <div className="space-y-8">
                  {/* Process */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">Custom Process</h5>
                    <div className="space-y-3">
                      {currentService.process?.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Premium Features */}
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold text-gray-900 mb-3">Premium Features:</h5>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>Hand-selected premium materials</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>Expert craftsmanship</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>Multiple fitting sessions</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        <span>Lifetime maintenance support</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who&apos;ve transformed their lives with Rakeeri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                location: 'Nairobi',
                service: 'Training Program',
                text: 'The training program changed my life! I went from being unemployed to making KSh 80K per month. Rakeeri doesn\'t just sell wigs, she creates entrepreneurs.',
                rating: 5
              },
              {
                name: 'Grace K.',
                location: 'Mombasa',
                service: 'Custom Design',
                text: 'My custom wig was absolutely perfect! The attention to detail and quality is unmatched. Worth every shilling.',
                rating: 5
              },
              {
                name: 'Mary W.',
                location: 'Kisumu',
                service: 'Consultation',
                text: 'The consultation helped me find the perfect wig for my face shape and lifestyle. I\'m so much more confident now.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                    <div className="text-sm text-orange-600 font-medium">{testimonial.service}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of women who&apos;ve already transformed their lives with Rakeeri&apos;s services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/services/training"
                className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Start Training Program
              </motion.a>
              <motion.a
                href="https://wa.me/254700000000"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
