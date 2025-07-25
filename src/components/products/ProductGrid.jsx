import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToCart }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setDisplayedProducts(products);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [products]);

  const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-red-900/20 to-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-red-700/20"
        >
          {/* Image Skeleton */}
          <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </div>
          
          {/* Content Skeleton */}
          <div className="p-6 space-y-3">
            <div className="h-4 bg-gray-700 rounded animate-pulse" />
            <div className="h-3 bg-gray-800 rounded animate-pulse w-3/4" />
            <div className="h-3 bg-gray-800 rounded animate-pulse w-1/2" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-6 bg-yellow-600/30 rounded animate-pulse w-20" />
              <div className="h-8 bg-red-600/30 rounded-full animate-pulse w-16" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20"
    >
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-8xl mb-6"
      >
        🔍
      </motion.div>
      
      <motion.h3 
        className="text-3xl font-bold text-white mb-4 font-custom"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        No products found
      </motion.h3>
      
      <motion.p 
        className="text-gray-400 text-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Try adjusting your search or category filter
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300"
          onClick={() => window.location.reload()}
        >
          🔄 Reset Filters
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"
          onClick={() => document.querySelector('input[placeholder="Search products..."]')?.focus()}
        >
          🔍 Try Different Search
        </motion.button>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="products-grid" className="py-16 px-4 bg-gradient-to-b from-black to-red-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-custom">
            Featured <span className="text-yellow-400">Products</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our exclusive collection of chess-comedy merchandise
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingSkeleton />
            </motion.div>
          ) : displayedProducts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <EmptyState />
            </motion.div>
          ) : (
            <motion.div
              key="products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              <AnimatePresence>
                {displayedProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index}
                    addToCart={addToCart}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Button (if needed) */}
        {!isLoading && displayedProducts.length > 0 && displayedProducts.length >= 8 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(248, 113, 113, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="mr-2">📦</span>
              Load More Products
            </motion.button>
          </motion.div>
        )}

        {/* Products Count */}
        {!isLoading && displayedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-red-700/20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-3 h-3 border border-yellow-400 border-t-transparent rounded-full"
              />
              <span>Showing {displayedProducts.length} products</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;