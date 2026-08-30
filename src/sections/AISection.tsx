import React from 'react';
import { AI_STEPS, AI_CAPABILITIES } from '../data/content';
import { AICanvas } from '../components/AICanvas';

interface AISectionProps {
  onOpenContact: () => void;
}

export const AISection: React.FC<AISectionProps> = ({ onOpenContact }) => {
  return (
    <section id="ai-automation" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">AI ENGINEERING & GENAI</div>
          <h2>From AI experiments to <br /><span className="gradient-text">production systems.</span></h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 600 }}>
            We move organizations beyond proof-of-concept demos into robust, enterprise-grade AI production systems.
          </p>
        </div>

        {/* AI Stream Stepper */}
        <div className="card-glass reveal-on-scroll" style={{ padding: '2rem', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '1.25rem' }}>
            // PRODUCTION AI ARCHITECTURE PIPELINE
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            {AI_STEPS.map((step, idx) => (
              <React.Fragment key={step}>
                <div
                  style={{
                    background: idx === AI_STEPS.length - 1 ? 'var(--grad-cyan-blue)' : '#f8fafc',
                    color: idx === AI_STEPS.length - 1 ? '#ffffff' : '#0f172a',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: idx === AI_STEPS.length - 1 ? 'var(--shadow-glow)' : 'none'
                  }}
                >
                  {step}
                </div>
                {idx < AI_STEPS.length - 1 && (
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Two-Column Layout: Visual Canvas + Capabilities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* AICanvas Visualizer */}
          <div className="card-glass reveal-on-scroll" style={{ padding: '1.5rem', background: '#ffffff' }}>
            <AICanvas />
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button onClick={onOpenContact} className="btn btn-primary">
                Build With AI
              </button>
            </div>
          </div>

          {/* AI Capabilities Cards Grid */}
          <div
            className="reveal-on-scroll"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {AI_CAPABILITIES.slice(0, 6).map((cap, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <h4 style={{ fontSize: '1rem', marginBottom: '0.4rem', color: '#0f172a' }}>{cap.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.85rem', lineHeight: '1.5' }}>
                  {cap.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.725rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        background: 'rgba(2, 132, 199, 0.08)',
                        color: 'var(--accent-cyan)',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
