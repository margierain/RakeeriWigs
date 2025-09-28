'use client'

import { motion } from 'framer-motion'
import { Construction, ArrowLeft, Clock, Wrench } from 'lucide-react'
import Link from 'next/link'

interface ConstructionPageProps {
  title?: string
  description?: string
  estimatedCompletion?: string
}

export function ConstructionPage({ 
  title = "Page Under Construction", 
  description = "We're working hard to bring you something amazing!",
  estimatedCompletion = "Coming Soon"
}: ConstructionPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Construction Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
            <Construction className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-gray-600 mb-8 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Status Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Estimated Completion</h3>
            <p className="text-gray-600">{estimatedCompletion}</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <Wrench className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">What We&apos;re Building</h3>
            <p className="text-gray-600">Something amazing for you!</p>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-8"
        >
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">75% Complete</p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200"
        >
          <p className="text-gray-600 mb-4">
            Need help or have questions? We&apos;re here for you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254729044893"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+254729044893"
              className="inline-flex items-center px-6 py-3 border-2 border-orange-600 text-orange-600 font-medium rounded-full hover:bg-orange-600 hover:text-white transition-colors duration-200"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
