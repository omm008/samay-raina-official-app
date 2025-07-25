import React from 'react';
import { motion } from 'framer-motion';

const AchievementsTimeline = () => {
  const achievements = [
    {
      title: "Collaboration with Viswanathan Anand",
      description: "Historic chess match with the legendary grandmaster",
      date: "2021"
    },
    {
      title: "Celebrity Chess Tournament",
      description: "Organized India's biggest celebrity chess tournament",
      date: "2022"
    },
    {
      title: "Comedy Special Success",
      description: "Multiple sold-out shows across major Indian cities",
      date: "2023"
    },
    {
      title: "Digital Creator Award",
      description: "Recognized as India's top gaming content creator",
      date: "2024"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-6 font-custom">
            Major <span className="text-red-400">Achievements</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-yellow-400"></div>

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gradient-to-br from-red-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-red-700/30">
                  <div className="text-yellow-400 font-bold text-sm mb-2">{achievement.date}</div>
                  <h3 className="text-white font-bold text-xl mb-3">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-red-600 z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsTimeline;