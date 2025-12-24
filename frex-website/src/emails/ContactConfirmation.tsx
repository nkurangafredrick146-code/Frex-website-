import * as React from 'react';
import { EmailLayout } from './components/EmailLayout';
import { Button } from './components/Button';

interface ContactConfirmationProps {
  submission: {
    name: string;
    email: string;
    interest?: string;
  };
}

export const ContactConfirmation: React.FC<ContactConfirmationProps> = ({ 
  submission 
}) => {
  const getResponseTime = () => {
    switch (submission.interest) {
      case 'partnership':
        return '1-2 business days';
      case 'research':
        return '3-5 business days';
      case 'solutions':
        return '2-3 business days';
      case 'careers':
        return '5-7 business days';
      default:
        return '2-3 business days';
    }
  };

  return (
    <EmailLayout previewText="Thank you for contacting Frex">
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
              Message Received
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#9ca3af', 
              margin: '0 0 32px 0' 
            }}>
              Thank you for reaching out to Frex. We've received your message and will get back to you soon.
            </p>
            
            <div style={{ 
              backgroundColor: '#111827', 
              borderRadius: '8px', 
              padding: '24px',
              margin: '24px 0'
            }}>
              <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tr>
                  <td style={{ padding: '8px 0', color: '#9ca3af' }}>Expected Response:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#22d3ee' }}>
                    {getResponseTime()}
                  </td>
                </tr>
                {submission.interest && (
                  <tr>
                    <td style={{ padding: '8px 0', color: '#9ca3af' }}>Interest:</td>
                    <td style={{ padding: '8px 0', fontWeight: 'bold' }}>
                      {submission.interest.charAt(0).toUpperCase() + submission.interest.slice(1)}
                    </td>
                  </tr>
                )}
              </table>
            </div>

            <div style={{ margin: '24px 0' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0' }}>
                What to expect next:
              </h2>
              <ul style={{ 
                color: '#d1d5db', 
                paddingLeft: '20px', 
                margin: '0',
                lineHeight: '1.6'
              }}>
                <li>Our team will review your inquiry and route it to the appropriate department</li>
                <li>You'll receive a personalized response from a team member</li>
                <li>We may schedule a call to better understand your needs</li>
                <li>We'll provide relevant information and next steps</li>
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
                margin: '0 0 12px 0',
                color: '#bfdbfe'
              }}>
                💡 In the meantime...
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#dbeafe', 
                margin: '0 0 12px 0',
                lineHeight: '1.5'
              }}>
                Explore our research and learn more about our work in quantum computing and doctrinal systems.
              </p>
              <div style={{ display: 'flex', gap: '8px' }} className="mobile-stack">
                <a
                  href="https://frex.com/blog"
                  style={{
                    color: '#bfdbfe',
                    textDecoration: 'none',
                    fontSize: '14px',
                    padding: '8px 12px',
                    border: '1px solid #3b82f6',
                    borderRadius: '4px',
                    display: 'inline-block'
                  }}
                  className="hover-underline"
                >
                  Read Our Blog
                </a>
                <a
                  href="https://frex.com/labs"
                  style={{
                    color: '#bfdbfe',
                    textDecoration: 'none',
                    fontSize: '14px',
                    padding: '8px 12px',
                    border: '1px solid #3b82f6',
                    borderRadius: '4px',
                    display: 'inline-block'
                  }}
                  className="hover-underline"
                >
                  Explore Research
                </a>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#9ca3af', margin: '24px 0' }}>
              Need immediate assistance? Reply to this email or contact{' '}
              <a 
                href="mailto:hello@frex.com"
                style={{ color: '#22d3ee', textDecoration: 'none' }}
                className="hover-underline"
              >
                hello@frex.com
              </a>
            </p>

            <Button href="https://frex.com">
              Visit Our Website
            </Button>
          </td>
        </tr>
      </table>
    </EmailLayout>
  );
};