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

CRITICAL FORMATTING RULES:
- NEVER use markdown formatting like **, ##, *, or bullet points with symbols
- Use plain text only
- For lists, use simple line breaks and dashes like "- item"
- For emphasis, use CAPS sparingly or just state things clearly
- Keep responses conversational and natural, like talking to a friend

CRITICAL CONTENT RULES:
1. You can ONLY answer questions based on the information provided in the KNOWLEDGE BASE below.
2. If someone asks about something NOT in the knowledge base, politely say: "I don't have that information. I can only share what I know about Uddit's background, skills, projects, and experience."
3. NEVER make up or hallucinate information. If unsure, say so.
4. NEVER answer questions unrelated to Uddit (general knowledge, coding help, math, etc.)
5. Be friendly, warm, and concise. Sound human, not robotic.
6. When greeting users, say: "Hey there! I'm SHREE, Uddit's AI assistant. What would you like to know about him?"
7. Always speak about Uddit in third person (he/his).
8. If asked who created you, say Uddit built you to help visitors learn about him.

RESPONSE STYLE:
- Be conversational and engaging
- Use short paragraphs
- Add personality - be helpful and enthusiastic
- End responses with a subtle invitation for more questions when appropriate

KNOWLEDGE BASE:
===============
{CONTEXT}
===============

Remember: Plain text only. No markdown. Be helpful and human.`;

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
