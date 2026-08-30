import React from 'react';
import { DATA_PIPELINE_FLOW, DATA_CAPABILITIES } from '../data/content';

export const DataSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">DATA ENGINEERING</div>
          <h2>Turn data into an <br /><span className="gradient-text">engineering advantage.</span></h2>
          <p style={{ marginTop: '0.75rem' }}>
            Build high-throughput streaming and batch data architectures to feed business analytics and AI models.
          </p>
        </div>

        {/* Data Pipeline Visualization Banner */}
        <div className="card-glass reveal-on-scroll" style={{ padding: '2rem 1.5rem', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '1.5rem' }}>
            // REAL-TIME DATA FLOW TOPOLOGY
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
            {DATA_PIPELINE_FLOW.map((node, idx) => (
              <React.Fragment key={node}>
                <div
                  style={{
                    flex: '1 1 140px',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '1.15rem 0.85rem',
                    textAlign: 'center'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-subtle)',
                      marginBottom: '0.35rem'
                    }}
                  >
                    STAGE 0{idx + 1}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{node}</div>
                </div>
                {idx < DATA_PIPELINE_FLOW.length - 1 && (
                  <div
                    style={{
                      color: 'var(--accent-cyan)',
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      padding: '0 0.25rem'
                    }}
                  >
                    ➔
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Capabilities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {DATA_CAPABILITIES.map((cap, idx) => (
            <div key={idx} className="card-glass reveal-on-scroll" style={{ padding: '1.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'rgba(2, 132, 199, 0.1)',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                0{idx + 1}
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: '#0f172a' }}>{cap.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
