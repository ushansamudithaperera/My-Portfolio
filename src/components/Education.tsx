'use client';

import { motion } from 'framer-motion';

// Mock data for education timeline
const educationData = [
  {
    id: 1,
    degree: "Master's Degree in Software Engineering",
    university: 'Tech Institute of Future',
    date: 'Aug 2021 - May 2023',
    location: 'New York, NY',
    details: [
      'Specialized in Distributed Systems',
      'Advanced Machine Learning Concepts',
    ],
    isActive: true, // Highlights the card to represent an active or most recent state
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Science',
    university: 'State University',
    date: 'Aug 2017 - May 2021',
    location: 'San Francisco, CA',
    details: [
      'Minor in Mathematics',
      'President of the University Coding Club',
    ],
    isActive: false,
  },
];

/* ─── Animation Variants ─────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

/* ─── Component ──────────────────────────────────────────────────── */

export default function Education() {
  return (
    <section className="relative w-full max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8" id="education">
      
      {/* ── Main Glassmorphism Panel Container ── */}
      <div className="relative bg-[#0b1121]/80 border border-slate-700/50 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        
        {/* Panel Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-3xl font-bold text-white tracking-widest uppercase shadow-emerald-500/50 drop-shadow-lg"
          >
            Education Panel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-emerald-400 mt-2 tracking-wide font-mono"
          >
            Step 2: Degrees & Diplomas
          </motion.p>
        </div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* ── Vertical Pipeline Line (Inside Panel) ── */}
          {/* Increased brightness and height to connect items clearly */}
          <div className="absolute left-[20px] md:left-[36px] top-4 bottom-4 w-px bg-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />

          <div className="space-y-12 pl-16 md:pl-24 pr-4 md:pr-8">
            {educationData.map((edu) => (
              <motion.div key={edu.id} className="relative group" variants={itemVariants}>
                
                {/* Node on the timeline */}
                <div
                  className={`absolute -left-[50px] md:-left-[66px] top-8 w-4 h-4 rounded-full border-[2px] border-emerald-400 ${
                    edu.isActive
                      ? 'bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,1)]'
                      : 'bg-slate-900 shadow-[0_0_8px_rgba(52,211,153,0.5)]'
                  } transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-400 z-10`}
                />
                
                {/* Connector line from node to card */}
                <div className="absolute -left-[34px] md:-left-[50px] top-[39px] w-8 md:w-12 h-[2px] bg-emerald-500/40 group-hover:bg-emerald-400/80 transition-colors duration-300" />

                {/* ── The Glassmorphism Card ── */}
                <div
                  className={`relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                    edu.isActive
                      ? 'bg-slate-800/80 border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
                      : 'bg-[#0f172a88] border-slate-700/60 hover:bg-slate-800/80'
                  }`}
                  style={{
                    borderWidth: '1px',
                    borderStyle: 'solid',
                  }}
                >
                  {/* Subtle internal gradient glow */}
                  <div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(800px circle at center, rgba(16,185,129,0.08), transparent 40%)',
                    }}
                  />

                  {/* Border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      border: '1px solid rgba(16,185,129,0.6)',
                      boxShadow: 'inset 0 0 20px rgba(16,185,129,0.1)',
                    }}
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {edu.degree}
                    </h3>
                    <p className="text-base md:text-lg text-emerald-400 font-medium tracking-wide">
                      {edu.university}
                    </p>
                    
                    {/* Subtle Divider */}
                    <div className="w-full h-px bg-slate-700/60 my-4" />
                    
                    {/* Footer Row: Dates and Location */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm md:text-base text-slate-400 font-mono uppercase tracking-wider">
                      <span className="bg-slate-900/50 px-3 py-1 rounded-md border border-slate-700/50">{edu.date}</span>
                      <span>{edu.location}</span>
                    </div>
                    
                    {/* Additional details list */}
                    <ul className="mt-5 space-y-3">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-slate-300">
                          <span className="w-2 h-2 rounded-full bg-emerald-500/70 mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Connecting Pipeline Below Panel ── */}
      {/* This creates the continuous pipeline look connecting to the next section */}
      <div className="flex justify-center relative mt-2 md:mt-4">
        {/* Top glowing node */}
        <div className="absolute top-0 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,1)] z-10 -mt-1.5" />
        {/* Downward line */}
        <div className="w-1 h-24 bg-gradient-to-b from-emerald-500/80 via-emerald-500/40 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
      </div>
    </section>
  );
}
