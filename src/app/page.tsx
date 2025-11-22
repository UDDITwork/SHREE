import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-semibold">
              Available for Freelance Projects
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Uddit
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI Engineer & Full Stack Developer
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Specializing in <span className="text-blue-400 font-semibold">RAG Systems</span>,
            <span className="text-purple-400 font-semibold"> MCP Servers</span>, and
            <span className="text-pink-400 font-semibold"> Patent AI Tools</span>
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            NIT Jaipur Graduate | Built 4 Production Platforms Serving 500+ Clients |
            Expert in Vector Databases, Embeddings & Agentic AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:udditalerts247@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-800 rounded-lg font-semibold text-lg hover:bg-slate-700 transition"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/UDDITwork" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/lorduddit-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com/UdditRise" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/rag-systems" className="group">
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-8 rounded-xl hover:from-blue-800/60 hover:to-blue-700/40 transition border border-blue-700/50">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition">RAG Systems</h3>
                <p className="text-gray-300">Expert in Retrieval Augmented Generation with vector databases, embeddings, and chunking strategies</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li>• Pinecone, ChromaDB, FAISS</li>
                  <li>• LangChain, LlamaIndex</li>
                  <li>• Production RAG applications</li>
                </ul>
              </div>
            </Link>

            <Link href="/blog/mcp-servers" className="group">
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-8 rounded-xl hover:from-purple-800/60 hover:to-purple-700/40 transition border border-purple-700/50">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition">MCP Servers</h3>
                <p className="text-gray-300">Building Model Context Protocol servers for AI agent communication and tool calling</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li>• Custom MCP implementations</li>
                  <li>• Multi-agent systems</li>
                  <li>• Tool-calling protocols</li>
                </ul>
              </div>
            </Link>

            <Link href="/blog/patent-ai-tools" className="group">
              <div className="bg-gradient-to-br from-pink-900/50 to-pink-800/30 p-8 rounded-xl hover:from-pink-800/60 hover:to-pink-700/40 transition border border-pink-700/50">
                <div className="text-5xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-300 transition">Patent AI Tools</h3>
                <p className="text-gray-300">State-of-the-art AI for patent drafting, prior art search, and prosecution automation</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  <li>• RAG-based prior art search</li>
                  <li>• Claims generation with LLMs</li>
                  <li>• USPTO automation</li>
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-center text-gray-400 mb-16">Production platforms serving 500+ clients</p>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-8 rounded-xl border border-orange-700/50">
              <h3 className="text-3xl font-bold mb-3">🎯 AI-Powered Patent Drafting Tool</h3>
              <p className="text-gray-300 mb-4 text-lg">
                State-of-the-art AI tool for patent attorneys and inventors at InventIP Legal/USPTO
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-500/20 rounded-full text-sm">RAG</span>
                <span className="px-3 py-1 bg-red-500/20 rounded-full text-sm">Pinecone</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-sm">GPT-4</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Next.js</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>RAG-based prior art search across millions of patents</li>
                <li>Automated patent claims generation with LLMs</li>
                <li>OCR for patent document processing</li>
                <li>CAD drawing integration</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-xl border border-blue-700/50">
              <h3 className="text-3xl font-bold mb-3">🛍️ ZAMMER NOW - 30-Minute Fashion Delivery</h3>
              <p className="text-gray-300 mb-4 text-lg">
                India's first 30-minute doorstep fashion delivery platform | 500+ clients onboarded
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Express</span>
              </div>
              <Link href="https://zammernow.com" target="_blank" className="text-blue-400 hover:underline">
                Visit zammernow.com →
              </Link>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 p-8 rounded-xl border border-green-700/50">
              <h3 className="text-3xl font-bold mb-3">💰 RICHIE AI - AI Financial Planning</h3>
              <p className="text-gray-300 mb-4 text-lg">
                AI-powered wealth management and financial planning platform
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">RAG</span>
                <span className="px-3 py-1 bg-teal-500/20 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">NLP</span>
              </div>
              <Link href="https://richieai.in" target="_blank" className="text-green-400 hover:underline">
                Visit richieai.in →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Technical Blog</h2>
          <p className="text-center text-gray-400 mb-16">Deep dives into AI engineering topics</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'RAG Systems', href: '/blog/rag-systems', color: 'blue', desc: 'Vector databases, embeddings & retrieval' },
              { title: 'MCP Servers', href: '/blog/mcp-servers', color: 'purple', desc: 'Model Context Protocol development' },
              { title: 'Patent AI Tools', href: '/blog/patent-ai-tools', color: 'red', desc: 'AI-powered patent drafting' },
              { title: 'Vector Databases', href: '/blog/vector-databases', color: 'green', desc: 'Pinecone, ChromaDB, FAISS comparison' },
              { title: 'Embeddings', href: '/blog/embeddings', color: 'violet', desc: 'Semantic search optimization' },
              { title: 'Chunking Strategies', href: '/blog/chunking-strategies', color: 'yellow', desc: 'Text chunking for RAG' },
              { title: 'Agentic AI', href: '/blog/agentic-ai', color: 'pink', desc: 'Multi-agent systems' },
            ].map((blog) => (
              <Link key={blog.href} href={blog.href} className="group">
                <div className={`bg-${blog.color}-900/30 p-6 rounded-xl border border-${blog.color}-700/50 hover:bg-${blog.color}-900/50 transition h-full`}>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-${blog.color}-300 transition">{blog.title}</h3>
                  <p className="text-gray-400 text-sm">{blog.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-12">
            Looking for an AI engineer specialized in RAG systems, MCP servers, or Patent AI tools?
          </p>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-blue-700/50 mb-12">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2 text-blue-300">Email</h3>
                <a href="mailto:udditalerts247@gmail.com" className="text-gray-300 hover:text-white">
                  udditalerts247@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-300">Phone</h3>
                <div className="space-y-1">
                  <a href="tel:+917456886877" className="block text-gray-300 hover:text-white">
                    +91-7456886877
                  </a>
                  <a href="tel:+918368824707" className="block text-gray-300 hover:text-white">
                    +91-8368824707
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-300">Education</h3>
                <p className="text-gray-300">NIT Jaipur - Graduated 2025</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-pink-300">Location</h3>
                <p className="text-gray-300">India</p>
              </div>
            </div>
          </div>

          <a
            href="mailto:udditalerts247@gmail.com"
            className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-xl hover:from-blue-700 hover:to-purple-700 transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Uddit - AI Engineer & Full Stack Developer</p>
          <p className="mt-2 text-sm">
            RAG Systems | MCP Servers | Patent AI Tools | Vector Databases | Agentic AI
          </p>
        </div>
      </footer>
    </div>
  );
}
