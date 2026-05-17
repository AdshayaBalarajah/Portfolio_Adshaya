import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { num: 3,  suffix: '+', label: 'Projects Shipped',  icon: '🚀' },
  { num: 1,  suffix: '+', label: 'Years Experience',   icon: '💼' },
  { num: 4,  suffix: '',  label: 'Tech Stacks',        icon: '⚡' },
  { num: 3,  suffix: '+', label: 'Certifications',     icon: '🏆' },
];



function Counter({ num, suffix, decimal, trigger }) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(num * eased);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setVal(num);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, num]);

  const display = decimal ? val.toFixed(1) : Math.round(val);
  return <>{display}{suffix}</>;
}

/* Individual stat card with hover state */
function StatCard({ stat, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card cursor-default flex flex-col items-center justify-center text-center"
      style={{
        borderRadius: '20px',
        padding: '40px 24px',
        minHeight: '200px',
        border: hovered
          ? '1px solid rgba(139,92,246,0.65)'
          : '1px solid rgba(139,92,246,0.15)',
        boxShadow: hovered
          ? '0 0 0 1px rgba(139,92,246,0.2), 0 12px 48px rgba(139,92,246,0.2)'
          : '0 8px 32px rgba(139,92,246,0.06)',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      {/* Icon + Number on same row */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <span style={{ fontSize: '2rem', lineHeight: 1 }}>{stat.icon}</span>
        <span
          className="font-bold"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '3.2rem',
            lineHeight: 1,
            background: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: hovered ? 'drop-shadow(0 0 14px rgba(139,92,246,0.55))' : 'none',
            transition: 'filter 0.25s ease',
          }}
        >
          <Counter num={stat.num} suffix={stat.suffix} decimal={stat.decimal} trigger={inView} />
        </span>
      </div>

      {/* Label */}
      <div
        className="font-medium tracking-wide"
        style={{
          color: hovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
          fontSize: '0.85rem',
          transition: 'color 0.25s ease',
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c084fc, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          <div className="section-tag mb-4">About Me</div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-stretch">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 160, damping: 22 }}
            className="flex flex-col justify-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Crafting digital{' '}
              <span className="gradient-text">experiences</span>{' '}
              that matter
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
              className="text-white/55 leading-relaxed text-base md:text-lg"
            >
              I'm a final-year undergraduate pursuing a BSc (Hons) in Information Technology at the
              University of Moratuwa — one of Sri Lanka's most prestigious institutions. As a
              full-stack developer, I bridge the gap between thoughtful design and powerful
              engineering, building products that are as performant as they are beautiful. My work
              spans interactive web applications, mobile platforms, and research-driven software —
              always with a focus on clean code, scalability, and real-world impact. I thrive in
              fast-paced environments and love turning ambitious ideas into polished,
              production-ready experiences.
            </motion.p>
          </motion.div>

          {/* ── Right — Stat cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 160, damping: 22, delay: 0.1 }}
            className="grid grid-cols-2 gap-5 content-center"
          >
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
