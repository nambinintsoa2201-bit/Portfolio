import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { GraduationCap, Shield, Server, Code2, Cpu, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export default function About() {
  const { t } = useLanguage();

  const timeline = useMemo(() => [
    { year: '2025 — 2026', title: t('about.y4'), desc: t('about.y4desc') },
    { year: '2023 — 2024', title: t('about.y3'), desc: t('about.y3desc') },
    { year: '2022 — 2023', title: t('about.y2'), desc: t('about.y2desc') },
    { year: '2021 — 2022', title: t('about.y1'), desc: t('about.y1desc') },
  ], [t]);

  const highlights = useMemo(() => [
    { icon: <Shield size={22} />, label: t('about.highlight1'), color: 'var(--accent-cyan)' },
    { icon: <Server size={22} />, label: t('about.highlight2'), color: 'var(--accent-purple)' },
    { icon: <Code2 size={22} />, label: t('about.highlight3'), color: 'var(--accent-green)' },
    { icon: <Cpu size={22} />, label: t('about.highlight4'), color: 'var(--accent-pink)' },
  ], [t]);

  return (
    <section id="about" style={{ padding: '120px 24px' }}>
      <div className="container-main">
        <Fade>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent-cyan)', letterSpacing: 2, textTransform: 'uppercase' }}>{t('about.sectionTitle')}</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, marginTop: 12, color: 'var(--text-primary)' }}>
              {t('about.heading1')}<span style={{ color: 'var(--accent-cyan)' }}>{t('about.heading2')}</span>
            </h2>
          </div>
        </Fade>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>
          <Fade delay={0.1}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(0,240,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{t('about.studentTitle')}</h3>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>{t('about.studentSubtitle')}</p>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 16 }}>
                {t('about.desc1')}
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 28 }}>
                {t('about.desc2')}
              </p>

              <motion.a
                href="/CV.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,240,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 24px',
                  borderRadius: 12,
                  background: 'rgba(0,240,255,0.05)',
                  border: '1px solid rgba(0,240,255,0.2)',
                  color: 'var(--accent-cyan)',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginBottom: 32,
                  transition: 'all 0.3s'
                }}
              >
                <Download size={18} />
                {t('home.btnCV')}
              </motion.a>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {highlights.map((h) => (
                  <motion.div key={h.label} whileHover={{ scale: 1.05, borderColor: h.color }} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 16px', borderRadius: 12, border: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)', color: h.color, fontSize: 13, fontWeight: 500, cursor: 'default', transition: 'all 0.3s' }}>
                    {h.icon} {h.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </Fade>

          <Fade delay={0.2}>
            <div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 24, fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>$</span> {t('about.academicPath').replace('$ ', '')}
              </h3>
              <div style={{ position: 'relative', paddingLeft: 24 }}>
                <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 2, background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), transparent)', borderRadius: 999 }} />
                {timeline.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} style={{ position: 'relative', marginBottom: i < timeline.length - 1 ? 28 : 0, paddingLeft: 24 }}>
                    <div style={{ position: 'absolute', left: -5, top: 8, width: 12, height: 12, borderRadius: '50%', border: '2px solid var(--accent-cyan)', background: 'var(--bg-primary)' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--accent-cyan)' }}>{item.year}</span>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', margin: '4px 0' }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
