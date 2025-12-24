import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { prisma } from '@/lib/prisma';
import { sendJobApplicationNotification, sendApplicationConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const role = formData.get('role') as string;
    const message = formData.get('message') as string;
    const resume = formData.get('resume') as File;

    // Validate required fields
    if (!name || !email || !role || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Upload resume to Vercel Blob (or S3 in production)
    const blob = await put(`resumes/${name.replace(/\s+/g, '_')}-${Date.now()}-${resume.name}`, resume, {
      access: 'public',
    });

    // Save application to database
    const application = await prisma.jobApplication.create({
      data: {
        name,
        email,
        role,
        message: message || null,
        resumeUrl: blob.url,
      },
    });

    // Send email notifications
    await Promise.all([
      sendJobApplicationNotification({ name, email, role, message, resumeUrl: blob.url }),
      sendApplicationConfirmation({ name, email, role })
    ]);

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      id: application.id
    });
  } catch (error) {
    console.error('Application error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}