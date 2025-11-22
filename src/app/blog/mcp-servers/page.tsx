import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCP Servers - Model Context Protocol Expert | Uddit AI Engineer',
  description: 'Learn about MCP (Model Context Protocol) servers from Uddit, an AI engineer specializing in building custom MCP servers for AI agent communication, tool-calling, and context management.',
  keywords: ['MCP Servers', 'Model Context Protocol', 'AI Agents', 'Tool Calling', 'Claude AI', 'LLM Integration', 'AI Engineer', 'Uddit'],
  openGraph: {
    title: 'MCP Servers Expert - Uddit AI Engineer',
    description: 'Expert guide on building Model Context Protocol servers for AI agent communication',
    url: 'https://uddit.site/blog/mcp-servers',
  },
};

export default function MCPServersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "MCP Servers - Model Context Protocol Complete Guide",
    "author": {
      "@type": "Person",
      "name": "Uddit",
      "url": "https://uddit.site"
    },
    "datePublished": "2025-01-23",
    "description": "Complete guide to building MCP servers for AI agent communication and tool calling",
    "keywords": "MCP Servers, Model Context Protocol, AI Agents, Tool Calling, Claude AI",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              MCP Servers - Model Context Protocol
            </h1>
            <p className="text-xl text-gray-300">
              By Uddit - Specialist in MCP Server Development & AI Agent Systems
            </p>
          </header>

          <article className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">What are MCP Servers?</h2>
              <div className="bg-slate-800/50 p-6 rounded-lg mb-6">
                <p className="text-gray-200 leading-relaxed">
                  <strong>Model Context Protocol (MCP)</strong> servers enable AI agents to communicate,
                  share context, and execute tools in a standardized way. As an MCP specialist, I build
                  custom servers that allow AI systems to interact with external tools, databases, and APIs.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Key Components</h2>

              <div className="space-y-6">
                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h3 className="text-2xl font-semibold mb-3 text-cyan-300">1. Tool Calling</h3>
                  <p className="text-gray-200">
                    MCP servers expose tools that AI agents can invoke:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li>Function definitions with typed parameters</li>
                    <li>Execution handlers for tool invocation</li>
                    <li>Response formatting and error handling</li>
                    <li>Streaming support for long-running operations</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-300">2. Context Management</h3>
                  <p className="text-gray-200">
                    Efficient context sharing between AI agents:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li>Session state persistence</li>
                    <li>Message history management</li>
                    <li>Resource allocation and cleanup</li>
                    <li>Multi-agent coordination</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-2xl font-semibold mb-3 text-purple-300">3. Protocol Implementation</h3>
                  <p className="text-gray-200">
                    Building MCP-compliant servers:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
                    <li>WebSocket or HTTP communication</li>
                    <li>JSON-RPC message format</li>
                    <li>Authentication and authorization</li>
                    <li>TypeScript type safety</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">My MCP Implementations</h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Custom MCP Servers</h3>
                  <p className="text-gray-300 mb-3">
                    Built production MCP servers for AI agent communication and tool execution
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">WebSocket</span>
                    <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm">Claude AI</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Multi-Agent Systems</h3>
                  <p className="text-gray-300 mb-3">
                    Agentic AI systems with MCP-based communication protocols
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">MCP Protocol</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">LangChain</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Agent Coordination</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Why Hire Me for MCP Development?</h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Expert in building custom MCP servers from scratch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Experience with Claude AI, GPT-4, and multi-agent systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>TypeScript and Node.js expertise for robust implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>Built agentic AI applications with tool-calling capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <span>NIT Jaipur graduate with strong software engineering skills</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Content Coming Soon</h2>
              <p className="text-gray-300 text-lg">
                I'm writing detailed tutorials on:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>Building MCP servers with Node.js and TypeScript</li>
                <li>Implementing tool-calling protocols</li>
                <li>Context management best practices</li>
                <li>Multi-agent coordination with MCP</li>
                <li>Security and authentication for MCP servers</li>
                <li>Deploying MCP servers to production</li>
              </ul>
            </section>
          </article>

          <div className="mt-16 p-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need MCP Server Development?</h2>
            <p className="text-xl mb-6">Let's build powerful AI agent systems together</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:udditalerts247@gmail.com" className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition">
                Email Me
              </a>
              <a href="https://github.com/UDDITwork" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
