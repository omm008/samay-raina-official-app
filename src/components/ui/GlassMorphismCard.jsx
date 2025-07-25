import React from 'react';
import { motion } from 'framer-motion';

const GlassMorphismCard = ({ 
  children, 
  blur = 10, 
  opacity = 0.1, 
  borderRadius = '1rem', 
  className = '',
  hoverEffect = true,
  ...props 
}) => {
  const baseStyles = {
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius,
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  };

  const hoverStyles = hoverEffect ? {
    whileHover: {
      scale: 1.02,
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 }
    },
    whileTap: {
      scale: 0.98
    }
  } : {};

  return (
    <motion.div
      style={baseStyles}
      className={`glass-morphism ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...hoverStyles}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassMorphismCard;