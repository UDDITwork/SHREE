'use client';

import { motion } from 'framer-motion';

export const FloatingNodes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle animated vertical lines */}
      <motion.div
        className="absolute left-1/3 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent"
        animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute left-2/3 top-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent"
        animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
};

export const HeroContent = () => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-end z-10 px-4 sm:px-6 pb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Play button / Video indicator */}
      <motion.div
        className="mb-4 sm:mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/10 transition">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        className="mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ff88] animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-300">Available for Freelance Projects</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-white px-2"
        style={{ fontFamily: "'Cabin Sketch', cursive" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        Building the Future <span className="text-gray-400">of AI</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-sm sm:text-lg md:text-xl text-gray-400 text-center max-w-2xl mb-6 sm:mb-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Specializing in RAG Systems, MCP Servers, and Patent AI Tools.
        <span className="hidden sm:inline"> Building production platforms serving 500+ clients.</span>
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 w-full sm:w-auto px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        <a
          href="mailto:udditalerts247@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Hire Me
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition text-sm sm:text-base"
        >
          View Projects
        </a>
      </motion.div>
    </motion.div>
  );
};

export const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 flex items-center gap-2 sm:gap-3 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center">
        <motion.svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </div>
      <span className="text-xs sm:text-sm text-gray-400 hidden sm:inline">Scroll down</span>
    </motion.div>
  );
};

export const FloatingLabel = ({
  text,
  subtext,
  position
}: {
  text: string;
  subtext?: string;
  position: { x: string; y: string }
}) => {
  return (
    <motion.div
      className="absolute flex items-center gap-2"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
      <div>
        <div className="text-white text-sm font-medium">{text}</div>
        {subtext && <div className="text-gray-500 text-xs">{subtext}</div>}
      </div>
    </motion.div>
  );
};
