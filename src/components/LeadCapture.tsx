'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Download, Check, Star, Users, Clock } from 'lucide-react'

export function LeadCapture() {
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('quiz')

  const leadMagnets = [
    {
      id: 'quiz',
      title: 'Wig Selection Quiz',
      description: '30-second quiz to find your perfect wig match',
      icon: Check,
      benefits: [
        'Personalized product recommendations',
        'Style and color matching',
        'Care instructions tailored to you',
        'Exclusive discount code'
      ],
      cta: 'Take Quiz Now'
    },
    {
      id: 'guide',
      title: 'The Kenyan Woman&apos;s Wig Bible',
      description: '20-page PDF covering everything from selection to maintenance',
      icon: Download,
      benefits: [
        'Complete wig care guide',
        'Styling tips for Kenyan weather',
        'Common mistakes to avoid',
        'Professional maintenance schedule'
      ],
      cta: 'Download Free Guide'
    },
    {
      id: 'masterclass',
      title: 'Wig Care Masterclass',
      description: 'Free 3-part video series with expert tips',
      icon: Star,
      benefits: [
        'Video tutorials from Rakeeri',
        'Live Q&A sessions',
        'Community access',
        'Special offers for participants'
      ],
      cta: 'Join Masterclass'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { email, whatsapp, leadMagnet: activeTab })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Welcome to the Rakeeri Family!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Check your email and WhatsApp for your personalized recommendations and exclusive offers.
            </p>
            <div className="bg-orange-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>Personalized recommendations sent to your email</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>Exclusive discount code via WhatsApp</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  <span>Follow-up care tips over the next 30 days</span>
                </div>
              </div>
            </div>
            <motion.a
              href="/shop"
              className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Shopping Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Get Your Free Transformation Guide
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join 269,000+ women who&apos;ve discovered their perfect wig match. Get personalized recommendations and exclusive offers.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Lead Magnets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Choose Your Free Gift
            </h3>
            
            {leadMagnets.map((magnet, index) => (
              <motion.div
                key={magnet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                  activeTab === magnet.id ? 'ring-2 ring-orange-600 shadow-xl' : 'hover:shadow-xl'
                }`}
                onClick={() => setActiveTab(magnet.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeTab === magnet.id ? 'bg-orange-600' : 'bg-orange-100'
                  }`}>
                    <magnet.icon className={`w-6 h-6 ${
                      activeTab === magnet.id ? 'text-white' : 'text-orange-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {magnet.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {magnet.description}
                    </p>
                    <div className="space-y-2">
                      {magnet.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Get Your Free {leadMagnets.find(m => m.id === activeTab)?.title}
              </h3>
              <p className="text-gray-600">
                Enter your details below and we&apos;ll send it to you immediately
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* WhatsApp Field */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="whatsapp"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    placeholder="254 700 000 000"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Include country code (e.g., 254 for Kenya)
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {leadMagnets.find(m => m.id === activeTab)?.cta}
              </motion.button>
            </form>

            {/* Trust Elements */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>269K+ members</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Instant delivery</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-1" />
                  <span>No spam, ever</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
