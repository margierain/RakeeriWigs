'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Eye, Clock, Users } from 'lucide-react'

export function ProductShowcase() {
  const featuredProducts = [
    {
      id: 1,
      name: 'The Boardroom Boss Wig',
      price: 25000,
      originalPrice: 30000,
      image: '/api/placeholder/400/500',
      rating: 4.9,
      reviews: 127,
      description: 'Command respect before you even speak. Double-drawn strands that move like your own hair.',
      features: [
        '8-Hour Comfort Guarantee',
        'Nairobi-Proof Humidity Resistant',
        '60-Second Install',
        'Lightweight Cap'
      ],
      inStock: 3,
      category: 'Human Hair',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'The Confidence Multiplier',
      price: 18000,
      originalPrice: 22000,
      image: '/api/placeholder/400/500',
      rating: 4.8,
      reviews: 89,
      description: 'Perfect for beginners. Easy to style and maintain. Looks so natural, even your family won\'t know.',
      features: [
        'Beginner Friendly',
        'Easy Maintenance',
        'Natural Look',
        'Comfortable Fit'
      ],
      inStock: 7,
      category: 'Synthetic',
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'The Matatu Queen',
      price: 32000,
      originalPrice: 38000,
      image: '/api/placeholder/400/500',
      rating: 5.0,
      reviews: 203,
      description: 'Survives Nairobi traffic, humidity, and long days. The ultimate all-weather wig.',
      features: [
        'Weather Resistant',
        'Long Lasting',
        'Professional Quality',
        'Free Styling Included'
      ],
      inStock: 2,
      category: 'Human Hair',
      badge: 'Premium'
    }
  ]

  const categories = [
    { name: 'Human Hair Wigs', count: 45, href: '/shop/human-hair' },
    { name: 'Braided Wigs', count: 23, href: '/shop/braided' },
    { name: 'Beginner Friendly', count: 18, href: '/shop/beginner' },
    { name: 'Under KSh 15,000', count: 31, href: '/shop/budget' }
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
            Our Most Loved Wigs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Handpicked by our 269K+ community. Each wig comes with free styling and 24-hour delivery.
          </p>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {category.name} ({category.count})
              </a>
            ))}
          </div>
        </motion.div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-lg font-medium mb-2">{product.name}</div>
                    <div className="text-sm">Click to view details</div>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
                
                {/* Stock Alert */}
                {product.inStock <= 3 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Only {product.inStock} left!
                    </span>
                  </div>
                )}
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category */}
                <div className="text-sm text-orange-600 font-medium mb-2">
                  {product.category}
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-1 mb-4">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
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
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      KSh {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-2 text-lg text-gray-500 line-through">
                        KSh {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                      Save KSh {(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  )}
                </div>
                
                {/* CTA Button */}
                <motion.button
                  className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white"
        >
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">Limited Time Offer</span>
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">
            Free Styling + 24hr Delivery
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Order now and get professional styling included. Next delivery slot: Tomorrow 2 PM
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>17 people viewing</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>Price increases in 48 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

