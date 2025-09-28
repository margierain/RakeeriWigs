'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Grid, List, SlidersHorizontal } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string
  category: string
  description?: string
  inStock?: number
  features?: string[]
}

export function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('popular')
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products', count: 89 },
    { id: 'water-curl', name: 'Water Curl', count: 8 },
    { id: 'pixie', name: 'Pixie', count: 13 },
    { id: 'pineapple', name: 'Pineapple', count: 11 },
    { id: 'madusko', name: 'Madusko', count: 8 },
    { id: 'headband', name: 'Headband', count: 5 },
    { id: 'caster', name: 'Caster', count: 3 },
    { id: 'bob', name: 'Bob', count: 2 },
    { id: 'beauty-products', name: 'Beauty Products', count: 12 },
    { id: 'uncategorized', name: 'Other Styles', count: 20 }
  ]

  const products: Product[] = [
    {
      id: 1,
      name: 'Water Curl (Ginger) 10"',
      price: 9500,
      image: '/images/wig-placeholder.svg',
      rating: 4.8,
      reviews: 45,
      category: 'water-curl',
      badge: 'Popular',
      inStock: 5,
      description: 'Beautiful water curl texture in natural ginger color. Perfect for everyday wear.',
      features: ['Natural Ginger', 'Water Curl Texture', '10" Length']
    },
    {
      id: 2,
      name: 'Water Curl (Dyed)',
      price: 17000,
      image: '/images/wig-placeholder.svg',
      rating: 4.9,
      reviews: 32,
      category: 'water-curl',
      badge: 'Premium',
      inStock: 3,
      description: 'Premium dyed water curl with stunning color and texture.',
      features: ['Dyed Color', 'Premium Quality', 'Water Curl']
    },
    {
      id: 3,
      name: 'Wine Red Body 16"',
      price: 20000,
      image: '/images/wig-placeholder.svg',
      rating: 4.7,
      reviews: 28,
      category: 'uncategorized',
      badge: 'Limited',
      inStock: 2,
      description: 'Stunning wine red color with 16" length for maximum impact.',
      features: ['Wine Red', '16" Length', 'Body Wave']
    },
    {
      id: 4,
      name: 'Ginger Body',
      price: 22000,
      image: '/images/wig-placeholder.svg',
      rating: 4.8,
      reviews: 41,
      category: 'uncategorized',
      badge: 'Best Seller',
      inStock: 4,
      description: 'Natural ginger body wave with premium quality and comfort.',
      features: ['Natural Ginger', 'Body Wave', 'Premium Quality']
    },
    {
      id: 5,
      name: 'Body Wave Human 14"',
      price: 15000,
      image: '/images/wig-placeholder.svg',
      rating: 4.6,
      reviews: 67,
      category: 'uncategorized',
      badge: 'Value',
      inStock: 8,
      description: 'Human hair body wave in 14" length. Natural and comfortable.',
      features: ['Human Hair', '14" Length', 'Body Wave']
    },
    {
      id: 6,
      name: 'Black Pineapple (Polkadots)',
      price: 2000,
      image: '/images/wig-placeholder.svg',
      rating: 4.5,
      reviews: 89,
      category: 'pineapple',
      badge: 'Budget',
      inStock: 15,
      description: 'Fun and playful pineapple style with polkadot pattern.',
      features: ['Pineapple Style', 'Polkadots', 'Budget Friendly']
    },
    {
      id: 7,
      name: 'Caster 1/350',
      price: 2500,
      image: '/images/wig-placeholder.svg',
      rating: 4.4,
      reviews: 23,
      category: 'caster',
      badge: 'Classic',
      inStock: 12,
      description: 'Classic caster style with 1/350 texture for natural look.',
      features: ['Classic Style', '1/350 Texture', 'Natural Look']
    },
    {
      id: 8,
      name: 'Headband Curly',
      price: 3500,
      image: '/images/wig-placeholder.svg',
      rating: 4.6,
      reviews: 56,
      category: 'headband',
      badge: 'Easy Wear',
      inStock: 10,
      description: 'Easy-to-wear headband style with beautiful curly texture.',
      features: ['Headband Style', 'Curly Texture', 'Easy Installation']
    },
    {
      id: 9,
      name: 'Hair Oil',
      price: 300,
      image: '/images/wig-placeholder.svg',
      rating: 4.7,
      reviews: 134,
      category: 'beauty-products',
      badge: 'Essential',
      inStock: 25,
      description: 'Essential hair oil for maintaining healthy, shiny hair.',
      features: ['Hair Care', 'Essential Oil', 'Affordable']
    },
    {
      id: 10,
      name: 'SunBurn Cream (Day & Night)',
      price: 1200,
      image: '/images/wig-placeholder.svg',
      rating: 4.8,
      reviews: 78,
      category: 'beauty-products',
      badge: 'Skincare',
      inStock: 18,
      description: 'Dual-purpose sunburn cream for day and night use.',
      features: ['Day & Night', 'Sunburn Relief', 'Skincare']
    },
    {
      id: 11,
      name: 'Anti-Aging Enzyme',
      price: 1200,
      image: '/images/wig-placeholder.svg',
      rating: 4.6,
      reviews: 45,
      category: 'beauty-products',
      badge: 'Anti-Aging',
      inStock: 20,
      description: 'Powerful anti-aging enzyme for youthful, radiant skin.',
      features: ['Anti-Aging', 'Enzyme Formula', 'Youthful Skin']
    },
    {
      id: 12,
      name: 'Opal by Rakeeri Body Oil',
      price: 1200,
      image: '/images/wig-placeholder.svg',
      rating: 4.9,
      reviews: 92,
      category: 'beauty-products',
      badge: 'Signature',
      inStock: 15,
      description: 'Signature body oil by Rakeeri for soft, glowing skin.',
      features: ['Signature Product', 'Body Oil', 'Glowing Skin']
    }
  ]

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Shop Premium Wigs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Discover your perfect wig from our curated collection. Free styling included, 24hr delivery, pay on delivery.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm sticky top-8"
            >
              <div className="flex items-center mb-6">
                <SlidersHorizontal className="w-5 h-5 mr-2 text-orange-600" />
                <h3 className="font-semibold text-gray-900">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-medium text-gray-900 mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-orange-100 text-orange-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-medium text-gray-900 mb-4">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="flex-1"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>KSh {priceRange[0].toLocaleString()}</span>
                    <span>KSh {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Quick Filters */}
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Quick Filters</h4>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    In Stock Only
                  </button>
                  <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    On Sale
                  </button>
                  <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    Free Shipping
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-4 shadow-sm mb-8"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
                
                <div className="flex items-center space-x-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Products Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  {viewMode === 'grid' ? (
                    <ProductCard product={product} />
                  ) : (
                    <ProductListItem product={product} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <button className="px-8 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300">
                Load More Products
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <>
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
         {product.inStock && product.inStock <= 3 && (
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
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
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
          {product.features?.slice(0, 2).map((feature: string, i: number) => (
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
    </>
  )
}

function ProductListItem({ product }: { product: Product }) {
  return (
    <div className="flex">
      {/* Image */}
      <div className="w-48 h-48 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center flex-shrink-0">
        <div className="text-center text-gray-600">
          <div className="text-sm font-medium">{product.name}</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center mb-2">
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                {product.badge}
              </span>
               {product.inStock && product.inStock <= 3 && (
                 <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                   Only {product.inStock} left!
                 </span>
               )}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              KSh {product.price.toLocaleString()}
            </div>
            {product.originalPrice && (
              <div className="text-lg text-gray-500 line-through mb-2">
                KSh {product.originalPrice.toLocaleString()}
              </div>
            )}
            <div className="flex items-center mb-4">
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
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <motion.button
              className="px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </motion.button>
          </div>
        </div>
        
        {/* Features */}
        <div className="flex space-x-6">
          {product.features?.map((feature: string, i: number) => (
            <div key={i} className="flex items-center text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
