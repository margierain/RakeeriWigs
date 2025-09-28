'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Users, Scissors, Check, Clock, Award } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Wig Training Program',
      price: 'KSh 30,000',
      originalValue: 'KSh 120,000',
      duration: '30 Days',
      description: 'From Kitchen Table to KSh 100K Months: The Exact Wig-Making System That&apos;s Created 50+ Successful Entrepreneurs in Kenya',
      features: [
        '30-Day Hands-On Training (KSh 50,000 value)',
        'Lifetime Access to Private Mentor Group (KSh 20,000 value)',
        'Starter Kit with Professional Tools (KSh 15,000 value)',
        'Marketing & Business Setup Guide (KSh 10,000 value)',
        'Certificate of Completion (Priceless for credibility)',
        '6 Months WhatsApp Support (KSh 25,000 value)'
      ],
      badge: 'Most Popular',
      cta: 'Join Next Cohort',
      href: '/services/training'
    },
    {
      icon: Users,
      title: 'Personal Consultation',
      price: 'KSh 5,000',
      duration: '1 Hour',
      description: 'Get personalized advice from Kenya\'s most trusted wig expert. Perfect for first-time buyers or specific styling needs.',
      features: [
        'One-on-one video consultation',
        'Personalized wig recommendations',
        'Style and color matching',
        'Care and maintenance guide',
        'Follow-up support for 30 days'
      ],
      badge: 'New',
      cta: 'Book Consultation',
      href: '/services/consultation'
    },
    {
      icon: Scissors,
      title: 'Custom Wig Design',
      price: 'From KSh 45,000',
      duration: '2-3 Weeks',
      description: 'Bespoke wigs designed specifically for you. Perfect for special occasions or unique requirements.',
      features: [
        'Custom design consultation',
        'Premium materials selection',
        'Professional craftsmanship',
        'Multiple fitting sessions',
        'Lifetime maintenance support'
      ],
      badge: 'Premium',
      cta: 'Start Custom Order',
      href: '/services/custom'
    }
  ]

  const successStories = [
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
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Transform Your Life with Rakeeri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you want to learn the craft, get personalized advice, or create something unique - we&apos;ve got you covered
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Badge */}
              <div className="absolute -top-4 left-8">
                <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {service.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="text-orange-600 mb-6 mt-4">
                <service.icon className="w-12 h-12" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                {service.originalValue && (
                  <>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      {service.originalValue}
                    </span>
                    <div className="text-sm text-green-600 font-medium">
                      Save KSh 90,000 (75% off)
                    </div>
                  </>
                )}
              </div>

              {/* Duration */}
              <div className="flex items-center text-gray-600 mb-6">
                <Clock className="w-4 h-4 mr-2" />
                <span>{service.duration}</span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href={service.href}
                className="block w-full bg-orange-600 text-white py-3 rounded-full font-semibold text-center hover:bg-orange-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {service.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-4">
              Success Stories from Our Graduates
            </h3>
            <p className="text-lg opacity-90">
              Real women, real results. See how our training program has transformed lives across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {story.name.charAt(0)}
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">{story.name}</h4>
                <p className="text-sm opacity-80 mb-2">{story.location}</p>
                <p className="text-orange-200 font-medium">{story.story}</p>
              </motion.div>
            ))}
          </div>

          {/* Urgency Elements */}
          <div className="text-center">
            <div className="bg-white/20 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Next cohort starts March 15th</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Only 8 spots remaining</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Early bird: Save KSh 5,000</span>
                </div>
              </div>
            </div>
            
            <motion.a
              href="/services/training"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Reserve Your Spot Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
