import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Text Chunking Strategies for RAG Systems | Uddit AI Engineer',
  description: 'Master text chunking strategies for RAG applications. Learn about fixed-size chunking, semantic chunking, recursive splitting, and document-aware chunking for optimal retrieval performance.',
  keywords: ['Text Chunking', 'Chunking Strategies', 'RAG', 'LangChain', 'RecursiveCharacterTextSplitter', 'Semantic Chunking', 'AI Engineer', 'Uddit'],
};

export default function ChunkingStrategiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">
            Text Chunking Strategies for RAG
          </h1>
          <p className="text-xl text-gray-300">
            By Uddit - Expert in Optimizing RAG Performance
          </p>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-amber-400">Why Chunking Matters</h2>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-gray-200 leading-relaxed">
                Proper chunking is critical for RAG system performance. The right strategy can improve retrieval
                accuracy by 50%+ and significantly reduce costs.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Chunking Strategies</h2>
            <div className="space-y-4">
              <div className="bg-amber-900/30 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold mb-2">Fixed-Size Chunking</h3>
                <p className="text-gray-300">Simple, consistent chunks (512-1024 tokens). Good for general use.</p>
              </div>
              <div className="bg-yellow-900/30 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-2">Semantic Chunking</h3>
                <p className="text-gray-300">Based on content meaning and topic boundaries. Best for accuracy.</p>
              </div>
              <div className="bg-orange-900/30 p-6 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold mb-2">Recursive Splitting</h3>
                <p className="text-gray-300">LangChain's RecursiveCharacterTextSplitter. Preserves structure.</p>
              </div>
              <div className="bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold mb-2">Document-Aware Chunking</h3>
                <p className="text-gray-300">Respects document structure (headings, paragraphs). For technical docs.</p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-amber-900/20 to-yellow-900/20 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Content Coming Soon</h2>
            <p className="text-gray-300 mb-4">In-depth guides on:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Implementing each chunking strategy</li>
              <li>Performance benchmarks and comparisons</li>
              <li>Chunk size optimization</li>
              <li>Overlap strategies</li>
              <li>Domain-specific chunking techniques</li>
            </ul>
          </section>
        </article>

        <div className="mt-16 p-8 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Optimize Your RAG System</h2>
          <a href="mailto:udditalerts247@gmail.com" className="px-6 py-3 bg-white text-amber-900 font-semibold rounded-lg hover:bg-gray-100 transition inline-block">
            Work with Uddit
          </a>
        </div>
      </div>
    </div>
  );
}
