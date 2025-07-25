import { useState, useEffect } from 'react';

// Hook for dynamic glass morphism effects
export const useGlassMorphism = (options = {}) => {
  const {
    blur = 10,
    opacity = 0.1,
    borderOpacity = 0.2,
    shadowIntensity = 0.1,
    hoverEffect = true
  } = options;

  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
    boxShadow: `0 8px 32px rgba(0, 0, 0, ${shadowIntensity})`,
    transition: 'all 0.3s ease'
  };

  const hoverStyle = hoverEffect ? {
    background: `rgba(255, 255, 255, ${opacity + 0.05})`,
    border: `1px solid rgba(255, 255, 255, ${borderOpacity + 0.1})`,
    boxShadow: `0 12px 40px rgba(0, 0, 0, ${shadowIntensity + 0.05})`,
    transform: 'translateY(-2px)'
  } : {};

  const style = isHovered && hoverEffect ? { ...baseStyle, ...hoverStyle } : baseStyle;

  const handlers = hoverEffect ? {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  } : {};

  return { style, handlers, isHovered };
};

// Hook for dark glass morphism
export const useDarkGlassMorphism = (options = {}) => {
  const {
    blur = 10,
    opacity = 0.2,
    borderOpacity = 0.1,
    shadowIntensity = 0.3,
    hoverEffect = true
  } = options;

  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    background: `rgba(0, 0, 0, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
    boxShadow: `0 8px 32px rgba(0, 0, 0, ${shadowIntensity})`,
    transition: 'all 0.3s ease'
  };

  const hoverStyle = hoverEffect ? {
    background: `rgba(0, 0, 0, ${opacity + 0.1})`,
    border: `1px solid rgba(255, 255, 255, ${borderOpacity + 0.1})`,
    boxShadow: `0 12px 40px rgba(0, 0, 0, ${shadowIntensity + 0.1})`,
    transform: 'translateY(-2px)'
  } : {};

  const style = isHovered && hoverEffect ? { ...baseStyle, ...hoverStyle } : baseStyle;

  const handlers = hoverEffect ? {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  } : {};

  return { style, handlers, isHovered };
};

// Hook for colored glass morphism (red theme)
export const useColoredGlassMorphism = (color = 'red', options = {}) => {
  const {
    blur = 10,
    opacity = 0.1,
    borderOpacity = 0.3,
    shadowIntensity = 0.1,
    hoverEffect = true
  } = options;

  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    red: { r: 220, g: 60, b: 34 },
    blue: { r: 59, g: 130, b: 246 },
    green: { r: 34, g: 197, b: 94 },
    purple: { r: 147, g: 51, b: 234 },
    yellow: { r: 245, g: 158, b: 11 }
  };

  const selectedColor = colorMap[color] || colorMap.red;
  const { r, g, b } = selectedColor;

  const baseStyle = {
    background: `rgba(${r}, ${g}, ${b}, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    border: `1px solid rgba(${r}, ${g}, ${b}, ${borderOpacity})`,
    boxShadow: `0 8px 32px rgba(${r}, ${g}, ${b}, ${shadowIntensity})`,
    transition: 'all 0.3s ease'
  };

  const hoverStyle = hoverEffect ? {
    background: `rgba(${r}, ${g}, ${b}, ${opacity + 0.1})`,
    border: `1px solid rgba(${r}, ${g}, ${b}, ${borderOpacity + 0.1})`,
    boxShadow: `0 12px 40px rgba(${r}, ${g}, ${b}, ${shadowIntensity + 0.1})`,
    transform: 'translateY(-2px)'
  } : {};

  const style = isHovered && hoverEffect ? { ...baseStyle, ...hoverStyle } : baseStyle;

  const handlers = hoverEffect ? {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  } : {};

  return { style, handlers, isHovered };
};

// Hook for responsive glass morphism
export const useResponsiveGlassMorphism = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveOptions = () => {
    switch (screenSize) {
      case 'mobile':
        return { blur: 5, opacity: 0.15, shadowIntensity: 0.05 };
      case 'tablet':
        return { blur: 8, opacity: 0.12, shadowIntensity: 0.08 };
      default:
        return { blur: 10, opacity: 0.1, shadowIntensity: 0.1 };
    }
  };

  return { screenSize, ...getResponsiveOptions() };
};

// Hook for animated glass morphism
export const useAnimatedGlassMorphism = (animationDuration = 300) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), animationDuration);
  };

  const animatedStyle = {
    transition: `all ${animationDuration}ms ease`,
    transform: isAnimating ? 'scale(1.02)' : 'scale(1)',
    filter: isAnimating ? 'brightness(1.1)' : 'brightness(1)'
  };

  return { animatedStyle, startAnimation, isAnimating };
};