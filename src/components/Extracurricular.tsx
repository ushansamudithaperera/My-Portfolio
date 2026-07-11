'use client';

import { motion } from 'framer-motion';

const activitiesData = [
  {
    role: 'Membership Coordinator',
    organization: 'UOK Robot Battles',
    period: 'Mar 2025 - Aug 2025',
    imgSrc: '/robot_games.png',
    glowClass: 'border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]',
    dropShadowClass: 'drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]',
    details: [
      'Communicated competition details and updates to registered members through emails and phone calls.',
      'Provided support to fellow membership coordinators in managing participant engagement activities.',
      'Assisted the organizing committee in ensuring effective coordination of membership-related operations.'
    ]
  },
  {
    role: 'Member',
    organization: 'Electronics and Computer Science Club (ECSC)',
    period: 'Jun 2023 - Present',
    imgSrc: '/ecsc.png',
    glowClass: 'border-slate-400/30 shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]',
    dropShadowClass: 'drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]',
    details: [
      'Contributed to organizing and executing major technical events, boosting student engagement in modern computing.'
    ]
  }
];

export default function Extracurricular() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-4 sm:px-6" id="extracurricular">


      <div className="relative w-full max-w-5xl mx-auto bg-[#0a0f16]/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_30px_rgba(52,211,153,0.05)] z-10">
        {/* Inside Header */}
        <div className="flex flex-col items-center justify-center mb-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-white uppercase text-center mb-2">
            EXTRA-CURRICULAR
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-mono tracking-[0.1em] uppercase text-center">
            STEP 6: COMMUNITY & LEADERSHIP
          </p>
        </div>

        {/* ── Cards Container (Vertical Timeline) ── */}
        <div className="relative flex flex-col gap-8 pl-8 md:pl-12 z-10 mt-4">
          {activitiesData.map((activity, idx) => {
            const isLast = idx === activitiesData.length - 1;
            const Icon = activity.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative group w-full"
              >
                {/* ── Secondary Animated Vertical Pipeline Segment ── */}
                {!isLast && (
                  <div className="absolute -left-[29px] md:-left-[45px] top-[32px] w-[16px] h-[calc(100%+32px)] border-x border-emerald-500/30 z-0 overflow-hidden flex justify-center">
                    <motion.div
                      className="absolute w-[6px] h-[16px] bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,1)] z-10"
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
                <div className="absolute -left-[29px] md:-left-[45px] top-[24px] w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] border-[3px] border-[#0a0e14] z-10 transition-transform duration-300 group-hover:scale-125" />

                {/* Connecting horizontal branch */}
                <div className="absolute -left-[13px] md:-left-[29px] top-[31px] w-[13px] md:w-[29px] h-[2px] bg-emerald-500/30 shadow-[0_0_8px_rgba(0,255,170,0.5)] z-0" />

                {/* ── Inner Card ── */}
                <div className="bg-[#141923]/60 border border-[#00ffaa]/20 rounded-3xl p-6 md:p-8 shadow-[0_0_20px_rgba(0,255,170,0.15)] backdrop-blur-xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300 relative">

                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* ── Card Header (Flex for Date Badge on Right) ── */}
                  <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-6 mb-8 border-b border-slate-800/80 pb-6 relative z-10">

                    {/* Left Side: Thumbnail, Title, Org */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      {/* Glowing Thumbnail */}
                      <div className={`relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-[#0f141c]/90 backdrop-blur-md border rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 ${activity.glowClass}`}>
                        <img
                          src={activity.imgSrc}
                          alt={activity.organization}
                          className={`relative z-10 w-[70%] h-[70%] object-contain mix-blend-screen ${activity.dropShadowClass}`}
                        />
                      </div>

                      {/* Title & Organization */}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors">
                          {activity.role}
                        </h3>
                        <p className="text-sm md:text-base text-emerald-400/90 font-medium">
                          {activity.organization}
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Premium Date Badge */}
                    <div className="shrink-0 mt-2 sm:mt-0">
                      <span className="px-3 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.15)] inline-block tracking-wider">
                        {activity.period}
                      </span>
                    </div>
                  </div>

                  {/* ── Card Details ── */}
                  <ul className="space-y-4 relative z-10">
                    {activity.details.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,255,170,0.8)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
