'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Star, Users, Truck, Shield, Phone } from 'lucide-react'

export function HeroSection() {
  const [viewers, setViewers] = useState(17)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 3) - 1
        return Math.max(15, Math.min(25, prev + change))
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const headlines = [
    "At Rakeeri Wigs, we don&apos;t just sell wigs, we transform confidence",
    "Trusted by thousands of Kenyan women - it&apos;s Rakeeri or nothing",
    "From beginner-friendly styles to luxurious double drawn wigs",
    "Every unit is handpicked for comfort, durability, and natural beauty"
  ]

  const [currentHeadline, setCurrentHeadline] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline(prev => (prev + 1) % headlines.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Urgency Bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
        🔥 {isClient ? viewers : 17} people viewing this page right now
      </div>

      {/* Trust Badges */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="font-semibold">269K+ Facebook Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-semibold">4.9★ Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-green-600" />
              <span className="font-semibold">24hr Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-600" />
              <span className="font-semibold">Pay on Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                key={currentHeadline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight"
              >
                {headlines[currentHeadline]}
              </motion.h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                We offer <span className="font-bold text-orange-600">fast nationwide delivery</span>, reliable after-sales support, and a community that celebrates every shade of you. 
                <span className="block mt-2">
                  From Water Curl to Pineapple styles, find your perfect match today.
                </span>
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <motion.a
                href="/quiz"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                FIND MY PERFECT WIG (Take 30-Second Quiz)
              </motion.a>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.a
                  href="/video"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3 border-2 border-orange-600 text-orange-600 text-base sm:text-lg font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 touch-manipulation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="hidden sm:inline">Watch 2-Minute Transformation Video</span>
                  <span className="sm:hidden">Watch Video</span>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/254729044893"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-3 bg-green-600 text-white text-base sm:text-lg font-semibold rounded-full hover:bg-green-700 transition-all duration-300 touch-manipulation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp Me Now
                </motion.a>
              </div>
            </div>

            {/* Social Proof Strip */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-gray-700 text-center sm:text-left">
                  <span className="font-semibold">267 women</span> bought wigs this month
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-display font-bold mb-2">Before & After</h3>
                  <p className="text-lg opacity-90">Real transformations from real customers</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.9★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24hr</div>
                  <div className="text-sm text-gray-600">Delivery</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-20" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-amber-200 rounded-full opacity-20" />
      </div>
    </section>
  )
}
