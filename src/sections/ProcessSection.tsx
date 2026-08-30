import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">METHODOLOGY</div>
          <h2>How We Work</h2>
          <p style={{ marginTop: '0.75rem' }}>
            A disciplined, 5-phase engineering framework designed for predictable velocity, enterprise security, and long-term maintainability.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="card-glass reveal-on-scroll"
              style={{
                padding: '2rem 2.5rem',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              {/* Step Number */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--accent-cyan)',
                  lineHeight: 1,
                  minWidth: '70px'
                }}
              >
                {step.number}
              </div>

              {/* Title & Description */}
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: '#0f172a' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                  {step.description}
                </p>
              </div>

              {/* Deliverables Pills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', minWidth: '200px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-subtle)',
                    fontWeight: 700
                  }}
                >
                  KEY DELIVERABLES:
                </span>
                {step.deliverables.map((deliv, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.825rem',
                      fontFamily: 'var(--font-mono)',
                      background: '#f8fafc',
                      border: '1px solid var(--border-subtle)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      color: '#0f172a',
                      fontWeight: 600
                    }}
                  >
                    • {deliv}
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
