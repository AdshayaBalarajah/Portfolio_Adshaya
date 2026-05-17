import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const COLOR = '#8b5cf6';

const contactItems = [
  { icon: '✉️', label: 'Email',    value: 'bala.adshaya28@gmail.com',          href: null,                                                         external: false },
  { icon: '📞', label: 'Phone',    value: '+94 77 4589968',                     href: null,                                                         external: false },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/adshaya-balarajah', href: 'https://www.linkedin.com/in/adshaya-balarajah-531735285',   external: true  },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/AdshayaBalarajah',       href: 'https://github.com/AdshayaBalarajah',                       external: true  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9125237a-3b37-4c69-a12c-41730e5766be", // → replace with key from web3forms.com
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio contact from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please email me directly at bala.adshaya28@gmail.com');
      }
    } catch {
      alert('Failed to send. Please email me directly at bala.adshaya28@gmail.com');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.25), transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5 rounded-full"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Contact</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            Open to frontend, backend, full stack, and software engineer positions — freelance work and exciting collaborations welcome too.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
              className="glass-card p-8 mb-6 animated-border" style={{ borderRadius: '24px' }}>
              <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Get in touch
              </h3>
              <div className="space-y-3" style={{ position: 'relative', zIndex: 20 }}>
                {contactItems.map((item) => {
                  const isLink = Boolean(item.href);

                  const baseStyle = {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 16px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(139,92,246,0.15)',
                    transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease',
                    cursor: isLink ? 'pointer' : 'default',
                    textDecoration: 'none',
                    pointerEvents: 'auto',
                    position: 'relative',
                    zIndex: 20,
                    userSelect: 'none',
                  };

                  const hoverOn = e => {
                    const el = e.currentTarget;
                    el.style.transform = 'scale(1.045) translateY(-3px)';
                    el.style.background = `${COLOR}12`;
                    el.style.borderColor = `${COLOR}55`;
                    el.style.boxShadow = `0 0 22px ${COLOR}22, 0 8px 24px rgba(0,0,0,0.3)`;
                  };
                  const hoverOff = e => {
                    const el = e.currentTarget;
                    el.style.transform = 'scale(1) translateY(0)';
                    el.style.background = 'rgba(255,255,255,0.03)';
                    el.style.borderColor = 'rgba(139,92,246,0.15)';
                    el.style.boxShadow = 'none';
                  };

                  const content = (
                    <>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: `${COLOR}18`, border: `1px solid ${COLOR}35` }}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>{item.label}</p>
                        <p className="text-sm font-semibold" style={{ color: COLOR, userSelect: 'text' }}>{item.value}</p>
                      </div>
                      {isLink && (
                        <span className="text-sm flex-shrink-0" style={{ color: `${COLOR}80` }}>↗</span>
                      )}
                    </>
                  );

                  /* LinkedIn & GitHub — onClick drives navigation, href is backup */
                  if (isLink) {
                    return (
                      <div
                        key={item.label}
                        role="link"
                        tabIndex={0}
                        style={baseStyle}
                        onClick={() => window.open(item.href, '_blank', 'noopener,noreferrer')}
                        onKeyDown={e => e.key === 'Enter' && window.open(item.href, '_blank', 'noopener,noreferrer')}
                        onMouseEnter={hoverOn}
                        onMouseLeave={hoverOff}
                        onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)'; }}
                        onMouseUp={hoverOn}
                      >
                        {content}
                      </div>
                    );
                  }

                  /* Email & Phone — plain info card, value text is selectable */
                  return (
                    <div key={item.label} style={baseStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.15 }}
              className="glass-card p-5 flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 rounded-full"
                  style={{ background: '#8b5cf6', boxShadow: '0 0 10px #8b5cf6' }} />
                <div className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-40"
                  style={{ background: '#8b5cf6' }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Currently Available</p>
                <p className="font-mono text-xs text-white/30">Open to new opportunities — Sri Lanka & Remote</p>
              </div>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.2 }}
          >
            <div className="glass-card p-8" style={{ borderRadius: '24px' }}>
              <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Send a message
              </h3>

              {sent ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-48 text-center gap-4">
                  <div className="text-4xl">🚀</div>
                  <p className="font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Message sent!</p>
                  <p className="text-sm text-white/40">I'll get back to you soon.</p>
                  <button onClick={() => setSent(false)} className="font-mono text-xs hover:underline" style={{ color: '#c084fc' }}>Send another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {['name', 'email'].map(field => (
                    <div key={field}>
                      <label className="font-mono text-xs text-white/30 tracking-widest block mb-2">
                        {field.toUpperCase()}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        required
                        placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                        onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(139,92,246,0.1)'; }}
                        onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-mono text-xs text-white/30 tracking-widest block mb-2">MESSAGE</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none resize-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.4)'; e.target.style.boxShadow = '0 0 20px rgba(139,92,246,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.045, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(192,132,252,0.15))',
                      border: '1px solid rgba(139,92,246,0.45)',
                      color: '#c084fc',
                    }}
                  >
                    {sending ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="block w-4 h-4 rounded-full" style={{ border: '2px solid rgba(129,140,248,0.3)', borderTopColor: '#c084fc' }} />
                        Sending...
                      </span>
                    ) : 'Send Message ↗'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
