import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

/* Scale-up: viewBox 480×400, CX=240, CY=222 */
const CX = 240;
const CY = 222;

const RINGS = [
  {
    rx: 86,  ry: 31, duration: 8,  color: '#c084fc',
    dots: [
      { start: 0,   label: 'React.js' },
      { start: 180, label: 'Java' },
    ],
  },
  {
    rx: 154, ry: 54, duration: 14, color: '#a78bfa',
    dots: [
      { start: 40,  label: 'Spring Boot' },
      { start: 160, label: 'FastAPI' },
      { start: 285, label: 'Python' },
    ],
  },
  {
    rx: 225, ry: 79, duration: 22, color: '#8b5cf6',
    dots: [
      { start: 10,  label: 'MySQL' },
      { start: 100, label: 'Git' },
      { start: 190, label: 'Figma' },
      { start: 280, label: 'Postman' },
    ],
  },
];

function Dot({ rx, ry, startDeg, duration, color, label, size = 7 }) {
  const deg = useMotionValue(startDeg);

  useEffect(() => {
    const ctrl = animate(deg, startDeg + 360, {
      duration,
      repeat: Infinity,
      ease: 'linear',
    });
    return ctrl.stop;
  }, []);

  const x = useTransform(deg, d => CX + rx * Math.cos((d * Math.PI) / 180));
  const y = useTransform(deg, d => CY + ry * Math.sin((d * Math.PI) / 180));

  const pillW = label.length * 7 + 18;

  return (
    <motion.g style={{ x, y }}>
      {/* Outer glow */}
      <circle cx={0} cy={0} r={size + 7} fill={color} opacity={0.18} />
      {/* Core dot */}
      <circle cx={0} cy={0} r={size} fill={color} />
      <circle cx={0} cy={0} r={size * 0.42} fill="white" opacity={0.55} />
      {/* Label pill */}
      <rect
        x={-pillW / 2} y={size + 5}
        width={pillW} height={17} rx={8.5}
        fill="rgba(10,5,28,0.94)"
        stroke={color} strokeWidth={0.9} strokeOpacity={0.6}
      />
      <text
        x={0} y={size + 16.5}
        textAnchor="middle"
        fill={color}
        fontSize={9}
        fontFamily="JetBrains Mono, monospace"
        fontWeight={600}
      >
        {label}
      </text>
    </motion.g>
  );
}

export default function TechOrbit() {
  return (
    <div className="flex items-center justify-center w-full" style={{ minHeight: 440 }}>
      <svg
        viewBox="0 0 480 400"
        width={480}
        height={400}
        style={{ overflow: 'visible' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#f3e8ff" stopOpacity={1} />
            <stop offset="28%"  stopColor="#c084fc" stopOpacity={0.88} />
            <stop offset="65%"  stopColor="#7c3aed" stopOpacity={0.42} />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity={0} />
          </radialGradient>
          <radialGradient id="orbCore" cx="35%" cy="32%" r="75%">
            <stop offset="0%"   stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#1e0a3c" />
          </radialGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="floorGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#8b5cf6" stopOpacity={0.28} />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
          </radialGradient>
        </defs>

        {/* Floor shadow */}
        <ellipse cx={CX} cy={385} rx={168} ry={13} fill="url(#floorGrad)" />

        {/* Orbit ring tracks */}
        {RINGS.map((ring, i) => (
          <ellipse
            key={i}
            cx={CX} cy={CY}
            rx={ring.rx} ry={ring.ry}
            fill="none"
            stroke={ring.color}
            strokeWidth={1.5}
            strokeOpacity={0.28}
            strokeDasharray="5 8"
          />
        ))}

        {/* Central glow halo */}
        <circle cx={CX} cy={CY} r={106} fill="url(#orbGlow)" />

        {/* Pulsing rings */}
        {[0, 0.85, 1.7].map((delay, i) => (
          <motion.circle
            key={i}
            cx={CX} cy={CY} r={62}
            fill="none"
            stroke="#8b5cf6"
            strokeWidth={2}
            initial={{ scale: 1, opacity: 0.55 }}
            animate={{ scale: [1, 2.0 + i * 0.4], opacity: [0.55, 0] }}
            transition={{ duration: 2.8, delay, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />
        ))}

        {/* Core orb */}
        <circle cx={CX} cy={CY} r={60} fill="url(#orbCore)" filter="url(#softGlow)" />
        {/* Highlight sheen */}
        <ellipse cx={CX - 17} cy={CY - 19} rx={22} ry={14} fill="white" opacity={0.07} />

        {/* Orb text */}
        <text
          x={CX} y={CY - 8}
          textAnchor="middle"
          fill="#f3e8ff"
          fontSize={26}
          fontFamily="Space Grotesk, sans-serif"
          fontWeight={700}
          opacity={0.92}
        >
          {'</>'}
        </text>
        <text
          x={CX} y={CY + 16}
          textAnchor="middle"
          fill="#c084fc"
          fontSize={9.5}
          fontFamily="JetBrains Mono, monospace"
          letterSpacing={3.5}
          opacity={0.65}
        >
          DEV
        </text>

        {/* Orbiting dots */}
        {RINGS.map((ring, ri) =>
          ring.dots.map((dot, di) => (
            <Dot
              key={`${ri}-${di}`}
              rx={ring.rx}
              ry={ring.ry}
              startDeg={dot.start}
              duration={ring.duration}
              color={ring.color}
              label={dot.label}
              size={ri === 0 ? 7 : ri === 1 ? 7 : 6}
            />
          ))
        )}
      </svg>
    </div>
  );
}
