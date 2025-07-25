import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../../types/index';

const CategoryFilter = ({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️', count: 20 },
    { id: PRODUCT_CATEGORIES.APPAREL, name: 'Apparel', icon: '👕', count: 8 },
    { id: PRODUCT_CATEGORIES.ACCESSORIES, name: 'Accessories', icon: '♟️', count: 7 },
    { id: PRODUCT_CATEGORIES.DIGITAL, name: 'Digital', icon: '💻', count: 5 }
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-r from-black via-red-900/10 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
          className="w-full h-full bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-[length:200%_200%]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <motion.div
              animate={{ 
                scale: isSearchFocused ? 1.02 : 1,
                boxShadow: isSearchFocused 
                  ? '0 0 30px rgba(234, 179, 8, 0.3)' 
                  : '0 0 0px rgba(234, 179, 8, 0)'
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-red-700/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-all duration-300 pr-12"
              />
              <motion.div
                animate={{ 
                  rotate: isSearchFocused ? 90 : 0,
                  scale: isSearchFocused ? 1.1 : 1
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"
              >
                🔍
              </motion.div>
            </motion.div>

            {/* Search Results Count */}
            <AnimatePresence>
              {searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm"
                >
                  Searching for "{searchQuery}"...
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-3 overflow-hidden ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-yellow-400 text-black shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-red-700/30 hover:border-yellow-400/50 hover:bg-white/20'
              }`}
            >
              {/* Background Shimmer for Active Category */}
              {selectedCategory === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3 
                  }}
                />
              )}

              <motion.span
                animate={{ 
                  rotate: selectedCategory === category.id ? [0, 10, -10, 0] : 0 
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: selectedCategory === category.id ? Infinity : 0,
                  repeatDelay: 2
                }}
                className="text-lg"
              >
                {category.icon}
              </motion.span>
              
              <span className="relative z-10">{category.name}</span>
              
              {/* Product Count Badge */}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`text-xs px-2 py-1 rounded-full font-bold ${
                  selectedCategory === category.id
                    ? 'bg-black/20 text-black'
                    : 'bg-red-600/50 text-white'
                }`}
              >
                {category.count}
              </motion.span>

              {/* Active Indicator */}
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Filter Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6"
        >
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border border-yellow-400 border-t-transparent rounded-full"
            />
            <span>
              {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name} 
              {' • '}
              {categories.find(c => c.id === selectedCategory)?.count || 0} items
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryFilter;