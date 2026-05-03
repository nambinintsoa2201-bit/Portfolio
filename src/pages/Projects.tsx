import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { ExternalLink, Shield, Server, Bug } from 'lucide-react';
import { GithubIcon } from '../components/BrandIcons';
import { useLanguage } from '../contexts/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const projects = useMemo(() => [
    {
      title: 'Web Vulnerability Scanner',
      description: t('projects.p1desc'),
      tags: ['Python', 'Cybersécurité', 'OWASP', 'Scanner'],
      github: 'https://github.com/nambinintsoa2201-bit/Web-Vulnerability-Scanner',
      icon: <Bug size={24} />,
      color: 'var(--accent-cyan)',
      gradient: 'linear-gradient(135deg, rgba(0,240,255,0.12), rgba(0,240,255,0.02))',
    },
    {
      title: 'Secure Web Server',
      description: t('projects.p2desc'),
      tags: ['Shell', 'Linux', 'Apache/Nginx', 'SSL/TLS'],
      github: 'https://github.com/nambinintsoa2201-bit/Secure-Web-server',
      icon: <Server size={24} />,
      color: 'var(--accent-purple)',
      gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(168,85,247,0.02))',
    },
    {
      title: 'SOHO Network',
      description: t('projects.p3desc'),
      tags: ['Réseau', 'Cisco', 'VLAN', 'Firewall'],
      github: 'https://github.com/nambinintsoa2201-bit/SOHO',
      icon: <Shield size={24} />,
      color: 'var(--accent-green)',
      gradient: 'linear-gradient(135deg, rgba(0,255,136,0.12), rgba(0,255,136,0.02))',
    },
  ], [t]);

  return (
    <section id="projects" style={{ padding: '120px 24px' }}>
      <div className="container-main">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent-cyan)', letterSpacing: 2, textTransform: 'uppercase' }}>{t('projects.sectionTitle')}</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, marginTop: 12, color: 'var(--text-primary)' }}>
            {t('projects.heading1')}<span style={{ color: 'var(--accent-cyan)' }}>{t('projects.heading2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginTop: 12, maxWidth: 560, margin: '12px auto 0' }}>
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              {/* Top accent bar */}
              <div style={{ height: 3, background: p.color, borderRadius: '16px 16px 0 0' }} />

              <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: p.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color }}>
                    {p.icon}
                  </div>
                  <div style={{ color: 'var(--text-muted)' }}>
                    <GithubIcon size={20} />
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10 }}>
                  {p.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)', flex: 1, marginBottom: 20 }}>
                  {p.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
                  {p.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                {/* Link hint */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: p.color,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {t('projects.githubLink')} <ExternalLink size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
