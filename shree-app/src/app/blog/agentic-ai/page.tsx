import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentic AI Systems - Multi-Agent Architectures Expert | Uddit',
  description: 'Expert guide on building agentic AI systems by Uddit. Learn about multi-agent architectures, task planning, tool use, autonomous agents, LangChain agents, and AI orchestration.',
  keywords: ['Agentic AI', 'AI Agents', 'Multi-Agent Systems', 'LangChain Agents', 'Autonomous AI', 'Tool Calling', 'Task Planning', 'AI Engineer', 'Uddit'],
};

export default function AgenticAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
            Agentic AI Systems
          </h1>
          <p className="text-xl text-gray-300">
            By Uddit - Expert in Multi-Agent Architectures & Autonomous AI
          </p>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-rose-400">What are Agentic AI Systems?</h2>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-gray-200 leading-relaxed">
                Agentic AI systems are autonomous agents that can plan, execute tasks, use tools, and make decisions
                independently. I've built production agentic systems including autonomous job application bots and
                multi-agent coordination platforms.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-pink-400">Core Components</h2>
            <div className="space-y-4">
              <div className="bg-rose-900/30 p-6 rounded-lg border-l-4 border-rose-500">
                <h3 className="text-2xl font-bold mb-2">Task Planning</h3>
                <p className="text-gray-300">Breaking down complex goals into actionable steps</p>
              </div>
              <div className="bg-pink-900/30 p-6 rounded-lg border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold mb-2">Tool Use</h3>
                <p className="text-gray-300">Function calling and external API integration</p>
              </div>
              <div className="bg-fuchsia-900/30 p-6 rounded-lg border-l-4 border-fuchsia-500">
                <h3 className="text-2xl font-bold mb-2">Memory & Context</h3>
                <p className="text-gray-300">Maintaining state across agent interactions</p>
              </div>
              <div className="bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold mb-2">Multi-Agent Coordination</h3>
                <p className="text-gray-300">Orchestrating multiple specialized agents</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-purple-400">My Agentic AI Projects</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-rose-900/30 to-pink-900/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Autonomous LinkedIn Job Application Bot</h3>
                <p className="text-gray-300 mb-3">
                  Multi-agent system that autonomously searches jobs, customizes resumes, and applies
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-rose-500/20 rounded-full text-sm">LangChain Agents</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm">GPT-4</span>
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">Selenium</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-rose-900/20 to-pink-900/20 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Content Coming Soon</h2>
            <p className="text-gray-300 mb-4">Comprehensive guides on:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Building autonomous agents with LangChain</li>
              <li>Multi-agent orchestration patterns</li>
              <li>Tool use and function calling</li>
              <li>Memory systems for agents</li>
              <li>Agent safety and guardrails</li>
            </ul>
          </section>
        </article>

        <div className="mt-16 p-8 bg-gradient-to-r from-rose-600 to-pink-600 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Build Agentic AI Systems</h2>
          <a href="mailto:udditalerts247@gmail.com" className="px-6 py-3 bg-white text-rose-900 font-semibold rounded-lg hover:bg-gray-100 transition inline-block">
            Hire Uddit
          </a>
        </div>
      </div>
    </div>
  );
}
