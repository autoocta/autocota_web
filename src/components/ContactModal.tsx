import React, { useState } from 'react';
import { COMPANY_ADDRESS } from '../data/content';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Cloud Engineering',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

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
          maxWidth: '560px',
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
            cursor: 'pointer',
            lineHeight: 1
          }}
          aria-label="Close modal"
        >
          &times;
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(2, 132, 199, 0.12)',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 1.5rem auto'
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#0f172a' }}>Message Received</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Thank you for reaching out to AutoOcta. Our lead engineering team will review your inquiry and respond within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 700,
                  marginBottom: '0.5rem'
                }}
              >
                AUTO OCTA // INQUIRY
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#0f172a' }}>Start a Conversation</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Discuss your cloud, software, or AI engineering challenge directly with our principal architects.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#0f172a',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.4rem' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: '#f8fafc',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#0f172a',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.4rem' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: '#f8fafc',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '8px',
                      color: '#0f172a',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Primary Engineering Focus
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#0f172a',
                    outline: 'none'
                  }}
                >
                  <option value="Cloud Engineering">Cloud Engineering & Architecture</option>
                  <option value="Migration & Modernization">Database / Workload Migration</option>
                  <option value="AI Engineering">AI Engineering & RAG Systems</option>
                  <option value="Automation & DevOps">DevOps & Infrastructure Automation</option>
                  <option value="Software Engineering">Custom Software Development</option>
                  <option value="Data Engineering">Data Platforms & Pipelines</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.4rem' }}>
                  Project Overview
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your architecture goals, current tech stack, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#0f172a',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
                Submit Engineering Request
              </button>
            </form>

            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                background: '#f8fafc',
                borderRadius: '8px',
                padding: '1rem',
                fontSize: '0.825rem'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.35rem' }}>
                OFFICE LOCATION
              </div>
              <div style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>
                <strong>{COMPANY_ADDRESS.name}</strong>: {COMPANY_ADDRESS.full.replace('AUTOOCTA, ', '')}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
