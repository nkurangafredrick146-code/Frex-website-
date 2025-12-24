import * as React from 'react';
import { EmailLayout } from './components/EmailLayout';
import { Button } from './components/Button';

interface ContactNotificationProps {
  submission: {
    name: string;
    email: string;
    company?: string;
    interest?: string;
    message: string;
  };
}

export const ContactNotification: React.FC<ContactNotificationProps> = ({ 
  submission 
}) => {
  return (
    <EmailLayout previewText={`New contact form submission from ${submission.name}`}>
      <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
        <tr>
          <td>
            <h1 style={{ 
              fontSize: '28px', 
              fontWeight: 'bold', 
              margin: '0 0 8px 0',
              background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              New Contact Submission
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#9ca3af', 
              margin: '0 0 32px 0' 
            }}>
              Someone has reached out through the Frex contact form.
            </p>
            
            <div style={{ 
              backgroundColor: '#111827', 
              borderRadius: '8px', 
              padding: '24px',
              margin: '24px 0'
            }}>
              <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tr>
                  <td width="30%" style={{ padding: '8px 0', color: '#9ca3af' }}>Name:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold' }}>{submission.name}</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#9ca3af' }}>Email:</td>
                  <td style={{ padding: '8px 0' }}>
                    <a 
                      href={`mailto:${submission.email}`}
                      style={{ color: '#22d3ee', textDecoration: 'none' }}
                      className="hover-underline"
                    >
                      {submission.email}
                    </a>
                  </td>
                </tr>
                {submission.company && (
                  <tr>
                    <td style={{ padding: '8px 0', color: '#9ca3af' }}>Company:</td>
                    <td style={{ padding: '8px 0' }}>{submission.company}</td>
                  </tr>
                )}
                {submission.interest && (
                  <tr>
                    <td style={{ padding: '8px 0', color: '#9ca3af' }}>Interest:</td>
                    <td style={{ padding: '8px 0', color: '#22d3ee', fontWeight: 'bold' }}>
                      {submission.interest}
                    </td>
                  </tr>
                )}
                <tr>
                  <td style={{ padding: '8px 0', color: '#9ca3af', verticalAlign: 'top' }}>Message:</td>
                  <td style={{ padding: '8px 0' }}>
                    <div style={{ 
                      backgroundColor: '#1f2937', 
                      padding: '16px', 
                      borderRadius: '4px',
                      lineHeight: '1.5'
                    }}>
                      {submission.message}
                    </div>
                  </td>
                </tr>
              </table>
            </div>

            <div style={{ display: 'flex', gap: '12px' }} className="mobile-stack">
              <Button href={`mailto:${submission.email}?subject=Re: Your Frex Contact Form Submission`}>
                Reply to {submission.name}
              </Button>
              <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tr>
                  <td align="center" style={{ padding: '16px 0' }}>
                    <a
                      href="https://frex.com/admin"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#22d3ee',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        display: 'inline-block',
                        border: '1px solid #22d3ee',
                        cursor: 'pointer'
                      }}
                      className="hover-underline"
                    >
                      View in Admin
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
    </EmailLayout>
  );
};