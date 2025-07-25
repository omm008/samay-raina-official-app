import React from 'react';
import { motion } from 'framer-motion';

const CareerHighlights = () => {
  const highlights = [
    {
      year: "2019",
      title: "Comedy Debut",
      description: "Started stand-up comedy while pursuing engineering",
      icon: "🎤"
    },
    {
      year: "2020",
      title: "Chess Streaming Pioneer",
      description: "Began streaming chess with comedy commentary",
      icon: "♟️"
    },
    {
      year: "2021",
      title: "Viral Sensation",
      description: "Chess streams gained millions of views",
      icon: "🚀"
    },
    {
      year: "2022",
      title: "Celebrity Collaborations",
      description: "Played chess with Bollywood stars and cricketers",
      icon: "⭐"
    },
    {
      year: "2023",
      title: "YouTube Milestone",
      description: "Crossed 1 million subscribers",
      icon: "🏆"
    },
    {
      year: "2024",
      title: "Comedy Specials",
      description: "Released multiple successful comedy specials",
      icon: "🎭"
    }
  ];

  return (
    <section className="py-16 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-6 font-custom">
            Career <span className="text-yellow-400">Highlights</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            From engineering student to entertainment icon - a journey of passion, creativity, and checkmates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-red-900/50 to-black/50 backdrop-blur-sm rounded-2xl p-6 border border-red-700/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <div className="text-yellow-400 font-bold text-lg mb-2">{highlight.year}</div>
              <h3 className="text-white font-bold text-xl mb-3">{highlight.title}</h3>
              <p className="text-gray-300">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;