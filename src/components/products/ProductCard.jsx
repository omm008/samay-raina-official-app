import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../../types/index';

const ProductCard = ({ product, index, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const discountPercentage = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-gradient-to-br from-red-900/30 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-red-700/30 hover:border-yellow-400/50 transition-all duration-300 relative"
        >
          {/* Badges */}
          <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
            {product.isNew && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-bold"
              >
                NEW
              </motion.div>
            )}
            {product.isBestseller && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold"
              >
                BESTSELLER
              </motion.div>
            )}
            {discountPercentage > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold"
              >
                -{discountPercentage}%
              </motion.div>
            )}
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute top-3 right-3 z-20 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              Out of Stock
            </div>
          )}

          {/* Product Image */}
          <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <>
                <motion.img
                  src={product.images[0]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  onLoad={() => setImageLoaded(true)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full"
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">
                {product.category === PRODUCT_CATEGORIES.APPAREL && '👕'}
                {product.category === PRODUCT_CATEGORIES.ACCESSORIES && '♟️'}
                {product.category === PRODUCT_CATEGORIES.DIGITAL && '💻'}
              </div>
            )}

            {/* Hover Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1 : 0 }}
                transition={{ delay: 0.1 }}
                className="text-white text-sm font-bold bg-black/60 px-4 py-2 rounded-full"
              >
                View Details
              </motion.div>
            </motion.div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            <motion.h3
              className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors line-clamp-1"
              whileHover={{ x: 2 }}
            >
              {product.name}
            </motion.h3>

            <p className="text-gray-400 text-sm mb-3 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className={`text-sm ${i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-600'
                      }`}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              <span className="text-gray-400 text-xs">({product.reviews})</span>
            </div>

            {/* Price Section */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <motion.div
                  className="text-2xl font-bold text-yellow-400"
                  whileHover={{ scale: 1.05 }}
                >
                  ₹{product.price}
                </motion.div>
                {discountPercentage > 0 && (
                  <div className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </div>
                )}
              </div>

              {product.inStock && (
                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full font-bold hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <motion.span
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    🛒
                  </motion.span>
                  Add
                </motion.button>
              )}
            </div>

            {/* Stock Indicator */}
            {product.inStock && product.stockCount <= 10 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-orange-400 text-xs font-medium"
              >
                Only {product.stockCount} left in stock!
              </motion.div>
            )}
          </div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
            initial={{ x: '-100%' }}
            animate={{ x: isHovered ? '100%' : '-100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;