import React from 'react';
import { motion } from 'framer-motion';

const InteractiveNameText = ({ 
  text, 
  className = '', 
  hoverColor = '#ffffff', 
  transitionDuration = 0.3,
  initialDelay = 0,
  staggerDelay = 0.05
}) => {
  const letters = text.split('');

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: initialDelay,
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Hover animation variants
  const hoverVariants = {
    hover: {
      scale: 1.15,
      y: -8,
      color: hoverColor,
      textShadow: "0px 0px 12px rgba(255,255,255,0.9), 0px 0px 24px rgba(255,0,0,0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: transitionDuration
      }
    },
    tap: {
      scale: 0.9,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className={`inline-flex ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ perspective: '1000px' }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="cursor-pointer select-none"
          variants={letterVariants}
          whileHover="hover"
          whileTap="tap"
          custom={index}
          style={{
            display: 'inline-block',
            transformOrigin: 'center bottom',
            transformStyle: 'preserve-3d'
          }}
          {...hoverVariants}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default InteractiveNameText;