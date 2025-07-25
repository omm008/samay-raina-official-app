import React from 'react'
import { motion } from 'framer-motion'
import PocketChess from '../components/PocketChess';
import FeaturedVideos from '../components/FeaturedVideos';
import PatternBackground from '../components/PatternBackground';
import InteractiveNameText from '../components/enhanced/InteractiveNameText';
import samayImg from '../assets/images/samay.png';

const Home = () => {

  return (
    <>
      {/* Top section with PatternBackground */}
      <div className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
        <PatternBackground />

        <div className="relative z-10 text-5xl flex flex-col items-center justify-center h-screen">
          {/* Centered Samay image - IN FRONT of the name - APPEARS FIRST */}
          <motion.img
            className='relative z-10 translate-y-16 sm:translate-y-20 md:translate-y-28 w-[16rem] sm:w-[20rem] md:w-[24rem] lg:w-[28rem] max-w-[80vw]'
            src={samayImg}
            alt="Samay Raina"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Interactive "SAMAY RAINA" name with hover effects - BEHIND the image - APPEARS AFTER */}
          <motion.div
            id="naam"
            className="absolute z-0 text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[11rem] flex flex-col sm:flex-row font-custom items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <InteractiveNameText
              text="SAMAY "
              className="text-white"
              hoverColor="#ff0000"
              transitionDuration={0.4}
              initialDelay={2.5}
              staggerDelay={0.08}
            />
            <InteractiveNameText
              text="RAINA"
              className="text-white"
              hoverColor="#ff0000"
              transitionDuration={0.4}
              initialDelay={2.8}
              staggerDelay={0.08}
            />
          </motion.div>

          {/* Comedy Chess Chaos tagline */}
          <section id='comic' className="relative z-10 py-8 md:py-16 translate-y-16 sm:translate-y-20 md:translate-y-28 mb-10 bg-white/70 backdrop-blur-md rounded-xl mx-4">
            <div className="max-w-4xl font-custom mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center"
              >
                <motion.span
                  className='px-3 sm:px-4 py-2 border-2 sm:border-4 text-red-600 bg-black border-white rounded-lg'
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Comedy, Chess, Chaos
                </motion.span>
              </motion.h2>
            </div>
          </section>
        </div>
      </div>
      {/* About Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 font-custom"
          >
            About <span className="text-red-400">Samay Raina</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto mb-12 rounded-full" />

          <div className="bg-gradient-to-br from-red-900/30 to-black/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-red-700/30 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Title & Tags */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
              >
                <div className="mb-6">
                  <div className="inline-flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="px-4 py-2 bg-red-600/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
                      Stand-Up Comedian
                    </span>
                    <span className="px-4 py-2 bg-yellow-600/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-500/30">
                      YouTuber
                    </span>
                    <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
                      Chess Promoter
                    </span>
                  </div>
                </div>

                <div className="text-6xl md:text-8xl mb-4">♔</div>
                <p className="text-gray-300 text-lg">
                  Blending comedy with chess to create unique entertainment
                </p>
              </motion.div>

              {/* Right: Bio */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="text-gray-100 leading-relaxed space-y-4">
                  <p>
                    <span className="font-semibold text-red-400">Samay Raina</span> (born <span className="font-semibold text-yellow-400">October 5, 1997</span> in Jammu, India) is a multi-talented content creator who revolutionized chess entertainment.
                  </p>
                  <p>
                    After completing his degree in chemical engineering, Samay gained nationwide popularity by blending comedy with chess on digital platforms—collaborating with legends like <span className="text-yellow-300 font-semibold">Vishwanathan Anand</span> and inspiring a new wave of content creators.
                  </p>
                  <p className="text-sm text-gray-400 italic">
                    "Making chess accessible and entertaining for everyone"
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <FeaturedVideos />


      {/* Chess Game Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-red-600 to-black">
        <div className="max-w-4xl mx-auto">
          <PocketChess />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 text-white bg-gradient-to-b from-black to-red-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center font-custom"
          >
            What People <span className="text-yellow-400">Say</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-red-700/30 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="text-4xl mr-3"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  ♔
                </motion.div>
                <div>
                  <h4 className="font-bold text-yellow-400">Vishwanathan Anand</h4>
                  <p className="text-sm text-gray-400">Chess Grandmaster</p>
                </div>
              </div>
              <blockquote className="italic text-lg leading-relaxed">
                "Samay is a genius at blending comedy and chess. Hilarious!"
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-yellow-400 text-sm"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-red-700/30 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="text-4xl mr-3"
                  whileHover={{ rotate: -15, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  😂
                </motion.div>
                <div>
                  <h4 className="font-bold text-yellow-400">Chess Fan</h4>
                  <p className="text-sm text-gray-400">Loyal Viewer</p>
                </div>
              </div>
              <blockquote className="italic text-lg leading-relaxed">
                "His streams are addictive. Best mix of humor and strategy."
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-yellow-400 text-sm"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
              }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-red-700/30 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  className="text-4xl mr-3"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  🏏
                </motion.div>
                <div>
                  <h4 className="font-bold text-yellow-400">Virat Kohli</h4>
                  <p className="text-sm text-gray-400">Cricket Legend</p>
                </div>
              </div>
              <blockquote className="italic text-lg leading-relaxed">
                "Samay's energy is unmatched. Inspiring comedian!"
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-yellow-400 text-sm"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Social Links */}
      <section className="py-16 px-4 text-white bg-gradient-to-t from-red-600 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-8 font-custom"
          >
            Connect with <span className="text-yellow-400">Samay</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-yellow-400 mx-auto mb-8 rounded-full" />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
            <motion.a
              href="https://www.youtube.com/@samayraina"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 30px rgba(255, 0, 0, 0.3)"
              }}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-red-700/30 hover:border-red-500 hover:text-yellow-400 transition-all duration-300"
            >
              <span className="text-2xl">📺</span>
              <span className="text-lg font-semibold">YouTube</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/samayraina_"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 30px rgba(233, 30, 99, 0.3)"
              }}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-red-700/30 hover:border-pink-500 hover:text-yellow-400 transition-all duration-300"
            >
              <span className="text-2xl">📸</span>
              <span className="text-lg font-semibold">Instagram</span>
            </motion.a>

            <motion.a
              href="https://twitter.com/ReheSamay"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 10px 30px rgba(29, 161, 242, 0.3)"
              }}
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-red-700/30 hover:border-blue-500 hover:text-yellow-400 transition-all duration-300"
            >
              <span className="text-2xl">🐦</span>
              <span className="text-lg font-semibold">Twitter</span>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home
