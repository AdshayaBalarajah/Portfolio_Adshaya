import { motion } from 'framer-motion';
import { useState } from 'react';

const COLOR = '#8b5cf6';

const projects = [
  {
    id: 1,
    title: 'LabourLINK',
    subtitle: 'Labour Hiring System',
    year: '2nd Year Project',
    client: 'AlphaCodes (Pvt) Ltd',
    color: COLOR,
    tech: ['React.js', 'React Native', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/AdshayaBalarajah?tab=repositories&q=labourlink&type=&language=&sort=',
    category: 'Full Stack',
    highlights: [
      'Web & mobile apps for on-demand labor hiring with map integration',
      'Real-time communication and booking management system',
      'Mobile labor dashboard: profile, bookings, reviews & account management',
      'Customer dashboard with job categories, top-rated employees & booking details',
      'API integration with Postman for real-time data validation',
    ],
  },
  {
    id: 2,
    title: 'Foodie App',
    subtitle: 'Food Delivery Platform',
    year: 'Individual Project',
    client: null,
    color: COLOR,
    tech: ['React.js', 'Spring Boot', 'MySQL', 'Tailwind CSS', 'MUI', 'Stripe'],
    github: 'https://github.com/AdshayaBalarajah?tab=repositories&q=foodie&type=&language=&sort=',
    category: 'Full Stack',
    highlights: [
      'Full-stack multi-vendor online food delivery platform',
      'Restaurant admin panels and super admin for platform-wide management',
      'Add to Favourite, Carousel Display, Add to Cart, and order tracking',
      'JWT, Spring Security, Stripe payment gateway, email notifications',
      'RESTful APIs with Spring Boot 3 for multi-vendor operations',
    ],
  },
  {
    id: 3,
    title: 'Popcorn Maker',
    subtitle: 'Automated Hardware Project',
    year: '1st Year Project',
    client: null,
    color: COLOR,
    tech: ['C', 'Arduino IDE', 'Arduino Mega 2560'],
    github: null,
    category: 'Hardware',
    highlights: [
      'Automated popcorn maker using Arduino Mega 2560',
      'DS18B20 temperature sensor for precise heating element control',
      'MQ2 gas sensor for smoke detection with automatic exhauster fan',
      'Reduced manual intervention and minimized manpower requirements',
    ],
  },
];

/* ── Project Card ── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 10,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -10,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ type: 'spring', stiffness: 160, damping: 22, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
      style={{
        transform: hovered
          ? `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(12px) scale(1.03)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: hovered ? 'transform 0.1s ease' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      className="relative glass-card overflow-hidden flex flex-col"
    >
      {/* Top colour bar */}
      <div className="h-0.5 w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${project.color}, transparent 70%)` }} />

      <div className="p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-full"
              style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}28` }}
            >
              {project.category}
            </span>
            <span className="font-mono text-xs text-white/25">{project.year}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {project.title}
          </h3>
          <p className="text-sm" style={{ color: project.color }}>{project.subtitle}</p>
          {project.client && (
            <p className="font-mono text-xs text-white/30 mt-1">Client: {project.client}</p>
          )}
        </div>

        {/* All highlights */}
        <div className="mb-5">
          <p className="font-mono text-xs text-white/30 tracking-widest mb-3">KEY FEATURES</p>
          <ul className="space-y-2.5">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 200, damping: 22 }}
                className="flex gap-2.5 text-sm text-white/50 leading-relaxed"
              >
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: project.color, boxShadow: `0 0 5px ${project.color}` }}
                />
                {h}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <p className="font-mono text-xs text-white/30 tracking-widest mb-2.5">TECH STACK</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg font-mono text-xs"
                style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}28` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub button — pushed to bottom */}
        <div className="mt-auto">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.045, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200"
              style={{
                background: `${project.color}14`,
                border: `1px solid ${project.color}40`,
                color: project.color,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${project.color}26`;
                e.currentTarget.style.boxShadow = `0 0 20px ${project.color}35, 0 0 40px ${project.color}15`;
                e.currentTarget.style.borderColor = `${project.color}80`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${project.color}14`;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = `${project.color}40`;
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              View on GitHub
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 65%)` }}
      />
    </motion.div>
  );
}

/* ── Section ── */
export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-48 bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 160, damping: 22 }}
          className="mb-12"
        >
          <div className="section-tag mb-4">Projects</div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            What I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
