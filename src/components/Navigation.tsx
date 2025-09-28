'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, User, Phone, ChevronDown, Star, Truck, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop by Category', href: '/shop', hasDropdown: true },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'About Rakeeri', href: '/about' },
    { name: 'Contact/WhatsApp', href: '/contact' },
  ]

  const shopItems = [
    { name: 'Water Curl', href: '/shop?category=water-curl' },
    { name: 'Pixie', href: '/shop?category=pixie' },
    { name: 'Pineapple', href: '/shop?category=pineapple' },
    { name: 'Madusko', href: '/shop?category=madusko' },
    { name: 'Headband', href: '/shop?category=headband' },
    { name: 'Caster', href: '/shop?category=caster' },
    { name: 'Beauty Products', href: '/shop?category=beauty-products' },
  ]

  const serviceItems = [
    { name: 'Wig Training', href: '/services/training' },
    { name: 'Consultations', href: '/services/consultations' },
    { name: 'Custom Orders', href: '/services/custom' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/logo.svg" 
                  alt="Rakeeri Wigs" 
                  width={120}
                  height={40}
                  className="h-8 lg:h-10 w-auto"
                />
              </Link>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="inline-block w-3 h-3 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </a>
                  
                  {/* Dropdown for Shop */}
                  {item.name === 'Shop by Category' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                    >
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                          Popular Categories
                        </div>
                        {shopItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Dropdown for Services */}
                  {item.name === 'Services' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                    >
                      <div className="py-2">
                        {serviceItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/254729044893"
              className="flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <button className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 hover:bg-orange-50 rounded-full">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            <button className="p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 hover:bg-orange-50 rounded-full">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {/* Trust badges for mobile */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center text-xs text-gray-600">
                  <Star className="w-3 h-3 text-yellow-500 mr-1" />
                  4.9★ Rating
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <Truck className="w-3 h-3 text-green-500 mr-1" />
                  24hr Delivery
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <Shield className="w-3 h-3 text-blue-500 mr-1" />
                  Pay on Delivery
                </div>
                <div className="flex items-center text-xs text-gray-600">
                  <Phone className="w-3 h-3 text-green-500 mr-1" />
                  269K+ Followers
                </div>
              </div>

              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  
                  {/* Mobile dropdown for Shop */}
                  {item.name === 'Shop by Category' && (
                    <div className="ml-4 space-y-1">
                      {shopItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                  
                  {/* Mobile dropdown for Services */}
                  {item.name === 'Services' && (
                    <div className="ml-4 space-y-1">
                      {serviceItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile actions */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="https://wa.me/254729044893"
                  className="flex items-center justify-center w-full px-4 py-3 bg-green-600 text-white text-base font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Me Now
                </a>
                <div className="flex justify-center space-x-6">
                  <button className="flex flex-col items-center p-3 text-gray-700 hover:text-orange-600 transition-colors duration-200">
                    <ShoppingBag className="w-6 h-6 mb-1" />
                    <span className="text-xs">Cart</span>
                  </button>
                  <button className="flex flex-col items-center p-3 text-gray-700 hover:text-orange-600 transition-colors duration-200">
                    <User className="w-6 h-6 mb-1" />
                    <span className="text-xs">Account</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
