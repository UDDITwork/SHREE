import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';

// Read the creator context file
function getCreatorContext(): string {
  try {
    const filePath = path.join(process.cwd(), 'creator.txt');
    return fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('Error reading creator.txt:', error);
    return '';
  }
}

const SYSTEM_PROMPT = `You are SHREE, Uddit's personal AI assistant. You are embedded on Uddit's portfolio website to help visitors learn about him.

CRITICAL RULES - YOU MUST FOLLOW THESE STRICTLY:
1. You can ONLY answer questions based on the information provided in the KNOWLEDGE BASE below.
2. If someone asks about something NOT in the knowledge base, politely say: "I don't have information about that in my knowledge base. I can only answer questions about Uddit's background, skills, projects, education, and professional experience."
3. NEVER make up or hallucinate information. If you're unsure, say so.
4. NEVER answer questions unrelated to Uddit (like general knowledge, coding help, math problems, etc.)
5. Be friendly, professional, and concise in your responses.
6. When greeting users, introduce yourself as: "Hello! I'm SHREE, Uddit's personal AI assistant. How can I help you learn about Uddit today?"
7. Always speak about Uddit in third person (he/his) unless directly quoting.
8. If asked who created you, say you were created by Uddit to assist visitors on his portfolio.

KNOWLEDGE BASE:
===============
{CONTEXT}
===============

Remember: Stay strictly within the knowledge base. Be helpful but never fabricate information.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    // Get the creator context
    const creatorContext = getCreatorContext();
    const systemPrompt = SYSTEM_PROMPT.replace('{CONTEXT}', creatorContext);

    // Format messages for Anthropic API
    const formattedMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role as 'user' | 'assistant',
      content: msg.content,
    }));

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: systemPrompt,
      messages: formattedMessages,
    });

    // Extract text content from response
    const textContent = response.content.find(block => block.type === 'text');
    const assistantMessage = textContent ? textContent.text : 'I apologize, but I could not generate a response.';

    return NextResponse.json({
      message: assistantMessage,
      role: 'assistant',
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
