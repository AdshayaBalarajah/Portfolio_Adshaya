import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';

const commands = [
  { id: 'about',      icon: '◈', label: 'Go to About',      category: 'Navigate', action: 'scroll', target: 'about' },
  { id: 'skills',     icon: '⚡', label: 'Go to Skills',     category: 'Navigate', action: 'scroll', target: 'skills' },
  { id: 'experience', icon: '◎', label: 'Go to Experience',  category: 'Navigate', action: 'scroll', target: 'experience' },
  { id: 'projects',   icon: '◉', label: 'Go to Projects',    category: 'Navigate', action: 'scroll', target: 'projects' },
  { id: 'research',   icon: '◈', label: 'Go to Research',    category: 'Navigate', action: 'scroll', target: 'research' },
  { id: 'contact',    icon: '✉', label: 'Go to Contact',     category: 'Navigate', action: 'scroll', target: 'contact' },
  { id: 'github',     icon: '⌥', label: 'Open GitHub',       category: 'Links',    action: 'link',   href: 'https://github.com/AdshayaBalarajah' },
  { id: 'linkedin',   icon: '⌗', label: 'Open LinkedIn',     category: 'Links',    action: 'link',   href: 'https://www.linkedin.com/in/adshaya-balarajah-531735285' },
  { id: 'email',      icon: '@', label: 'Send an Email',     category: 'Links',    action: 'link',   href: 'mailto:bala.adshaya28@gmail.com' },
  { id: 'cv',         icon: '↓', label: 'Download CV',       category: 'Actions',  action: 'download', href: '/AdshayaBalarajah_CV.pdf' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  // Open on Cmd/Ctrl+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(o => !o);
        setQuery('');
        setCursor(0);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setCursor(c => Math.min(c + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setCursor(c => Math.max(c - 1, 0)); }
      if (e.key === 'Enter')     { e.preventDefault(); if (filtered[cursor]) run(filtered[cursor]); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, cursor, filtered]);

  // Reset cursor on query change
  useEffect(() => setCursor(0), [query]);

  function run(cmd) {
    setOpen(false);
    setQuery('');
    if (cmd.action === 'scroll') {
      scroller.scrollTo(cmd.target, { smooth: true, duration: 800, offset: -80 });
    } else if (cmd.action === 'link') {
      window.open(cmd.href, '_blank');
    } else if (cmd.action === 'download') {
      const a = document.createElement('a');
      a.href = cmd.href;
      a.download = '';
      a.click();
    }
  }

  // Group by category
  const grouped = filtered.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[800]"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -10 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
            className="fixed top-[18%] left-1/2 z-[801] w-full max-w-lg -translate-x-1/2"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(10,10,18,0.98)',
                border: '1px solid rgba(139,92,246,0.3)',
                boxShadow: '0 0 0 1px rgba(139,92,246,0.1), 0 32px 80px rgba(0,0,0,0.7), 0 0 40px rgba(139,92,246,0.1)',
              }}
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(6,182,212,0.7)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Type a command or search…"
                  className="flex-1 bg-transparent outline-none text-sm text-white/80 placeholder-white/25 font-mono"
                />
                <kbd className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <p className="text-center font-mono text-xs text-white/25 py-8">No results for "{query}"</p>
                ) : (
                  Object.entries(grouped).map(([cat, items]) => (
                    <div key={cat}>
                      <p className="font-mono text-xs text-white/25 tracking-widest px-4 pt-3 pb-1.5">{cat.toUpperCase()}</p>
                      {items.map((cmd) => {
                        const globalIdx = filtered.indexOf(cmd);
                        const isActive = globalIdx === cursor;
                        return (
                          <motion.button
                            key={cmd.id}
                            onClick={() => run(cmd)}
                            onMouseEnter={() => setCursor(globalIdx)}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-100"
                            style={{
                              background: isActive ? 'rgba(139,92,246,0.12)' : 'transparent',
                              borderLeft: isActive ? '2px solid #8b5cf6' : '2px solid transparent',
                            }}
                          >
                            <span className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                              style={{ background: isActive ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.05)', color: isActive ? '#818cf8' : 'rgba(255,255,255,0.4)' }}>
                              {cmd.icon}
                            </span>
                            <span className="text-sm font-medium" style={{ color: isActive ? '#e2e8f0' : 'rgba(255,255,255,0.6)' }}>
                              {cmd.label}
                            </span>
                            {isActive && (
                              <span className="ml-auto font-mono text-xs" style={{ color: 'rgba(6,182,212,0.7)' }}>↵</span>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center gap-4 px-4 py-2.5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                {[['↑↓', 'Navigate'], ['↵', 'Select'], ['Esc', 'Close']].map(([key, desc]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <kbd className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}>{key}</kbd>
                    <span className="font-mono text-xs text-white/20">{desc}</span>
                  </div>
                ))}
                <span className="ml-auto font-mono text-xs text-white/15">⌘K</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
