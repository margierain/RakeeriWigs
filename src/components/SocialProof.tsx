'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Play } from 'lucide-react'

export function SocialProof() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Nairobi',
      rating: 5,
      text: 'I was so self-conscious about my thinning hair. Rakeeri&apos;s wig changed everything! Now I get compliments daily. Even my husband can&apos;t tell the difference!',
      image: '/api/placeholder/60/60',
      verified: true
    },
    {
      name: 'Grace K.',
      location: 'Mombasa',
      rating: 5,
      text: 'The quality is amazing! I&apos;ve been wearing mine for 6 months and it still looks brand new. The 24-hour delivery was a lifesaver for my event.',
      image: '/api/placeholder/60/60',
      verified: true
    },
    {
      name: 'Mary W.',
      location: 'Kisumu',
      rating: 5,
      text: 'From kitchen table to boardroom confidence! This wig made me feel like a completely different person. Worth every shilling.',
      image: '/api/placeholder/60/60',
      verified: true
    },
    {
      name: 'Jane A.',
      location: 'Eldoret',
      rating: 5,
      text: 'I was skeptical about online wig shopping, but Rakeeri exceeded all expectations. The customer service is incredible and the product is even better.',
      image: '/api/placeholder/60/60',
      verified: true
    }
  ]

  const transformations = [
    {
      before: '/api/placeholder/300/400',
      after: '/api/placeholder/300/400',
      name: 'Before & After',
      description: 'Real customer transformation'
    },
    {
      before: '/api/placeholder/300/400',
      after: '/api/placeholder/300/400',
      name: 'Confidence Boost',
      description: 'From self-conscious to selfie-obsessed'
    },
    {
      before: '/api/placeholder/300/400',
      after: '/api/placeholder/300/400',
      name: 'Natural Look',
      description: 'So natural, even family can\'t tell'
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
            Real Stories from Real Women
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from thousands of women who&apos;ve transformed their confidence with Rakeeri
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
                {testimonial.verified && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-orange-300 mb-4" />
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-bold text-center text-gray-900 mb-8">
            See the Transformations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="aspect-[3/4] bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-sm font-medium mb-2">Before & After</div>
                      <div className="text-xs">Click to view transformation</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-gray-900">{transformation.name}</h4>
                  <p className="text-sm text-gray-600">{transformation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-display font-bold mb-4">
            Watch Real Customer Stories
          </h3>
          <p className="text-lg mb-6 opacity-90">
            See how Rakeeri wigs have transformed the lives of women across Kenya
          </p>
          <motion.a
            href="/testimonials"
            className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Video Testimonials
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
