import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { 
  ShieldAlert, Bug, ShieldCheck, Key, ListChecks,
  Terminal, LayoutGrid, Layers, Container, Users,
  Network, Router, Shield, Lock, Globe,
  Code2, TerminalSquare, AppWindow, Database, GitBranch,
  Wrench
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const tools = [
  'Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'Kali Linux',
  'pfSense', 'GNS3', 'VMware', 'Ansible', 'Snort',
];

export default function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const skillCategories = useMemo(() => [
    {
      title: t('skills.cat1'),
      color: 'var(--accent-cyan)',
      skills: [
        { name: 'Pentesting', icon: ShieldAlert },
        { name: t('skills.itemVuln'), icon: Bug },
        { name: t('skills.itemNetSec'), icon: ShieldCheck },
        { name: t('skills.itemCrypto'), icon: Key },
        { name: 'OWASP Top 10', icon: ListChecks },
      ],
    },
    {
      title: t('skills.cat2'),
      color: 'var(--accent-purple)',
      skills: [
        { name: 'Linux Admin', icon: Terminal },
        { name: 'Windows Server', icon: LayoutGrid },
        { name: 'Virtualisation', icon: Layers },
        { name: 'Docker', icon: Container },
        { name: 'Active Directory', icon: Users },
      ],
    },
    {
      title: t('skills.cat3'),
      color: 'var(--accent-green)',
      skills: [
        { name: 'TCP/IP', icon: Network },
        { name: 'Routing / Switching', icon: Router },
        { name: 'Firewall / IDS', icon: Shield },
        { name: 'VPN / Proxy', icon: Lock },
        { name: 'DNS / DHCP', icon: Globe },
      ],
    },
    {
      title: t('skills.cat4'),
      color: 'var(--accent-pink)',
      skills: [
        { name: 'Python', icon: Code2 },
        { name: 'Bash / Shell', icon: TerminalSquare },
        { name: 'React / TS', icon: AppWindow },
        { name: 'SQL', icon: Database },
        { name: 'Git', icon: GitBranch },
      ],
    },
  ], [t]);

  return (
    <section id="skills" style={{ padding: '120px 24px' }}>
      <div className="container-main">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent-cyan)', letterSpacing: 2, textTransform: 'uppercase' }}>{t('skills.sectionTitle')}</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, marginTop: 12, color: 'var(--text-primary)' }}>
            {t('skills.heading1')}<span style={{ color: 'var(--accent-cyan)' }}>{t('skills.heading2')}</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              style={{ padding: 28 }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 600, color: cat.color, marginBottom: 20, fontFamily: 'var(--font-mono)' }}>
                {'// '}{cat.title}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                {cat.skills.map((s, si) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.05, duration: 0.3 }}
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.06)', borderColor: `${cat.color}40`, x: 4 }}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 14, 
                        padding: '10px 14px', 
                        background: 'rgba(255,255,255,0.02)', 
                        borderRadius: 8, 
                        border: '1px solid rgba(255,255,255,0.03)',
                        cursor: 'default'
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: cat.color,
                        background: `${cat.color}15`,
                        padding: 6,
                        borderRadius: 6
                      }}>
                        <Icon size={16} />
                      </div>
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 500 }}>{s.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} style={{ marginTop: 56, textAlign: 'center' }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 20, fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <Wrench size={18} style={{ color: 'var(--accent-cyan)' }} />
            {t('skills.toolsTitle').replace('$ ', '')}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {tools.map((t, i) => (
              <motion.span 
                key={t} 
                className="tech-tag" 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.05, color: 'var(--accent-cyan)', borderColor: 'var(--accent-cyan)' }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
