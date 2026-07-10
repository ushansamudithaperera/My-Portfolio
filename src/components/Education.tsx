'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    title: 'BSc (Hons) in Electronics and Computer Science',
    stream: null,
    institution: 'UNIVERSITY OF KELANIYA (FACULTY OF SCIENCE)',
    badge: '2023 - PRESENT (EXPECTED 2027)',
    details: null,
    bullets: [],
  },
  {
    id: 2,
    title: 'G.C.E. Advanced Level',
    stream: 'Physical Science (Maths Stream)',
    institution: 'R/NEWTOWN PRINCE COLLEGE',
    badge: '2021 (2022)',
    details: null,
    bullets: [
      'Combined Mathematics - B',
      'Physics - B',
      'Chemistry - B'
    ],
  },
  {
    id: 3,
    title: 'G.C.E. Ordinary Level',
    stream: null,
    institution: 'R/ANANDA VIDYALAYA',
    badge: '2017',
    details: "Passed all subjects with excellent standing (3 A's, 4 B's, 3 C's)",
    bullets: [],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function Education() {
  return (
    <section className="relative w-full max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8" id="education">
      
      {/* ── Background Layers ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0" />
      
      {/* ── Main Glassmorphism Panel ── */}
      <motion.div 
        className="relative z-10 w-full bg-[#141923]/60 backdrop-blur-xl border border-[#00ffaa]/20 rounded-2xl p-6 md:p-10 shadow-[0_0_20px_rgba(0,255,170,0.15)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Panel Header */}
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase"
          >
            Education Panel
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm text-slate-400 mt-2 tracking-[0.15em] font-mono uppercase"
          >
            Step 2: Degrees & Diplomas
          </motion.p>
        </div>

        <div className="relative">
          
          <div className="relative space-y-12 pl-16 md:pl-24 pr-4 md:pr-8 pb-4">
            
            {educationData.map((edu, idx) => {
              const isLast = idx === educationData.length - 1;
              return (
                <motion.div key={edu.id} className="relative group" variants={itemVariants}>
                  
                  {/* ── Secondary Animated Vertical Pipeline Segment ── */}
                  {/* Mathematically spans EXACTLY from the center of this node to the center of the next node */}
                  {!isLast && (
                    <div className="absolute -left-[45px] md:-left-[61px] top-[32px] w-[16px] h-[calc(100%+48px)] border-x border-emerald-500/30 z-0 overflow-hidden flex justify-center">
                      <motion.div
                        className="absolute w-[6px] h-[16px] bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,1)] z-10"
                        animate={{ top: ['-20px', '100%'] }}
                        transition={{
                          duration: 4.5, // Match slow pacing of main pipeline
                          repeat: Infinity,
                          ease: 'linear',
                          delay: idx * 2.2 // Staggered flow
                        }}
                      />
                    </div>
                  )}

                  {/* Node on the timeline */}
                  <div className="absolute -left-[45px] md:-left-[61px] top-[24px] w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] border-[3px] border-[#0a0e14] z-10 transition-transform duration-300 group-hover:scale-125" />
                  
                  {/* Connecting horizontal branch */}
                  <div className="absolute -left-[29px] md:-left-[45px] top-[31px] w-[29px] md:w-[45px] h-[2px] bg-emerald-500/30 shadow-[0_0_8px_rgba(0,255,170,0.5)] z-0" />

                  {/* ── Inner Card ("Card inside a card") ── */}
                  <div className="bg-[#0a0e14]/80 border border-emerald-400/50 shadow-[0_0_15px_rgba(0,230,160,0.3)] rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:bg-[#0a0e14]/90 group-hover:shadow-[0_0_25px_rgba(0,230,160,0.4)] relative overflow-hidden">
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors mb-2">
                      {edu.title}
                    </h3>
                    
                    {/* Stream (if any) */}
                    {edu.stream && (
                      <h4 className="text-emerald-400/90 text-sm md:text-base font-medium tracking-wide mb-3 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                        {edu.stream}
                      </h4>
                    )}
                    
                    {/* Glowing Emerald Institution */}
                    <h4 className="text-emerald-400 text-sm md:text-base font-bold tracking-wide uppercase drop-shadow-[0_0_8px_rgba(52,211,153,0.6)] mb-4">
                      {edu.institution}
                    </h4>
                    
                    <div className="w-full h-px bg-slate-700/60 my-4" />
                    
                    {/* Glassmorphism Badge */}
                    <div className="flex items-start mb-4">
                      <span className="inline-block bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-emerald-400 font-mono text-sm tracking-wider drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] uppercase">
                        {edu.badge}
                      </span>
                    </div>
                    
                    {/* Simple Text Details */}
                    {edu.details && (
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed mt-4">
                        {edu.details}
                      </p>
                    )}

                    {/* Glowing Sub-badges / Bullets */}
                    {edu.bullets && edu.bullets.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {edu.bullets.map((bullet, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium shadow-[0_0_10px_rgba(52,211,153,0.1)]"
                          >
                            {bullet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
