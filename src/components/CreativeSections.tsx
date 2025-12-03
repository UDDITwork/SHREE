'use client';

import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

// ============================================================================
// 1. 3D FLIP CARDS - EXPERTISE SECTION
// Cards that flip in 3D space on hover, revealing detailed information
// ============================================================================

const expertiseData = [
  {
    title: 'RAG Systems',
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    frontDesc: 'Retrieval Augmented Generation',
    backDesc: 'Expert in vector databases, embeddings, and chunking strategies. Building semantic search systems that understand context.',
    tags: ['Pinecone', 'ChromaDB', 'LangChain', 'Embeddings'],
    color: '#00ff88',
    stats: { metric: '1M+', label: 'Documents Indexed' }
  },
  {
    title: 'MCP Servers',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    frontDesc: 'Model Context Protocol',
    backDesc: 'Building AI agent communication infrastructure. Multi-agent orchestration with tool calling and protocol design.',
    tags: ['Multi-Agent', 'Tool Calling', 'Protocols', 'Orchestration'],
    color: '#00d4ff',
    stats: { metric: '50+', label: 'Integrations Built' }
  },
  {
    title: 'Patent AI',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    frontDesc: 'AI-Powered Patent Tools',
    backDesc: 'State-of-the-art AI for patent drafting, prior art search, and prosecution automation for USPTO compliance.',
    tags: ['Prior Art', 'Claims Gen', 'USPTO', 'NLP'],
    color: '#a855f7',
    stats: { metric: '500+', label: 'Patents Processed' }
  }
];

