import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendContactNotification, sendContactConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, interest, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company: company || null,
        interest: interest || null,
        message,
      },
    });

    // Send notifications
    await Promise.all([
      sendContactNotification({
        name,
        email,
        company,
        interest,
        message
      }),
      sendContactConfirmation({
        name,
        email,
        interest
      })
    ]);

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully',
      id: contact.id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}