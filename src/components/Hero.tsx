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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const },
  },
};

/* ─── Floating Particles ─────────────────────────────────────────── */

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-emerald-400/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* ─── Portrait Frame ─────────────────────────────────────────────── */

function PortraitFrame() {
  return (
    <motion.div className="relative mx-auto" variants={scaleIn}>
      {/* Outer glow ring */}
      <div className="absolute -inset-1 rounded-2xl opacity-50 blur-md bg-gradient-to-br from-teal-500/40 via-emerald-500/30 to-cyan-500/40" />

      {/* Portrait container */}
      <div
        className="relative w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden"
        style={{
          border: '2px solid transparent',
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.8)), linear-gradient(135deg, #0d9488, #00e676, #0d9488)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        {/* Image */}
        <img
          src="/me.png"
          alt="Ushan Perera"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />

        {/* Subtle overlay gradient for blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
      </div>

      {/* Corner accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-emerald-400/60 rounded-tl-lg" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-emerald-400/60 rounded-tr-lg" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-emerald-400/60 rounded-bl-lg" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-emerald-400/60 rounded-br-lg" />
    </motion.div>
  );
}

/* ─── Social Icon Button ─────────────────────────────────────────── */

function SocialButton({
  href,
  icon,
  label,
  hoverColor,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverColor: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative flex items-center justify-center w-11 h-11 rounded-full text-slate-400 transition-all duration-300 group"
      style={{
        border: '1px solid rgba(71,85,105,0.4)',
        background: 'rgba(15,23,42,0.4)',
      }}
      whileHover={{
        scale: 1.1,
        borderColor: hoverColor,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 16px ${hoverColor}40, inset 0 0 8px ${hoverColor}15`,
        }}
      />
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {icon}
      </span>
    </motion.a>
  );
}

/* ─── Action Button ──────────────────────────────────────────────── */

function ActionButton({
  href,
  icon,
  text,
  download,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  download?: boolean;
}) {
  return (
    <motion.a
      href={href}
      download={download || undefined}
      className="relative flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-[13px] font-semibold tracking-wider text-slate-300 transition-all duration-300 group overflow-hidden"
      style={{
        border: '1px solid rgba(71,85,105,0.4)',
        background: 'rgba(15,23,42,0.4)',
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover fill sweep */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-full"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,230,118,0.08), rgba(0,230,118,0.02))',
          boxShadow:
            '0 0 20px rgba(0,230,118,0.1), inset 0 0 12px rgba(0,230,118,0.05)',
        }}
      />
      {/* Border glow on hover */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          border: '1px solid rgba(0,230,118,0.3)',
        }}
      />
      <span className="relative z-10 group-hover:text-emerald-300 transition-colors duration-300">
        {icon}
      </span>
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </motion.a>
  );
}

/* ─── Main Hero / BUILD Panel ────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden"
    >
      {/* ── Background Layers ── */}

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,230,118,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow behind card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,230,118,0.06) 0%, rgba(13,148,136,0.03) 40%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* ── BUILD Panel Card ── */}
      <motion.div
        className="relative z-10 w-full max-w-sm"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glass card */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(20px) saturate(1.3)',
            WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
            border: '1px solid rgba(71, 85, 105, 0.25)',
            boxShadow:
              '0 8px 32px rgba(0,0,0,0.4), 0 0 60px rgba(0,230,118,0.04), inset 0 1px 0 rgba(255,255,255,0.03)',
          }}
        >
          {/* Inner content with padding */}
          <div className="px-6 pt-6 pb-7 flex flex-col items-center text-center">

            {/* ── Panel Header ── */}
            <motion.div className="mb-5" variants={itemVariants}>
              <h2 className="text-lg font-bold text-white tracking-[0.15em] uppercase">
                BUILD
              </h2>
              <p className="text-[11px] text-slate-500 tracking-wider mt-0.5">
                Step 1: Source Code &amp; Identity
              </p>
            </motion.div>

            {/* ── Divider ── */}
            <motion.div
              className="w-full h-[1px] mb-5 bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"
              variants={itemVariants}
            />

            {/* ── Portrait ── */}
            <PortraitFrame />

            {/* ── Name ── */}
            <motion.div className="mt-5" variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-[0.1em] uppercase">
                USHAN
              </h1>
              <p className="text-sm text-slate-400 mt-1 tracking-wide">
                Software Engineer
              </p>
            </motion.div>

            {/* ── Typewriter Roles ── */}
            <motion.div
              className="mt-3 h-[28px] flex items-center justify-center"
              variants={itemVariants}
            >
              <span className="text-base font-medium text-cyan-300">
                <Typewriter
                  words={[
                    'Full-Stack Developer',
                    'DevOps & SRE Enthusiast',
                    'AI & ML Enthusiast',
                    'IoT Enthusiast',
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.div>

            {/* ── Bio Text ── */}
            <motion.p
              className="text-[13px] text-slate-400/80 leading-relaxed mt-4 max-w-[280px]"
              variants={itemVariants}
            >
              Passionate about building scalable automated software systems,
              modern web applications, and exploring the depths of cloud
              infrastructure, artificial intelligence and internet of things.
            </motion.p>

            {/* ── Divider ── */}
            <motion.div
              className="w-full h-[1px] my-5 bg-gradient-to-r from-transparent via-slate-600/30 to-transparent"
              variants={itemVariants}
            />

            {/* ── Social Buttons ── */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              variants={itemVariants}
            >
              <SocialButton
                href="https://www.linkedin.com/in/ushan-perera-16ab952b3/"
                icon={<FaLinkedin size={18} />}
                label="LinkedIn"
                hoverColor="#0077b5"
              />
              <SocialButton
                href="https://github.com/ushansamudithaperera"
                icon={<FaGithub size={18} />}
                label="GitHub"
                hoverColor="#00e676"
              />
            </motion.div>

            {/* ── Download CV Button ── */}
            <motion.div className="w-full" variants={itemVariants}>
              <ActionButton
                href="/Ushan_Perera_Resume.pdf"
                icon={<FaDownload size={13} />}
                text="Download CV"
                download
              />
            </motion.div>
          </div>

          {/* ── Card edge glow accents ── */}

          {/* Top edge emerald glow */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-[1px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(0,230,118,0.2), transparent)',
            }}
          />

          {/* Bottom edge subtle glow */}
          <div
            className="absolute bottom-0 left-[15%] right-[15%] h-[1px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(0,230,118,0.1), transparent)',
            }}
          />
        </div>

        {/* ── Ambient light beneath the card ── */}
        <div
          className="absolute -bottom-6 left-[10%] right-[10%] h-12 rounded-full blur-2xl pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0,230,118,0.08), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}