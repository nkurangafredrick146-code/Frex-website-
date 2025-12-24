import * as React from 'react';
import { EmailLayout } from './components/EmailLayout';
import { Button } from './components/Button';

interface JobApplicationConfirmationProps {
  application: {
    name: string;
    email: string;
    role: string;
  };
}

export const JobApplicationConfirmation: React.FC<JobApplicationConfirmationProps> = ({ 
  application 
}) => {
  return (
    <EmailLayout previewText="Thank you for your application to Frex">
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
              Application Received
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#9ca3af', 
              margin: '0 0 32px 0' 
            }}>
              Thank you for applying to join the Frex team.
            </p>
            
            <div style={{ 
              backgroundColor: '#111827', 
              borderRadius: '8px', 
              padding: '24px',
              margin: '24px 0'
            }}>
              <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tr>
                  <td style={{ padding: '8px 0', color: '#9ca3af' }}>Position:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#22d3ee' }}>
                    {application.role}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#9ca3af' }}>Applicant:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold' }}>{application.name}</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#9ca3af' }}>Email:</td>
                  <td style={{ padding: '8px 0' }}>{application.email}</td>
                </tr>
              </table>
            </div>

            <div style={{ margin: '24px 0' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0' }}>
                What happens next?
              </h2>
              <ul style={{ 
                color: '#d1d5db', 
                paddingLeft: '20px', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                <li>Our team will review your application within 5-7 business days</li>
                <li>If your background matches our needs, we'll contact you to schedule an interview</li>
                <li>We may reach out for additional information or clarification</li>
                <li>You'll receive updates on your application status via email</li>
              </ul>
            </div>

            <div style={{ 
              backgroundColor: '#1e3a8a', 
              borderRadius: '8px', 
              padding: '20px',
              margin: '24px 0'
            }}>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                margin: '0 0 8px 0',
                color: '#bfdbfe'
              }}>
                🚀 Join Our Mission
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#dbeafe', 
                margin: '0',
                lineHeight: '1.5'
              }}>
                At Frex, we're building the foundational technologies that will power tomorrow's world. 
                Your application brings us one step closer to realizing that future.
              </p>
            </div>

            <p style={{ fontSize: '14px', color: '#9ca3af', margin: '24px 0' }}>
              Have questions? Reply to this email or contact{' '}
              <a 
                href="mailto:careers@frex.com"
                style={{ color: '#22d3ee', textDecoration: 'none' }}
                className="hover-underline"
              >
                careers@frex.com
              </a>
            </p>

            <Button href="https://frex.com/careers">
              View Other Open Positions
            </Button>
          </td>
        </tr>
      </table>
    </EmailLayout>
  );
};