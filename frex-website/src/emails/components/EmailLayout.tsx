import * as React from 'react';

interface EmailLayoutProps {
  children: React.ReactNode;
  previewText?: string;
}

export const EmailLayout: React.FC<EmailLayoutProps> = ({ 
  children, 
  previewText = "Frex - Building the Foundational Layer for Tomorrow" 
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <title>Frex</title>
        <style>
          {`
            @media (prefers-color-scheme: dark) {
              .dark-mode-bg { background-color: #000000 !important; }
              .dark-mode-text { color: #ffffff !important; }
              .dark-mode-border { border-color: #374151 !important; }
            }
            .hover-underline:hover { text-decoration: underline !important; }
            @media (max-width: 600px) {
              .container { width: 100% !important; }
              .mobile-stack { display: block !important; width: 100% !important; }
            }
          `}
        </style>
      </head>
      <body style={{
        margin: 0;
        padding: 0;
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        backgroundColor: '#000000';
        color: '#ffffff';
      }}>
        <span style={{ display: 'none' }}>{previewText}</span>
        
        <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
          <tr>
            <td align="center" className="dark-mode-bg">
              <table 
                className="container" 
                width="600" 
                border={0} 
                cellPadding={0} 
                cellSpacing={0} 
                role="presentation"
                style={{
                  margin: '0 auto',
                  backgroundColor: '#000000',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                {/* Header */}
                <tr>
                  <td style={{ padding: '32px 32px 24px 32px', borderBottom: '1px solid #374151' }}>
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                      <tr>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                              width: '32px',
                              height: '32px',
                              background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <span style={{ 
                                color: '#000000', 
                                fontWeight: 'bold', 
                                fontSize: '14px' 
                              }}>
                                F
                              </span>
                            </div>
                            <span style={{ 
                              fontSize: '24px', 
                              fontWeight: 'bold',
                              background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              color: 'transparent'
                            }}>
                              Frex
                            </span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* Content */}
                <tr>
                  <td style={{ padding: '32px' }}>
                    {children}
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ 
                    padding: '24px 32px', 
                    borderTop: '1px solid #374151',
                    backgroundColor: '#111827'
                  }}>
                    <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                      <tr>
                        <td align="center">
                          <p style={{ 
                            margin: '0 0 16px 0', 
                            fontSize: '14px', 
                            color: '#9ca3af' 
                          }}>
                            Building the foundational layer for tomorrow
                          </p>
                          <p style={{ 
                            margin: '0', 
                            fontSize: '12px', 
                            color: '#6b7280' 
                          }}>
                            © {new Date().getFullYear()} Frex. All rights reserved.
                          </p>
                          <p style={{ 
                            margin: '8px 0 0 0', 
                            fontSize: '12px', 
                            color: '#6b7280' 
                          }}>
                            <a 
                              href="https://frex.com" 
                              style={{ 
                                color: '#22d3ee', 
                                textDecoration: 'none' 
                              }}
                              className="hover-underline"
                            >
                              frex.com
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};