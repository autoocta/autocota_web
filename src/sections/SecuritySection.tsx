import React from 'react';
import { SECURITY_FEATURES, OPTIMIZATION_FEATURES } from '../data/content';

export const SecuritySection: React.FC = () => {
  return (
    <section className="section bg-grid-pattern" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">GOVERNANCE & FINOPS</div>
          <h2>Secure. Efficient. Ready to scale.</h2>
          <p style={{ marginTop: '0.75rem' }}>
            Protect workloads with automated security guardrails while continuously tuning cloud resources for financial efficiency.
          </p>
        </div>

        {/* Two Visually Distinct Panels Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {/* Panel 1: Security & Compliance */}
          <div
            className="reveal-on-scroll"
            style={{
              background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)',
              border: '1px solid rgba(2, 132, 199, 0.3)',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(2, 132, 199, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(2, 132, 199, 0.12)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem'
                }}
              >
                🛡️
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                  SHIELD & DEFEND
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Security & Compliance</h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {SECURITY_FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '1.15rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.35rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2: Cloud Cost & Performance Optimization */}
          <div
            className="reveal-on-scroll"
            style={{
              background: 'linear-gradient(135deg, rgba(238, 242, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)',
              border: '1px solid rgba(79, 70, 229, 0.35)',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(79, 70, 229, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(79, 70, 229, 0.15)',
                  color: 'var(--accent-indigo)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem'
                }}
              >
                ⚡
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-indigo)', fontWeight: 700 }}>
                  MAXIMIZE EFFICIENCY
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#0f172a' }}>Optimization & FinOps</h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {OPTIMIZATION_FEATURES.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    padding: '1.15rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.35rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
