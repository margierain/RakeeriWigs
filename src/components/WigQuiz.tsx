'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Star, Heart, Clock, Users } from 'lucide-react'

interface QuizQuestion {
  id: string
  question: string
  options: {
    id: string
    text: string
    value: string
  }[]
}

interface QuizResult {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  features: string[]
  whyPerfect: string
}

export function WigQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')

  const questions: QuizQuestion[] = [
    {
      id: 'experience',
      question: 'What\'s your experience with wigs?',
      options: [
        { id: 'beginner', text: 'Complete beginner - never worn a wig', value: 'beginner' },
        { id: 'some', text: 'Some experience - worn a few times', value: 'intermediate' },
        { id: 'experienced', text: 'Experienced - wear wigs regularly', value: 'advanced' }
      ]
    },
    {
      id: 'lifestyle',
      question: 'What\'s your lifestyle like?',
      options: [
        { id: 'busy', text: 'Very busy - need quick, easy styling', value: 'busy' },
        { id: 'social', text: 'Social - attend events and gatherings', value: 'social' },
        { id: 'professional', text: 'Professional - work in corporate environment', value: 'professional' },
        { id: 'casual', text: 'Casual - mostly everyday wear', value: 'casual' }
      ]
    },
    {
      id: 'budget',
      question: 'What\'s your budget range?',
      options: [
        { id: 'budget', text: 'Under KSh 15,000', value: 'budget' },
        { id: 'mid', text: 'KSh 15,000 - 25,000', value: 'mid' },
        { id: 'premium', text: 'KSh 25,000 - 40,000', value: 'premium' },
        { id: 'luxury', text: 'Above KSh 40,000', value: 'luxury' }
      ]
    },
    {
      id: 'style',
      question: 'What style are you looking for?',
      options: [
        { id: 'straight', text: 'Straight and sleek', value: 'straight' },
        { id: 'wavy', text: 'Wavy and natural', value: 'wavy' },
        { id: 'curly', text: 'Curly and voluminous', value: 'curly' },
        { id: 'braided', text: 'Braided styles', value: 'braided' }
      ]
    },
    {
      id: 'occasion',
      question: 'What\'s the main occasion?',
      options: [
        { id: 'daily', text: 'Daily wear', value: 'daily' },
        { id: 'work', text: 'Work/professional', value: 'work' },
        { id: 'special', text: 'Special events', value: 'special' },
        { id: 'all', text: 'All of the above', value: 'versatile' }
      ]
    }
  ]

  const results: QuizResult[] = [
    {
      id: 'confidence-multiplier',
      name: 'The Confidence Multiplier',
      description: 'Perfect for beginners who want natural-looking results with minimal effort.',
      price: 18000,
      originalPrice: 22000,
      image: '/api/placeholder/400/500',
      features: ['Beginner Friendly', 'Easy Maintenance', 'Natural Look', 'Comfortable Fit'],
      whyPerfect: 'Based on your answers, you&apos;re looking for something easy to manage that looks natural. This wig is perfect for first-time wearers.'
    },
    {
      id: 'boardroom-boss',
      name: 'The Boardroom Boss',
      description: 'Professional quality wig that commands respect in any setting.',
      price: 25000,
      originalPrice: 30000,
      image: '/api/placeholder/400/500',
      features: ['Professional Quality', '8-Hour Comfort', 'Humidity Resistant', '60-Second Install'],
      whyPerfect: 'Your professional lifestyle and experience level make this the perfect choice for confident, polished looks.'
    },
    {
      id: 'matatu-queen',
      name: 'The Matatu Queen',
      description: 'Ultimate all-weather wig that survives Nairobi traffic and humidity.',
      price: 32000,
      originalPrice: 38000,
      image: '/api/placeholder/400/500',
      features: ['Weather Resistant', 'Long Lasting', 'Professional Quality', 'Free Styling'],
      whyPerfect: 'Your busy lifestyle and need for durability make this the ideal choice for long-lasting, low-maintenance beauty.'
    },
    {
      id: 'nairobi-natural',
      name: 'The Nairobi Natural',
      description: 'Affordable luxury that doesn\'t compromise on quality or style.',
      price: 15000,
      originalPrice: 18000,
      image: '/api/placeholder/400/500',
      features: ['Budget Friendly', 'Daily Wear', 'Quality Materials', 'Easy Care'],
      whyPerfect: 'Perfect for your budget and lifestyle needs, offering great value without compromising on quality.'
    }
  ]

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Calculate result based on answers
      const calculatedResult = calculateResult()
      setResult(calculatedResult)
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const calculateResult = (): QuizResult => {
    // Simple scoring system - in real app, this would be more sophisticated
    const experience = answers.experience
    const budget = answers.budget
    const lifestyle = answers.lifestyle

    if (budget === 'budget') return results[3] // Nairobi Natural
    if (experience === 'beginner') return results[0] // Confidence Multiplier
    if (lifestyle === 'professional') return results[1] // Boardroom Boss
    return results[2] // Matatu Queen
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Quiz completed:', { answers, result, email, whatsapp })
    // Redirect to results or show success message
  }

  if (isComplete && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              We Found Your Perfect Match!
            </h1>
            <p className="text-xl text-gray-600">
              Based on your answers, here&apos;s the wig that&apos;s perfect for you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-xl font-medium mb-2">{result.name}</div>
                  <div className="text-sm">Your Perfect Match</div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  {result.name}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {result.description}
                </p>

                {/* Why Perfect */}
                <div className="bg-orange-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Why This is Perfect for You:</h3>
                  <p className="text-gray-700 text-sm">{result.whyPerfect}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {result.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-4 mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      KSh {result.price.toLocaleString()}
                    </span>
                    {result.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">
                        KSh {result.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {result.originalPrice && (
                    <div className="text-green-600 font-medium">
                      Save KSh {(result.originalPrice - result.price).toLocaleString()}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <motion.button
                  className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get This Wig Now
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Get Your Exclusive Offer
              </h3>
              <p className="text-gray-600">
                Enter your details to receive your personalized recommendations and exclusive discount
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="WhatsApp number (254 700 000 000)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get My Exclusive Offer
              </motion.button>
            </form>

            <div className="text-center mt-6">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>269K+ members</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Instant delivery</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 mr-1" />
                  <span>No spam, ever</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[currentStep]
  const isAnswered = answers[currentQuestion.id]
  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Find Your Perfect Wig
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Take our 30-second quiz to get personalized recommendations
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <motion.div
              className="bg-orange-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-sm text-gray-600">
            Question {currentStep + 1} of {questions.length}
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            {currentQuestion.question}
          </h2>

          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option) => (
              <motion.button
                key={option.id}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  answers[currentQuestion.id] === option.value
                    ? 'border-orange-600 bg-orange-50 text-orange-600'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    answers[currentQuestion.id] === option.value
                      ? 'border-orange-600 bg-orange-600'
                      : 'border-gray-300'
                  }`}>
                    {answers[currentQuestion.id] === option.value && (
                      <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5" />
                    )}
                  </div>
                  <span className="font-medium">{option.text}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <motion.button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: currentStep === 0 ? 1 : 1.05 }}
              whileTap={{ scale: currentStep === 0 ? 1 : 0.95 }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`flex items-center px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                isAnswered
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              whileHover={{ scale: isAnswered ? 1.05 : 1 }}
              whileTap={{ scale: isAnswered ? 0.95 : 1 }}
            >
              {currentStep === questions.length - 1 ? 'Get Results' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>269K+ women trust us</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              <span>4.9★ rating</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              <span>50K+ happy customers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
