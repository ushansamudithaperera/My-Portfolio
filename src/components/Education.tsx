'use client';

import { motion } from 'framer-motion';
import { FaUserGraduate, FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    title: 'BSc (Hons) in Electronics and Computer Science',
    icon: FaUserGraduate,
    iconContainerClass: 'p-2.5 rounded-xl bg-primary-500/10 border border-primary-500/20 shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15)] flex items-center justify-center shrink-0',
    iconClass: 'text-primary-400 text-xl',
    stream: 'Faculty of Science',
    institution: 'University of Kelaniya',
    subText: null,
    badge: '2023 - PRESENT (EXPECTED 2027)',
    details: null,
    longDescription: 'Currently in my 4th year reading for a joint honors degree in Electronics and Computer Science. While the program encompasses foundational electronics and hardware systems, my primary academic passion and professional focus are deeply centered on Computer Science principles, advanced software engineering, and scalable system architectures.',
    bullets: [],
    customContent: null,
  },
  {
    id: 2,
    title: 'G.C.E. Advanced Level',
    icon: FaUniversity,
    iconContainerClass: 'p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-center shrink-0',
    iconClass: 'text-cyan-400 text-xl',
    stream: 'Physical Science (Maths Stream)',
    institution: 'R/Newtown Prince College',
    subText: null,
    badge: '2021 (2022)',
    details: null,
    longDescription: null,
    bullets: [],
    customContent: (
      <>
        <p className="mt-4 mb-5 text-[13px] md:text-sm text-slate-400 leading-relaxed">
          Successfully completed the G.C.E. Advanced Level examination in the Physical Science (Mathematics) stream from the Ratnapura District, establishing a strong analytical and quantitative foundation for my Computer Science journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Subjects Box (Left) */}
          <div className="flex flex-col justify-center px-5 py-4 rounded-xl bg-[#030508]/40 border border-white/5 space-y-3">
            <div className="flex justify-between items-center w-full">
               <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-[13px] md:text-sm text-slate-300">Combined Mathematics</span>
               </div>
               <span className="font-semibold text-cyan-400">B</span>
            </div>
            <div className="flex justify-between items-center w-full">
               <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-[13px] md:text-sm text-slate-300">Physics</span>
               </div>
               <span className="font-semibold text-cyan-400">B</span>
            </div>
            <div className="flex justify-between items-center w-full">
               <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3 shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-[13px] md:text-sm text-slate-300">Chemistry</span>
               </div>
               <span className="font-semibold text-cyan-400">B</span>
            </div>
          </div>

          {/* Key Metrics Box (Right) */}
          <div className="flex flex-col justify-center px-5 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <div className="flex flex-col space-y-3 w-full">
               <div className="flex justify-between items-center">
                  <span className="text-[13px] md:text-sm text-slate-300">Z-Score:</span>
                  <span className="font-semibold text-cyan-400">1.5000</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-[13px] md:text-sm text-slate-300">District Rank:</span>
                  <span className="font-semibold text-cyan-400">110</span>
               </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: 'G.C.E. Ordinary Level',
    icon: FaUniversity,
    iconContainerClass: 'p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)] flex items-center justify-center shrink-0',
    iconClass: 'text-purple-400 text-xl',
    stream: null,
    institution: 'R/Ananda Vidyalaya',
    subText: null,
    badge: '2017',
    details: null,
    longDescription: null,
    bullets: [],
    customContent: (
      <p className="mt-4 text-[13px] md:text-sm text-slate-400 leading-relaxed">
        Successfully completed the G.C.E. Ordinary Level examination with strong academic standing, achieving 2 A's, 4 B's, and 3 C's. This crucial early milestone built a solid educational foundation, sparking my initial interest in analytical problem-solving and effectively preparing me for the rigorous Mathematics stream at the Advanced Level and my subsequent journey into Computer Science.
      </p>
    ),
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* ── Main Glassmorphism Panel ── */}
      <motion.div
        className="relative z-10 w-full bg-[#141923]/60 backdrop-blur-xl border border-[var(--color-primary-400)]/20 rounded-2xl p-6 md:p-10 shadow-[0_0_20px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "50px" }}
      >
        {/* Panel Header */}
        <div className="text-center mb-12">
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase"
          >
            Education
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm text-slate-400 mt-2 tracking-[0.15em] font-mono uppercase"
          >
            Step 2: Universities & Schools
          </motion.p>
        </div>

        <div className="relative">

          <div className="relative space-y-8 sm:space-y-10 pl-8 sm:pl-12 md:pl-24 pr-2 sm:pr-4 md:pr-8 pb-4">

            {educationData.map((edu, idx) => {
              const isLast = idx === educationData.length - 1;
              const Icon = edu.icon;
              return (
                <motion.div key={edu.id} className="relative group" variants={itemVariants}>

                  {/* ── Secondary Animated Vertical Pipeline Segment ── */}
                  {!isLast && (
                    <div className="absolute -left-[45px] md:-left-[61px] top-[32px] w-[16px] h-[calc(100%+48px)] border-x border-primary-500/30 z-0 overflow-hidden flex justify-center">
                      <motion.div
                        className="absolute w-[6px] h-[16px] bg-primary-400 rounded-full shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),1)] z-10"
                        animate={{ top: ['-20px', '100%'] }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: idx * 2.2
                        }}
                      />
                    </div>
                  )}

                  {/* Node on the timeline */}
                  <div className="absolute -left-[28px] sm:-left-[36px] md:-left-[61px] top-[24px] w-4 h-4 rounded-full bg-primary-400 shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),1)] border-[3px] border-[#0a0e14] z-10 transition-transform duration-300 group-hover:scale-125" />

                  {/* Connecting horizontal branch */}
                  <div className="absolute -left-[15px] sm:-left-[20px] md:-left-[45px] top-[31px] w-[15px] sm:w-[20px] md:w-[45px] h-[2px] bg-primary-500/30 shadow-[0_0_8px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.5)] z-0" />

                  {/* ── Inner Card ("Card inside a card") ── */}
                  <div className="bg-[#0a0e14]/80 border border-primary-400/50 shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.3)] rounded-2xl p-4 sm:p-5 md:p-8 transition-all duration-300 group-hover:bg-[#0a0e14]/90 group-hover:shadow-[0_0_25px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.4)] relative overflow-hidden">

                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* ── Flex Layout (Header & Date) ── */}
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-3 sm:gap-4 mb-4">

                      {/* Left Side: Title, Stream, Institution */}
                      <div className="flex-1 flex flex-col gap-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1 min-w-0">
                          <div className={edu.iconContainerClass}>
                            <Icon className={edu.iconClass} />
                          </div>
                          <h3 className="text-slate-50 font-bold text-xl md:text-2xl tracking-wide break-words leading-tight">
                            {edu.title}
                          </h3>
                        </div>

                        {/* Stream (Top line, Dim) */}
                        {edu.stream && (
                          <h4 className="text-sm text-slate-500 ml-0 sm:ml-14 mt-1">
                            {edu.stream}
                          </h4>
                        )}

                        {/* Institution (Bottom line, Bright) */}
                        <h4 className="text-slate-300 text-sm md:text-base font-medium ml-0 sm:ml-14 mt-1">
                          {edu.institution}
                        </h4>

                        {/* Subtext (Additional Bottom line, Dim) */}
                        {edu.subText && (
                          <p className="text-sm text-slate-500 ml-0 sm:ml-14 mt-1">
                            {edu.subText}
                          </p>
                        )}
                      </div>

                      {/* Right Side: Premium Date Badge */}
                      <div className="shrink-0 self-start sm:self-center ml-0 sm:ml-4 mt-1 sm:mt-0">
                        <span className="px-3 py-1 text-xs font-mono text-primary-300 bg-primary-500/10 border border-primary-500/20 rounded-full shadow-[0_0_10px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15)] inline-block whitespace-nowrap">
                          {edu.badge}
                        </span>
                      </div>

                    </div>

                    <div className="w-full h-px bg-slate-700/60 my-4 sm:my-5 ml-0 sm:ml-14 max-w-full sm:max-w-[calc(100%-3.5rem)]" />

                    <div className="ml-0 sm:ml-14">
                      {/* Description */}
                      {edu.details && (
                        <p className="text-sm md:text-base text-slate-400 mb-3">
                          {edu.details}
                        </p>
                      )}

                      {edu.longDescription && (
                        <p className="mt-4 text-[13px] md:text-sm text-slate-400 leading-relaxed">
                          {edu.longDescription}
                        </p>
                      )}

                      {edu.customContent}

                      {/* Result Pills */}
                      {edu.bullets && edu.bullets.length > 0 && (
                        <div className="flex flex-col gap-2">
                          {edu.bullets.map((bullet, i) => (
                            <div
                              key={i}
                              className="px-3 py-2 md:px-4 md:py-2.5 text-sm bg-[#0a0e14]/50 border border-white/5 rounded-xl flex items-center gap-3 text-slate-300 hover:border-primary-500/40 transition-colors shadow-[0_0_10px_rgba(0,0,0,0.2)] font-medium w-full"
                            >
                              {/* Tiny Emerald Accent */}
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-500/80 shadow-[0_0_8px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.8)] shrink-0" />
                              {bullet}
                            </div>
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
