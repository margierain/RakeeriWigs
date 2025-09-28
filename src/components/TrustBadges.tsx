'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Truck, Star, Users, Clock } from 'lucide-react'

export function TrustBadges() {
  const badges = [
    {
      icon: Users,
      title: '269K+ Facebook Followers',
      description: 'Kenya&apos;s most trusted wig community',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Star,
      title: '4.9★ Rating',
      description: 'Based on 2,500+ reviews',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Truck,
      title: '24hr Delivery',
      description: 'Nationwide express shipping',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Shield,
      title: 'Pay on Delivery',
      description: 'No upfront payment required',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction or money back',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Clock,
      title: '5+ Years Experience',
      description: 'Trusted by thousands of women',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Why 269,000+ Women Trust Rakeeri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re not just selling wigs - we&apos;re transforming confidence, one woman at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${badge.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`${badge.color} mb-4 flex justify-center`}>
                <badge.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-gray-600">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">50,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
