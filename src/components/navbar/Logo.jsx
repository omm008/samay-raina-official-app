import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = ({ isScrolled }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -2 }} 
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link to="/" className="flex items-center space-x-2 group">
        <div className="relative">
          <motion.span
            className={`font-custom font-bold tracking-wider transition-all duration-500 ${
              isScrolled
                ? "text-2xl md:text-3xl"
                : "text-3xl md:text-4xl"
            }`}
            whileHover={{
              textShadow: "0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(251, 191, 36, 0.3)",
            }}
          >
            <motion.span 
              className="text-red-500 group-hover:text-red-400 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))",
              }}
              style={{
                display: "inline-block",
              }}
            >
              SAMAY
            </motion.span>
            <motion.span 
              className="text-yellow-400 group-hover:text-yellow-300 ml-1 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))",
              }}
              style={{
                display: "inline-block",
              }}
            >
              RAINA
            </motion.span>
          </motion.span>
          
          {/* Enhanced underline effect */}
          <motion.div 
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-400 group-hover:w-full transition-all duration-500"
            initial={{ width: 0 }}
            whileHover={{ 
              width: "100%",
              boxShadow: "0 0 10px rgba(239, 68, 68, 0.5), 0 0 20px rgba(251, 191, 36, 0.3)",
            }}
          />
          
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(239, 68, 68, 0.1) 0%, rgba(251, 191, 36, 0.05) 50%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />
        </div>
        
        <motion.span 
          className="text-lg hidden sm:block"
          whileHover={{ 
            scale: 1.3, 
            rotate: [0, -10, 10, -5, 5, 0],
            filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))",
          }}
          transition={{ duration: 0.6 }}
        >
          ♟️
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default Logo;