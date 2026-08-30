import React from 'react';
import { DIFFERENTIATORS } from '../data/content';

export const WhyUsSection: React.FC = () => {
  return (
    <section className="section bg-grid-pattern" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">WHY AUTO OCTA</div>
          <h2>Engineering, not just consulting.</h2>
          <p style={{ marginTop: '0.75rem' }}>
            We are practitioners who write code, construct automated pipelines, and deploy resilient production architectures.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem'
          }}
        >
          {DIFFERENTIATORS.map((item) => (
            <div key={item.number} className="card-glass reveal-on-scroll" style={{ padding: '2.25rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--accent-cyan)',
                  marginBottom: '1.25rem'
                }}
              >
                {item.number}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.35rem', color: '#0f172a' }}>{item.title}</h3>
              <div
                style={{
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}
              >
                // {item.subtitle}
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
