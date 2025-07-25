import React from 'react';
import { motion } from 'framer-motion';

const CartIcon = ({ itemCount, onClick }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <motion.button
        onClick={onClick}
        className="relative p-3 rounded-xl text-white transition-all duration-300 group overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }}
        aria-label="Shopping cart"
        whileHover={{
          background: 'rgba(220, 60, 34, 0.15)',
          borderColor: 'rgba(220, 60, 34, 0.4)',
          boxShadow: "0 8px 25px rgba(220, 60, 34, 0.25), 0 0 20px rgba(220, 60, 34, 0.1)",
          color: '#FDE047',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span 
          className="text-xl md:text-2xl block relative z-10"
          whileHover={{ 
            rotate: [0, -8, 8, -4, 4, 0],
            scale: 1.1
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          🛒
        </motion.span>
        
        {/* Enhanced hover glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 via-yellow-400/15 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{
            background: 'linear-gradient(45deg, rgba(220, 60, 34, 0.2), rgba(251, 191, 36, 0.15), rgba(220, 60, 34, 0.2))',
          }}
        />
        
        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(251, 191, 36, 0.3), transparent)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {itemCount > 0 && (
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -5, 5, 0],
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 15,
              hover: { duration: 0.4 }
            }}
            className="absolute -top-2 -right-2 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg border-2 border-white/30 z-20"
            style={{
              background: 'linear-gradient(135deg, #DC3C22 0%, #EF4444 50%, #DC2626 100%)',
              boxShadow: '0 4px 12px rgba(220, 60, 34, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            <motion.span
              animate={itemCount > 0 ? {
                scale: [1, 1.2, 1],
              } : {}}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              {itemCount > 99 ? "99+" : itemCount}
            </motion.span>
          </motion.span>
        )}
      </motion.button>
    </motion.div>
  );
};

export default CartIcon;