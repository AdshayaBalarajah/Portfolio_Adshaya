import { motion } from 'framer-motion';

const techStack = [
  { name: 'React.js' },
  { name: 'Python' },
  { name: 'PyTorch' },
  { name: 'PostgreSQL' },
  { name: 'OpenCV' },
  { name: 'FastAPI' },
];

const COLOR = '#8b5cf6';

const modules = [
  {
    icon: '🧠',
    title: 'SHAP Explainability',
    color: COLOR,
    desc: 'Applied Kernel SHAP to the fusion pipeline to compute per-modality feature importance with a quantitative faithfulness metric.',
  },
  {
    icon: '🤖',
    title: 'LLM Chatbot',
    color: COLOR,
    desc: 'Built an Anthropic Claude API-powered chatbot converting SHAP outputs into plain-English clinical explanations with multi-turn Q&A.',
  },
  {
    icon: '⚡',
    title: 'FastAPI Backend',
    color: COLOR,
    desc: 'Implemented 9 REST API endpoints with JWT authentication, bcrypt hashing, and full session management.',
  },
  {
    icon: '🗄️',
    title: 'Database Design',
    color: COLOR,
    desc: 'Architected a PostgreSQL database schema across 4 tables using SQLAlchemy ORM and Alembic migrations.',
  },
  {
    icon: '📊',
    title: 'React Dashboard',
    color: COLOR,
    desc: 'Built an interactive dashboard with emotion trend charts, SHAP bar charts, and integrated chatbot panel using Recharts and Axios.',
  },
];

