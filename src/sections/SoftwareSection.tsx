import React, { useState } from 'react';
import { SOFTWARE_CATEGORIES } from '../data/content';

export const SoftwareSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState(SOFTWARE_CATEGORIES[0].id);

  const selectedCat = SOFTWARE_CATEGORIES.find((c) => c.id === selectedId) || SOFTWARE_CATEGORIES[0];

  return (
    <section className="section bg-grid-pattern" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">SOFTWARE ENGINEERING</div>
          <h2>Software built for what's next.</h2>
          <p style={{ marginTop: '0.75rem' }}>
            From architecture to production, we build reliable software designed for modern cloud environments.
          </p>
        </div>

        {/* Tabbed Interactive Explorer */}
        <div className="card-glass reveal-on-scroll" style={{ padding: '2.5rem' }}>
          {/* Category Tabs Header */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              overflowX: 'auto',
              paddingBottom: '1rem',
              marginBottom: '2rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            {SOFTWARE_CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedId(cat.id)}
                  style={{
                    background: isSelected ? 'rgba(2, 132, 199, 0.1)' : 'transparent',
                    border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                    color: isSelected ? '#0f172a' : 'var(--text-muted)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Active Category Display Panel */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.5rem' }}>
                // ARCHITECTURE & PURPOSE
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#0f172a' }}>
                {selectedCat.name}
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
                {selectedCat.description}
              </p>
            </div>

            <div
              style={{
                background: '#f8fafc',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '1.75rem'
              }}
            >
              <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '1rem' }}>
                PREFERRED TECH STACK
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {selectedCat.stack.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: 'rgba(79, 70, 229, 0.08)',
                      border: '1px solid rgba(79, 70, 229, 0.2)',
                      color: 'var(--text-main)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.4rem 0.85rem',
                      borderRadius: '6px'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
