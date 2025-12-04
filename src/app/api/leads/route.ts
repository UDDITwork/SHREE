import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URL || '';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, requirement, chatHistory } = await request.json();

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Email or phone is required' },
        { status: 400 }
      );
    }

    if (!MONGODB_URI) {
      console.error('MONGODB_URL not configured');
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500 }
      );
    }

    const client = new MongoClient(MONGODB_URI);

    try {
      await client.connect();
      const db = client.db('shree_portfolio');
      const collection = db.collection('leads');

      const lead = {
        name: name || 'Anonymous',
        email: email || '',
        phone: phone || '',
        requirement: requirement || '',
        chatHistory: chatHistory || [],
        createdAt: new Date(),
        source: 'SHREE ChatBot',
        status: 'new'
      };

      await collection.insertOne(lead);

      return NextResponse.json({
        success: true,
        message: 'Thank you! Uddit will get back to you soon.'
      });

    } finally {
      await client.close();
    }

  } catch (error) {
    console.error('Lead save error:', error);
    return NextResponse.json(
      { error: 'Failed to save your information' },
      { status: 500 }
    );
  }
}
