import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chessComedyQuotes = [
  {
    text: "Chess is like comedy - timing is everything!",
    author: "Samay Raina",
    context: "Stream Wisdom"
  },
  {
    text: "I promote chess like I promote comedy - with passion and chaos!",
    author: "Samay Raina",
    context: "Chess.com Collaboration"
  },
  {
    text: "Every chess game is a new joke waiting to be told.",
    author: "Samay Raina",
    context: "Stand-up Special"
  },
  {
    text: "Checkmate is just the punchline of a 64-square joke.",
    author: "Samay Raina",
    context: "YouTube Stream"
  },
  {
    text: "In chess and comedy, the best moves are often unexpected.",
    author: "Samay Raina",
    context: "Interview"
  }
];

const AutoRotatingQuotes = ({ 
  quotes = chessComedyQuotes, 
  interval = 3000, 
  animationType = 'fade' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [quotes.length, interval, isPaused]);

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slide':
        return {
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -100, opacity: 0 }
        };
      case 'scale':
        return {
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 1.2, opacity: 0 }
        };
      default: // fade
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const variants = getAnimationVariants();

  return (
    <div 
      className="relative h-24 flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl px-4"
        >
          <blockquote className="text-lg md:text-xl italic text-white mb-2">
            "{quotes[currentIndex].text}"
          </blockquote>
          <cite className="text-sm text-gray-300">
            - {quotes[currentIndex].author}
            {quotes[currentIndex].context && (
              <span className="text-red-400"> ({quotes[currentIndex].context})</span>
            )}
          </cite>
        </motion.div>
      </AnimatePresence>
      
      {/* Quote indicators */}
      <div className="absolute bottom-0 flex space-x-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-red-500 scale-125' 
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoRotatingQuotes;