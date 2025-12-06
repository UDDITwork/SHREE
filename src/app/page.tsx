'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FloatingNodes, HeroContent, ScrollIndicator } from '@/components/FloatingNodes';
import { TechStackGrid } from '@/components/TechStackIcons';
import { MouseSpotlight } from '@/components/MouseSpotlight';
import { ChatBot } from '@/components/ChatBot';
import { AtomicOrbit } from '@/components/AtomicOrbit';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      {/* Mouse Spotlight Effect */}
      <MouseSpotlight />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation - Transparent */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-sm">U</span>
            </div>
          </motion.div>

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

          <motion.a
            href="mailto:udditalerts247@gmail.com"
            className="btn-white text-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hire Me
          </motion.a>
        </div>
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
