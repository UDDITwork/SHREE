import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Embeddings Expert - OpenAI, Cohere, Sentence Transformers | Uddit AI Engineer',
  description: 'Master embeddings for AI applications. Learn about OpenAI embeddings, Cohere Embed, Sentence Transformers, embedding models comparison, fine-tuning, and semantic search optimization.',
  keywords: ['Embeddings', 'OpenAI Embeddings', 'Cohere Embed', 'Sentence Transformers', 'Semantic Search', 'Vector Embeddings', 'AI Engineer', 'Uddit', 'Text Embeddings'],
};

export default function EmbeddingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-fuchsia-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
            Embeddings - Semantic Understanding
          </h1>
          <p className="text-xl text-gray-300">
            By Uddit - Expert in Embedding Models & Semantic Search
          </p>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-violet-400">What are Embeddings?</h2>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-gray-200 leading-relaxed">
                Embeddings convert text into numerical vectors that capture semantic meaning. They're the foundation
                of RAG systems, semantic search, and modern AI applications.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Popular Embedding Models</h2>
            <div className="space-y-4">
              <div className="bg-violet-900/30 p-6 rounded-lg border-l-4 border-violet-500">
                <h3 className="text-2xl font-bold mb-2">OpenAI text-embedding-3-large</h3>
                <p className="text-gray-300">3072 dimensions, state-of-the-art performance, excellent for most use cases</p>
              </div>
              <div className="bg-fuchsia-900/30 p-6 rounded-lg border-l-4 border-fuchsia-500">
                <h3 className="text-2xl font-bold mb-2">Cohere Embed v3</h3>
                <p className="text-gray-300">1024 dimensions, multilingual, compression support</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold mb-2">Sentence Transformers</h3>
                <p className="text-gray-300">Open-source, customizable, local deployment</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Content Coming Soon</h2>
            <p className="text-gray-300 mb-4">Detailed tutorials on:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Choosing the right embedding model</li>
              <li>Fine-tuning embeddings for domain-specific tasks</li>
              <li>Dimensionality and performance trade-offs</li>
              <li>Multilingual embeddings</li>
              <li>Cost optimization strategies</li>
            </ul>
          </section>
        </article>

        <div className="mt-16 p-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Need Embedding Expertise?</h2>
          <a href="mailto:udditalerts247@gmail.com" className="px-6 py-3 bg-white text-violet-900 font-semibold rounded-lg hover:bg-gray-100 transition inline-block">
            Contact Uddit
          </a>
        </div>
      </div>
    </div>
  );
}
