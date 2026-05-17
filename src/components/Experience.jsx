import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experience = {
  role: 'Software Engineer Intern',
  company: 'Techorin Solutions (Pvt) Ltd',
  period: 'Mar 2025 – Sep 2025',
  type: 'Full-time Internship',
  project: 'GeniusBees — AI-Enhanced Educational Platform',
  highlights: [
    'Designed end-to-end interfaces in Figma for authentication pages, admin panels, and student/parent dashboards',
    'Implemented responsive login and sign-up pages using React and Tailwind CSS from Figma prototypes',
    'Built interactive drag-and-drop, image sorting, and multiple-selection educational templates with audio integration',
    'Participated in daily stand-ups and weekly demo sessions, refining designs based on client feedback',
  ],
  tech: ['React', 'Tailwind CSS', 'Figma', 'Gamification'],
};

/* ── Cycling inspirational words ── */
const cycleWords = [
  'cross-functional teams',
  'meaningful products',
  'creative challenges',
  'real-world impact',
];

function InspirationalBanner({ inView }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setIdx(i => (i + 1) % cycleWords.length), 2800);
    return () => clearInterval(t);
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="text-center mt-14 px-4"
    >
      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.5))' }} />
        <span className="font-mono text-xs text-white/25 tracking-widest">CURRENTLY</span>
        <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(139,92,246,0.5))' }} />
      </div>

      <p
        className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'rgba(255,255,255,0.75)' }}
      >
        I'm currently looking to contribute to{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -18, filter: 'blur(6px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="gradient-text inline-block"
          >
            {cycleWords[idx]}
          </motion.span>
        </AnimatePresence>
        <br />
        <span className="text-white/45 text-lg md:text-xl">
          that value clean code, creative thinking, and building high-impact digital products.
        </span>
      </p>
    </motion.div>
  );
}

