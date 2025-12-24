import * as React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
      <tr>
        <td align="center" style={{ padding: '16px 0' }}>
          <a
            href={href}
            style={{
              backgroundColor: '#22d3ee',
              color: '#000000',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              display: 'inline-block',
              border: 'none',
              cursor: 'pointer'
            }}
            className="hover-underline"
          >
            {children}
          </a>
        </td>
      </tr>
    </table>
  );
};