import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LINES = [
  { cmd: 'whoami',          out: 'Adshaya Balarajah · Full Stack Developer' },
  { cmd: 'cat location.txt', out: 'Vavuniya, Sri Lanka 🇱🇰  ·  Remote OK' },
  { cmd: 'ls skills/',      out: 'React  SpringBoot  FastAPI  Python  MySQL' },
  { cmd: 'status --check',  out: '✓  Open to new opportunities' },
];

const TYPING_SPEED = 45;   // ms per char
const OUTPUT_DELAY = 260;  // ms after cmd before output appears
const LINE_PAUSE   = 900;  // ms between lines

export default function Terminal() {
  // Each entry: { cmd: string, out: string|null, cmdDone: bool }
  const [rendered, setRendered] = useState([]);
  const [activeLine, setActiveLine] = useState(0);
  const [activeCmdLen, setActiveCmdLen] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (activeLine >= LINES.length) { setDone(true); return; }

    const line = LINES[activeLine];
    let charIdx = 0;
    setShowOutput(false);

    // Type the command char by char
    const typingInterval = setInterval(() => {
      charIdx++;
      setActiveCmdLen(charIdx);
      if (charIdx >= line.cmd.length) {
        clearInterval(typingInterval);
        // Show output after small delay
        setTimeout(() => {
          setShowOutput(true);
          // Move to next line after pause
          setTimeout(() => {
            setRendered(prev => [...prev, line]);
            setActiveLine(al => al + 1);
            setActiveCmdLen(0);
          }, LINE_PAUSE);
        }, OUTPUT_DELAY);
      }
    }, TYPING_SPEED);

    return () => clearInterval(typingInterval);
  }, [activeLine]);

  const currentLine = LINES[activeLine];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 20, delay: 0.5 }}
      className="w-full max-w-md"
      style={{
        background: 'rgba(8,8,16,0.92)',
        border: '1px solid rgba(99,102,241,0.25)',
        borderRadius: '16px',
        boxShadow: '0 0 0 1px rgba(99,102,241,0.08), 0 32px 64px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.08)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        </div>
        <span className="font-mono text-xs text-white/25 mx-auto">adshaya@portfolio ~ /src</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm min-h-[220px]">
        {/* Completed lines */}
        {rendered.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-3"
          >
            <div className="flex items-center gap-2">
              <span style={{ color: '#6366f1' }}>❯</span>
              <span className="text-white/80">{line.cmd}</span>
            </div>
            <div className="mt-1 ml-4" style={{ color: '#818cf8' }}>{line.out}</div>
          </motion.div>
        ))}

        {/* Active line being typed */}
        {!done && currentLine && (
          <div className="mb-3">
            <div className="flex items-center gap-2">
              <span style={{ color: '#6366f1' }}>❯</span>
              <span className="text-white/80">{currentLine.cmd.slice(0, activeCmdLen)}</span>
              {/* Blinking cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-[7px] h-[14px] rounded-sm"
                style={{ background: '#6366f1', marginLeft: 1 }}
              />
            </div>
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                className="mt-1 ml-4"
                style={{ color: '#818cf8' }}
              >
                {currentLine.out}
              </motion.div>
            )}
          </div>
        )}

        {/* Idle cursor after all done */}
        {done && (
          <div className="flex items-center gap-2">
            <span style={{ color: '#6366f1' }}>❯</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-[7px] h-[14px] rounded-sm"
              style={{ background: '#6366f1' }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
