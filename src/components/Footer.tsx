import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
        padding: '5rem 0 2.5rem 0'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
                  <polygon
                    points="12,4 28,4 36,12 36,28 28,36 12,36 4,28 4,12"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    fill="rgba(2, 132, 199, 0.08)"
                  />
                  <circle cx="20" cy="20" r="3" fill="#0284c7" />
                </svg>
              </div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.05em' }}>
                AUTO<span style={{ color: 'var(--accent-cyan)' }}>OCTA</span>
              </span>
            </div>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                maxWidth: '320px',
                lineHeight: '1.6',
                marginBottom: '1.25rem',
                fontWeight: 600
              }}
            >
              "Modernize. Automate. Build."
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', maxWidth: '340px' }}>
              Engineering smarter infrastructure, software and AI solutions for the modern enterprise.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Services', 'Solutions', 'AI & Automation', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/[^a-z]/g, '')}`}
                    style={{ color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500, transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Focus */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              TECHNOLOGY
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Cloud Engineering', 'Migration & Modernization', 'Automation & DevOps', 'Software Engineering', 'AI Engineering', 'Data Engineering'].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    style={{ color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500, transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0f172a')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              CONTACT
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '0.75rem' }}>
              Engineering Inquiries:
            </p>
            <a
              href="mailto:hello@autoocta.com"
              style={{
                fontSize: '1rem',
                color: 'var(--accent-cyan)',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                textDecoration: 'underline'
              }}
            >
              hello@autoocta.com
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(15, 23, 42, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-subtle)'
          }}
        >
          <div>© 2026 AutoOcta. All rights reserved.</div>
          <div>autoocta.com</div>
        </div>
      </div>
    </footer>
  );
};
