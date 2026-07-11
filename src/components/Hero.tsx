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
          className="flex-1 flex flex-col justify-center w-full"
          variants={itemVariants}
        >
          {/* ── TOP GROUP ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 mb-4 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs md:text-sm rounded-full shadow-[0_0_15px_rgba(52,211,153,0.2)]">Hi, I'm</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.04em] uppercase mb-4 drop-shadow-md">
              USHAN PERERA
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-emerald-400 h-[40px] md:h-[48px] mb-2">
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

            <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xl">
              Passionate about building scalable automated software systems, modern web applications, and exploring the depths of cloud infrastructure, artificial intelligence and internet of things.
            </p>
          </div>

          {/* ── BOTTOM GROUP ── */}
          <div className="mt-10 md:mt-12 flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className="p-5 md:p-6 rounded-xl bg-[#030508]/40 border border-white/5 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)] mb-6 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-[0_0_20px_rgba(52,211,153,0.1)] hover:-translate-y-1 group max-w-xl w-full text-left">
              <h3 className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-3">About Me</h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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
          </div>
        </motion.div>

        {/* ── Right Side (Image with Animated Border) ── */}
        <motion.div
          className="relative w-full max-w-[320px] md:max-w-[380px] aspect-[4/5] md:aspect-square rounded-2xl p-[2px] overflow-hidden group shrink-0 mx-auto md:mx-0"
          variants={itemVariants}
        >
          {/* Spinning Light Beam Background */}
          <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0a0f16_0%,#0a0f16_50%,#34d399_100%)]" />
          
          {/* Inner Image Mask */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0a0f16] z-10 flex items-center justify-center">
            {/* Ensure the img fills the container */}
            <img 
              src="/me.png" 
              alt="Profile" 
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              loading="eager"
            />
          </div>
        </motion.div>
      </motion.div>


    </section>
  );
}