const FlipCard = ({ data, index }: { data: typeof expertiseData[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="perspective-1000 h-[400px] cursor-pointer"
      initial={{ opacity: 0, rotateY: -30, z: -100 }}
      animate={isInView ? { opacity: 1, rotateY: 0, z: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center text-center backface-hidden"
          style={{
            background: `linear-gradient(135deg, ${data.color}15 0%, transparent 50%)`,
            border: `1px solid ${data.color}30`,
            backfaceVisibility: 'hidden'
          }}
        >
          <motion.div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${data.color}20` }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <svg className="w-10 h-10" style={{ color: data.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={data.icon} />
            </svg>
          </motion.div>
          <h3 className="text-3xl font-bold mb-3">{data.title}</h3>
          <p className="text-gray-400 text-lg">{data.frontDesc}</p>
          <motion.div
            className="mt-6 flex items-center gap-2 text-sm"
            style={{ color: data.color }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Hover to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 rounded-3xl p-8 flex flex-col justify-between backface-hidden"
          style={{
            background: `linear-gradient(135deg, ${data.color}20 0%, #0a0a0a 100%)`,
            border: `1px solid ${data.color}50`,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: data.color }}>{data.title}</h3>
            <p className="text-gray-300 leading-relaxed">{data.backDesc}</p>
          </div>
          <div className="flex flex-wrap gap-2 my-4">
            {data.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: `${data.color}20`, color: data.color }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10">
            <div className="text-3xl font-bold" style={{ color: data.color }}>{data.stats.metric}</div>
            <div className="text-gray-500 text-sm">{data.stats.label}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ExpertiseSection3D = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section id="expertise" className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00ff88 0%, transparent 70%)', left: '10%', top: '20%' }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)', right: '10%', top: '40%' }}
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            What I Do Best
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#a855f7]">Expertise</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Hover over each card to discover the depth of knowledge and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <FlipCard key={item.title} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// 2. HORIZONTAL SCROLL GALLERY - PROJECTS SECTION
// Pinned horizontal scroll that reveals projects as you scroll vertically
// ============================================================================

const projectsData = [
  {
    title: 'AI Patent Drafting',
    subtitle: 'InventIP Legal / USPTO',
    desc: 'State-of-the-art AI tool for patent attorneys and inventors. RAG-based prior art search across millions of patents with automated claims generation.',
    image: '/project1.jpg',
    tags: ['RAG', 'Pinecone', 'GPT-4', 'FastAPI'],
    stat: '1M+',
    statLabel: 'Patents Indexed',
    color: '#00ff88',
    features: ['Prior art search', 'Claims generation', 'CAD integration']
  },
  {
    title: 'ZAMMER NOW',
    subtitle: '30-Min Fashion Delivery',
    desc: "India's first 30-minute doorstep fashion delivery platform. Complete e-commerce solution with real-time inventory and delivery tracking.",
    image: '/project2.jpg',
    tags: ['Node.js', 'MongoDB', 'React', 'Express'],
    stat: '500+',
    statLabel: 'Clients Onboarded',
    link: 'https://zammernow.com',
    color: '#00d4ff',
    features: ['Real-time tracking', 'Inventory sync', 'Payment gateway']
  },
  {
    title: 'RICHIE AI',
    subtitle: 'AI Financial Planning',
    desc: 'AI-powered wealth management platform. Personalized investment strategies using machine learning and natural language processing.',
    image: '/project3.jpg',
    tags: ['RAG', 'Python', 'Next.js', 'NLP'],
    stat: '$2.7M',
    statLabel: 'Assets Managed',
    link: 'https://richieai.in',
    color: '#a855f7',
    features: ['Portfolio analysis', 'Risk assessment', 'Goal planning']
  }
];

export const HorizontalScrollProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="projects" className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Header */}
        <div className="px-6 pt-8 pb-4">
          <div className="max-w-7xl mx-auto flex items-end justify-between">
            <div>
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Featured Work
              </motion.span>
              <h2 className="text-5xl md:text-6xl font-bold">
                Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">Projects</span>
              </h2>
            </div>
            {/* Progress indicator */}
            <div className="hidden md:block w-48">
              <div className="text-sm text-gray-500 mb-2">Scroll Progress</div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff]" style={{ width: progressWidth }} />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex-1 flex items-center">
          <motion.div className="flex gap-8 pl-6" style={{ x }}>
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="h-[60vh] rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}10 0%, #0a0a0a 50%, ${project.color}05 100%)`,
                    border: `1px solid ${project.color}20`
                  }}
                >
                  {/* Animated corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32"
                    style={{
                      background: `radial-gradient(circle at top right, ${project.color}30 0%, transparent 70%)`
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Project number */}
                    <div
                      className="text-8xl font-bold opacity-10 absolute -top-4 -left-2"
                      style={{ color: project.color }}
                    >
                      0{index + 1}
                    </div>

                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="text-sm text-gray-500">{project.subtitle}</span>
                        <h3 className="text-3xl md:text-4xl font-bold mt-1">{project.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold" style={{ color: project.color }}>{project.stat}</div>
                        <div className="text-xs text-gray-500">{project.statLabel}</div>
                      </div>
                    </div>

                    <p className="text-gray-400 text-lg mb-6 max-w-xl">{project.desc}</p>

                    {/* Features with animated bullets */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <motion.span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: project.color }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-auto">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 group/link"
                        style={{ color: project.color }}
                        whileHover={{ x: 5 }}
                      >
                        <span>Visit Project</span>
                        <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// 3. STAGGERED TEXT REVEAL - BLOG SECTION
// Words animate in one by one with a wave effect
// ============================================================================

const blogData = [
  { title: 'RAG Systems', href: '/blog/rag-systems', desc: 'Vector databases, embeddings & retrieval strategies', color: '#00ff88' },
  { title: 'MCP Servers', href: '/blog/mcp-servers', desc: 'Model Context Protocol development patterns', color: '#00d4ff' },
  { title: 'Patent AI', href: '/blog/patent-ai-tools', desc: 'AI-powered patent drafting and analysis', color: '#a855f7' },
  { title: 'Vector DBs', href: '/blog/vector-databases', desc: 'Pinecone, ChromaDB, FAISS comparison', color: '#00ff88' },
  { title: 'Embeddings', href: '/blog/embeddings', desc: 'Semantic search and similarity', color: '#00d4ff' },
  { title: 'Chunking', href: '/blog/chunking-strategies', desc: 'Text splitting for optimal retrieval', color: '#a855f7' },
  { title: 'Agentic AI', href: '/blog/agentic-ai', desc: 'Multi-agent systems and orchestration', color: '#ec4899' },
];

const AnimatedWord = ({ word, index, isInView }: { word: string; index: number; isInView: boolean }) => {
  return (
    <motion.span
      className="inline-block mr-2"
      initial={{ opacity: 0, y: 50, rotateX: -90 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
    >
      {word}
    </motion.span>
  );
};

const BlogCard = ({ blog, index }: { blog: typeof blogData[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={blog.href} className="block group">
        <motion.div
          className="relative p-6 rounded-2xl overflow-hidden"
          style={{
            y: springY,
            background: `linear-gradient(135deg, ${blog.color}08 0%, transparent 100%)`,
            border: `1px solid ${blog.color}15`
          }}
          whileHover={{
            scale: 1.02,
            borderColor: `${blog.color}40`
          }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 opacity-0"
            style={{ background: `radial-gradient(circle at 50% 50%, ${blog.color}20 0%, transparent 70%)` }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10 flex items-center justify-between">
            <div>
              <motion.h3
                className="text-xl font-bold mb-1 transition-colors"
                style={{ color: isHovered ? blog.color : 'white' }}
              >
                {blog.title}
              </motion.h3>
              <p className="text-gray-500 text-sm">{blog.desc}</p>
            </div>
            <motion.div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${blog.color}20` }}
              animate={{
                x: isHovered ? 5 : 0,
                scale: isHovered ? 1.1 : 1
              }}
            >
              <svg className="w-5 h-5" style={{ color: blog.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </div>

          {/* Bottom line animation */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px]"
            style={{ backgroundColor: blog.color }}
            initial={{ width: '0%' }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export const BlogSectionAnimated = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const titleWords = "Deep Dives Into AI Engineering".split(" ");

  return (
    <section id="blog" className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            Technical Blog
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ perspective: '1000px' }}>
            {titleWords.map((word, i) => (
              <AnimatedWord key={i} word={word} index={i} isInView={isInView} />
            ))}
          </h2>

          <motion.p
            className="text-gray-400 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            Explore the depths of modern AI development
          </motion.p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {blogData.map((blog, index) => (
            <BlogCard key={blog.href} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// 4. BENTO GRID CONTACT - Asymmetric floating boxes
// ============================================================================

export const BentoContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 50);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 50);
  };

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  return (
    <section
      id="contact"
      className="py-32 px-6 relative z-10"
      onMouseMove={handleMouseMove}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#a855f7]">Connect</span>
          </h2>
          <p className="text-gray-400 text-xl">Building the future of AI, one project at a time</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 auto-rows-[120px]">
          {/* Large Email Box */}
          <motion.a
            href="mailto:udditalerts247@gmail.com"
            className="col-span-4 md:col-span-3 row-span-2 rounded-3xl p-8 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #00ff8815 0%, #0a0a0a 100%)',
              border: '1px solid #00ff8830',
              x: springX,
              y: springY
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'radial-gradient(circle at 50% 50%, #00ff8820 0%, transparent 70%)' }}
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-[#00ff88] mb-1">Email Me</div>
                <div className="text-xl md:text-2xl font-bold">udditalerts247@gmail.com</div>
              </div>
            </div>
          </motion.a>

          {/* Phone Box 1 */}
          <motion.a
            href="tel:+917456886877"
            className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #00d4ff10 0%, #0a0a0a 100%)',
              border: '1px solid #00d4ff30'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Primary</div>
                <div className="font-bold">+91-7456886877</div>
              </div>
            </div>
          </motion.a>

          {/* Phone Box 2 */}
          <motion.a
            href="tel:+918368824707"
            className="col-span-2 md:col-span-3 row-span-1 rounded-3xl p-6 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #a855f710 0%, #0a0a0a 100%)',
              border: '1px solid #a855f730'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#a855f7]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#a855f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Secondary</div>
                <div className="font-bold">+91-8368824707</div>
              </div>
            </div>
          </motion.a>

          {/* Education Box */}
          <motion.div
            className="col-span-2 row-span-1 rounded-3xl p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ec489910 0%, #0a0a0a 100%)',
              border: '1px solid #ec489930'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ec4899]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Education</div>
                <div className="font-bold text-sm">NIT Jaipur '25</div>
              </div>
            </div>
          </motion.div>

          {/* Location Box */}
          <motion.div
            className="col-span-2 row-span-1 rounded-3xl p-6 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f5990010 0%, #0a0a0a 100%)',
              border: '1px solid #f5990030'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-xl bg-[#f59900]/20 flex items-center justify-center"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-5 h-5 text-[#f59900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <div>
                <div className="text-xs text-gray-500">Location</div>
                <div className="font-bold text-sm">India</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button - Full Width */}
          <motion.a
            href="mailto:udditalerts247@gmail.com"
            className="col-span-4 md:col-span-6 row-span-1 rounded-3xl p-6 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(90deg, #00ff88 0%, #00d4ff 50%, #a855f7 100%)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 text-black font-bold text-xl">
              <span>Start a Project Together</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// 5. INTERACTIVE TIMELINE FOOTER - Skills & Technologies
// ============================================================================

const skills = [
  { name: 'RAG', color: '#00ff88' },
  { name: 'MCP', color: '#00d4ff' },
  { name: 'Patent AI', color: '#a855f7' },
  { name: 'Vector DB', color: '#00ff88' },
  { name: 'LangChain', color: '#00d4ff' },
  { name: 'Agentic AI', color: '#ec4899' },
];

export const InteractiveFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <footer ref={ref} className="py-16 px-6 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Animated connection line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00ff88] via-[#00d4ff] to-[#a855f7]"
          style={{ width: lineWidth }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Skills orbit */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex items-center gap-3 px-5 py-3 rounded-full border"
              style={{ borderColor: `${skill.color}30`, background: `${skill.color}08` }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.1,
                borderColor: skill.color,
                boxShadow: `0 0 20px ${skill.color}30`
              }}
            >
              <motion.span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: skill.color }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div>
              <div className="font-bold">Uddit</div>
              <div className="text-xs text-gray-500">AI Engineer & Full Stack Developer</div>
            </div>
          </motion.div>

          <motion.div
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            © 2025 — Built with passion for AI
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {[
              { href: 'https://github.com/UDDITwork', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
              { href: 'https://linkedin.com/in/lorduddit-', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
              { href: 'https://twitter.com/UdditRise', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
