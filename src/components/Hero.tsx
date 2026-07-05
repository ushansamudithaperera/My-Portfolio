'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';

/* ─── Animation Variants ─────────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

/* ─── Main Hero / BUILD Panel ────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center pt-32 pb-0 px-4 overflow-hidden"
    >
      {/* ── BUILD Panel Card (Larger Size) ── */}
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-14 shadow-2xl flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Panel Header ── */}
        <motion.div className="mb-8 w-full" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase">
            BUILD
          </h2>
          <p className="text-xs md:text-sm text-slate-400 tracking-[0.15em] mt-1 uppercase">
            Step 1: Source & Build
          </p>
        </motion.div>

        {/* ── Inner Card ("Card inside a card") ── */}
        <motion.div 
          className="relative w-full max-w-md bg-[#0a0f16]/60 border border-emerald-400/50 shadow-[0_0_15px_rgba(52,211,153,0.3)] rounded-2xl p-6 md:p-8 flex flex-col items-center"
          variants={itemVariants}
        >
          {/* Portrait */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-emerald-400/30 mb-6 shadow-inner bg-slate-900">
            <img
              src="/me.png"
              alt="Ushan Perera"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            {/* Inner glow on portrait */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent pointer-events-none" />
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-[0.1em] uppercase mb-1">
            USHAN
          </h1>
          <p className="text-emerald-400 text-sm md:text-base font-medium tracking-wide mb-4 uppercase">
            Software Engineer
          </p>

          {/* Bio Text */}
          <p className="text-slate-300 text-sm leading-relaxed max-w-[350px]">
            Passionate about building scalable automated software systems,
            modern web applications, and exploring the depths of cloud
            infrastructure, artificial intelligence, and internet of things.
          </p>

          {/* ── Action Buttons ── */}
          <div className="w-full flex flex-col gap-3 mt-8">
            <a href="#contact" className="w-full bg-white hover:bg-slate-200 text-[#0a0f16] font-bold py-3 rounded-lg transition-colors flex items-center justify-center">
              Contact
            </a>
            <a href="/Ushan_Perera_Resume.pdf" download className="w-full bg-transparent border border-slate-600 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <FaDownload size={14} />
              Download CV
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Connecting Animated Pipeline Below Panel ── */}
      <div className="relative z-10 flex justify-center mt-4 w-full h-32 md:h-48">
        
        {/* Animated vertical green line */}
        <div className="relative w-1.5 h-full bg-emerald-900/40 rounded-full overflow-hidden flex justify-center shadow-[0_0_10px_rgba(16,185,129,0.2)]">
          
          {/* Growing line effect */}
          <motion.div 
            className="absolute top-0 w-full bg-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.8)]"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          />

          {/* Traveling Data Packet (Glowing Dot) */}
          <motion.div
            className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1),0_0_15px_rgba(16,185,129,1)]"
            animate={{
              y: [0, 192], // travel down (using approx h-48 height 192px)
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 2 // Start after line grows
            }}
          />
        </div>

        {/* Top connector node */}
        <div className="absolute top-0 w-4 h-4 rounded-full border-[2px] border-emerald-400 bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,1)] z-10 -mt-2 left-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
}