import React from 'react';
import type { SolutionCard } from '../types';

interface SolutionModalProps {
  solution: SolutionCard | null;
  onClose: () => void;
  onContact: () => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({ solution, onClose, onContact }) => {
  if (!solution) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#ffffff',
          border: '1px solid rgba(2, 132, 199, 0.3)',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-subtle)',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div style={{ marginBottom: '1.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--accent-cyan)',
              background: 'rgba(2, 132, 199, 0.08)',
              padding: '0.25rem 0.6rem',
              borderRadius: '4px',
              marginBottom: '0.75rem'
            }}
          >
            {solution.category} // {solution.tag}
          </span>
          <h2 style={{ fontSize: '1.8rem', lineHeight: '1.25', color: '#0f172a' }}>{solution.title}</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          <div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
              CHALLENGE / PROBLEM
            </h4>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{solution.problem}</p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
              ENGINEERED SOLUTION
            </h4>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{solution.solution}</p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
              ARCHITECTURE STACK & COMPONENTS
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {solution.architecture.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(79, 70, 229, 0.08)',
                    border: '1px solid rgba(79, 70, 229, 0.2)',
                    color: 'var(--text-main)',
                    fontSize: '0.85rem',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: '1.25rem',
              background: 'rgba(2, 132, 199, 0.06)',
              border: '1px dashed rgba(2, 132, 199, 0.3)',
              borderRadius: '8px'
            }}
          >
            <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>
              MEASURED IMPACT & OUTCOME
            </h4>
            <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a' }}>{solution.impact}</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              onClose();
              onContact();
            }}
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            Discuss a Similar Solution
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
