import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms Access Key
    formData.append("access_key", "36460a2f-a2a7-4501-8785-b299c655d514");
    formData.append("from_name", "Portfolio Visitor");
    formData.append("subject", "New Message from Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 5000);
      } else {
        console.error("Web3Forms Error:", data);
        setError(data.message || t('contact.errSend'));
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError(t('contact.errNetwork'));
    }
    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '1px solid var(--border-subtle)',
    background: 'rgba(255,255,255,0.03)',
    color: 'var(--text-primary)',
    fontSize: 14,
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  const socials = [
    { icon: <GithubIcon size={20} />, label: 'GitHub', href: 'https://github.com/nambinintsoa2201-bit', value: 'nambinintsoa2201-bit' },
    { icon: <Mail size={20} />, label: 'Email', href: 'mailto:nambinintsoa2201@gmail.com', value: 'nambinintsoa2201@gmail.com' },
    { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nomenjanahary-nambinintsoa', value: 'Nomenjanahary Nambinintsoa' },
    { icon: <MapPin size={20} />, label: 'Localisation', href: '#', value: 'Madagascar' },
  ];

  return (
    <section id="contact" style={{ padding: '120px 24px' }}>
      <div className="container-main">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent-cyan)', letterSpacing: 2, textTransform: 'uppercase' }}>{t('contact.sectionTitle')}</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, marginTop: 12, color: 'var(--text-primary)' }}>
            {t('contact.heading1')}<span style={{ color: 'var(--accent-cyan)' }}>{t('contact.heading2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginTop: 12, maxWidth: 500, margin: '12px auto 0' }}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, maxWidth: 900, margin: '0 auto' }}>
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 24, fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>$</span> {t('contact.infoTitle').replace('$ ', '')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  whileHover={{ x: 6, borderColor: 'var(--accent-cyan)' }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 12,
                    border: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.02)',
                    textDecoration: 'none', transition: 'all 0.3s',
                  }}
                >
                  <div style={{ color: 'var(--accent-cyan)' }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>{s.label}</div>
                    <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{s.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 24, fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>$</span> {t('contact.formTitle').replace('$ ', '')}
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input type="text" name="name" placeholder={t('contact.namePlaceholder')} required style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,240,255,0.1)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; }}
              />
              <input type="email" name="email" placeholder="Email" required style={inputStyle}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,240,255,0.1)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; }}
              />
              <textarea name="message" placeholder={t('contact.msgPlaceholder')} required rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,240,255,0.1)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'none'; }}
              />
              
              {error && (
                <div style={{ color: 'var(--accent-pink)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <AlertCircle size={16} /> {error}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.03, boxShadow: '0 0 25px rgba(0,240,255,0.3)' } : {}}
                whileTap={!loading ? { scale: 0.97 } : {}}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  padding: '14px 28px', borderRadius: 12,
                  background: sent ? 'var(--accent-green)' : 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
                  color: '#0a0a0f', fontWeight: 600, fontSize: 15, border: 'none', 
                  cursor: loading ? 'wait' : 'pointer',
                  transition: 'background 0.3s',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? t('contact.btnSending') : sent ? <><CheckCircle size={18} /> {t('contact.btnSent')}</> : <><Send size={16} /> {t('contact.btnSend')}</>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
