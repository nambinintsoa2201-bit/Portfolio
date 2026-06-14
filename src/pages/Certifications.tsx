import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const certifications = [
  {
    title: 'Introduction to the Threat Landscape 3.0',
    issuer: 'Fortinet',
    color: 'var(--accent-pink)',
    url: 'https://www.credly.com/badges/d9569df2-3679-43c8-b2d5-d638d89e6269/public_url',
  },
  {
    title: 'ISC2 Candidate',
    issuer: 'ISC2',
    color: 'var(--accent-cyan)',
    url: 'https://www.credly.com/badges/9588b5d9-321e-4888-b35e-dfa24be8483e/public_url',
  },
  {
    title: 'Networking Devices and Initial Configuration',
    issuer: 'Cisco',
    color: 'var(--accent-cyan)',
    url: 'https://www.credly.com/badges/fa610d65-f035-4506-8465-2c4c17d94d9a/public_url',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    color: 'var(--accent-cyan)',
    url: 'https://www.credly.com/badges/a75a507b-5e4f-4ed7-abe4-01fcbac863c3/public_url',
  },
  {
    title: 'Linux Unhatched',
    issuer: 'Cisco',
    color: 'var(--accent-green)',
    url: 'https://www.credly.com/badges/94bbd86a-47d3-4675-b4b4-a99334f74808/public_url',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    color: 'var(--accent-green)',
    url: 'https://www.credly.com/badges/2cd71c44-2f15-4ce9-a441-5fd5b694f1be/public_url',
  },
];

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function Certifications() {
  const { t } = useLanguage();
  return (
    <section id="certifications" style={{ padding: '120px 24px', background: 'rgba(255,255,255,0.01)' }}>
      <div className="container-main">
        <Fade>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent-cyan)', letterSpacing: 2, textTransform: 'uppercase' }}>{t('certifications.sectionTitle')}</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, marginTop: 12, color: 'var(--text-primary)' }}>
              {t('certifications.heading1')}<span style={{ color: 'var(--accent-cyan)' }}>{t('certifications.heading2')}</span>
            </h2>
          </div>
        </Fade>

        <Fade delay={0.2}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {certifications.map((cert, i) => (
                <motion.a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{ 
                    padding: 24, 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 16,
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: `${cert.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: cert.color, flexShrink: 0,
                  }}>
                    <Award size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 4px' }}>{cert.title}</h4>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: 0, fontFamily: 'var(--font-mono)' }}>{cert.issuer}</p>
                  </div>
                  <div style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                    <ExternalLink size={20} />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
