'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Play, Instagram, Facebook } from 'lucide-react'

export function Testimonials() {
  const videoTestimonials = [
    {
      name: 'Sarah M.',
      location: 'Nairobi',
      duration: '2:30',
      thumbnail: '/api/placeholder/400/300',
      quote: 'I was so self-conscious about my thinning hair. Rakeeri&apos;s wig changed everything!',
      rating: 5,
      platform: 'Instagram'
    },
    {
      name: 'Grace K.',
      location: 'Mombasa',
      duration: '1:45',
      thumbnail: '/api/placeholder/400/300',
      quote: 'The quality is amazing! I&apos;ve been wearing mine for 6 months and it still looks brand new.',
      rating: 5,
      platform: 'TikTok'
    },
    {
      name: 'Mary W.',
      location: 'Kisumu',
      duration: '3:15',
      thumbnail: '/api/placeholder/400/300',
      quote: 'From kitchen table to boardroom confidence! This wig made me feel like a completely different person.',
      rating: 5,
      platform: 'Facebook'
    }
  ]

  const writtenTestimonials = [
    {
      name: 'Jane A.',
      location: 'Eldoret',
      text: 'I was skeptical about online wig shopping, but Rakeeri exceeded all expectations. The customer service is incredible and the product is even better. My wig looks so natural that even my hairdresser was impressed!',
      rating: 5,
      verified: true,
      purchase: 'The Boardroom Boss Wig'
    },
    {
      name: 'Faith N.',
      location: 'Nakuru',
      text: 'The training program changed my life! I went from being unemployed to making KSh 80K per month. Rakeeri doesn\'t just sell wigs, she creates entrepreneurs. I\'m forever grateful.',
      rating: 5,
      verified: true,
      purchase: 'Wig Training Program'
    },
    {
      name: 'Patience O.',
      location: 'Thika',
      text: 'The 24-hour delivery was a lifesaver for my event. The wig arrived exactly as described and the quality is outstanding. I\'ve already recommended Rakeeri to all my friends.',
      rating: 5,
      verified: true,
      purchase: 'The Confidence Multiplier'
    }
  ]

  const socialStats = [
    { platform: 'Facebook', followers: '269K+', engagement: '4.8%' },
    { platform: 'TikTok', followers: '45K+', engagement: '12.3%' },
    { platform: 'Instagram', followers: '32K+', engagement: '8.7%' }
  ]

  return (
    <section className="py-20 bg-gray-50">
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
            What Our Community Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of women who&apos;ve transformed their confidence with Rakeeri Wigs
          </p>
        </motion.div>

        {/* Social Media Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {socialStats.map((stat) => (
            <div key={stat.platform} className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">{stat.followers}</div>
              <div className="text-gray-900 font-semibold mb-1">{stat.platform} Followers</div>
              <div className="text-sm text-gray-600">{stat.engagement} engagement rate</div>
            </div>
          ))}
        </motion.div>

        {/* Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold text-center text-gray-900 mb-8">
            Watch Real Transformations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-orange-200 to-red-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-sm font-medium mb-2">Video Testimonial</div>
                      <div className="text-xs">{testimonial.duration}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute top-4 right-4">
                    {testimonial.platform === 'Instagram' && <Instagram className="w-5 h-5 text-pink-600" />}
                    {testimonial.platform === 'TikTok' && <div className="w-5 h-5 bg-black rounded text-white text-xs flex items-center justify-center font-bold">T</div>}
                    {testimonial.platform === 'Facebook' && <Facebook className="w-5 h-5 text-blue-600" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-orange-300 mb-3" />
                  <p className="text-gray-700 mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Written Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold text-center text-gray-900 mb-8">
            Customer Reviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {writtenTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Verified Purchase
                    </span>
                  )}
                </div>
                
                <Quote className="w-6 h-6 text-orange-300 mb-3" />
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-sm text-orange-600 font-medium">
                    Purchased: {testimonial.purchase}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-display font-bold mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Be part of the 269,000+ women who&apos;ve transformed their confidence with Rakeeri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/quiz"
              className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find My Perfect Wig
            </motion.a>
            <motion.a
              href="https://wa.me/254700000000"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Me Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
