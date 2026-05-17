import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import TechOrbit from './TechOrbit';

/* ── Socials ── */
const socials = [
  {
    label: 'GitHub', href: 'https://github.com/AdshayaBalarajah', color: '#8b5cf6',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/adshaya-balarajah-531735285', color: '#8b5cf6',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: 'Email', href: 'mailto:bala.adshaya28@gmail.com', color: '#8b5cf6',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

/* ── Hero ── */
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-10 pulse-glow"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full opacity-10 pulse-glow"
          style={{ background: 'radial-gradient(circle, #c084fc, transparent 70%)', filter: 'blur(60px)', animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-10 w-48 h-48 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 grid md:grid-cols-2 gap-16 items-center">

        {/* ── Left — Text ── */}
        <div>
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.3 }}
          >
            <h1 className="font-bold leading-tight mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.05 }}>
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Adshaya
              </span>{' '}
              <span className="text-white">Balarajah</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-violet-400/60 tracking-widest">{'>'}</span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Frontend Developer', 2000,
                'Backend Developer', 2000,
                'Problem Solver', 2000,
                'UI/UX Enthusiast', 2000,
              ]}
              wrapper="span" speed={50} repeat={Infinity}
              className="font-mono text-lg md:text-xl text-violet-400 font-medium"
              style={{ textShadow: '0 0 20px rgba(139,92,246,0.5)' }}
            />
          </motion.div>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-base md:text-lg text-white/45 leading-relaxed mb-10 max-w-lg">
            Passionate full-stack developer who loves crafting seamless digital experiences —
            from pixel-perfect interfaces to robust, scalable backends.
            I turn complex problems into elegant, high-impact solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-4 mb-12">
            <Link to="projects" smooth duration={800} offset={-80}>
              <span className="btn-primary flex items-center gap-2 cursor-pointer">
                <span>View Projects</span>
                <span className="text-lg">↗</span>
              </span>
            </Link>
            <a href="/AdshayaBalarajah_CV.pdf" download className="btn-secondary flex items-center gap-2">
              <span>Download CV</span>
              <span>↓</span>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}>
            <span className="font-mono text-xs text-white/30 tracking-widest mb-3 block">FIND ME ON</span>
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-sm font-semibold transition-all duration-200"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}40`, color: s.color }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${s.color}22`; e.currentTarget.style.borderColor = `${s.color}90`; e.currentTarget.style.boxShadow = `0 0 22px ${s.color}35`; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `${s.color}12`; e.currentTarget.style.borderColor = `${s.color}40`; e.currentTarget.style.boxShadow = 'none'; }}>
                  {s.icon}
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right — Tech Orbit ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.6 }}
          className="hidden md:flex items-center justify-center"
        >
          <TechOrbit />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-white/20 tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(180deg, #8b5cf6, transparent)' }} />
      </motion.div>
    </section>
  );
}
