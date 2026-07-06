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

/* ─── Main Hero Panel ────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-0 px-4 overflow-hidden"
    >
      {/* ── Main Wide Panel ── */}
      <motion.div
        className="relative z-10 w-full max-w-5xl lg:max-w-6xl bg-[#0a0f16]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-14 shadow-[0_0_30px_rgba(52,211,153,0.15)] flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left Side (Content) ── */}
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          variants={itemVariants}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.1em] uppercase mb-4 drop-shadow-md">
            USHAN
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-emerald-400 h-[40px] md:h-[48px] mb-6">
            <Typewriter
              words={[
                'Full-Stack Developer',
                'DevOps & SRE Enthusiast',
                'AI/ML Enthusiast',
                'IoT Enthusiast'
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Passionate about building scalable automated software systems, modern web applications, and exploring the depths of cloud infrastructure, artificial intelligence, and internet of things.
          </p>
          
          {/* ── Action Buttons ── */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a 
              href="https://linkedin.com/in/ushan-perera-73a11b199" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-600 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 transition-colors bg-[#0a0f16]/50 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            
            <a 
              href="https://github.com/ushan111" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-600 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 transition-colors bg-[#0a0f16]/50 shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            
            <a 
              href="/Ushan_Perera_Resume.pdf" 
              download 
              className="bg-transparent border border-slate-600 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 h-12 bg-[#0a0f16]/50 shadow-lg"
            >
              <FaDownload size={14} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* ── Right Side (Image) ── */}
        <motion.div 
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 shrink-0 bg-[#0a0f16]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(52,211,153,0.15)] rounded-2xl overflow-hidden"
          variants={itemVariants}
        >
          <img
            src="/me.png"
            alt="Ushan Perera"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          {/* Inner glow on portrait */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* ── Connecting Animated Pipeline Below Panel ── */}
      <div className="relative z-10 flex justify-center mt-4 w-full h-24 md:h-32">
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
              y: [0, 128], // travel down
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
          />
        </div>
        {/* Top connector node */}
        <div className="absolute top-0 w-4 h-4 rounded-full border-[2px] border-emerald-400 bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,1)] z-10 -mt-2 left-1/2 -translate-x-1/2" />
      </div>
    </section>
  );
}