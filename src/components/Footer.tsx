import { Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '32px 24px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container-main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 13 }}>
          <Shield size={14} color="var(--accent-cyan)" />
          <span style={{ fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>Nambinintsoa<span style={{ color: 'var(--accent-cyan)' }}> /&gt;</span>
          </span>
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
          © {new Date().getFullYear()} — Fait avec <Heart size={12} color="var(--accent-pink)" fill="var(--accent-pink)" /> et du code
        </p>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Infrastructure & Cybersécurité
        </p>
      </div>
    </footer>
  );
}
