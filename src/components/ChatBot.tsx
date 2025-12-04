'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

type ChatPhase = 'chatting' | 'collecting_info' | 'collecting_requirement' | 'completed';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hey there! I'm SHREE, Uddit's AI assistant. What would you like to know about him?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userQuestionCount, setUserQuestionCount] = useState(0);
  const [chatPhase, setChatPhase] = useState<ChatPhase>('chatting');
  const [leadInfo, setLeadInfo] = useState({ email: '', phone: '', name: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const saveLead = async (requirement: string) => {
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadInfo,
          requirement,
          chatHistory: messages,
        }),
      });
    } catch (error) {
      console.error('Failed to save lead:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userInput = inputValue.trim();
    const userMessage: Message = { role: 'user', content: userInput };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Handle different chat phases
    if (chatPhase === 'collecting_info') {
      // Parse email and phone from input
      const emailMatch = userInput.match(/[\w.-]+@[\w.-]+\.\w+/);
      const phoneMatch = userInput.match(/[\d\s+-]{10,}/);

      const newLeadInfo = {
        ...leadInfo,
        email: emailMatch ? emailMatch[0] : leadInfo.email,
        phone: phoneMatch ? phoneMatch[0].replace(/\s/g, '') : leadInfo.phone,
        name: !emailMatch && !phoneMatch ? userInput : leadInfo.name,
      };
      setLeadInfo(newLeadInfo);

      if (newLeadInfo.email || newLeadInfo.phone) {
        setChatPhase('collecting_requirement');
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Perfect! Now please share your requirement or what you'd like to discuss with Uddit. I'll make sure he gets your message.",
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "I'll need either your email or phone number so Uddit can reach out to you. Could you please share that?",
        }]);
      }
      return;
    }

    if (chatPhase === 'collecting_requirement') {
      await saveLead(userInput);
      setChatPhase('completed');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Thank you so much! I've noted down everything and Uddit will get back to you soon. Is there anything else you'd like to know about him in the meantime?",
      }]);
      return;
    }

    // Normal chat flow
    const newQuestionCount = userQuestionCount + 1;
    setUserQuestionCount(newQuestionCount);

    // After 4 questions, trigger lead capture
    if (newQuestionCount >= 4 && chatPhase === 'chatting') {
      setChatPhase('collecting_info');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm really enjoying our conversation! It seems like you're quite interested in Uddit's work. I'd love to connect you directly with him. Could you share your email and phone number? He'll personally reach out to discuss how he might help you.",
      }]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message,
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Oops! Something went wrong. Could you try asking that again?',
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What are his skills?",
    "Tell me about projects",
    "His experience?",
    "How to contact him?",
  ];

  const getPlaceholder = () => {
    switch (chatPhase) {
      case 'collecting_info':
        return 'Enter your email or phone...';
      case 'collecting_requirement':
        return 'Describe your requirement...';
      default:
        return 'Ask about Uddit...';
    }
  };

  return (
    <>
      {/* Chat Toggle Button - Standalone Icon */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] flex items-center justify-center shadow-lg"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)' }}
            >
              <svg
                className="w-7 h-7 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-16 h-16"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.5))',
              }}
            >
              <Image
                src="/AI-ICON.png"
                alt="SHREE AI"
                fill
                className="object-contain"
              />
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#00ff88]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[550px] max-h-[calc(100vh-150px)] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.98) 0%, rgba(15, 20, 18, 0.98) 100%)',
              border: '1px solid rgba(0, 255, 136, 0.2)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 100px rgba(0, 255, 136, 0.1)',
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 bg-gradient-to-r from-[#00ff88]/10 to-[#00d4ff]/10">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/AI-ICON.png"
                    alt="SHREE"
                    fill
                    className="object-contain"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(0, 255, 136, 0.5))' }}
                  />
                  {/* Online indicator */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#00ff88] rounded-full border-2 border-[#0a0a0a]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">SHREE</h3>
                  <p className="text-xs text-[#00ff88]">Uddit's AI Assistant • Online</p>
                </div>
                {/* Question counter */}
                {chatPhase === 'chatting' && userQuestionCount > 0 && (
                  <div className="ml-auto text-xs text-gray-500">
                    {4 - userQuestionCount > 0 ? `${4 - userQuestionCount} questions left` : ''}
                  </div>
                )}
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100%-140px)] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 mr-2 flex-shrink-0 relative">
                      <Image
                        src="/AI-ICON.png"
                        alt="SHREE"
                        fill
                        className="object-contain"
                        style={{ filter: 'drop-shadow(0 0 5px rgba(0, 255, 136, 0.3))' }}
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black rounded-br-md'
                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-8 h-8 mr-2 flex-shrink-0 relative">
                    <Image
                      src="/AI-ICON.png"
                      alt="SHREE"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <motion.span
                        className="w-2 h-2 bg-[#00ff88] rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-[#00d4ff] rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-[#a855f7] rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggested questions */}
              {messages.length === 1 && !isLoading && chatPhase === 'chatting' && (
                <motion.div
                  className="space-y-2 pt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-xs text-gray-500 px-1">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-[#00ff88]/30 transition-all"
                        onClick={() => {
                          setInputValue(question);
                          inputRef.current?.focus();
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder={getPlaceholder()}
                  disabled={isLoading}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88]/50 focus:ring-1 focus:ring-[#00ff88]/20 transition-all disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00d4ff] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
