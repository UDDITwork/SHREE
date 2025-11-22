import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vector Databases Expert - Pinecone, ChromaDB, FAISS, Weaviate | Uddit',
  description: 'Expert guide on vector databases by Uddit. Learn about Pinecone, ChromaDB, FAISS, Weaviate, Qdrant for semantic search and RAG applications. Compare performance, use cases, and implementation.',
  keywords: ['Vector Databases', 'Pinecone', 'ChromaDB', 'FAISS', 'Weaviate', 'Qdrant', 'Semantic Search', 'Similarity Search', 'Embeddings', 'RAG', 'AI Engineer', 'Uddit'],
};

export default function VectorDatabasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            Vector Databases - Complete Guide
          </h1>
          <p className="text-xl text-gray-300">
            By Uddit - Expert in Pinecone, ChromaDB, FAISS, Weaviate & Qdrant
          </p>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-green-400">Vector Databases for AI Applications</h2>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-gray-200 leading-relaxed">
                Vector databases are essential for modern AI applications including RAG systems, semantic search,
                and recommendation engines. I have hands-on production experience with all major vector databases.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-teal-400">Database Comparison</h2>
            <div className="space-y-4">
              {[
                { name: 'Pinecone', color: 'green', features: ['Fully managed', 'Excellent scaling', 'Fast queries', 'Production-ready'] },
                { name: 'ChromaDB', color: 'teal', features: ['Open-source', 'Local-first', 'Python native', 'Great for prototyping'] },
                { name: 'FAISS', color: 'blue', features: ['Meta library', 'Fastest search', 'Local deployment', 'No server required'] },
                { name: 'Weaviate', color: 'purple', features: ['GraphQL API', 'Hybrid search', 'Self-hosted', 'Schema-based'] },
                { name: 'Qdrant', color: 'orange', features: ['High performance', 'Filtering support', 'Rust-based', 'Cloud or local'] },
              ].map((db) => (
                <div key={db.name} className={`bg-${db.color}-900/30 p-6 rounded-lg border-l-4 border-${db.color}-500`}>
                  <h3 className="text-2xl font-bold mb-3">{db.name}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {db.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-green-900/20 to-teal-900/20 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Content Coming Soon</h2>
            <p className="text-gray-300 mb-4">I'm writing detailed content on:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Choosing the right vector database for your use case</li>
              <li>Performance benchmarks and comparison</li>
              <li>Implementation guides for each database</li>
              <li>Scaling strategies and best practices</li>
              <li>Cost optimization for production deployments</li>
            </ul>
          </section>
        </article>

        <div className="mt-16 p-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Need Vector Database Expertise?</h2>
          <p className="text-xl mb-6">Let's build scalable semantic search systems</p>
          <a href="mailto:udditalerts247@gmail.com" className="px-6 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition inline-block">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
