import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cursor from './components/Cursor';
import ParticlesBackground from './components/ParticlesBackground';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ── Grain overlay ── */
function Grain() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[900]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: 0.028,
      }}
    />
  );
}

/* ── Konami easter egg ── */
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

function KonamiEaster({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9000] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)' }}
      onClick={onClose}
    >
      {/* Confetti particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: i % 2 === 0 ? '#8b5cf6' : '#c084fc',
            left: `${Math.random() * 100}%`,
            top: '-10px',
          }}
          animate={{ y: ['0vh', '110vh'], rotate: [0, 720], opacity: [1, 0] }}
          transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 0.8, ease: 'linear' }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -12 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="text-center p-10 rounded-3xl max-w-sm mx-4"
        style={{ background: 'rgba(12,12,22,0.98)', border: '1px solid rgba(99,102,241,0.4)', boxShadow: '0 0 80px rgba(99,102,241,0.3)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="text-6xl mb-4">🎮</div>
        <h2 className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Easter Egg Found!
        </h2>
        <p className="font-mono text-sm text-white/50 mb-2">↑↑↓↓←→←→BA</p>
        <p className="text-white/40 text-sm leading-relaxed mb-6">
          You clearly know your classics. A developer who knows the Konami Code — I like you already.
        </p>
        <button
          onClick={onClose}
          className="font-mono text-xs px-4 py-2 rounded-xl transition-all duration-200"
          style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.4)', color: '#c084fc' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.25)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.15)'; }}
        >
          Close ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

function useKonami(callback) {
  const seq = useRef([]);
  useEffect(() => {
    const handler = (e) => {
      seq.current = [...seq.current, e.key].slice(-KONAMI.length);
      if (seq.current.join(',') === KONAMI.join(',')) {
        seq.current = [];
        callback();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [callback]);
}

/* ── App ── */
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [konamiVisible, setKonamiVisible] = useState(false);

  const showKonami = useCallback(() => setKonamiVisible(true), []);
  useKonami(showKonami);

  return (
    <>
      <Cursor />
      <Grain />

      <AnimatePresence mode="wait">
        {!loaded && <LoadingScreen key="loader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {konamiVisible && <KonamiEaster key="konami" onClose={() => setKonamiVisible(false)} />}
      </AnimatePresence>

      {loaded && (
        <div className="relative min-h-screen" style={{ background: '#08080f' }}>
          <ScrollProgress />
          <CommandPalette />
          <ParticlesBackground />
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Research />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
