'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    title: 'BSc (Hons) in Electronics and Computer Science',
    institution: 'UNIVERSITY OF KELANIYA (FACULTY OF SCIENCE)',
    badge: '2023 - PRESENT (EXPECTED 2027)',
    details: null,
  },
  {
    id: 2,
    title: 'G.C.E. Advanced Level (Physical Science / Maths Stream)',
    institution: 'R/NEWTOWN PRINCE COLLEGE',
    badge: '2021 (2022)',
    details: "Passed with 3 B's (Physics, Chemistry, Combined Maths)",
  },
  {
    id: 3,
    title: 'G.C.E. Ordinary Level',
    institution: 'R/ANANDA VIDYALAYA',
    badge: 'COMPLETED',
    details: "Passed all subjects with excellent standing (3 A's, 4 B's, 3 C's)",
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
            
            {/* ── EXACT Spanning Vertical Timeline Line ── */}
            {/* 
              Top is 24px (center of first dot, since dot is top-6 i.e. 24px and h-4 means its center is at 32px.
              Actually top-6 = 24px, plus h-4/2 = 32px from top. Let's position line exactly from 32px to bottom 32px.
            */}
            <div className="absolute left-[20px] md:left-[36px] top-[32px] bottom-[32px] w-[2px] bg-emerald-500/60 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-0 -translate-x-1/2" />

            {educationData.map((edu) => (
              <motion.div key={edu.id} className="relative group" variants={itemVariants}>
                
                {/* Node on the timeline */}
                <div className="absolute -left-[45px] md:-left-[61px] top-[24px] w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] border-[3px] border-[#0a0e14] z-10 transition-transform duration-300 group-hover:scale-125" />
                
                {/* Connecting branch */}
                <div className="absolute -left-[45px] md:-left-[61px] top-[31px] w-[45px] md:w-[61px] h-[2px] bg-emerald-500/50 shadow-[0_0_8px_rgba(0,255,170,0.5)] -z-10" />

                {/* ── Inner Card ("Card inside a card") ── */}
                <div className="bg-[#0a0e14]/80 border border-emerald-400/50 shadow-[0_0_15px_rgba(0,230,160,0.3)] rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:bg-[#0a0e14]/90 group-hover:shadow-[0_0_25px_rgba(0,230,160,0.4)] relative overflow-hidden">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Title & Badge Layout */}
                  <div className="flex flex-col gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors">
                      {edu.title}
                    </h3>
                  </div>
                  
                  {/* Glowing Emerald Institution */}
                  <h4 className="text-emerald-400 text-sm md:text-base font-medium tracking-wide uppercase drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] mb-4">
                    {edu.institution}
                  </h4>
                  
                  <div className="w-full h-px bg-slate-700/60 my-4" />
                  
                  {/* Glassmorphism Badge */}
                  <div className="flex items-start mb-4">
                    <span className="inline-block bg-white/5 border border-white/10 px-3 py-1.5 rounded-md text-emerald-400 font-mono text-sm tracking-wider drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] uppercase">
                      {edu.badge}
                    </span>
                  </div>
                  
                  {/* Bullet Details */}
                  {edu.details && (
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-start gap-3 text-sm md:text-base text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,255,170,0.8)]" />
                        {edu.details}
                      </li>
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
