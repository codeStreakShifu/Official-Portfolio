// 1. HERO SECTION - src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

const Hero = () => {
  const heroImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80";

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Parallax
      blur={0}
      bgImage={heroImage}
      bgImageAlt="Digital Universe"
      strength={200}
      className="relative"
    >
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [-20, -window.innerHeight],
                x: Math.random() * window.innerWidth,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 10
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.h2
              {...fadeIn}
              className="text-sm md:text-base text-indigo-400 uppercase tracking-[0.2em] font-light"
            >
              Welcome to my portfolio
            </motion.h2>

            <motion.h1
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-7xl font-bold text-white"
            >
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Joseph
              </span>
            </motion.h1>

            <motion.p
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 font-light"
            >
              <span className="typing-text">
                Website Developer • Graphic Designer • Social Media Manager
              </span>
            </motion.p>

            <motion.div
              {...fadeIn}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center mt-8"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full 
                hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200
                shadow-lg hover:shadow-indigo-500/25"
              >
                Let's Work Together
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10
                transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>
    </Parallax>
  );
};

export default Hero;