import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patent AI Tools - AI-Powered Patent Drafting & Prosecution | Uddit',
  description: 'Uddit\'s expertise in AI-powered patent drafting tools, prior art search, patent claims generation, and prosecution automation. Built state-of-the-art RAG-based patent systems for attorneys and inventors.',
  keywords: ['Patent AI Tools', 'AI Patent Drafting', 'Prior Art Search', 'Patent Prosecution', 'Patent Claims Generation', 'USPTO', 'RAG for Patents', 'Semantic Search Patents', 'AI Engineer', 'Uddit'],
  openGraph: {
    title: 'Patent AI Tools Expert - Uddit AI Engineer',
    description: 'Expert in AI-powered patent drafting, prior art search, and prosecution automation',
    url: 'https://uddit.site/blog/patent-ai-tools',
  },
};

export default function PatentAIToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Patent AI Tools - AI-Powered Patent Drafting and Prosecution",
    "author": {
      "@type": "Person",
      "name": "Uddit",
      "url": "https://uddit.site"
    },
    "datePublished": "2025-01-23",
    "description": "Complete guide to AI-powered patent tools including drafting, prior art search, and prosecution automation",
    "keywords": "Patent AI, AI Patent Drafting, Prior Art Search, Patent Prosecution, RAG for Patents",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
              Patent AI Tools - AI-Powered Patent Drafting
            </h1>
            <p className="text-xl text-gray-300">
              By Uddit - Specialist in AI Patent Tools & USPTO Automation
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-orange-400">AI Revolution in Patent Law</h2>
              <div className="bg-slate-800/50 p-6 rounded-lg mb-6">
                <p className="text-gray-200 leading-relaxed">
                  As an <strong>Associate Patent Trainee at InventIP Legal/USPTO</strong>, I've developed
                  a <strong>state-of-the-art AI-powered patent drafting tool</strong> that automates prior
                  art search, claims generation, and prosecution workflows. This tool uses RAG systems,
                  vector databases, and LLMs to help patent attorneys and inventors work 10x faster.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-red-400">Key Features of My Patent AI Tool</h2>

              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-2xl font-semibold mb-3 text-orange-300">1. RAG-Based Prior Art Search</h3>
                  <p className="text-gray-200 mb-3">
                    Revolutionary semantic search across millions of patents:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Vector embeddings</strong> of patent claims and descriptions</li>
                    <li><strong>Semantic similarity search</strong> using Pinecone/FAISS</li>
                    <li><strong>Multi-language support</strong> for international patents</li>
                    <li><strong>Citation network analysis</strong> for comprehensive search</li>
                    <li><strong>Novelty scoring</strong> using AI models</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-semibold mb-3 text-red-300">2. Automated Patent Claims Generation</h3>
                  <p className="text-gray-200 mb-3">
                    GPT-4 powered claims drafting with legal accuracy:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Independent claims</strong> generation from invention description</li>
                    <li><strong>Dependent claims</strong> hierarchy creation</li>
                    <li><strong>Multiple claim sets</strong> for different scopes</li>
                    <li><strong>Legal language optimization</strong> for USPTO compliance</li>
                    <li><strong>Claim chart generation</strong> for prosecution</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-semibold mb-3 text-yellow-300">3. OCR for Patent Documents</h3>
                  <p className="text-gray-200 mb-3">
                    Extract text from patent PDFs and images:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Tesseract OCR</strong> with OpenCV preprocessing</li>
                    <li><strong>Table extraction</strong> from patent documents</li>
                    <li><strong>Formula recognition</strong> using computer vision</li>
                    <li><strong>Multi-column layout</strong> handling</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-2xl font-semibold mb-3 text-green-300">4. CAD Drawing Integration</h3>
                  <p className="text-gray-200 mb-3">
                    Connect invention drawings with patent descriptions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Automatic numbering</strong> of drawing elements</li>
                    <li><strong>Description generation</strong> from CAD files</li>
                    <li><strong>Figure reference</strong> linkage in text</li>
                    <li><strong>USPTO format</strong> compliance checking</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-2xl font-semibold mb-3 text-purple-300">5. Patent Prosecution Automation</h3>
                  <p className="text-gray-200 mb-3">
                    Streamline the entire prosecution workflow:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li><strong>Office Action</strong> response generation</li>
                    <li><strong>Claim amendment</strong> suggestions</li>
                    <li><strong>Examiner interview</strong> preparation</li>
                    <li><strong>Appeal brief</strong> drafting assistance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Technical Architecture</h2>

              <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-300 mb-2">Backend</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Python + FastAPI</li>
                      <li>• LangChain for RAG</li>
                      <li>• Pinecone Vector DB</li>
                      <li>• PostgreSQL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-300 mb-2">AI/ML</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• GPT-4 for generation</li>
                      <li>• OpenAI Embeddings</li>
                      <li>• Tesseract OCR</li>
                      <li>• OpenCV</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-300 mb-2">Frontend</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Next.js</li>
                      <li>• React</li>
                      <li>• Tailwind CSS</li>
                      <li>• PDF.js</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">DevOps</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Docker</li>
                      <li>• Kubernetes</li>
                      <li>• AWS/Azure</li>
                      <li>• CI/CD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Why Hire Me for Patent AI Projects?</h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Built production patent AI tool for InventIP Legal/USPTO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Expert in RAG systems for patent prior art search</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Experience with GPT-4 for legal document generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Understanding of USPTO requirements and patent law</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>OCR and computer vision for patent document processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Full-stack capability from AI models to production deployment</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Content Coming Soon</h2>
              <p className="text-gray-300 text-lg">
                I'm writing detailed tutorials on:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>Building RAG systems for patent prior art search</li>
                <li>Training LLMs for patent claims generation</li>
                <li>OCR techniques for patent documents</li>
                <li>Semantic search across patent databases</li>
                <li>Automating office action responses</li>
                <li>Vector embeddings for patent classification</li>
              </ul>
            </section>
          </article>

          <div className="mt-16 p-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need Patent AI Tool Development?</h2>
            <p className="text-xl mb-6">Let's revolutionize your patent workflow with AI</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:udditalerts247@gmail.com" className="px-6 py-3 bg-white text-red-900 font-semibold rounded-lg hover:bg-gray-100 transition">
                Email Me
              </a>
              <a href="tel:+917456886877" className="px-6 py-3 bg-red-900 text-white font-semibold rounded-lg hover:bg-red-800 transition">
                Call: +91-7456886877
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
