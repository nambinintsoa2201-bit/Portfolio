import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { Terminal, ChevronDown, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import profileImg from '../components/images/Gemini_Generated_Image_qxhncoqxhncoqxhn.png';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => [
    t('home.role1'),
    t('home.role2'),
    t('home.role3'),
    t('home.role4'),
  ], [t]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, roles]);

  return (
    <section
      id="accueil"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Floating orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,240,255,0.08), transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.05), transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 800 }}>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: 32 }}
        >
          <img 
            src={profileImg} 
            alt="Nomenjanahary Nambinintsoa Gilbert"
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid var(--accent-cyan)',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
              margin: '0 auto',
              display: 'block'
            }}
          />
        </motion.div>

        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 20px',
            borderRadius: 999,
            border: '1px solid rgba(0,240,255,0.2)',
            background: 'rgba(0,240,255,0.05)',
            marginBottom: 32,
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            color: 'var(--accent-cyan)',
          }}
        >
          <Terminal size={14} />
          {t('home.badge')}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(28px, 5vw, 64px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
            marginBottom: 16,
            color: 'var(--text-primary)',
          }}
        >
          {t('home.greeting')}{' '}
          <span className="gradient-text">Nomenjanahary Nambinintsoa Gilbert</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            marginBottom: 40,
            minHeight: 40,
          }}
        >
          <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
            &gt;{' '}
          </span>
          <span>{displayed}</span>
          <span className="typing-cursor" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,240,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: 12,
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
              color: '#0a0a0f',
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.3px',
            }}
          >
            {t('home.btnProjects')}
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: 'var(--accent-cyan)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: 12,
              background: 'transparent',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            {t('home.btnContact')}
          </motion.a>

          <motion.a
            href="/CV_Nomenjanahary_Nambinintsoa_Gilbert.pdf"
            download
            whileHover={{ scale: 1.05, borderColor: 'var(--accent-green)', color: 'var(--accent-green)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: 12,
              background: 'rgba(0,255,136,0.05)',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              border: '1px solid rgba(0,255,136,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            <Download size={18} />
            {t('home.btnCV')}
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            display: 'flex',
            gap: 20,
            justifyContent: 'center',
            marginTop: 48,
          }}
        >
          {[
            { icon: <GithubIcon size={20} />, href: 'https://github.com/nambinintsoa2201-bit', label: 'GitHub' },
            { icon: <LinkedinIcon size={20} />, href: '#contact', label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: '#contact', label: 'Email' },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -4, color: 'var(--accent-cyan)' }}
              aria-label={s.label}
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: 12,
                border: '1px solid var(--border-subtle)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)',
          textDecoration: 'none',
        }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
