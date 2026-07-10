'use client';

import { motion } from 'framer-motion';
import { FaUserGraduate, FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    title: 'BSc (Hons) in Electronics and Computer Science',
    icon: FaUserGraduate,
    stream: null,
    institution: 'UNIVERSITY OF KELANIYA (FACULTY OF SCIENCE)',
    badge: '2023 - PRESENT (EXPECTED 2027)',
    details: null,
    bullets: [],
  },
  {
    id: 2,
    title: 'G.C.E. Advanced Level',
    icon: FaUniversity,
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
    icon: FaUniversity,
    stream: null,
    institution: 'R/ANANDA VIDYALAYA',
    badge: '2017',
    details: (
      <>
        Passed all subjects with excellent standing (<span className="text-emerald-400 font-medium">3 A&apos;s, 4 B&apos;s, 3 C&apos;s</span>)
      </>
    ),
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
              const Icon = edu.icon;
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

                    {/* ── Flex Layout (Header & Date) ── */}
                    <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 mb-4">
                      
                      {/* Left Side: Title, Stream, Institution */}
                      <div className="flex-1 flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                            <Icon className="text-emerald-400 text-xl" />
                          </div>
                          <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold text-xl md:text-2xl tracking-wide group-hover:from-emerald-300 group-hover:to-cyan-300 transition-all duration-300">
                            {edu.title}
                          </h3>
                        </div>
                        
                        {/* Stream (if any) */}
                        {edu.stream && (
                          <h4 className="text-emerald-400/80 text-sm md:text-base font-medium tracking-wide drop-shadow-[0_0_8px_rgba(52,211,153,0.2)] ml-14">
                            {edu.stream}
                          </h4>
                        )}
                        
                        {/* Glowing Emerald Institution */}
                        <h4 className="text-emerald-500/90 text-sm md:text-base tracking-wider uppercase font-semibold ml-14 mt-1">
                          {edu.institution}
                        </h4>
                      </div>

                      {/* Right Side: Premium Date Badge */}
                      <div className="shrink-0 md:pl-4 self-start ml-14 md:ml-0 mt-2 md:mt-1">
                        <span className="px-3 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.15)] inline-block">
                          {edu.badge}
                        </span>
                      </div>
                      
                    </div>
                    
                    <div className="w-full h-px bg-slate-700/60 my-5 ml-0 md:ml-14 max-w-full md:max-w-[calc(100%-3.5rem)]" />
                    
                    <div className="ml-0 md:ml-14">
                      {/* Simple Text Details with Highlights */}
                      {edu.details && (
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                          {edu.details}
                        </p>
                      )}

                      {/* Glowing Sleek Glassmorphism Pills */}
                      {edu.bullets && edu.bullets.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {edu.bullets.map((bullet, i) => (
                            <span 
                              key={i} 
                              className="px-4 py-1.5 text-sm bg-[#0a0e14]/50 border border-white/5 rounded-full flex items-center gap-2 text-slate-300 hover:border-emerald-500/40 transition-colors shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(0,255,170,0.8)] shrink-0" />
                              {bullet}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
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
