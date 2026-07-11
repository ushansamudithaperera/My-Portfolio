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
        className="relative z-10 w-full max-w-6xl lg:max-w-7xl bg-[#141923]/60 backdrop-blur-xl border border-[#00ffaa]/20 rounded-3xl p-12 md:p-16 shadow-[0_0_30px_rgba(0,255,170,0.15)] flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Left Side (Content) ── */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          variants={itemVariants}
        >
          <span className="text-emerald-400 text-sm md:text-base font-mono tracking-wider mb-2 block">Hi, I'm</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.04em] uppercase mb-4 drop-shadow-md">
            USHAN PERERA
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

          <div className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-10 text-center md:text-left">
            <p>
              Passionate about building scalable automated software systems, modern web applications, and exploring the depths of cloud infrastructure, artificial intelligence and internet of things.
            </p>
            <h3 className="text-white/80 font-semibold mt-4 mb-1">About Me</h3>
            <p>
              BSc (Hons) in Electronics and Computer Science undergraduate with hands-on experience building real-time secure networks and AI-integrated platforms. Seeking a technical internship to utilize expertise in Software Engineering, API development, AI & ML and DevOps practices within a fast-paced technology environment.
            </p>
          </div>

          {/* ── Action Buttons ── */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="https://linkedin.com/in/ushan-perera-73a11b199"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-600 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 transition-colors bg-[#141923]/50 shadow-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/ushan111"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-600 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 transition-colors bg-[#141923]/50 shadow-lg"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="/Ushan_Perera_Resume.pdf"
              download
              className="bg-transparent border border-slate-600 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 h-12 bg-[#141923]/50 shadow-lg"
            >
              <FaDownload size={14} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* ── Right Side (Image with Animated Border) ── */}
        <motion.div
          className="relative w-full max-w-[280px] md:max-w-[320px] aspect-square rounded-2xl p-[2px] overflow-visible shrink-0 mx-auto md:mx-0"
          variants={itemVariants}
        >
          {/* Animated Glowing Dot Border */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }} 
            className="absolute inset-0 z-0 flex items-start justify-center"
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399] -mt-1.5" />
          </motion.div>

          {/* Actual Image Container covering the inside */}
          <div className="relative z-10 w-full h-full bg-[#0a0f16] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,255,170,0.15)] border border-[#141923]">
            <img
              src="/me.png"
              alt="Ushan Perera"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            {/* Inner glow on portrait */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>


    </section>
  );
}