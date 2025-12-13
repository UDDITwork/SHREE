'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Menu sections for BIA-style navigation
const menuSections = [
  { id: 'home', label: 'HOME', color: '#00ff88' },
  { id: 'work', label: 'WORK', color: '#00d4ff' },
  { id: 'expertise', label: 'EXPERTISE', color: '#00ff88' },
  { id: 'about', label: 'ABOUT', color: '#00d4ff' },
  { id: 'contact', label: 'CONTACT', color: '#00ff88' },
];

// Production systems data
const productionSystems = [
  {
    name: 'ShipSarthi',
    url: 'https://shipsarthi.com',
    description: 'PAN-India logistics platform',
    stats: '500+ clients',
    cycle: '38 days',
    category: 'Logistics',
  },
  {
    name: 'ZAMMERNOW',
    url: 'https://zammernow.com',
    description: 'Quick commerce fashion',
    stats: '30-min delivery',
    cycle: '102 days',
    category: 'E-commerce',
  },
  {
    name: 'RichieAI',
    url: 'https://richieai.in',
    description: 'AI-powered financial planning',
    stats: 'SaaS Platform',
    cycle: 'Live',
    category: 'Fintech',
  },
  {
    name: 'Gantavyam',
    url: 'https://gantavyam.site',
    description: 'Safe ride-booking for women',
    stats: 'Delhi NCR',
    cycle: 'Live',
    category: 'Transportation',
  },
];

// Categories for filter
const categories = [
  { name: 'All Projects', count: 4 },
  { name: 'AI/ML', count: 3 },
  { name: 'E-commerce', count: 2 },
  { name: 'Logistics', count: 1 },
  { name: 'Fintech', count: 1 },
];

// Industries
const industries = [
  { name: 'Logistics', count: 2 },
  { name: 'Fashion', count: 1 },
  { name: 'Finance', count: 1 },
  { name: 'Transportation', count: 1 },
];

