import React from 'react';
import { MULTI_CLOUD_FEATURES } from '../data/content';
import { MultiCloudCanvas } from '../components/MultiCloudCanvas';

export const MultiCloudSection: React.FC = () => {
  return (
    <section id="multicloud" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">MULTI-CLOUD ARCHITECTURE</div>
          <h2>One strategy. Multiple clouds.</h2>
          <p style={{ marginTop: '0.75rem', fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: 600 }}>
            Design cloud architectures without being locked into a single environment.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            AutoOcta engineers resilient topologies across AWS, Microsoft Azure, Google Cloud, Private Cloud, and Hybrid environments.
          </p>
        </div>

        {/* Grid Layout: Visual Canvas + Features list */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Canvas Interactive Architecture */}
          <div className="card-glass reveal-on-scroll" style={{ padding: '1.5rem', background: '#ffffff' }}>
            <MultiCloudCanvas />
          </div>

          {/* Feature List */}
          <div className="reveal-on-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {MULTI_CLOUD_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '1.15rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>⚡</span>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>{feature.title}</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
