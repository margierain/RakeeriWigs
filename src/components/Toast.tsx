'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Info, CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react'
import { useEffect, useState } from 'react'

export interface ToastProps {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message?: string
  duration?: number
  onClose: (id: string) => void
}

const toastIcons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
}

const toastColors = {
  info: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
}

export function Toast({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onClose(id), 300) // Wait for animation to complete
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  const Icon = toastIcons[type]
  const colorClass = toastColors[type]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-80 max-w-96"
        >
          <div className="flex items-start">
            <div className={`flex-shrink-0 w-8 h-8 ${colorClass} rounded-full flex items-center justify-center mr-3`}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {title}
              </h4>
              {message && (
                <p className="text-sm text-gray-600">
                  {message}
                </p>
              )}
            </div>
            
            <button
              onClick={() => {
                setIsVisible(false)
                setTimeout(() => onClose(id), 300)
              }}
              className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ToastContainer({ toasts, onClose }: { toasts: ToastProps[], onClose: (id: string) => void }) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={onClose} />
      ))}
    </div>
  )
}