// Expertise data
const expertiseAreas = [
  {
    category: 'AI/ML Engineering',
    skills: ['RAG Systems', 'LoRA Fine-tuning', 'Vector Databases', 'LLM Integration', 'PyTorch', 'TensorFlow'],
    icon: 'brain',
  },
  {
    category: 'Full-Stack Development',
    skills: ['React/Next.js', 'Node.js', 'Django', 'Spring Boot', 'PostgreSQL', 'MongoDB'],
    icon: 'code',
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Microservices'],
    icon: 'cloud',
  },
  {
    category: 'Enterprise Solutions',
    skills: ['System Architecture', 'API Design', 'Scalability', 'Performance', 'Security'],
    icon: 'building',
  },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productionSystems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00ff88]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00d4ff]/5 rounded-full blur-[200px]" />
      </motion.div>

      {/* Minimal Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent">
                UDDIT
              </span>
              <span className="text-xs text-gray-500">AI/ML Engineer</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition">Home</Link>
            <span className="text-sm text-[#00ff88]">About</span>
            <a href="#work" className="text-sm text-gray-400 hover:text-white transition">Work</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* BIA-Style Floating Menu Button */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <motion.button
          className={`relative flex items-center justify-center transition-all duration-500 ${
            menuOpen
              ? 'w-20 h-20 bg-[#00d4ff]'
              : 'w-14 h-14 bg-gradient-to-r from-[#00ff88] to-[#00d4ff]'
          } rounded-full shadow-2xl`}
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            boxShadow: menuOpen
              ? '0 0 60px rgba(0, 212, 255, 0.5)'
              : '0 0 40px rgba(0, 255, 136, 0.4)',
          }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="text-black font-medium text-sm"
              >
                Close
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="text-black font-medium text-sm"
              >
                
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* BIA-Style Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Menu Grid with Preview Cards */}
            <div className="h-full pt-20 pb-32 px-8 overflow-y-auto">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {menuSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      setActiveSection(section.id);
                      setMenuOpen(false);
                      const el = document.getElementById(section.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {activeSection === section.id && (
                        <motion.div
                          layoutId="activeDot"
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: section.color }}
                        />
                      )}
                      <span className="text-sm font-bold text-white group-hover:text-[#00ff88] transition">
                        {section.label}
                      </span>
                    </div>

                    {/* Preview Card */}
                    <motion.div
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 border border-white/10"
                      whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 136, 0.3)' }}
                    >
                      {section.id === 'home' && (
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                          <div className="text-center">
                            <h3 className="text-lg font-bold">BUILDING AI</h3>
                            <h3 className="text-lg font-bold">SOLUTIONS &</h3>
                            <h3 className="text-lg font-bold text-gray-500">ENTERPRISE</h3>
                            <h3 className="text-lg font-bold text-gray-500">PLATFORMS</h3>
                          </div>
                        </div>
                      )}
                      {section.id === 'work' && (
                        <div className="absolute inset-0 grid grid-cols-2 gap-1 p-2">
                          {productionSystems.map((sys, i) => (
                            <div key={i} className="bg-white/10 rounded flex items-center justify-center text-[8px] text-gray-400">
                              {sys.name}
                            </div>
                          ))}
                        </div>
                      )}
                      {section.id === 'expertise' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-[#00ff88]">4+</div>
                            <div className="text-xs text-gray-400">YEARS OF</div>
                            <div className="text-xs text-gray-400">BUILDING AI</div>
                            <div className="text-xs text-gray-400">SOLUTIONS</div>
                          </div>
                        </div>
                      )}
                      {section.id === 'about' && (
                        <div className="absolute inset-0 p-4 flex flex-col justify-center">
                          <p className="text-xs text-gray-300">
                            Building enterprise AI systems driven by innovation & built on logic.
                          </p>
                        </div>
                      )}
                      {section.id === 'contact' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-xs text-[#00ff88]">Let's Build</p>
                            <p className="text-lg font-bold">Together</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links in Menu */}
            <div className="absolute bottom-24 right-8 flex items-center gap-4">
              <span className="text-xs text-gray-500">FOLLOW US</span>
              <a href="https://github.com/UDDITwork" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00ff88] transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/lorduddit-" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00ff88] transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        {/* SECTION 1: Hero Split-Screen Slider */}
        <section id="home" className="min-h-screen flex flex-col lg:flex-row">
          {/* Left Side - Image Slider */}
          <motion.div
            className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
              >
                {/* Project Preview */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="text-xs tracking-widest text-[#00ff88]">
                        {productionSystems[currentSlide].category.toUpperCase()}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-bold mt-4">
                        {productionSystems[currentSlide].name}
                      </h2>
                      <p className="text-gray-400 mt-4 max-w-md mx-auto">
                        {productionSystems[currentSlide].description}
                      </p>
                      <div className="flex items-center justify-center gap-4 mt-6">
                        <span className="px-3 py-1 bg-[#00ff88]/20 text-[#00ff88] rounded-full text-sm">
                          {productionSystems[currentSlide].stats}
                        </span>
                        <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm">
                          {productionSystems[currentSlide].cycle}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {productionSystems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide ? 'w-8 bg-[#00ff88]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] pointer-events-none" />
          </motion.div>

          {/* Right Side - Hero Content */}
          <motion.div
            className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex items-center justify-center p-8 lg:p-16"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-xl">
              <motion.p
                className="text-xs tracking-[0.3em] text-[#00ff88] mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                AI RESEARCHER & ENGINEER
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="block">BUILDING</span>
                <span className="block">INTELLIGENT</span>
                <span className="block text-gray-500">AI MEMORY &</span>
                <span className="block text-gray-500">AGENT SYSTEMS</span>
              </motion.h1>

              <motion.p
                className="text-gray-400 text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Specializing in RAG Architectures, Long-Context Memory, Episodic Memory Systems,
                and Multi-Agent Orchestration with Google Agent SDK & LlamaIndex.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="#work"
                  className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition flex items-center gap-2"
                >
                  VIEW WORK
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition"
                >
                  CONTACT
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: Masonry Gallery Work Section (BIA Cases Style) */}
        <section id="work" className="py-24 relative">
          {/* Filter Button - BIA Style */}
          <motion.button
            className="fixed right-8 top-1/2 -translate-y-1/2 z-40 px-3 py-8 bg-white/5 backdrop-blur border border-white/10 rounded-full"
            style={{ writingMode: 'vertical-rl' }}
            onClick={() => setFilterOpen(!filterOpen)}
            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <span className="text-xs tracking-widest">FILTER WORK</span>
          </motion.button>

          {/* Filter Sidebar */}
          <AnimatePresence>
            {filterOpen && (
              <motion.div
                className="fixed right-0 top-0 h-full w-80 bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-white/10 z-40 p-8 pt-24"
                initial={{ x: 320 }}
                animate={{ x: 0 }}
                exit={{ x: 320 }}
              >
                <h3 className="text-lg font-bold mb-6">CATEGORIES</h3>
                {categories.map((cat) => (
                  <div key={cat.name} className="flex justify-between py-2 border-b border-white/5 cursor-pointer hover:text-[#00ff88] transition">
                    <span className="text-sm">{cat.name}</span>
                    <span className="text-sm text-gray-500">{cat.count}</span>
                  </div>
                ))}

                <h3 className="text-lg font-bold mt-8 mb-6">INDUSTRIES</h3>
                {industries.map((ind) => (
                  <div key={ind.name} className="flex justify-between py-2 border-b border-white/5 cursor-pointer hover:text-[#00ff88] transition">
                    <span className="text-sm">{ind.name}</span>
                    <span className="text-sm text-gray-500">{ind.count}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Masonry Grid */}
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2
              className="text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Selected Work
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
              {/* Large Feature Card */}
              <motion.a
                href={productionSystems[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#00ff88]/20 to-transparent border border-white/10 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <span className="text-xs text-[#00ff88] tracking-widest">{productionSystems[0].category.toUpperCase()}</span>
                  <h3 className="text-3xl font-bold mt-2 group-hover:text-[#00ff88] transition">{productionSystems[0].name}</h3>
                  <p className="text-gray-400 mt-2">{productionSystems[0].description}</p>
                </div>
              </motion.a>

              {/* Medium Cards */}
              {productionSystems.slice(1).map((system, index) => (
                <motion.a
                  key={system.name}
                  href={system.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group ${
                    index === 0 ? 'md:row-span-2' : ''
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <span className="text-[10px] text-[#00d4ff] tracking-widest">{system.category.toUpperCase()}</span>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-[#00ff88] transition">{system.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">{system.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Half-Divided Expertise Section */}
        <section id="expertise" className="min-h-screen flex flex-col lg:flex-row">
          {/* Left - Stats */}
          <motion.div
            className="w-full lg:w-1/2 bg-white/[0.02] p-8 lg:p-16 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.3em] text-[#00ff88] mb-6">EXPERTISE</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#00ff88]">4+</span> Years of Building AI Solutions
              </h2>
              <p className="text-gray-400 mb-12">
                From RAG systems and LLM integration to enterprise-grade platforms serving hundreds of clients.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '4', label: 'Production Systems' },
                  { value: '500+', label: 'Clients Served' },
                  { value: '38', label: 'Days Fastest Deploy' },
                  { value: '108', label: 'GitHub Repos' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Skills Grid */}
          <motion.div
            className="w-full lg:w-1/2 p-8 lg:p-16 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.category}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00ff88]/30 transition group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:bg-[#00ff88]/20 transition">
                    <div className="w-4 h-4 rounded-full bg-[#00ff88]" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{area.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 4: About - Image Gallery Layout */}
        <section id="about" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left - Large Image */}
              <motion.div
                className="lg:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#00ff88]/10 to-[#00d4ff]/10 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-xs tracking-[0.3em] text-[#00ff88] mb-4">ABOUT ME</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      AI Researcher & Systems Engineer
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                      B.Tech Final Year at MNIT Jaipur with a parallel B.Sc in Data Science from IIT Madras.
                      Building production-ready AI systems with focus on RAG, memory architectures, and autonomous agents.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right - Stacked Small Cards */}
              <div className="space-y-4">
                <motion.div
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#00ff88]">MNIT Jaipur</span>
                  <p className="text-sm text-gray-400 mt-1">B.Tech - Final Year</p>
                </motion.div>

                <motion.div
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="text-[#00d4ff]">IIT Madras</span>
                  <p className="text-sm text-gray-400 mt-1">B.Sc Data Science</p>
                </motion.div>

                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 border border-white/10"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-sm text-gray-300">
                    Deep expertise in RAG architectures, episodic memory systems, multi-agent orchestration, and LLM optimization.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Contact - BIA Style */}
        <section id="contact" className="min-h-screen flex flex-col lg:flex-row">
          {/* Left - Image/Visual */}
          <motion.div
            className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden bg-gradient-to-br from-[#00ff88]/10 to-[#00d4ff]/10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-8xl md:text-9xl font-bold text-white/5">AI</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            className="w-full lg:w-1/2 p-8 lg:p-16 flex items-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Get in touch</h2>

              <div className="space-y-8">
                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-2">START A PROJECT</p>
                  <a href="mailto:udditalerts247@gmail.com" className="text-lg hover:text-[#00ff88] transition">
                    Contact form →
                  </a>
                </div>

                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-2">JUST SAY HI</p>
                  <a href="mailto:udditalerts247@gmail.com" className="text-lg hover:text-[#00ff88] transition">
                    udditalerts247@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-2">GIVE ME A CALL</p>
                  <a href="tel:+918368824707" className="text-lg hover:text-[#00ff88] transition">
                    +91 8368 824 707
                  </a>
                </div>

                <div>
                  <p className="text-xs tracking-widest text-gray-500 mb-2">FOLLOW ME</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/UDDITwork" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition">GitHub</a>
                    <a href="https://linkedin.com/in/lorduddit-" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition">LinkedIn</a>
                    <a href="https://twitter.com/UdditRise" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff88] transition">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Uddit. Building the future of AI.
            </p>
            <p className="text-sm text-gray-500">
              MNIT Jaipur • IIT Madras
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