/* ── SVG workspace illustration ── */
function WorkspaceIllustration() {
  return (
    <svg viewBox="0 0 320 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="monitorGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#1a0545" />
        </linearGradient>
        <linearGradient id="screenBg" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#0d0720" />
          <stop offset="100%" stopColor="#130930" />
        </linearGradient>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.18} />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
        </radialGradient>
        <filter id="cardGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Desk surface */}
      <rect x={20} y={200} width={280} height={10} rx={4} fill="#1e1040" opacity={0.8} />

      {/* Monitor stand */}
      <rect x={148} y={182} width={24} height={22} rx={3} fill="#2e1065" />
      <rect x={128} y={200} width={64} height={6} rx={3} fill="#3b1f7a" />

      {/* Monitor body */}
      <rect x={36} y={28} width={248} height={158} rx={10} fill="url(#monitorGrad)"
        style={{ filter: 'drop-shadow(0 8px 24px rgba(124,58,237,0.3))' }} />

      {/* Screen */}
      <rect x={44} y={36} width={232} height={142} rx={6} fill="url(#screenBg)" />
      <rect x={44} y={36} width={232} height={142} rx={6} fill="url(#screenGlow)" />

      {/* Code lines */}
      {/* Line 1 */}
      <rect x={56} y={52} width={40} height={7} rx={3} fill="#8b5cf6" opacity={0.9} />
      <rect x={102} y={52} width={28} height={7} rx={3} fill="#c084fc" opacity={0.8} />
      <rect x={136} y={52} width={52} height={7} rx={3} fill="#a78bfa" opacity={0.7} />

      {/* Line 2 */}
      <rect x={68} y={67} width={36} height={7} rx={3} fill="#7dd3fc" opacity={0.75} />
      <rect x={110} y={67} width={22} height={7} rx={3} fill="#c084fc" opacity={0.8} />
      <rect x={138} y={67} width={44} height={7} rx={3} fill="#86efac" opacity={0.7} />

      {/* Line 3 */}
      <rect x={68} y={82} width={50} height={7} rx={3} fill="#fcd34d" opacity={0.65} />
      <rect x={124} y={82} width={30} height={7} rx={3} fill="#c084fc" opacity={0.8} />

      {/* Line 4 */}
      <rect x={68} y={97} width={60} height={7} rx={3} fill="#7dd3fc" opacity={0.7} />
      <rect x={134} y={97} width={40} height={7} rx={3} fill="#86efac" opacity={0.65} />

      {/* Line 5 */}
      <rect x={56} y={112} width={30} height={7} rx={3} fill="#8b5cf6" opacity={0.9} />

      {/* Blinking cursor */}
      <motion.rect
        x={90} y={112} width={7} height={7} rx={2} fill="#c084fc"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity }}
      />

      {/* Mini UI card floats on screen */}
      <rect x={168} y={76} width={96} height={90} rx={8} fill="rgba(109,40,217,0.25)"
        stroke="rgba(192,132,252,0.35)" strokeWidth={1} />
      <rect x={176} y={88} width={54} height={6} rx={3} fill="#c084fc" opacity={0.7} />
      <rect x={176} y={100} width={38} height={5} rx={2} fill="rgba(255,255,255,0.3)" />
      <rect x={176} y={111} width={44} height={5} rx={2} fill="rgba(255,255,255,0.2}" />
      <rect x={176} y={122} width={32} height={5} rx={2} fill="rgba(255,255,255,0.2)" />
      <rect x={176} y={136} width={50} height={14} rx={5} fill="rgba(139,92,246,0.5)"
        stroke="rgba(192,132,252,0.4)" strokeWidth={0.8} />
      <rect x={183} y={141} width={36} height={4} rx={2} fill="white" opacity={0.5} />

      {/* Floating tech badges */}
      {/* React badge */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x={18} y={50} width={52} height={22} rx={8} fill="rgba(20,10,50,0.92)"
          stroke="rgba(139,92,246,0.6)" strokeWidth={1} filter="url(#cardGlow)" />
        <text x={44} y={65} textAnchor="middle" fill="#a78bfa" fontSize={9}
          fontFamily="JetBrains Mono, monospace" fontWeight={700}>React</text>
      </motion.g>

      {/* Figma badge */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.8, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x={250} y={24} width={52} height={22} rx={8} fill="rgba(20,10,50,0.92)"
          stroke="rgba(192,132,252,0.6)" strokeWidth={1} filter="url(#cardGlow)" />
        <text x={276} y={39} textAnchor="middle" fill="#c084fc" fontSize={9}
          fontFamily="JetBrains Mono, monospace" fontWeight={700}>Figma</text>
      </motion.g>

      {/* Tailwind badge */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.6, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x={18} y={150} width={62} height={22} rx={8} fill="rgba(20,10,50,0.92)"
          stroke="rgba(124,58,237,0.6)" strokeWidth={1} filter="url(#cardGlow)" />
        <text x={49} y={165} textAnchor="middle" fill="#8b5cf6" fontSize={9}
          fontFamily="JetBrains Mono, monospace" fontWeight={700}>Tailwind</text>
      </motion.g>

      {/* Glow dots scattered */}
      {[[295,140,4,'#c084fc'],[10,118,3,'#8b5cf6'],[305,55,3,'#a78bfa']].map(([x,y,r,c],i) => (
        <motion.circle key={i} cx={x} cy={y} r={r} fill={c}
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.5, delay: i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}
    </svg>
  );
}

/* ── Main component ── */
export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hovered, setHovered] = useState(false);

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 160, damping: 22 }}
          className="mb-14"
        >
          <div className="section-tag mb-4">Experience</div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        {/* Full-width experience card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ type: 'spring', stiffness: 160, damping: 22 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          /* Gradient border wrapper */
          style={{
            padding: '2px',
            borderRadius: '26px',
            background: hovered
              ? 'linear-gradient(135deg, #8b5cf6 0%, #c084fc 50%, #8b5cf6 100%)'
              : 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(192,132,252,0.1))',
            transition: 'background 0.4s ease',
            boxShadow: hovered
              ? '0 0 60px rgba(139,92,246,0.3), 0 20px 80px rgba(0,0,0,0.5)'
              : '0 8px 40px rgba(0,0,0,0.3)',
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              background: 'rgba(10,6,26,0.98)',
              borderRadius: '24px',
            }}
          >
            {/* Subtle inner glow on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.08) 0%, transparent 60%)',
              }}
            />

            <div className="grid md:grid-cols-[380px_1fr] gap-0 relative z-10">

              {/* ── Left: Illustration ── */}
              <motion.div
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.15 }}
                className="flex items-center justify-center p-8 md:p-10"
                style={{
                  borderRight: '1px solid rgba(139,92,246,0.12)',
                  background: 'rgba(109,40,217,0.05)',
                  minHeight: 320,
                }}
              >
                <WorkspaceIllustration />
              </motion.div>

              {/* ── Right: Details ── */}
              <motion.div
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.25 }}
                className="p-8 md:p-10"
              >

                {/* Badge + Period */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span
                    className="font-mono text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(139,92,246,0.15)',
                      color: '#c084fc',
                      border: '1px solid rgba(139,92,246,0.35)',
                    }}
                  >
                    {experience.type}
                  </span>
                  <span
                    className="font-mono text-xs px-3 py-1.5 rounded-lg"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {experience.period}
                  </span>
                </div>

                {/* Role */}
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {experience.role}
                </h3>
                <p className="font-semibold mb-5" style={{ color: '#a78bfa' }}>
                  {experience.company}
                </p>

                {/* Project */}
                <div
                  className="mb-6 px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(139,92,246,0.08)',
                    borderLeft: '2px solid #8b5cf6',
                  }}
                >
                  <p className="font-mono text-xs text-white/35 mb-1 tracking-widest">PROJECT</p>
                  <p className="text-sm font-medium text-white/85">{experience.project}</p>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-7">
                  {experience.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: i * 0.08, type: 'spring', stiffness: 180, damping: 22 }}
                      className="flex gap-3 text-sm text-white/55 leading-relaxed"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#8b5cf6', boxShadow: '0 0 6px #8b5cf6' }}
                      />
                      {h}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg font-mono text-xs"
                      style={{
                        background: 'rgba(139,92,246,0.1)',
                        color: '#a78bfa',
                        border: '1px solid rgba(139,92,246,0.25)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Inspirational cycling sentence */}
        <InspirationalBanner inView={inView} />
      </div>
    </section>
  );
}
