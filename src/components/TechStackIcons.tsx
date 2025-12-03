'use client';

import { motion } from 'framer-motion';
import TechStackIcon from 'tech-stack-icons';

const techStacks = [
  // AI/ML & LLM
  'openai',
  'anthropic',
  'huggingface',
  'pytorch',
  'claude',
  'gemini',
  'mistral',
  'cohere',

  // RAG & Frameworks
  'langchain',
  'langsmith',
  'langgraph',
  'llamaindex',
  'crewai',
  'pydanticai',

  // Python & Tools
  'python',
  'colab',
  'streamlit',
  'gradio',

  // Databases
  'postgresql',
  'mongodb',
  'redis',
  'elastic',
  'prisma',

  // DevOps & Containers
  'docker',
  'kubernetes',

  // Cloud Providers
  'aws',
  'gcloud',
  'azure',
  'vercel',
  'railway',
  'netlify',
  'supabase',
  'firebase',

  // Web & APIs
  'nextjs2',
  'react',
  'nodejs',
  'flask',
  'django',

  // Additional Tools
  'github',
  'git',
  'typescript',
  'tailwindcss',
  'vscode',
];

export const TechStackGrid = () => {
  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...techStacks, ...techStacks].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center justify-center shrink-0"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <TechStackIcon name={tech as any} className="w-full h-full" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackGrid;
