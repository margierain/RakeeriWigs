'use client'

import { motion } from 'framer-motion'
import { Star, Users, Award, Heart, Quote, Play, MessageCircle } from 'lucide-react'

export function AboutPage() {
  const milestones = [
    {
      year: '2019',
      title: 'The Beginning',
      description: 'Started with KSh 500 and a dream to help women feel confident',
      achievement: 'First 10 customers'
    },
    {
      year: '2020',
      title: 'Growing Community',
      description: 'Reached 1,000 Facebook followers and launched online presence',
      achievement: '1K followers'
    },
    {
      year: '2021',
      title: 'Training Program',
      description: 'Launched wig-making training program, creating entrepreneurs',
      achievement: '50+ graduates'
    },
    {
      year: '2022',
      title: 'National Recognition',
      description: 'Featured in local media and reached 50K followers',
      achievement: '50K followers'
    },
    {
      year: '2023',
      title: 'Wholesale Expansion',
      description: 'Launched wholesale program and international partnerships',
      achievement: '100+ partners'
    },
    {
      year: '2024',
      title: 'The Wig Queen',
      description: '269K+ followers, 50K+ customers, Kenya\'s #1 wig expert',
      achievement: '269K followers'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We believe every woman deserves to feel confident and beautiful, regardless of their hair situation.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where women can share experiences and uplift each other.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Never compromising on quality. Every wig is carefully selected and tested for durability and comfort.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Continuously improving our products and services to exceed customer expectations.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Nairobi',
      text: 'Rakeeri didn&apos;t just sell me a wig, she gave me back my confidence. Her story inspires me every day.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Grace K.',
      location: 'Mombasa',
      text: 'The training program changed my life. I went from unemployed to making KSh 80K per month.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Mary W.',
      location: 'Kisumu',
      text: 'Rakeeri&apos;s commitment to quality and customer service is unmatched. She truly cares about her community.',
      image: '/api/placeholder/80/80'
    }
  ]

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
              From KSh 500 Side Hustle to Kenya&apos;s Wig Queen
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              How One Woman&apos;s Hair Loss Became 50,000+ Women&apos;s Confidence Solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#story"
                className="inline-flex items-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch My Story
              </motion.a>
              <motion.a
                href="https://wa.me/254729044893"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div id="story" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              My Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every great journey begins with a single step. Here&apos;s how I built Kenya&apos;s most trusted wig brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/rakeeri-story.svg" 
                  alt="Rakeeri's journey from KSh 500 to Kenya's Wig Queen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  It all started in 2019 with KSh 500 and a simple dream: to help women feel confident and beautiful, 
                  regardless of their hair situation. I had experienced hair loss myself and knew the emotional 
                  struggle that comes with it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  What began as a small side hustle selling wigs to friends and family quickly grew into something 
                  much bigger. Word spread about the quality of my wigs and the personal touch I brought to each 
                  customer interaction.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, Rakeeri Wigs has helped over 50,000 women across Kenya and East Africa discover their 
                  confidence. We&apos;ve trained hundreds of entrepreneurs, created jobs, and built a community that 
                  supports and uplifts each other.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-orange-600 mb-4" />
                <p className="text-gray-700 italic text-lg">
                  &ldquo;My mission is simple: to help every woman feel confident and beautiful, 
                  one wig at a time.&rdquo;
                </p>
                <p className="text-orange-600 font-semibold mt-4">- Rakeeri, Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clean Journey Infographic */}
      <div className="relative py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a KSh 500 side hustle to Kenya&apos;s most trusted wig brand. 
              Here&apos;s how we built an empire of confidence, one wig at a time.
            </p>
          </motion.div>

          {/* Infographic Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-300 via-orange-500 to-red-500 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      {/* Year Badge */}
                      <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 font-bold text-sm rounded-full mb-4">
                        {milestone.year}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        {milestone.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {milestone.description}
                      </p>
                      
                      {/* Achievement */}
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full">
                        {milestone.achievement}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Visual Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Icon/Visual Element */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold">
                            {index === 0 ? '₵' : index === 1 ? '👥' : index === 2 ? '🎓' : index === 3 ? '📺' : index === 4 ? '🤝' : '👑'}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                        <p className="text-orange-100 text-sm">{milestone.achievement}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Completion Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-full shadow-lg">
                <span className="mr-3 text-2xl">👑</span>
                Kenya&apos;s #1 Wig Expert
                <span className="ml-3 text-2xl">👑</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
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
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real women whose lives have been transformed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <Quote className="w-8 h-8 text-orange-300 mb-4" />
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Impact Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Community Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a network of confident women across Kenya and East Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/community-impact.svg" 
                  alt="Rakeeri's community impact across Kenya"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Transforming Lives, One Wig at a Time</h3>
                <p className="text-gray-700 leading-relaxed">
                  What started as a personal journey to overcome hair loss has become a movement that empowers 
                  thousands of women across Kenya and East Africa. Every wig we sell represents a woman who 
                  can now face the world with confidence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">269K+</div>
                  <div className="text-sm text-gray-600">Facebook Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Training Graduates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Wholesale Partners</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re looking for your perfect wig or want to start your own wig business, 
              we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/shop"
                className="inline-flex items-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Wigs
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Training
              </motion.a>
              <motion.a
                href="https://wa.me/254729044893"
                className="inline-flex items-center px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300"
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
    </div>
  )
}
