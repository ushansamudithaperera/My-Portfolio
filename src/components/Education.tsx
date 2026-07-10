'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    id: 1,
    degree: 'BSc. (Hons) in Computer Science',
    university: 'University of Kelaniya',
    date: 'Sep 2023 - Present',
    location: 'Sri Lanka',
    details: [
      'Currently maintaining a First Class Honours.',
      'Active member of the Electronics and Computer Science Club.',
    ],
  },
  {
    id: 2,
    degree: 'GCE Advanced Level (Physical Science)',
    university: 'St. Aloysius College',
    date: 'Aug 2019 - Feb 2022',
    location: 'Galle, Sri Lanka',
    details: [
      'Passed with excellent academic standing.',
      'Active participant in school tech initiatives.',
    ],
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
          {/* ── Animated Vertical Pipeline (Inside Panel) ── */}
          <div className="absolute left-[20px] md:left-[36px] top-4 bottom-4 w-1.5 bg-emerald-900/40 rounded-full overflow-hidden flex justify-center shadow-[0_0_10px_rgba(0,255,170,0.2)]">
            <motion.div 
              className="absolute top-0 w-full bg-emerald-500/80 shadow-[0_0_15px_rgba(0,255,170,0.8)]"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            />
            {/* Traveling Data Packet */}
            <motion.div
              className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1),0_0_15px_rgba(0,255,170,1)]"
              animate={{
                y: [0, 400], 
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5
              }}
            />
          </div>

          <div className="space-y-12 pl-16 md:pl-24 pr-4 md:pr-8 pb-4">
            {educationData.map((edu, idx) => (
              <motion.div key={edu.id} className="relative group" variants={itemVariants}>
                
                {/* Node on the timeline */}
                <div className="absolute -left-[45px] md:-left-[61px] top-6 w-4 h-4 rounded-full border-[2px] border-emerald-400 bg-emerald-400 shadow-[0_0_12px_rgba(0,230,160,1)] z-10 transition-transform duration-300 group-hover:scale-125" />
                
                {/* Connecting branch */}
                <div className="absolute -left-[45px] md:-left-[61px] top-[30px] w-[45px] md:w-[61px] h-px bg-emerald-500/50 shadow-[0_0_8px_rgba(0,255,170,0.5)] -z-10" />

                {/* ── Inner Card ("Card inside a card") ── */}
                <div className="bg-[#0a0e14]/80 border border-emerald-400/50 shadow-[0_0_15px_rgba(0,230,160,0.3)] rounded-2xl p-6 transition-all duration-300 group-hover:bg-[#0a0e14]/90 group-hover:shadow-[0_0_25px_rgba(0,230,160,0.4)] relative overflow-hidden">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-1 group-hover:text-emerald-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <h4 className="text-emerald-400 text-sm md:text-base font-medium tracking-wide uppercase mb-4">
                    {edu.university}
                  </h4>
                  
                  <div className="w-full h-px bg-slate-700/60 my-4" />
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm text-slate-300 font-mono uppercase tracking-wider mb-4">
                    <span className="bg-white/5 px-3 py-1 rounded-md border border-white/10">{edu.date}</span>
                    <span className="text-slate-400">{edu.location}</span>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(0,255,170,0.8)]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


    </section>
  );
}
