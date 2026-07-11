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
    bullets: [],
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
    iconContainerClass: 'p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)] flex items-center justify-center shrink-0',
    iconClass: 'text-purple-400 text-xl',
    stream: null,
    institution: 'R/Ananda Vidyalaya',
    subText: null,
    badge: '2017',
    details: 'Passed all subjects with excellent standing',
    bullets: [
      "2 A's",
      "4 B's",
      "3 C's"
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

          <div className="relative space-y-12 pl-16 md:pl-24 pr-4 md:pr-8 pb-4">

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
                  <div className="absolute -left-[45px] md:-left-[61px] top-[24px] w-4 h-4 rounded-full bg-primary-400 shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),1)] border-[3px] border-[#0a0e14] z-10 transition-transform duration-300 group-hover:scale-125" />

                  {/* Connecting horizontal branch */}
                  <div className="absolute -left-[29px] md:-left-[45px] top-[31px] w-[29px] md:w-[45px] h-[2px] bg-primary-500/30 shadow-[0_0_8px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.5)] z-0" />

                  {/* ── Inner Card ("Card inside a card") ── */}
                  <div className="bg-[#0a0e14]/80 border border-primary-400/50 shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.3)] rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:bg-[#0a0e14]/90 group-hover:shadow-[0_0_25px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.4)] relative overflow-hidden">

                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* ── Flex Layout (Header & Date) ── */}
                    <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 mb-4">

                      {/* Left Side: Title, Stream, Institution */}
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="flex items-center gap-3 mb-1">
                          <div className={edu.iconContainerClass}>
                            <Icon className={edu.iconClass} />
                          </div>
                          <h3 className="text-slate-50 font-bold text-xl md:text-2xl tracking-wide">
                            {edu.title}
                          </h3>
                        </div>

                        {/* Stream (Top line, Dim) */}
                        {edu.stream && (
                          <h4 className="text-sm text-slate-500 ml-14 mt-1">
                            {edu.stream}
                          </h4>
                        )}

                        {/* Institution (Bottom line, Bright) */}
                        <h4 className="text-slate-300 text-sm md:text-base font-medium ml-14 mt-1">
                          {edu.institution}
                        </h4>

                        {/* Subtext (Additional Bottom line, Dim) */}
                        {edu.subText && (
                          <p className="text-sm text-slate-500 ml-14 mt-1">
                            {edu.subText}
                          </p>
                        )}
                      </div>

                      {/* Right Side: Premium Date Badge */}
                      <div className="shrink-0 md:pl-4 self-start ml-14 md:ml-0 mt-2 md:mt-1">
                        <span className="px-3 py-1 text-xs font-mono text-primary-300 bg-primary-500/10 border border-primary-500/20 rounded-full shadow-[0_0_10px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15)] inline-block">
                          {edu.badge}
                        </span>
                      </div>

                    </div>

                    <div className="w-full h-px bg-slate-700/60 my-5 ml-0 md:ml-14 max-w-full md:max-w-[calc(100%-3.5rem)]" />

                    <div className="ml-0 md:ml-14">
                      {/* Description */}
                      {edu.details && (
                        <p className="text-sm md:text-base text-slate-400 mb-3">
                          {edu.details}
                        </p>
                      )}

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
