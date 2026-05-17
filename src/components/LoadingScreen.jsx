import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        const inc = p < 70 ? Math.random() * 5 + 3 : Math.random() * 2 + 1;
        return Math.min(p + inc, 100);
      });
    }, 80);

    const phaseTimer = setTimeout(() => setPhase(1), 800);
    return () => { clearInterval(interval); clearTimeout(phaseTimer); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#08080f' }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, #c084fc40 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-md px-8">
        {/* Logo / Monogram */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 -m-4"
          >
            <svg viewBox="0 0 100 100" className="w-24 h-24">
              <circle
                cx="50" cy="50" r="46"
                fill="none"
                stroke="url(#loadGrad)"
                strokeWidth="1.5"
                strokeDasharray="200 90"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="loadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
            style={{
              background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.08))',
              border: '1px solid rgba(6,182,212,0.3)',
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#8b5cf6',
              textShadow: '0 0 20px #8b5cf6',
            }}
          >
            AB
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="font-mono text-xs text-violet-400 tracking-[0.3em] mb-2 opacity-70">
            INITIALIZING
          </p>
          <h1
            className="text-2xl font-bold gradient-text"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Adshaya Balarajah
          </h1>
        </motion.div>

        {/* Progress bar */}
        <div className="w-full">
          <div className="loading-bar rounded-full mb-2" style={{ width: `${progress}%`, transition: 'width 0.1s ease' }} />
          <div className="w-full h-px bg-white/5" />
          <div className="flex justify-between mt-2">
            <span className="font-mono text-xs text-white/30">Loading portfolio</span>
            <span className="font-mono text-xs text-violet-400">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Status messages */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="font-mono text-xs text-white/30 text-center"
        >
          {progress < 30 ? '> Loading assets...' :
           progress < 60 ? '> Configuring animations...' :
           progress < 85 ? '> Building experience...' :
           '> Almost ready...'}
        </motion.div>
      </div>
    </motion.div>
  );
}
