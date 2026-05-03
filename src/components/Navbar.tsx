import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#accueil', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#certifications', label: t('nav.certifications') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 24px',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,240,255,0.1)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        {/* Logo */}
        <motion.a
          href="#accueil"
          whileHover={{ scale: 1.05 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            color: 'var(--text-primary)',
          }}
        >
          <Shield size={28} color="var(--accent-cyan)" strokeWidth={1.5} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: '1px',
            }}
          >
            <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
            Nambinintsoa
            <span style={{ color: 'var(--accent-cyan)' }}> /&gt;</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -2 }}
              className="animated-underline"
              style={{
                textDecoration: 'none',
                color: 'var(--text-secondary)',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.5px',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </motion.a>
          ))}

          <button
            onClick={toggleLanguage}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(0,240,255,0.1)',
              border: '1px solid rgba(0,240,255,0.2)',
              color: 'var(--accent-cyan)',
              padding: '6px 12px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
            }}
          >
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="mobile-actions" style={{ display: 'none', alignItems: 'center', gap: 12 }}>
          <button
            onClick={toggleLanguage}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              background: 'rgba(0,240,255,0.1)',
              border: '1px solid rgba(0,240,255,0.2)',
              color: 'var(--accent-cyan)',
              padding: '4px 8px',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
            }}
          >
            <Globe size={14} />
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-cyan)',
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{
              overflow: 'hidden',
              background: 'rgba(10,10,15,0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(0,240,255,0.1)',
              paddingBottom: 24,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 24px',
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: 15,
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
