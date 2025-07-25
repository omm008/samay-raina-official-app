import React from 'react';
import { motion } from 'framer-motion';
import samayImg from '../../assets/images/samay.png';

const BiographySection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-6 font-custom">
            The Man Behind the <span className="text-red-400">Laughter</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-700/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Early Life</h3>
              <p className="text-gray-200 leading-relaxed">
                Born on October 5, 1997, in Jammu, India, Samay Raina grew up with a passion for both 
                intellectual pursuits and making people laugh. His journey from a chemical engineering 
                student to India's most beloved chess-comedy creator is nothing short of extraordinary.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-700/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">The Turning Point</h3>
              <p className="text-gray-200 leading-relaxed">
                What started as casual chess streams during college transformed into a revolutionary 
                approach to content creation. Samay discovered his unique ability to blend strategic 
                gameplay with spontaneous humor, creating a new genre of entertainment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-red-600 to-black p-8 rounded-3xl border-4 border-yellow-400">
              <img 
                src={samayImg}
                alt="Samay Raina" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                Chess Grandmaster of Comedy
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-400/20 rounded-3xl blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;