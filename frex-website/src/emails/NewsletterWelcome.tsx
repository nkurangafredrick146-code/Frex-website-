import * as React from 'react';
import { EmailLayout } from './components/EmailLayout';
import { Button } from './components/Button';

interface NewsletterWelcomeProps {
  email: string;
}

export const NewsletterWelcome: React.FC<NewsletterWelcomeProps> = ({ 
  email 
}) => {
  return (
    <EmailLayout previewText="Welcome to the Frex newsletter">
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
              Welcome to Frex
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#9ca3af', 
              margin: '0 0 32px 0' 
            }}>
              You're now subscribed to our newsletter about the future of technology.
            </p>
            
            <div style={{ 
              backgroundColor: '#111827', 
              borderRadius: '8px', 
              padding: '24px',
              margin: '24px 0',
              textAlign: 'center' as const
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                margin: '0 0 12px 0',
                color: '#22d3ee'
              }}>
                Ready to explore the future?
              </h2>
              <p style={{ 
                fontSize: '14px', 
                color: '#d1d5db', 
                margin: '0',
                lineHeight: '1.5'
              }}>
                You'll receive exclusive insights on quantum computing, AI governance, 
                and the foundational technologies shaping tomorrow.
              </p>
            </div>

            <div style={{ margin: '32px 0' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 16px 0' }}>
                What you'll receive:
              </h2>
              <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tr>
                  <td width="60" style={{ padding: '12px 0', verticalAlign: 'top' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#1e3a8a',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '18px' }}>📰</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 0' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                      Research Updates
                    </h3>
                    <p style={{ fontSize: '14px', color: '#9ca3af', margin: '0' }}>
                      Latest findings from Frex Labs in quantum and doctrinal systems
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#1e3a8a',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '18px' }}>🔍</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 0' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                      Industry Insights
                    </h3>
                    <p style={{ fontSize: '14px', color: '#9ca3af', margin: '0' }}>
                      Analysis of emerging trends in deep tech and AI governance
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 0', verticalAlign: 'top' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#1e3a8a',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ fontSize: '18px' }}>🎯</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 0' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                      Exclusive Content
                    </h3>
                    <p style={{ fontSize: '14px', color: '#9ca3af', margin: '0' }}>
                      Early access to research papers and technical deep dives
                    </p>
                  </td>
                </tr>
              </table>
            </div>

            <div style={{ 
              border: '1px solid #374151', 
              borderRadius: '8px', 
              padding: '20px',
              margin: '24px 0'
            }}>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                margin: '0 0 12px 0',
                color: '#22d3ee'
              }}>
                Subscription Details
              </h3>
              <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tr>
                  <td style={{ padding: '4px 0', color: '#9ca3af', fontSize: '14px' }}>Email:</td>
                  <td style={{ padding: '4px 0', fontSize: '14px', fontWeight: 'bold' }}>{email}</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 0', color: '#9ca3af', fontSize: '14px' }}>Frequency:</td>
                  <td style={{ padding: '4px 0', fontSize: '14px' }}>Monthly + important updates</td>
                </tr>
                <tr>
                  <td style={{ padding: '4px 0', color: '#9ca3af', fontSize: '14px' }}>Unsubscribe:</td>
                  <td style={{ padding: '4px 0', fontSize: '14px' }}>
                    <a 
                      href="https://frex.com/unsubscribe"
                      style={{ color: '#22d3ee', textDecoration: 'none' }}
                      className="hover-underline"
                    >
                      Click here anytime
                    </a>
                  </td>
                </tr>
              </table>
            </div>

            <Button href="https://frex.com/blog">
              Read Latest Articles
            </Button>

            <p style={{ fontSize: '12px', color: '#6b7280', margin: '24px 0 0 0', textAlign: 'center' as const }}>
              You're receiving this email because you subscribed to updates from Frex.
            </p>
          </td>
        </tr>
      </table>
    </EmailLayout>
  );
};