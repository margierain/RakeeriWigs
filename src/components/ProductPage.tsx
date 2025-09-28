'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, Clock, Users, Check, MessageCircle } from 'lucide-react'
import Link from 'next/link'

interface ProductPageProps {
  slug: string
}

export function ProductPage({ slug }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('22"')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  // Mock product data - in real app, this would come from API
  const product = {
    id: 1,
    name: 'The Boardroom Boss Wig',
    slug: slug,
    price: 25000,
    originalPrice: 30000,
    images: [
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800',
      '/api/placeholder/600/800'
    ],
    rating: 4.9,
    reviews: 127,
    category: 'Human Hair',
    badge: 'Best Seller',
    inStock: 3,
    description: 'Command respect before you even speak. Double-drawn strands that move like your own hair.',
    longDescription: `Picture this: You walk into the room. Heads turn. Not because your wig looks fake, but because it looks so naturally flawless, people think you woke up like this.

✨ The Confidence Multiplier: Double-drawn strands that move like your own hair
✨ 8-Hour Comfort Guarantee: Lightweight cap you forget you're wearing  
✨ Nairobi-Proof: Humidity-resistant fibers that survive Kenya's weather
✨ 60-Second Install: Perfect for 5 AM mornings when you hit snooze too much`,
    features: [
      'Double-drawn human hair strands',
      'Lightweight, breathable cap construction',
      'Humidity-resistant for Kenyan weather',
      'Easy 60-second installation',
      '8-hour comfort guarantee',
      'Natural hairline with baby hairs',
      'Heat-resistant up to 350°F',
      'Tangle-free and easy to maintain'
    ],
    sizes: ['20"', '22"', '24"', '26"'],
    colors: ['Natural Black', 'Dark Brown', 'Light Brown', 'Honey Blonde'],
    careInstructions: [
      'Wash with sulfate-free shampoo every 7-10 days',
      'Use wide-tooth comb when wet',
      'Air dry or use low heat setting',
      'Store on wig stand when not wearing',
      'Avoid excessive heat styling'
    ],
    specifications: {
      material: '100% Human Hair',
      capSize: 'Average (22-23 inches)',
      density: '150%',
      texture: 'Silky Straight',
      origin: 'Brazilian',
      lifespan: '6-12 months with proper care'
    }
  }

  const relatedProducts = [
    {
      id: 2,
      name: 'The Confidence Multiplier',
      price: 18000,
      image: '/api/placeholder/300/400',
      rating: 4.8
    },
    {
      id: 3,
      name: 'The Matatu Queen',
      price: 32000,
      image: '/api/placeholder/300/400',
      rating: 5.0
    },
    {
      id: 4,
      name: 'The Nairobi Natural',
      price: 15000,
      image: '/api/placeholder/300/400',
      rating: 4.7
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Nairobi',
      rating: 5,
      text: 'I was so self-conscious about my thinning hair. This wig changed everything! Now I get compliments daily.',
      verified: true
    },
    {
      name: 'Grace K.',
      location: 'Mombasa',
      rating: 5,
      text: 'The quality is amazing! I\'ve been wearing mine for 6 months and it still looks brand new.',
      verified: true
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-orange-600">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-xl font-medium mb-2">{product.name}</div>
                  <div className="text-sm">Main Product Image</div>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-orange-600' : 'border-gray-200'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                    <span className="text-xs text-gray-600">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Badge and Category */}
            <div className="flex items-center space-x-4">
              <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {product.badge}
              </span>
              <span className="text-orange-600 font-medium">{product.category}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-500 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  KSh {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    KSh {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <div className="text-green-600 font-medium">
                  Save KSh {(product.originalPrice - product.price).toLocaleString()} (17% off)
                </div>
              )}
            </div>

            {/* Stock Alert */}
            {product.inStock <= 3 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-800 font-medium">
                    Only {product.inStock} left in stock! Order now to avoid disappointment.
                  </span>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-colors duration-200 ${
                      selectedSize === size
                        ? 'border-orange-600 bg-orange-50 text-orange-600'
                        : 'border-gray-300 text-gray-700 hover:border-orange-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-gray-200">
              <div className="flex items-center">
                <Truck className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">24hr Delivery</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Pay on Delivery</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">269K+ Happy Customers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <motion.button
                className="w-full bg-orange-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - KSh {(product.price * quantity).toLocaleString()}
              </motion.button>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  className="flex items-center justify-center px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-full font-semibold hover:bg-orange-50 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Wishlist
                </motion.button>
                <motion.button
                  className="flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </motion.button>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/254700000000"
              className="flex items-center justify-center w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Me for Questions
            </motion.a>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'features', label: 'Features' },
                  { id: 'care', label: 'Care Instructions' },
                  { id: 'specifications', label: 'Specifications' },
                  { id: 'reviews', label: 'Reviews' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-orange-600 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'description' && (
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {product.longDescription}
                  </p>
                </div>
              )}

              {activeTab === 'features' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'care' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Instructions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.careInstructions.map((instruction, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{instruction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600">{product.rating} out of 5</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-3">
                          <div className="flex items-center mr-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          {testimonial.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <p className="text-gray-700 mb-3">&ldquo;{testimonial.text}&rdquo;</p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.location}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-sm font-medium">{relatedProduct.name}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(relatedProduct.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900 mb-4">
                    KSh {relatedProduct.price.toLocaleString()}
                  </div>
                  <motion.button
                    className="w-full bg-orange-600 text-white py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Product
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