/* ── MedOracle Dashboard Mockup ── */
function MedOracleMockup() {
  return (
    <svg viewBox="0 0 420 310" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="appBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c0720" />
          <stop offset="100%" stopColor="#080514" />
        </linearGradient>
        <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1a0a3a" />
          <stop offset="100%" stopColor="#0e0620" />
        </linearGradient>
        <linearGradient id="barFill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id="emotionGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e0b40" />
          <stop offset="100%" stopColor="#120730" />
        </linearGradient>
        <filter id="mockGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <clipPath id="windowClip">
          <rect x="0" y="0" width="420" height="310" rx="14" />
        </clipPath>
      </defs>

      {/* Window chrome */}
      <g clipPath="url(#windowClip)">
        {/* App background */}
        <rect width="420" height="310" fill="url(#appBg)" />

        {/* Top bar */}
        <rect width="420" height="38" fill="url(#headerGrad)" />
        {/* Window dots */}
        <circle cx="16" cy="19" r="5" fill="#ff5f57" opacity="0.85" />
        <circle cx="30" cy="19" r="5" fill="#febc2e" opacity="0.85" />
        <circle cx="44" cy="19" r="5" fill="#28c840" opacity="0.85" />
        {/* Logo */}
        <text x="68" y="24" fill="#c084fc" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Med</text>
        <text x="92" y="24" fill="#8b5cf6" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Oracle</text>
        {/* URL bar */}
        <rect x="130" y="11" width="180" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(139,92,246,0.2)" strokeWidth="0.8" />
        <text x="220" y="23" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7.5" fontFamily="JetBrains Mono, monospace">medoracle.app/dashboard</text>
        {/* Nav icons */}
        <rect x="322" y="13" width="24" height="12" rx="3" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.3)" strokeWidth="0.7" />
        <text x="334" y="22" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="JetBrains Mono, monospace">⚙</text>
        <rect x="352" y="13" width="24" height="12" rx="3" fill="rgba(192,132,252,0.15)" stroke="rgba(192,132,252,0.3)" strokeWidth="0.7" />
        <text x="364" y="22" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="JetBrains Mono, monospace">👤</text>
        <rect x="382" y="13" width="28" height="12" rx="3" fill="rgba(139,92,246,0.25)" stroke="rgba(139,92,246,0.5)" strokeWidth="0.7" />
        <text x="396" y="22" textAnchor="middle" fill="white" fontSize="7" fontFamily="JetBrains Mono, monospace">+New</text>

        {/* Sidebar */}
        <rect x="0" y="38" width="70" height="272" fill="rgba(15,8,35,0.9)" />
        <rect x="70" y="38" width="0.5" height="272" fill="rgba(139,92,246,0.12)" />
        {/* Sidebar icons */}
        {[
          { y: 60, icon: '📊', label: 'Dash', active: true },
          { y: 92, icon: '😊', label: 'Emo', active: false },
          { y: 124, icon: '🧠', label: 'SHAP', active: false },
          { y: 156, icon: '💬', label: 'Chat', active: false },
          { y: 188, icon: '📋', label: 'Log', active: false },
        ].map(item => (
          <g key={item.y}>
            {item.active && <rect x="0" y={item.y - 10} width="3" height="28" rx="1.5" fill="#8b5cf6" />}
            <rect x="8" y={item.y - 8} width="54" height="24" rx="7"
              fill={item.active ? 'rgba(139,92,246,0.18)' : 'transparent'} />
            <text x="35" y={item.y + 6} textAnchor="middle" fontSize="11">{item.icon}</text>
            <text x="35" y={item.y + 17} textAnchor="middle" fill={item.active ? '#c084fc' : 'rgba(255,255,255,0.25)'} fontSize="6.5" fontFamily="JetBrains Mono, monospace">{item.label}</text>
          </g>
        ))}

        {/* Main content area */}
        {/* Page title */}
        <text x="82" y="56" fill="rgba(255,255,255,0.85)" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Emotion Analysis Dashboard</text>
        <text x="82" y="67" fill="rgba(255,255,255,0.25)" fontSize="7" fontFamily="JetBrains Mono, monospace">Session #2847 · Patient anonymised · Real-time</text>

        {/* Top stat cards */}
        {[
          { x: 82, label: 'Emotion', value: 'Neutral', color: '#8b5cf6', sub: '72% confidence' },
          { x: 178, label: 'Valence', value: '0.64', color: '#c084fc', sub: 'Positive trend' },
          { x: 274, label: 'Arousal', value: '0.41', color: '#a78bfa', sub: 'Low-moderate' },
        ].map(card => (
          <g key={card.x}>
            <rect x={card.x} y="74" width="90" height="44" rx="8"
              fill="rgba(255,255,255,0.03)" stroke={`${card.color}30`} strokeWidth="0.8" />
            <rect x={card.x} y="74" width="90" height="3" rx="1.5" fill={card.color} opacity="0.6" />
            <text x={card.x + 8} y="88" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="JetBrains Mono, monospace">{card.label}</text>
            <text x={card.x + 8} y="101" fill={card.color} fontSize="12" fontFamily="Space Grotesk, sans-serif" fontWeight="700">{card.value}</text>
            <text x={card.x + 8} y="112" fill="rgba(255,255,255,0.2)" fontSize="6" fontFamily="JetBrains Mono, monospace">{card.sub}</text>
          </g>
        ))}

        {/* SHAP bar chart panel */}
        <rect x="82" y="126" width="172" height="112" rx="9"
          fill="rgba(255,255,255,0.025)" stroke="rgba(139,92,246,0.18)" strokeWidth="0.8" />
        <text x="92" y="139" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="Space Grotesk, sans-serif" fontWeight="600">SHAP Feature Importance</text>

        {/* SHAP bars */}
        {[
          { label: 'Audio', val: 0.78, y: 150 },
          { label: 'Video', val: 0.61, y: 163 },
          { label: 'Text',  val: 0.45, y: 176 },
          { label: 'Fusion', val: 0.92, y: 189 },
          { label: 'Context', val: 0.33, y: 202 },
        ].map(bar => (
          <g key={bar.label}>
            <text x="92" y={bar.y + 8} fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="JetBrains Mono, monospace" textAnchor="start">{bar.label}</text>
            <rect x="124" y={bar.y} width={128 * bar.val} height="9" rx="4.5" fill="url(#barFill)" opacity="0.75" />
            <text x={126 + 128 * bar.val} y={bar.y + 8} fill="rgba(192,132,252,0.7)" fontSize="6.5" fontFamily="JetBrains Mono, monospace">{bar.val.toFixed(2)}</text>
          </g>
        ))}

        {/* Emotion face panel */}
        <rect x="262" y="126" width="148" height="56" rx="9"
          fill="url(#emotionGrad)" stroke="rgba(192,132,252,0.2)" strokeWidth="0.8" />
        <text x="272" y="139" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="Space Grotesk, sans-serif" fontWeight="600">Detected Emotion</text>
        {/* Face circle */}
        <circle cx="296" cy="162" r="18" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
        <circle cx="291" cy="158" r="2" fill="#c084fc" opacity="0.8" />
        <circle cx="301" cy="158" r="2" fill="#c084fc" opacity="0.8" />
        <path d="M291 166 Q296 171 301 166" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />
        {/* Emotion label */}
        <text x="322" y="156" fill="white" fontSize="10" fontFamily="Space Grotesk, sans-serif" fontWeight="700">Neutral</text>
        <rect x="322" y="160" width="50" height="7" rx="3">
          <animate attributeName="width" values="0;50" dur="1.5s" begin="0.5s" fill="freeze" />
        </rect>
        <rect x="322" y="160" width="50" height="7" rx="3" fill="url(#barFill)" opacity="0.6" />
        <text x="322" y="178" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="JetBrains Mono, monospace">Confidence: 72%</text>

        {/* Chatbot panel */}
        <rect x="262" y="190" width="148" height="48" rx="9"
          fill="rgba(255,255,255,0.025)" stroke="rgba(192,132,252,0.18)" strokeWidth="0.8" />
        <text x="272" y="203" fill="rgba(255,255,255,0.5)" fontSize="7.5" fontFamily="Space Grotesk, sans-serif" fontWeight="600">🤖 AI Explanation</text>
        {/* Chat bubble */}
        <rect x="272" y="208" width="128" height="24" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.2)" strokeWidth="0.6" />
        <text x="278" y="217" fill="rgba(255,255,255,0.45)" fontSize="6" fontFamily="JetBrains Mono, monospace">Audio features drove this prediction.</text>
        <text x="278" y="226" fill="rgba(255,255,255,0.35)" fontSize="6" fontFamily="JetBrains Mono, monospace">Fusion score is highest at 0.92.</text>

        {/* Waveform at bottom */}
        <rect x="82" y="246" width="328" height="34" rx="8"
          fill="rgba(255,255,255,0.02)" stroke="rgba(139,92,246,0.12)" strokeWidth="0.7" />
        <text x="92" y="257" fill="rgba(255,255,255,0.3)" fontSize="6.5" fontFamily="JetBrains Mono, monospace">Audio Waveform</text>
        {/* Waveform bars */}
        {Array.from({ length: 48 }).map((_, i) => {
          const h = 4 + Math.abs(Math.sin(i * 0.7 + 1.2) * 10 + Math.cos(i * 0.4) * 5);
          return (
            <rect
              key={i}
              x={92 + i * 6.5}
              y={272 - h / 2}
              width="4"
              height={h}
              rx="2"
              fill={i > 18 && i < 32 ? '#8b5cf6' : 'rgba(139,92,246,0.25)'}
              opacity={i > 18 && i < 32 ? 0.8 : 0.5}
            />
          );
        })}

        {/* Window border */}
        <rect width="420" height="310" rx="14" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
      </g>

      {/* Animated pulse dot */}
      <motion.circle cx="396" cy="60" r="4" fill="#8b5cf6"
        animate={{ opacity: [0.4, 1, 0.4], r: [3, 5, 3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

export default function Research() {
  return (
    <section id="research" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 opacity-5 rounded-full"
          style={{ background: 'radial-gradient(circle, #c084fc, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 opacity-5 rounded-full"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag mb-4">Research</div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Final Year <span className="gradient-text">Research</span>
          </h2>
        </motion.div>

        {/* Main research card — two columns */}
        <div
          className="glass-card animated-border mb-12 relative overflow-hidden"
          style={{ borderRadius: '28px' }}
        >
          {/* Background orb */}
          <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c084fc, transparent 70%)', filter: 'blur(40px)' }} />

          <div className="grid md:grid-cols-2 gap-0 relative z-10">

            {/* ── Left: Text content ── */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.1 }}
              className="p-8 md:p-12"
              style={{ borderRight: '1px solid rgba(139,92,246,0.1)' }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full font-mono text-xs font-medium"
                  style={{ background: 'rgba(99,102,241,0.15)', color: '#c084fc', border: '1px solid rgba(99,102,241,0.3)' }}>
                  🔬 FINAL YEAR PROJECT
                </span>
                <span className="font-mono text-xs text-white/30">2024 – 2025</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Multimodal Emotional Recognition System<br />
                <span className="gradient-text-2">with Explainability</span>
              </h3>
              <p className="font-mono text-sm mb-5" style={{ color: '#c084fc' }}>MedOracle</p>

              <p className="text-white/55 leading-relaxed mb-8 text-sm">
                A clinical AI system that performs multimodal emotion recognition across audio, video, and text
                modalities, then explains predictions using SHAP values — translating complex ML outputs into
                human-readable clinical insights via an LLM-powered chatbot interface.
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {techStack.map(t => (
                  <span key={t.name} className="px-3 py-1.5 rounded-lg font-mono text-xs font-medium"
                    style={{ background: `${COLOR}12`, color: COLOR, border: `1px solid ${COLOR}30` }}>
                    {t.name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── Right: MedOracle mockup ── */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.2 }}
              className="flex items-center justify-center p-6 md:p-8"
              style={{ background: 'rgba(10,4,28,0.4)' }}
            >
              <div className="w-full max-w-md rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 0 60px rgba(139,92,246,0.18), 0 20px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(139,92,246,0.2)' }}>
                <MedOracleMockup />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Module cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22, delay: i * 0.08 }}
              className="glass-card glass-card-hover p-6"
            >
              <div className="text-2xl mb-3">{mod.icon}</div>
              <h4 className="font-bold text-white mb-2 text-sm" style={{ color: mod.color }}>{mod.title}</h4>
              <p className="text-xs text-white/45 leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
