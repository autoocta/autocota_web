import React from 'react';
import { ECOSYSTEM_CATEGORIES } from '../data/content';

export const EcosystemSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">TECHS & TOOLS</div>
          <h2>Technology Ecosystem</h2>
          <p style={{ marginTop: '0.75rem' }}>
            We work across battle-tested open-source frameworks and leading enterprise multi-cloud platforms.
          </p>
        </div>

        {/* Categorized Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {ECOSYSTEM_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="card-glass reveal-on-scroll" style={{ padding: '2rem' }}>
              <h3
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>❖</span> {cat.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      padding: '0.45rem 0.95rem',
                      fontSize: '0.9rem',
                      color: '#0f172a',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
