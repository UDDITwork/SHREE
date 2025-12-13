'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Menu sections data
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
    image: '/work-shipsarthi.png', // Placeholder: Screenshot of logistics dashboard with trucks/shipping visualization
  },
  {
    name: 'ZAMMERNOW',
    url: 'https://zammernow.com',
    description: 'Quick commerce fashion',
    stats: '30-min delivery',
    cycle: '102 days',
    image: '/work-zammer.png', // Placeholder: Fashion e-commerce interface with quick delivery badge
  },
  {
    name: 'RichieAI',
    url: 'https://richieai.in',
    description: 'AI-powered financial planning',
    stats: 'SaaS Platform',
    cycle: 'Live',
    image: '/work-richie.png', // Placeholder: Financial dashboard with AI insights/charts
  },
  {
    name: 'Gantavyam',
    url: 'https://gantavyam.site',
    description: 'Safe ride-booking for women',
    stats: 'Delhi NCR',
    cycle: 'Live',
    image: '/work-gantavyam.png', // Placeholder: Ride-sharing app interface with safety features
  },
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

// Blog/Articles data
const articles = [
  {
    title: 'Building Production RAG Systems',
    platform: 'Medium',
    image: '/blog-rag.png', // Placeholder: Diagram showing RAG architecture with embeddings flow
  },
  {
    title: 'Scaling to 500+ Clients in 38 Days',
    platform: 'LinkedIn',
    image: '/blog-scaling.png', // Placeholder: Growth chart/metrics dashboard
  },
  {
    title: 'AI in Logistics: ShipSarthi Story',
    platform: 'YouTube',
    image: '/blog-logistics.png', // Placeholder: Video thumbnail with AI + logistics icons
  },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00ff88]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#00d4ff]/5 rounded-full blur-[200px]" />
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff88]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation Bar */}
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

      {/* Floating Menu Dot - Like BIA Reference */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
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
                Menu
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Menu Grid */}
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
                            <h3 className="text-lg font-bold">ENTERPRISE</h3>
                            <h3 className="text-lg font-bold">PLATFORMS</h3>
                          </div>
                        </div>
                      )}
                      {section.id === 'work' && (
                        <div className="absolute inset-0 grid grid-cols-2 gap-1 p-2">
                          {productionSystems.slice(0, 4).map((sys, i) => (
                            <div key={i} className="bg-white/10 rounded flex items-center justify-center text-[8px] text-gray-400">
                              {sys.name}
                            </div>
                          ))}
                        </div>
                      )}
                      {section.id === 'expertise' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-[#00ff88]">10+</div>
                            <div className="text-xs text-gray-400">YEARS OF</div>
                            <div className="text-xs text-gray-400">BUILDING AI</div>
                            <div className="text-xs text-gray-400">SOLUTIONS</div>
                          </div>
                        </div>
                      )}
                      {section.id === 'about' && (
                        <div className="absolute inset-0 p-4 flex flex-col justify-center">
                          <p className="text-xs text-gray-300">
                            Building enterprise AI systems that are driven by innovation & built on logic.
                          </p>
                        </div>
                      )}
                      {section.id === 'contact' && (
                        <div className="absolute inset-0 grid grid-cols-2 gap-1 p-2">
                          <div className="col-span-2 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4ff]/20 rounded" />
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links in Menu */}
            <div className="absolute bottom-24 right-8 flex items-center gap-4">
              <span className="text-xs text-gray-500">FOLLOW</span>
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
        {/* Hero Section - Split Layout */}
        <section className="min-h-screen flex flex-col lg:flex-row">
          {/* Left Side - Video Placeholder */}
          <motion.div
            className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-black relative overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* VIDEO PLACEHOLDER - Replace with your showreel/demo video */}
            {/* Suggested: A 30-60 second montage showing:
                - Screen recordings of your platforms (ShipSarthi, Zammer, RichieAI)
                - Code editor with AI/ML code
                - Terminal showing deployments
                - Dashboard metrics going up
                - You explaining architecture on whiteboard
            */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/10 transition mb-4 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
                <p className="text-sm text-gray-500">PLAY SHOWREEL</p>
              </div>
            </div>

            {/* Floating Project Previews - Appear when video is not playing */}
            <div className="absolute inset-0 pointer-events-none">
              {/* These show glimpses of your work */}
              <motion.div
                className="absolute top-20 left-10 w-32 h-20 bg-white/5 rounded-lg backdrop-blur border border-white/10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* PLACEHOLDER: Small screenshot of ShipSarthi dashboard */}
                <div className="p-2 text-[8px] text-gray-400">ShipSarthi Analytics</div>
              </motion.div>

              <motion.div
                className="absolute top-40 right-10 w-40 h-24 bg-white/5 rounded-lg backdrop-blur border border-white/10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                {/* PLACEHOLDER: Code snippet showing RAG implementation */}
                <div className="p-2 text-[8px] text-[#00ff88] font-mono">
                  const ragPipeline = new RAG();
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-40 left-20 w-36 h-20 bg-white/5 rounded-lg backdrop-blur border border-white/10"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
              >
                {/* PLACEHOLDER: Zammer quick commerce UI */}
                <div className="p-2 text-[8px] text-gray-400">30-min Delivery</div>
              </motion.div>
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
                ENTERPRISE AI ARCHITECT
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="block">I BUILD</span>
                <span className="block">AI SYSTEMS &</span>
                <span className="block text-gray-500">PRODUCTION</span>
                <span className="block text-gray-500">PLATFORMS</span>
              </motion.h1>

              <motion.p
                className="text-gray-400 text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Specializing in RAG Systems, LLM Integration, and enterprise solutions.
                Building platforms that serve 500+ clients with 38-day deployment cycles.
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

        {/* Stats Bar */}
        <section className="py-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '4', label: 'Production Systems' },
                { value: '500+', label: 'Clients Served' },
                { value: '38', label: 'Days Fastest Deploy' },
                { value: '108', label: 'GitHub Repos' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#00ff88]">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1 tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Production Systems</h2>
              <p className="text-gray-400 max-w-2xl">
                Enterprise-grade platforms built from scratch, serving real users with real impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {productionSystems.map((system, index) => (
                <motion.a
                  key={system.name}
                  href={system.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[16/10] rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* PLACEHOLDER IMAGE - Replace with actual screenshots */}
                  {/*
                    RECOMMENDED IMAGES:
                    - work-shipsarthi.png: Dashboard showing logistics map, delivery tracking, client stats
                    - work-zammer.png: Fashion e-commerce interface with "30-min delivery" badge prominent
                    - work-richie.png: Financial dashboard with AI insights, charts, predictions
                    - work-gantavyam.png: Ride-booking app with safety features highlighted
                  */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-[#00d4ff]/10" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] px-2 py-1 bg-[#00ff88]/20 text-[#00ff88] rounded-full">
                        {system.cycle}
                      </span>
                      <span className="text-[10px] px-2 py-1 bg-white/10 text-gray-300 rounded-full">
                        {system.stats}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-[#00ff88] transition">{system.name}</h3>
                    <p className="text-gray-400 text-sm">{system.description}</p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-24 px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Full-stack capabilities from AI/ML engineering to cloud infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.category}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00ff88]/30 transition group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#00ff88]/10 flex items-center justify-center mb-4 group-hover:bg-[#00ff88]/20 transition">
                    <div className="w-6 h-6 rounded-full bg-[#00ff88]" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{area.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About/Bio Section */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* PLACEHOLDER IMAGE - Your professional photo */}
                {/*
                  RECOMMENDED: Professional headshot or candid shot of you:
                  - At a tech conference
                  - Working on laptop with code visible
                  - At a whiteboard explaining architecture
                  - Professional portrait with neutral background
                */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {/* Replace with actual image */}
                    <span className="text-sm">Professional Photo</span>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00ff88]/20 rounded-full blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00d4ff]/20 rounded-full blur-2xl" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs tracking-[0.3em] text-[#00ff88] mb-4">ABOUT ME</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Enterprise Solutions Architect & Full-Stack Engineer
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    B.Tech Final Year at MNIT Jaipur with a parallel B.Sc in Data Science from IIT Madras.
                    I specialize in building production-ready enterprise systems with rapid deployment cycles.
                  </p>
                  <p>
                    My focus is on AI/ML integration - from RAG systems and LLM fine-tuning to vector databases
                    and intelligent automation. Every system I build is designed for scale, serving hundreds of
                    clients from day one.
                  </p>
                  <p>
                    Currently building AI-powered solutions across logistics, finance, e-commerce, and transportation
                    sectors with a track record of 38-102 day development cycles.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white/5 rounded-full text-sm">
                    <span className="text-[#00ff88]">MNIT Jaipur</span> - B.Tech
                  </div>
                  <div className="px-4 py-2 bg-white/5 rounded-full text-sm">
                    <span className="text-[#00d4ff]">IIT Madras</span> - B.Sc Data Science
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blog/Articles Section */}
        <section className="py-24 px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Articles & Insights</h2>
              <p className="text-gray-400 max-w-2xl">
                Sharing knowledge on AI/ML, system architecture, and building at scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* PLACEHOLDER IMAGES for blog posts */}
                  {/*
                    RECOMMENDED IMAGES:
                    - blog-rag.png: Technical diagram showing RAG architecture with arrows, embeddings, vector DB
                    - blog-scaling.png: Dashboard showing growth metrics, user graphs going up
                    - blog-logistics.png: AI + logistics themed thumbnail (trucks, maps, AI brain icon)
                  */}
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 mb-4 group-hover:border-[#00ff88]/30 transition">
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                      Article Thumbnail
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] px-2 py-1 bg-[#00ff88]/10 text-[#00ff88] rounded-full">
                      {article.platform}
                    </span>
                  </div>
                  <h3 className="font-bold group-hover:text-[#00ff88] transition">{article.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] text-[#00ff88] mb-4">GET IN TOUCH</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Let's Build Something
                <span className="block text-gray-500">Extraordinary</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Looking for an AI/ML engineer or need help building your next enterprise platform?
                Let's discuss how we can work together.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <a
                  href="mailto:udditalerts247@gmail.com"
                  className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black rounded-full font-bold hover:opacity-90 transition"
                >
                  udditalerts247@gmail.com
                </a>
                <a
                  href="tel:+918368824707"
                  className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition"
                >
                  +91 8368824707
                </a>
              </div>

              <div className="flex justify-center gap-4">
                <a href="https://github.com/UDDITwork" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00ff88] hover:text-[#00ff88] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/lorduddit-" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00ff88] hover:text-[#00ff88] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com/UdditRise" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00ff88] hover:text-[#00ff88] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://uddit.site" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#00ff88] hover:text-[#00ff88] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                </a>
              </div>
            </motion.div>
          </div>
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
