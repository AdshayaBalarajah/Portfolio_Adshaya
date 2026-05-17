import { motion } from 'framer-motion';

/* ── Floating sparkle dots ── */
function Spark({ cx, cy, r = 4, delay = 0, color = '#c084fc' }) {
  return (
    <motion.circle cx={cx} cy={cy} r={r} fill={color}
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5], cy: [cy, cy - 14, cy] }}
      transition={{ duration: 2.8, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

/* ── Blinking eye (left or right) ── */
function Eye({ cx, cy }) {
  return (
    <g>
      {/* White */}
      <ellipse cx={cx} cy={cy} rx={11} ry={12} fill="white" />
      {/* Iris */}
      <ellipse cx={cx} cy={cy + 1} rx={7.5} ry={7.5} fill="#4c1d95" />
      {/* Pupil */}
      <ellipse cx={cx} cy={cy + 1} rx={4} ry={4} fill="#0f0720" />
      {/* Highlight */}
      <circle cx={cx + 3} cy={cy - 3} r={2.5} fill="white" opacity={0.85} />
      {/* Blink eyelid */}
      <motion.ellipse
        cx={cx} cy={cy} rx={11} ry={0}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
        animate={{ ry: [0, 13, 0] }}
        transition={{ duration: 0.18, delay: 3.5, repeatDelay: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        fill="#fcd5b0"
      />
    </g>
  );
}

export default function DevGirl() {
  return (
    <div className="relative flex items-center justify-center w-full select-none" style={{ minHeight: 460 }}>

      {/* Background glow rings */}
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{ width: 380, height: 380, background: 'radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 68%)', border: '1px solid rgba(139,92,246,0.1)' }}
        animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute rounded-full pointer-events-none"
        style={{ width: 500, height: 500, border: '1px dashed rgba(192,132,252,0.1)' }}
        animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />

      {/* Main floating container */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'relative', zIndex: 10 }}
      >
        <svg viewBox="0 0 400 480" width="400" height="480" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
          <defs>
            {/* Skin */}
            <linearGradient id="skin" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#ffe0bb" />
              <stop offset="100%" stopColor="#f4b48a" />
            </linearGradient>
            <linearGradient id="skinDark" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#f4b48a" />
              <stop offset="100%" stopColor="#e09060" />
            </linearGradient>
            {/* Hair */}
            <linearGradient id="hair" x1="0" y1="0" x2="0.2" y2="1">
              <stop offset="0%" stopColor="#2c1503" />
              <stop offset="60%" stopColor="#1a0a02" />
              <stop offset="100%" stopColor="#0a0501" />
            </linearGradient>
            <linearGradient id="hairShine" x1="0" y1="0" x2="1" y2="0.3">
              <stop offset="0%" stopColor="#6b3a1f" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#2c1503" stopOpacity="0" />
            </linearGradient>
            {/* Outfit */}
            <linearGradient id="jacket" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#6d28d9" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
            <linearGradient id="jacketLight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ede9fe" />
              <stop offset="100%" stopColor="#ddd6fe" />
            </linearGradient>
            {/* Laptop */}
            <linearGradient id="laptopBody" x1="0" y1="0" x2="0.2" y2="1">
              <stop offset="0%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="laptopLid" x1="0" y1="0" x2="0.2" y2="1">
              <stop offset="0%" stopColor="#3730a3" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
            <linearGradient id="screen" x1="0" y1="0" x2="0.1" y2="1">
              <stop offset="0%" stopColor="#0d0b1e" />
              <stop offset="100%" stopColor="#12103a" />
            </linearGradient>
            {/* Desk */}
            <linearGradient id="desk" x1="0" y1="0" x2="0.1" y2="1">
              <stop offset="0%" stopColor="#3b2f6e" />
              <stop offset="100%" stopColor="#251d4e" />
            </linearGradient>
            {/* Chair */}
            <linearGradient id="chair" x1="0" y1="0" x2="0.2" y2="1">
              <stop offset="0%" stopColor="#5b21b6" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
            {/* Shadow */}
            <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ── Floor shadow ── */}
          <ellipse cx="200" cy="468" rx="130" ry="12" fill="url(#floorShadow)" />

          {/* ── DESK ── */}
          {/* Desk top surface (3D perspective) */}
          <path d="M60 330 L340 330 L360 345 L40 345 Z" fill="url(#desk)" />
          <rect x="40" y="344" width="320" height="10" rx="4" fill="#1e1b4b" />
          {/* Desk legs */}
          <rect x="55" y="354" width="16" height="100" rx="6" fill="#1e1b4b" />
          <rect x="329" y="354" width="16" height="100" rx="6" fill="#1e1b4b" />

          {/* ── CHAIR ── */}
          {/* Chair seat */}
          <ellipse cx="200" cy="395" rx="65" ry="18" fill="url(#chair)" />
          <rect x="140" y="385" width="120" height="24" rx="10" fill="#5b21b6" />
          {/* Chair back */}
          <rect x="158" y="315" width="84" height="80" rx="14" fill="#4c1d95"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))' }} />
          <rect x="166" y="322" width="68" height="65" rx="10" fill="#5b21b6" opacity="0.5" />
          {/* Chair pole */}
          <rect x="193" y="408" width="14" height="40" rx="5" fill="#2d1b69" />
          {/* Chair base */}
          <ellipse cx="200" cy="452" rx="50" ry="8" fill="#1e1b4b" />

          {/* ── LAPTOP ── */}
          {/* Laptop base */}
          <path d="M108 310 L292 310 L300 330 L100 330 Z" fill="url(#laptopBody)"
            style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.6))' }} />
          {/* Keyboard keys hint */}
          {[130,150,170,190,210,230,250,270].map((x,i) => (
            <rect key={i} x={x} y={315} width={12} height={8} rx="2" fill="#312e81" opacity="0.8" />
          ))}
          {/* Laptop screen (slightly angled open) */}
          <path d="M115 195 L285 195 L292 310 L108 310 Z" fill="url(#laptopLid)"
            style={{ filter: 'drop-shadow(-4px 0 12px rgba(0,0,0,0.5))' }} />
          {/* Screen bezel inner */}
          <path d="M122 202 L278 202 L285 305 L115 305 Z" fill="url(#screen)" />

          {/* Code lines on screen */}
          <text x="130" y="220" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#a78bfa" opacity="0.9">
            const dev = &#123;
          </text>
          <text x="138" y="234" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#c084fc" opacity="0.9">
            name: 'Adshaya',
          </text>
          <text x="138" y="248" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#7dd3fc" opacity="0.9">
            role: 'Full Stack',
          </text>
          <text x="138" y="262" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#86efac" opacity="0.85">
            passion: true,
          </text>
          <text x="130" y="276" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#a78bfa" opacity="0.9">
            &#125;;
          </text>

          {/* Blinking cursor */}
          <motion.rect x="130" y="283" width="6" height="10" rx="1" fill="#c084fc" filter="url(#glow)"
            animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />

          {/* Screen glow onto desk */}
          <ellipse cx="200" cy="330" rx="85" ry="8" fill="#8b5cf6" opacity="0.12" />

          {/* ── BODY ── */}
          {/* Jacket/blazer */}
          <path d="M118 248 Q112 285 108 318 L292 318 Q288 285 282 248 Q250 232 200 230 Q150 232 118 248Z"
            fill="url(#jacket)" style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))' }} />
          {/* Jacket light sheen */}
          <path d="M118 248 Q130 260 145 268 Q150 248 200 240 Q150 232 118 248Z"
            fill="url(#jacketLight)" />
          {/* Lapels */}
          <path d="M200 235 L188 255 L178 245 L200 235Z" fill="#ddd6fe" opacity="0.9" />
          <path d="M200 235 L212 255 L222 245 L200 235Z" fill="#ddd6fe" opacity="0.9" />
          {/* Inner shirt */}
          <rect x="185" y="235" width="30" height="25" rx="4" fill="url(#shirt)" />

          {/* ── LEFT ARM (resting on desk) ── */}
          <path d="M118 255 Q90 278 84 310" stroke="url(#skin)" strokeWidth="28" fill="none" strokeLinecap="round" />
          {/* Jacket sleeve left */}
          <path d="M118 255 Q90 278 84 310" stroke="url(#jacket)" strokeWidth="30" fill="none" strokeLinecap="round" opacity="0.8" />
          <path d="M118 255 Q90 278 84 310" stroke="url(#skin)" strokeWidth="22" fill="none" strokeLinecap="round" />
          {/* Left hand */}
          <ellipse cx="84" cy="315" rx="16" ry="11" fill="url(#skin)" />

          {/* ── RIGHT ARM (waving) ── */}
          <motion.g
            style={{ transformOrigin: '282px 258px' }}
            animate={{ rotate: [-8, 18, -8] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M282 258 Q318 235 328 205" stroke="url(#jacket)" strokeWidth="30" fill="none" strokeLinecap="round" />
            <path d="M282 258 Q318 235 328 205" stroke="url(#skin)" strokeWidth="22" fill="none" strokeLinecap="round" />
            {/* Right hand */}
            <ellipse cx="331" cy="199" rx="16" ry="13" fill="url(#skin)" transform="rotate(-25 331 199)" />
            {/* Fingers */}
            <line x1="328" y1="186" x2="326" y2="176" stroke="url(#skin)" strokeWidth="7" strokeLinecap="round" />
            <line x1="338" y1="190" x2="340" y2="180" stroke="url(#skin)" strokeWidth="7" strokeLinecap="round" />
            <line x1="320" y1="192" x2="316" y2="183" stroke="url(#skin)" strokeWidth="7" strokeLinecap="round" />
            <line x1="344" y1="199" x2="348" y2="191" stroke="url(#skin)" strokeWidth="6" strokeLinecap="round" />
          </motion.g>

          {/* ── NECK ── */}
          <rect x="188" y="200" width="24" height="35" rx="10" fill="url(#skin)" />

          {/* ── HEAD ── */}
          {/* Hair back (behind face) */}
          <ellipse cx="200" cy="155" rx="68" ry="74" fill="url(#hair)" />
          {/* Long hair strands */}
          <path d="M132 155 Q118 190 120 230" stroke="#1a0a02" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M268 155 Q282 190 280 230" stroke="#1a0a02" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M136 170 Q122 200 125 235" stroke="#1a0a02" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M264 170 Q278 200 275 235" stroke="#1a0a02" strokeWidth="10" fill="none" strokeLinecap="round" />

          {/* Face */}
          <ellipse cx="200" cy="158" rx="57" ry="62" fill="url(#skin)"
            style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))' }} />

          {/* Face shading (3D effect) */}
          <ellipse cx="175" cy="160" rx="22" ry="40" fill="#e09060" opacity="0.08" />

          {/* Hair top */}
          <path d="M143 106 Q155 80 200 76 Q245 80 257 106 Q230 88 200 88 Q170 88 143 106Z"
            fill="url(#hair)" />
          {/* Hair part & shine */}
          <path d="M190 78 Q200 72 210 78" stroke="url(#hairShine)" strokeWidth="8" fill="none" strokeLinecap="round" />
          {/* Hair fringe */}
          <path d="M148 112 Q162 92 180 102 Q190 85 200 95 Q210 85 220 102 Q238 92 252 112"
            fill="url(#hair)" />

          {/* Ears */}
          <ellipse cx="143" cy="162" rx="9" ry="12" fill="url(#skinDark)" />
          <ellipse cx="257" cy="162" rx="9" ry="12" fill="url(#skinDark)" />
          {/* Earring */}
          <circle cx="143" cy="170" r="4" fill="#c084fc" filter="url(#glow)" />
          <circle cx="257" cy="170" r="4" fill="#c084fc" filter="url(#glow)" />

          {/* ── EYES ── */}
          <Eye cx={180} cy={158} />
          <Eye cx={220} cy={158} />

          {/* Eyebrows */}
          <path d="M167 143 Q180 138 193 142" stroke="#2c1503" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          <path d="M207 142 Q220 138 233 143" stroke="#2c1503" strokeWidth="3.5" fill="none" strokeLinecap="round" />

          {/* Nose */}
          <path d="M196 173 Q200 180 204 173" stroke="#d4956a" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Smile */}
          <path d="M184 188 Q200 200 216 188" stroke="#c97047" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Lip colour */}
          <ellipse cx="200" cy="192" rx="12" ry="5" fill="#e8836a" opacity="0.45" />

          {/* Blush */}
          <ellipse cx="166" cy="178" rx="13" ry="8" fill="#f9a8d4" opacity="0.35" />
          <ellipse cx="234" cy="178" rx="13" ry="8" fill="#f9a8d4" opacity="0.35" />

          {/* ── Sparkles ── */}
          <Spark cx={70}  cy={130} r={5} delay={0}   color="#c084fc" />
          <Spark cx={335} cy={120} r={4} delay={0.8} color="#a78bfa" />
          <Spark cx={355} cy={250} r={6} delay={1.6} color="#c084fc" />
          <Spark cx={50}  cy={280} r={4} delay={0.4} color="#a78bfa" />
          <Spark cx={200} cy={50}  r={5} delay={1.2} color="#e9d5ff" />
          <Spark cx={80}  cy={380} r={3} delay={2.0} color="#c084fc" />
          <Spark cx={320} cy={370} r={3} delay={0.6} color="#a78bfa" />
        </svg>

        {/* Speech bubble */}
        <motion.div
          style={{ position: 'absolute', top: 40, right: -10, zIndex: 20 }}
          animate={{ y: [-3, 5, -3], rotate: [-1, 2, -1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{
            padding: '10px 18px',
            borderRadius: '20px 20px 4px 20px',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: 'white',
            whiteSpace: 'nowrap',
            background: 'linear-gradient(135deg, rgba(109,40,217,0.92), rgba(192,132,252,0.88))',
            border: '1px solid rgba(192,132,252,0.5)',
            boxShadow: '0 8px 32px rgba(139,92,246,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.01em',
          }}>
            Hi there! 👋
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
