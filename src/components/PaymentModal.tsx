'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CreditCard, Smartphone, Truck, Shield, Check } from 'lucide-react'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    price: number
    image: string
  }
}

export function PaymentModal({ isOpen, onClose, product }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card' | 'cod'>('mpesa')
  const [isProcessing, setIsProcessing] = useState(false)
  const [step, setStep] = useState<'method' | 'details' | 'confirm'>('method')

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setStep('confirm')
    }, 2000)
  }

  const paymentMethods = [
    {
      id: 'mpesa',
      name: 'M-Pesa',
      description: 'Pay with your M-Pesa account',
      icon: Smartphone,
      popular: true
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, or American Express',
      icon: CreditCard,
      popular: false
    },
    {
      id: 'cod',
      name: 'Pay on Delivery',
      description: 'Pay when your order arrives',
      icon: Truck,
      popular: false
    }
  ]

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-2xl shadow-xl max-w-md w-full"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Complete Your Order</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {step === 'method' && (
                <div className="space-y-6">
                  {/* Product Summary */}
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-600">Wig</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-lg font-bold text-orange-600">
                        KSh {product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Choose Payment Method</h3>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          onClick={() => setPaymentMethod(method.id as 'mpesa' | 'card' | 'cod')}
                          className={`w-full p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                            paymentMethod === method.id
                              ? 'border-orange-600 bg-orange-50'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          <div className="flex items-center">
                            <method.icon className="w-6 h-6 text-orange-600 mr-3" />
                            <div className="flex-1">
                              <div className="flex items-center">
                                <span className="font-medium text-gray-900">{method.name}</span>
                                {method.popular && (
                                  <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{method.description}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Trust Elements */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <Shield className="w-6 h-6 text-green-600 mb-1" />
                      <span className="text-xs text-gray-600">Secure</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Truck className="w-6 h-6 text-blue-600 mb-1" />
                      <span className="text-xs text-gray-600">24hr Delivery</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Check className="w-6 h-6 text-purple-600 mb-1" />
                      <span className="text-xs text-gray-600">Guaranteed</span>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <motion.button
                    onClick={() => setStep('details')}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue to Payment
                  </motion.button>
                </div>
              )}

              {step === 'details' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {paymentMethod === 'mpesa' && 'M-Pesa Payment'}
                      {paymentMethod === 'card' && 'Card Payment'}
                      {paymentMethod === 'cod' && 'Pay on Delivery'}
                    </h3>
                    <p className="text-gray-600">
                      {paymentMethod === 'mpesa' && 'Enter your M-Pesa details below'}
                      {paymentMethod === 'card' && 'Enter your card information'}
                      {paymentMethod === 'cod' && 'No payment required now. Pay when your order arrives.'}
                    </p>
                  </div>

                  {paymentMethod === 'mpesa' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          M-Pesa Number
                        </label>
                        <input
                          type="tel"
                          placeholder="254 700 000 000"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        />
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-800">
                          You&apos;ll receive an M-Pesa prompt on your phone to complete the payment.
                        </p>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'cod' && (
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-green-800">
                          Great choice! You&apos;ll pay KSh {product.price.toLocaleString()} when your order arrives.
                          Our delivery team will contact you to arrange delivery.
                        </p>
                    </div>
                  )}

                  <motion.button
                    onClick={handlePayment}
                    disabled={isProcessing}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 disabled:opacity-50"
                    whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                    whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                  >
                    {isProcessing ? 'Processing...' : 'Complete Order'}
                  </motion.button>
                </div>
              )}

              {step === 'confirm' && (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Order Confirmed!
                    </h3>
                    <p className="text-gray-600">
                      Your order has been placed successfully. You&apos;ll receive a confirmation email shortly.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Next Steps:</strong><br />
                      1. Check your email for order details<br />
                      2. Our team will contact you within 24 hours<br />
                      3. Your wig will be delivered within 24-48 hours
                    </p>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}
