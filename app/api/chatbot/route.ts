import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ChatRole = 'user' | 'model';

type ChatHistoryItem = {
  role: ChatRole;
  content: string;
};

const MODEL_ENDPOINT = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent';

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: 'GEMINI_API_KEY is not configured' }, { status: 500 });
  }

  try {
    const { message, history = [] }: { message?: string; history?: ChatHistoryItem[] } = await req.json();
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ message: 'Message is required' }, { status: 400 });
    }

    const sanitizedHistory = Array.isArray(history)
      ? history.filter((item): item is ChatHistoryItem =>
          !!item && (item.role === 'user' || item.role === 'model') && typeof item.content === 'string'
        )
      : [];

    const contents = [...sanitizedHistory, { role: 'user', content: message }].map(item => ({
      role: item.role,
      parts: [{ text: item.content }],
    }));

    const response = await fetch(`${MODEL_ENDPOINT}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents }),
    });

    const data = await response.json();

    if (!response.ok) {
      const messageText = typeof data?.error?.message === 'string' ? data.error.message : 'Gemini request failed';
      return NextResponse.json({ message: messageText }, { status: response.status });
    }

    let reply = '';

    if (Array.isArray(data?.candidates)) {
      for (const candidate of data.candidates) {
        if (!candidate || typeof candidate !== 'object') {
          continue;
        }

        const parts = Array.isArray(candidate?.content?.parts) ? candidate.content.parts : [];
        const textPart = parts.find((part: any) => typeof part?.text === 'string' && part.text.trim().length > 0);
        if (textPart?.text) {
          reply = textPart.text.trim();
          break;
        }
      }
    }

    if (!reply && data?.promptFeedback?.blockReason === 'SAFETY') {
      reply = 'I am unable to respond to that request because it may violate safety guidelines.';
    }

    return NextResponse.json({ reply: reply || 'I am still learning. Please try asking in a different way.' });
  } catch (error) {
    console.error('Chatbot error', error);
    return NextResponse.json({ message: 'Unable to process your request right now.' }, { status: 500 });
  }
}
