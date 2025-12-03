'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'OpenAI', icon: '◯' },
  { name: 'LangChain', icon: '⛓' },
  { name: 'Pinecone', icon: '◆' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Python', icon: '◎' },
  { name: 'FastAPI', icon: '⚡' },
  { name: 'MongoDB', icon: '◉' },
  { name: 'React', icon: '⚛' },
];

export const LogoMarquee = () => {
  return (
    <div className="w-full py-12 border-t border-b border-white/5 overflow-hidden bg-black/20">
      <div className="flex">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-500 hover:text-gray-300 transition whitespace-nowrap"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-lg font-medium">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const TechStackMarquee = () => {
  const techStack = [
    'RAG Systems',
    'Vector Databases',
    'LLM Integration',
    'MCP Servers',
    'Patent AI',
    'Agentic AI',
    'Embeddings',
    'Full Stack',
  ];

  return (
    <div className="w-full py-6 overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center gap-4 whitespace-nowrap">
              <span className="text-gray-600 text-sm uppercase tracking-wider">{tech}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
