'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingNodes, HeroContent, ScrollIndicator } from '@/components/FloatingNodes';
import { TechStackGrid } from '@/components/TechStackIcons';
import { MouseSpotlight } from '@/components/MouseSpotlight';
import { ChatBot } from '@/components/ChatBot';
import { AtomicOrbit } from '@/components/AtomicOrbit';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      {/* Mouse Spotlight Effect */}
      <MouseSpotlight />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation - Transparent */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lorduddit-/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/UDDITwork"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* Portfolio */}
            <a
              href="https://uddit.site"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              aria-label="Portfolio"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-full hover:bg-white/5">Home</Link>
            <Link href="#about" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-full hover:bg-white/5">About</Link>
            <Link href="#expertise" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-full hover:bg-white/5">Expertise</Link>
            <Link href="#projects" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-full hover:bg-white/5">Projects</Link>
            <Link href="#blog" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-full hover:bg-white/5">Blog</Link>
            <Link href="#contact" className="px-4 py-2 text-sm text-gray-300 hover:text-white transition rounded-full hover:bg-white/5">Contact</Link>
          </motion.div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Hire Me Button - Hidden on very small screens */}
            <motion.a
              href="mailto:udditalerts247@gmail.com"
              className="hidden sm:inline-flex btn-white text-xs sm:text-sm px-3 sm:px-4 py-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden mt-3 mx-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 space-y-2">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition">Home</Link>
                <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition">About</Link>
                <Link href="#expertise" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition">Expertise</Link>
                <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition">Projects</Link>
                <Link href="#blog" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition">Blog</Link>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition">Contact</Link>
                <a
                  href="mailto:udditalerts247@gmail.com"
                  className="block px-4 py-3 mt-2 text-center bg-white text-black rounded-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Full Screen Hero Section with DeFi Aesthetic */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Hero Background with organic gradient */}
        <div className="absolute inset-0">
          <Image
            src="/PROFILE_BACKGROUND_HERO IMAGE.jpg"
            alt="Uddit - AI Engineer"
            fill
            className="object-cover object-center opacity-60"
            priority
            quality={100}
          />
          {/* Organic gradient overlays */}
          <div className="absolute inset-0 defi-gradient opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />

          {/* Organic shape blurs */}
          <div className="organic-shape organic-shape-1" />
          <div className="organic-shape organic-shape-2" />
        </div>

        {/* Floating Nodes with Labels */}
        <FloatingNodes />

        {/* Hero Content */}
        <HeroContent />

        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Curved decorative line */}
        <svg className="absolute bottom-0 left-0 w-full h-32 pointer-events-none" preserveAspectRatio="none">
          <motion.path
            d="M0,100 Q400,20 800,80 T1600,60"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </section>

      {/* Tech Stack Icons */}
      <TechStackGrid />

      {/* Atomic Orbit - Companies */}
      <AtomicOrbit />

      {/* SHREE AI ChatBot */}
      <ChatBot />
    </div>
  );
}
