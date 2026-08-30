import React from 'react';
import { SOLUTION_CARDS } from '../data/content';
import type { SolutionCard } from '../types';

interface CaseStudiesSectionProps {
  onSelectSolution: (solution: SolutionCard) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectSolution }) => {
  return (
    <section className="section bg-grid-pattern" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">ARCHITECTURAL BLUEPRINTS</div>
          <h2>Example Solutions</h2>
          <p style={{ marginTop: '0.75rem' }}>
            Explore canonical architecture patterns engineered by AutoOcta to solve high-impact enterprise technology challenges.
          </p>
        </div>

        {/* 3 Solution Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {SOLUTION_CARDS.map((card) => (
            <div
              key={card.id}
              className="card-glass reveal-on-scroll"
              onClick={() => onSelectSolution(card)}
              style={{
                padding: '2.25rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '340px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      background: 'rgba(2, 132, 199, 0.08)',
                      border: '1px solid rgba(2, 132, 199, 0.2)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px'
                    }}
                  >
                    {card.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-subtle)' }}>
                    {card.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: '#0f172a', lineHeight: '1.3' }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {card.problem}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  View Blueprint & Stack
                </span>
                <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
