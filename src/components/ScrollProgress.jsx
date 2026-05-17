import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { spring.set(progress); }, [progress, spring]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[500] h-[2px]"
      style={{ background: 'rgba(139,92,246,0.08)' }}>
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: spring,
          background: 'linear-gradient(90deg, #8b5cf6, #c084fc)',
          boxShadow: '0 0 8px rgba(139,92,246,0.6)',
        }}
      />
    </div>
  );
}
