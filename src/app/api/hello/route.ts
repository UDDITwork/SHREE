import { NextRequest, NextResponse } from 'next/server';

// Example API route - GET /api/hello
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Hello from the backend!',
    timestamp: new Date().toISOString()
  });
}

// Example POST endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    return NextResponse.json({
      success: true,
      data: body,
      message: 'Data received successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
