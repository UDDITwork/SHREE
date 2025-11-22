import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RAG Systems - Retrieval Augmented Generation Expert | Uddit AI Engineer',
  description: 'Complete guide to RAG (Retrieval Augmented Generation) systems by Uddit. Learn about vector databases, embeddings, chunking strategies, and building production RAG applications with LangChain, LlamaIndex, Pinecone, and ChromaDB.',
  keywords: ['RAG Systems', 'Retrieval Augmented Generation', 'Vector Databases', 'Embeddings', 'Text Chunking', 'LangChain', 'LlamaIndex', 'Semantic Search', 'AI Engineer', 'Uddit'],
  openGraph: {
    title: 'RAG Systems Expert - Uddit AI Engineer',
    description: 'Expert guide on building production-ready RAG applications with vector databases and embeddings',
    url: 'https://uddit.site/blog/rag-systems',
  },
};

export default function RAGSystemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "RAG Systems - Retrieval Augmented Generation Complete Guide",
    "author": {
      "@type": "Person",
      "name": "Uddit",
      "url": "https://uddit.site"
    },
    "datePublished": "2025-01-23",
    "description": "Comprehensive guide to RAG systems, vector databases, embeddings, and chunking strategies",
    "keywords": "RAG, Retrieval Augmented Generation, Vector Databases, Embeddings, LangChain",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              RAG Systems - Retrieval Augmented Generation
            </h1>
            <p className="text-xl text-gray-300">
              By Uddit - AI Engineer specializing in RAG Applications
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">What is RAG?</h2>
              <div className="bg-slate-800/50 p-6 rounded-lg mb-6">
                <p className="text-gray-200 leading-relaxed">
                  <strong>Retrieval Augmented Generation (RAG)</strong> is a cutting-edge AI technique that combines
                  the power of large language models (LLMs) with external knowledge retrieval. As an AI engineer
                  specializing in RAG systems, I've built multiple production RAG applications including patent
                  search tools, document analyzers, and financial planning systems.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Core Components of RAG</h2>

              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">1. Vector Databases</h3>
                  <p className="text-gray-200">
                    Vector databases store embeddings for efficient similarity search. Popular options include:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li><strong>Pinecone</strong> - Managed vector database with excellent scaling</li>
                    <li><strong>ChromaDB</strong> - Open-source, perfect for offline RAG systems</li>
                    <li><strong>Weaviate</strong> - GraphQL-based vector search engine</li>
                    <li><strong>FAISS</strong> - Meta's library for efficient similarity search</li>
                    <li><strong>Qdrant</strong> - High-performance vector database</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-2xl font-semibold mb-3 text-purple-300">2. Embeddings</h3>
                  <p className="text-gray-200">
                    Embeddings convert text into numerical vectors. Best models:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li><strong>OpenAI text-embedding-3-large</strong> - 3072 dimensions, state-of-the-art</li>
                    <li><strong>Cohere Embed v3</strong> - Excellent for semantic search</li>
                    <li><strong>Sentence Transformers</strong> - Open-source, customizable</li>
                    <li><strong>Voyage AI</strong> - Domain-specific embeddings</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-semibold mb-3 text-green-300">3. Text Chunking</h3>
                  <p className="text-gray-200">
                    Proper chunking is critical for RAG performance:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li><strong>Fixed-size chunking</strong> - Simple, consistent chunks (512-1024 tokens)</li>
                    <li><strong>Semantic chunking</strong> - Based on content meaning</li>
                    <li><strong>Recursive splitting</strong> - LangChain's RecursiveCharacterTextSplitter</li>
                    <li><strong>Document-aware chunking</strong> - Preserves document structure</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">My RAG Projects</h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Patent Drafting Tool</h3>
                  <p className="text-gray-300 mb-3">
                    State-of-the-art RAG system for prior art search and patent claims generation
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Pinecone</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">OpenAI Embeddings</span>
                    <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">LangChain</span>
                    <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm">FastAPI</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">UdditDoc-GPT</h3>
                  <p className="text-gray-300 mb-3">
                    Offline RAG document analyzer with ChromaDB and Ollama
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">ChromaDB</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Ollama</span>
                    <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">FastAPI</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Why Hire Me for RAG Projects?</h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Built production RAG systems serving 500+ users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Expert in all major vector databases (Pinecone, ChromaDB, Weaviate, FAISS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Specialized in chunking strategies and embedding optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Experience with LangChain, LlamaIndex, and custom RAG pipelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>NIT Jaipur graduate with strong AI/ML fundamentals</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Content Coming Soon</h2>
              <p className="text-gray-300 text-lg">
                I'm writing detailed tutorials on:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>Building production RAG systems from scratch</li>
                <li>Choosing the right vector database for your use case</li>
                <li>Advanced chunking strategies for optimal retrieval</li>
                <li>Embedding model selection and fine-tuning</li>
                <li>Hybrid search combining semantic and keyword search</li>
                <li>RAG evaluation metrics and optimization</li>
              </ul>
            </section>
          </article>

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need a RAG Expert?</h2>
            <p className="text-xl mb-6">Let's build your next AI-powered application together</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:udditalerts247@gmail.com" className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition">
                Email Me
              </a>
              <a href="https://linkedin.com/in/lorduddit-" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-800 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
