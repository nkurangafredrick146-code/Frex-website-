import * as React from 'react';
import { EmailLayout } from './components/EmailLayout';
import { Button } from './components/Button';

interface JobApplicationNotificationProps {
  application: {
    name: string;
    email: string;
    role: string;
    message?: string;
  };
}

export const JobApplicationNotification: React.FC<JobApplicationNotificationProps> = ({ 
  application 
}) => {
  return (
    <EmailLayout previewText={`New job application for ${application.role}`}>
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
              New Job Application
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#9ca3af', 
              margin: '0 0 32px 0' 
            }}>
              A new candidate has applied for a position at Frex.
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
                  <td style={{ padding: '8px 0', fontWeight: 'bold' }}>{application.name}</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#9ca3af' }}>Email:</td>
                  <td style={{ padding: '8px 0' }}>
                    <a 
                      href={`mailto:${application.email}`}
                      style={{ color: '#22d3ee', textDecoration: 'none' }}
                      className="hover-underline"
                    >
                      {application.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 0', color: '#9ca3af' }}>Role:</td>
                  <td style={{ padding: '8px 0', fontWeight: 'bold', color: '#22d3ee' }}>
                    {application.role}
                  </td>
                </tr>
                {application.message && (
                  <tr>
                    <td style={{ padding: '8px 0', color: '#9ca3af', verticalAlign: 'top' }}>Message:</td>
                    <td style={{ padding: '8px 0' }}>
                      <div style={{ 
                        backgroundColor: '#1f2937', 
                        padding: '16px', 
                        borderRadius: '4px',
                        fontStyle: 'italic'
                      }}>
                        {application.message}
                      </div>
                    </td>
                  </tr>
                )}
              </table>
            </div>

            <p style={{ fontSize: '14px', color: '#9ca3af', margin: '24px 0' }}>
              This application has been automatically saved to your database. 
              You can review all applications through the admin dashboard.
            </p>

            <Button href="https://frex.com/admin">
              View in Admin Dashboard
            </Button>
          </td>
        </tr>
      </table>
    </EmailLayout>
  );
};