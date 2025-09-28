'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin, Clock } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { name: 'Shop by Category', href: '/shop' },
    { name: 'Human Hair Wigs', href: '/shop/human-hair' },
    { name: 'Braided Wigs', href: '/shop/braided' },
    { name: 'Beginner Friendly', href: '/shop/beginner' },
    { name: 'Under KSh 15,000', href: '/shop/budget' }
  ]

  const services = [
    { name: 'Wig Training', href: '/services/training' },
    { name: 'Personal Consultation', href: '/services/consultation' },
    { name: 'Custom Wig Design', href: '/services/custom' },
    { name: 'Wholesale', href: '/wholesale' }
  ]

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'WhatsApp Support', href: 'https://wa.me/254700000000' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'Returns & Exchanges', href: '/returns' }
  ]

  const company = [
    { name: 'About Rakeeri', href: '/about' },
    { name: 'Our Story', href: '/story' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Blog', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' }
  ]

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/rakeeri', icon: Facebook, followers: '269K+' },
    { name: 'Instagram', href: 'https://instagram.com/rakeeri', icon: Instagram, followers: '32K+' },
    { name: 'TikTok', href: 'https://tiktok.com/@rakeeri', icon: MessageCircle, followers: '45K+' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-display font-bold text-orange-400 mb-4">
                Rakeeri Wigs
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Kenya&apos;s #1 wig expert helping 269,000+ women transform their confidence. 
                Premium wigs, expert training, and personalized service since 2019.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">+254 700 000 000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">hello@rakeeri.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-gray-300">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="p-3 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Support & Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 mb-6">
                {support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Stay Updated with Rakeeri</h3>
            <p className="text-gray-400 mb-6">
              Get the latest wig tips, new arrivals, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Rakeeri Wigs. All rights reserved. | Kenya&apos;s #1 Wig Expert
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/shipping" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
