import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return { ref, controls, variants };
};

// Hook for staggered animations
export const useStaggerAnimation = (delay = 0.1) => {
  const controls = useAnimation();

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return { controls, staggerVariants, itemVariants };
};

// Hook for hover animations
export const useHoverAnimation = () => {
  const hoverVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    tap: { scale: 0.95 }
  };

  return hoverVariants;
};

// Hook for floating animations
export const useFloatingAnimation = (duration = 3, amplitude = 20) => {
  const floatingVariants = {
    animate: {
      y: [-amplitude, amplitude, -amplitude],
      transition: {
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return floatingVariants;
};

// Hook for text reveal animations
export const useTextReveal = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return textVariants;
};

// Hook for chess piece animations
export const useChessPieceAnimation = () => {
  const chessPieceVariants = {
    idle: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3 }
    },
    selected: {
      scale: 1.1,
      rotate: 5,
      boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)',
      transition: { duration: 0.3 }
    },
    moving: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.5,
        rotate: { repeat: 1, duration: 0.3 }
      }
    },
    captured: {
      scale: 0,
      opacity: 0,
      rotate: 180,
      transition: { duration: 0.4 }
    }
  };

  return chessPieceVariants;
};

// Hook for page transitions
export const usePageTransition = () => {
  const pageVariants = {
    initial: { opacity: 0, x: -200 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 200 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return { pageVariants, pageTransition };
};

// Hook for modal animations
export const useModalAnimation = () => {
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: -50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return { modalVariants, backdropVariants };
};