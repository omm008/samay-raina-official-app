import React from 'react';
import { motion } from 'framer-motion';

const MobileMenuButton = ({ isOpen, onClick }) => {
  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(220, 60, 34, 0.3)",
        background: 'rgba(220, 60, 34, 0.15)',
        borderColor: 'rgba(220, 60, 34, 0.4)',
        color: '#FDE047',
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="mobile-menu-button lg:hidden p-3 rounded-xl text-white transition-all duration-300 group overflow-hidden relative"
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
      aria-label="Toggle mobile menu"
    >
      {/* Enhanced hover glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(220, 60, 34, 0.2) 0%, rgba(251, 191, 36, 0.15) 50%, rgba(220, 60, 34, 0.2) 100%)',
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
      
      <div className="w-6 h-6 flex flex-col justify-center items-center relative z-10">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-current mb-1 rounded-full"
          style={{
            boxShadow: '0 0 4px currentColor',
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          className="w-6 h-0.5 bg-current mb-1 rounded-full"
          style={{
            boxShadow: '0 0 4px currentColor',
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-current rounded-full"
          style={{
            boxShadow: '0 0 4px currentColor',
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </motion.button>
  );
};

export default MobileMenuButton;