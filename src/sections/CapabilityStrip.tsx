import React from 'react';
import { CAPABILITY_STRIP } from '../data/content';

export const CapabilityStrip: React.FC = () => {
  return (
    <div
      style={{
        background: '#ffffff',
        borderTop: '1px solid rgba(15, 23, 42, 0.06)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
        padding: '1.25rem 0',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          width: 'max-content',
          animation: 'tickerScroll 30s linear infinite'
        }}
      >
        {/* Repeat list twice for seamless infinite scrolling */}
        {[...CAPABILITY_STRIP, ...CAPABILITY_STRIP, ...CAPABILITY_STRIP, ...CAPABILITY_STRIP].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: '#334155'
            }}
          >
            <span style={{ color: 'var(--accent-cyan)' }}>◆</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
