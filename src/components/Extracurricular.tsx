'use client';

import { motion } from 'framer-motion';
import { FaRobot, FaMicrochip } from 'react-icons/fa';

const activitiesData = [
  {
    role: 'Membership Coordinator',
    organization: 'UOK Robot Battles',
    period: 'Mar 2025 - Aug 2025',
    icon: FaRobot,
    color: 'text-rose-500',
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
    icon: FaMicrochip,
    color: 'text-cyan-400',
    details: [
      'Contributed to organizing and executing major technical events, boosting student engagement in modern computing.'
    ]
  }
];

export default function Extracurricular() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-4 sm:px-6" id="extracurricular">
      
      {/* ── Central Pipeline ── */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-emerald-500/80 shadow-[0_0_15px_rgba(0,255,170,0.8)] -translate-x-1/2 z-0" />
      
      {/* ── Section Header ── */}
      <div className="text-center mb-16 relative z-10 bg-slate-950/60 backdrop-blur-md py-4 rounded-3xl border border-slate-800/50 inline-block left-1/2 -translate-x-1/2 px-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase shadow-emerald-500/50 drop-shadow-lg"
        >
          Extra-Curricular Panel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-emerald-400 mt-2 tracking-widest font-mono uppercase"
        >
          Step 6: Community & Leadership
        </motion.p>
      </div>

      {/* ── Cards Container ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
        {activitiesData.map((activity, idx) => {
          const Icon = activity.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group bg-[#141923]/60 border border-[#00ffaa]/20 rounded-3xl p-6 md:p-8 shadow-[0_0_20px_rgba(0,255,170,0.15)] backdrop-blur-xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300 flex flex-col"
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* ── Card Header & Thumbnail ── */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 border-b border-slate-800/80 pb-6">
                
                {/* Glowing Thumbnail */}
                <div className="relative w-20 h-20 shrink-0 bg-[#060a13] border border-slate-700/80 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  {/* Internal grid pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(0,255,170,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,0.3) 1px, transparent 1px)',
                    backgroundSize: '8px 8px'
                  }} />
                  <div className={`absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity ${activity.color}`} />
                  <Icon size={36} className={`relative z-10 ${activity.color} drop-shadow-[0_0_10px_currentColor]`} />
                </div>
                
                {/* Title & Organization */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors">
                    {activity.role}
                  </h3>
                  <p className="text-sm md:text-base text-emerald-400/90 font-medium mt-1">
                    {activity.organization}
                  </p>
                  <span className="inline-block mt-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-slate-700/50">
                    {activity.period}
                  </span>
                </div>
              </div>

              {/* ── Card Details ── */}
              <ul className="space-y-4 flex-grow">
                {activity.details.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,255,170,0.8)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
