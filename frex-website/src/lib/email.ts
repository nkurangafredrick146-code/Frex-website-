import { Resend } from 'resend';
import { 
  JobApplicationNotification, 
  JobApplicationConfirmation,
  ContactNotification,
  ContactConfirmation,
  NewsletterWelcome 
} from '@/emails';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendJobApplicationNotification(application: {
  name: string;
  email: string;
  role: string;
  message?: string;
}) {
  try {
    const emailHtml = await render(
      JobApplicationNotification({ application })
    );

    await resend.emails.send({
      from: 'Frex Careers <careers@frex.com>',
      to: ['hiring@frex.com'],
      subject: `New Application: ${application.role} - ${application.name}`,
      html: emailHtml,
    });
  } catch (error) {
    console.error('Error sending job application email:', error);
  }
}

export async function sendApplicationConfirmation(application: {
  name: string;
  email: string;
  role: string;
}) {
  try {
    const emailHtml = await render(
      JobApplicationConfirmation({ application })
    );

    await resend.emails.send({
      from: 'Frex Careers <careers@frex.com>',
      to: [application.email],
      subject: `Application Received - ${application.role} at Frex`,
      html: emailHtml,
    });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
}

export async function sendContactNotification(submission: {
  name: string;
  email: string;
  company?: string;
  interest?: string;
  message: string;
}) {
  try {
    const emailHtml = await render(
      ContactNotification({ submission })
    );

    await resend.emails.send({
      from: 'Frex Contact <contact@frex.com>',
      to: ['hello@frex.com'],
      subject: `New Contact: ${submission.name} - ${submission.interest || 'General Inquiry'}`,
      html: emailHtml,
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
  }
}

export async function sendContactConfirmation(submission: {
  name: string;
  email: string;
  interest?: string;
}) {
  try {
    let emailHtml: string;

    // Try rendering React Email template if available
    if (typeof ContactConfirmation === 'function') {
      emailHtml = await render(ContactConfirmation({ submission }));
    } else {
      // Fallback plain HTML
      emailHtml = `<p>Hi ${submission.name},</p>
        <p>Thanks for contacting us about <strong>${submission.interest || 'your inquiry'}</strong>. Our team will get back to you shortly.</p>
        <p>— Frex Team</p>`;
    }

    await resend.emails.send({
      from: 'Frex Contact <contact@frex.com>',
      to: [submission.email],
      subject: 'Thank you for contacting Frex',
      html: emailHtml,
    });
  } catch (error) {
    console.error('Error sending contact confirmation email:', error);
  }
}

export async function sendNewsletterWelcome(email: string) {
  try {
    const emailHtml = await render(
      NewsletterWelcome({ email })
    );

    await resend.emails.send({
      from: 'Frex Newsletter <newsletter@frex.com>',
      to: [email],
      subject: 'Welcome to the Frex Newsletter',
      html: emailHtml,
    });
  } catch (error) {
    console.error('Error sending newsletter welcome email:', error);
  }
}