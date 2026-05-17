import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const COLOR = '#8b5cf6';

const skillGroups = [
  {
    category: 'Languages',
    icon: '🧠',
    color: COLOR,
    skills: ['JavaScript', 'Java', 'Python', 'C'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: COLOR,
    skills: ['React.js', 'React Native', 'Tailwind CSS', 'HTML / CSS / SASS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: COLOR,
    skills: ['Spring Boot', 'FastAPI', 'REST APIs', 'JWT / Security'],
  },
  {
    category: 'Databases & Tools',
    icon: '🗄️',
    color: COLOR,
    skills: ['MySQL', 'PostgreSQL', 'Git / GitHub', 'Figma', 'Postman'],
  },
];

function SkillCard({ group, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 160, damping: 22, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.03 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card flex flex-col"
      style={{
        borderRadius: '20px',
        padding: '32px 28px',
        border: hovered
          ? `1px solid ${group.color}80`
          : `1px solid ${group.color}22`,
        boxShadow: hovered
          ? `0 0 0 1px ${group.color}25, 0 20px 60px ${group.color}22, 0 8px 24px rgba(0,0,0,0.3)`
          : '0 4px 24px rgba(0,0,0,0.12)',
        background: hovered
          ? `linear-gradient(145deg, rgba(20,10,50,0.95), rgba(12,6,30,0.95))`
          : 'rgba(255,255,255,0.025)',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
        cursor: 'default',
      }}
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-5">
        {/* Colored icon box */}
        <motion.div
          animate={hovered ? { scale: 1.15, rotate: [0, -8, 8, 0] } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.4 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{
            background: hovered ? `${group.color}30` : `${group.color}18`,
            border: `1px solid ${group.color}${hovered ? '60' : '35'}`,
            boxShadow: hovered ? `0 0 20px ${group.color}35` : 'none',
            transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
          }}
        >
          {group.icon}
        </motion.div>

        <h3
          className="font-bold text-xl"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            color: hovered ? 'white' : 'rgba(255,255,255,0.9)',
            transition: 'color 0.25s ease',
          }}
        >
          {group.category}
        </h3>
      </div>

      {/* Gradient divider */}
      <div
        className="mb-5 h-px"
        style={{
          background: `linear-gradient(to right, ${group.color}${hovered ? '60' : '35'}, transparent)`,
          transition: 'background 0.25s ease',
        }}
      />

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: si * 0.06,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
            className="px-4 py-2 rounded-xl font-mono text-sm font-medium"
            style={{
              background: hovered ? `${group.color}18` : `${group.color}10`,
              border: `1px solid ${group.color}${hovered ? '50' : '30'}`,
              color: group.color,
              transition: 'background 0.2s, border-color 0.2s',
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">Skills</div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            My <span className="gradient-text">Technical Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
