import React from "react";
import { motion } from "framer-motion";

const ProductHero = () => {
  const floatingIcons = [
    { icon: "🛍️", size: "text-6xl", position: "top-10 left-10", delay: 0 },
    { icon: "♟️", size: "text-4xl", position: "top-20 right-20", delay: 0.2 },
    { icon: "🎤", size: "text-5xl", position: "bottom-20 left-20", delay: 0.4 },
    {
      icon: "🎭",
      size: "text-3xl",
      position: "bottom-10 right-10",
      delay: 0.6,
    },
    { icon: "👕", size: "text-4xl", position: "top-1/2 left-1/4", delay: 0.8 },
    { icon: "🏆", size: "text-3xl", position: "top-1/3 right-1/3", delay: 1.0 },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-red-900 via-red-800 to-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 opacity-10">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} ${item.size}`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -20, 0],
            }}
            transition={{
              delay: item.delay,
              duration: 0.8,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-custom"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span
              className="text-red-400 inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(248, 113, 113, 0.8)",
              }}
              transition={{ duration: 0.3 }}
            >
              Samay's
            </motion.span>
            <br />
            <motion.span
              className="text-yellow-400 inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(251, 191, 36, 0.8)",
              }}
              transition={{ duration: 0.3 }}
            >
              Merch Store
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Show your love for chess, comedy, and chaos with official Samay
            Raina merchandise!
          </motion.p>

          {/* Animated Divider */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            {[
              { number: "20+", label: "Products", icon: "🛍️" },
              { number: "1000+", label: "Happy Customers", icon: "😊" },
              { number: "4.8★", label: "Average Rating", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-red-700/30 hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-yellow-400">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(248, 113, 113, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("products-grid")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="mr-2">🚀</span>
              Explore Collection
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;
