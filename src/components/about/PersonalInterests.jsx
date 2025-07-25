import React from "react";
import { motion } from "framer-motion";

const PersonalInterests = () => {
  const interests = [
    {
      title: "Chess Strategy",
      description: "Passionate about chess theory and innovative gameplay",
      icon: "♟️",
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Stand-up Comedy",
      description: "Crafting jokes and perfecting comedic timing",
      icon: "🎤",
      color: "from-yellow-600 to-orange-600",
    },
    {
      title: "Content Creation",
      description: "Always exploring new formats and creative ideas",
      icon: "🎬",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Gaming Culture",
      description: "Promoting chess and gaming in Indian youth",
      icon: "🎮",
      color: "from-green-600 to-teal-600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-6 font-custom">
            Personal <span className="text-yellow-400">Interests</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Beyond the camera and stage, discover what drives Samay's creativity
            and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${interest.color} p-8 rounded-3xl text-center transform group-hover:scale-105 transition-all duration-300 shadow-2xl`}
              >
                <div className="text-6xl mb-4">{interest.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {interest.title}
                </h3>
                <p className="text-white/80 text-sm">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-600 to-yellow-400 p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-4">
              Join the Chess Comedy Revolution!
            </h3>
            <p className="text-black/80 text-lg mb-6">
              Follow Samay's journey and be part of India's most entertaining
              chess community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                Subscribe to YouTube
              </button>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Follow on Instagram
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalInterests;