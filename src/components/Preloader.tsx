'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Configuration ──────────────────────────────────────────────── */

const BOOT_MESSAGES = [
  { text: '> System Initializing...', delay: 0 },
  { text: '> Loading kernel modules...', delay: 400 },
  { text: '> Mounting file systems...', delay: 800 },
  { text: '> Booting CI/CD Modules...', delay: 1400 },
  { text: '> Compiling assets pipeline...', delay: 1900 },
  { text: '> Loading Core Data...', delay: 2500 },
  { text: '> Establishing secure connections...', delay: 3000 },
  { text: '> Deploying containers...', delay: 3400 },
  { text: '> Running health checks...', delay: 3900 },
  { text: '> System Ready. (100%)', delay: 4600 },
];

const CODE_SNIPPETS = [
  'pipeline { agent any }',
  'docker build -t portfolio:latest .',
  'kubectl apply -f deployment.yaml',
  'npm run build && npm run export',
  'git push origin main --force-with-lease',
  'terraform plan -out=tfplan',
  'ansible-playbook deploy.yml -i hosts',
  'aws s3 sync ./dist s3://bucket --delete',
  'helm upgrade --install app ./chart',
  'ssh deploy@prod "systemctl restart app"',
  'curl -s https://api.health | jq .status',
  'docker-compose up -d --build',
  'certbot renew --nginx --quiet',
  'rsync -avz ./build/ server:/var/www/',
  'echo "BUILD_ID=$(git rev-parse HEAD)"',
  'pytest tests/ -v --cov=src --cov-report=html',
  'ng build --configuration production',
  'gradle bootJar && java -jar app.jar',
  'redis-cli FLUSHALL && redis-cli PING',
  'pg_dump -Fc mydb > backup.dump',
];

const TOTAL_DURATION = 5000; // ms for the progress bar to reach 100%
const FADE_OUT_DELAY = 600;  // ms after 100% before fade-out starts

/* ─── Subcomponents ──────────────────────────────────────────────── */

/** Scrolling code lines in the background */
function MatrixCodeRain() {
  const columns = 3;
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.07] pointer-events-none select-none">
      <div className="flex h-full gap-8 px-4">
        {Array.from({ length: columns }).map((_, colIdx) => (
          <motion.div
            key={colIdx}
            className="flex-1 flex flex-col gap-1 text-[11px] font-mono text-emerald-400 whitespace-nowrap"
            initial={{ y: colIdx % 2 === 0 ? '-50%' : '0%' }}
            animate={{ y: colIdx % 2 === 0 ? '0%' : '-50%' }}
            transition={{
              duration: 20 + colIdx * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {Array.from({ length: 60 }).map((_, lineIdx) => (
              <div key={lineIdx} className="leading-relaxed">
                {CODE_SNIPPETS[(lineIdx + colIdx * 7) % CODE_SNIPPETS.length]}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Animated scan line effect */
function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[2px] pointer-events-none z-20"
      style={{
        background:
          'linear-gradient(90deg, transparent, rgba(0,230,118,0.15), transparent)',
      }}
      initial={{ top: '-2px' }}
      animate={{ top: '100%' }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/** The glowing progress bar */
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Label */}
      <div className="flex justify-between items-center mb-2 font-mono text-xs">
        <span className="text-emerald-400/80">Progress Bar</span>
        <span className="text-emerald-300 tabular-nums">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-[18px] rounded-full border border-emerald-500/30 bg-slate-900/60 backdrop-blur-sm overflow-hidden">
        {/* Fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            width: `${progress}%`,
            background:
              'linear-gradient(90deg, #059669, #00e676, #4ade80, #00e676)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Glow pulse on the fill edge */}
        {progress > 2 && (
          <motion.div
            className="absolute top-0 bottom-0 w-8 rounded-full"
            style={{
              left: `calc(${progress}% - 32px)`,
              background:
                'radial-gradient(ellipse at center, rgba(0,230,118,0.6), transparent)',
              filter: 'blur(6px)',
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        )}

        {/* Shimmer sweep */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
          animate={{ backgroundPosition: ['-200% 0%', '200% 0%'] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Tick marks */}
      <div className="flex justify-between mt-1 px-[1px]">
        {[0, 25, 50, 75, 100].map((tick) => (
          <div key={tick} className="flex flex-col items-center">
            <div
              className={`w-[1px] h-1.5 ${
                progress >= tick
                  ? 'bg-emerald-400/80'
                  : 'bg-slate-600/40'
              }`}
            />
            <span
              className={`text-[9px] font-mono mt-0.5 ${
                progress >= tick
                  ? 'text-emerald-400/60'
                  : 'text-slate-600/40'
              }`}
            >
              {tick}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Boot sequence terminal messages */
function TerminalMessages({
  visibleCount,
  isComplete,
}: {
  visibleCount: number;
  isComplete: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleCount]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-lg mx-auto mt-6 h-[180px] overflow-hidden font-mono text-sm space-y-1"
    >
      {BOOT_MESSAGES.slice(0, visibleCount).map((msg, idx) => {
        const isLast = idx === visibleCount - 1;
        const isSystemReady = msg.text.includes('System Ready');

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-center gap-2 ${
              isSystemReady
                ? 'text-emerald-300 font-bold'
                : 'text-emerald-500/70'
            }`}
          >
            {/* Status indicator */}
            <span className="flex-shrink-0 w-2 h-2 rounded-full relative">
              <span
                className={`absolute inset-0 rounded-full ${
                  isSystemReady
                    ? 'bg-emerald-400'
                    : isLast && !isComplete
                      ? 'bg-amber-400'
                      : 'bg-emerald-600'
                }`}
              />
              {isLast && !isComplete && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-amber-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </span>

            <span>{msg.text}</span>

            {/* Blinking cursor on the latest line */}
            {isLast && !isComplete && (
              <motion.span
                className="inline-block w-[7px] h-[14px] bg-emerald-400 ml-0.5"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Main Preloader ─────────────────────────────────────────────── */

export default function Preloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const startTimeRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  // Smooth progress animation via requestAnimationFrame
  const animateProgress = useCallback(() => {
    const elapsed = Date.now() - startTimeRef.current;
    const raw = Math.min((elapsed / TOTAL_DURATION) * 100, 100);

    // Easing: ease-in-out cubic for natural feel
    const t = raw / 100;
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const easedProgress = eased * 100;

    setProgress(easedProgress);

    if (raw < 100) {
      rafRef.current = requestAnimationFrame(animateProgress);
    } else {
      // 100% reached — trigger fade-out after a short delay
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => setIsLoading(false), 800); // match exit animation duration
      }, FADE_OUT_DELAY);
    }
  }, []);

  // Schedule terminal messages
  useEffect(() => {
    const timers = BOOT_MESSAGES.map((msg, idx) =>
      setTimeout(() => setVisibleMessages(idx + 1), msg.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Start progress animation
  useEffect(() => {
    startTimeRef.current = Date.now();
    rafRef.current = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animateProgress]);

  const isComplete = progress >= 99.5;

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
            style={{ background: '#0a0e17' }}
          >
            {/* ── Background Layers ── */}

            {/* Noise grain texture */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundSize: '128px 128px',
              }}
            />

            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,230,118,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.3) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            {/* Radial vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
              }}
            />

            {/* Matrix code rain */}
            <MatrixCodeRain />

            {/* Scan line */}
            <ScanLine />

            {/* ── Content ── */}
            <div className="relative z-10 flex flex-col items-center w-full px-6">
              {/* Top decorative line */}
              <motion.div
                className="w-full max-w-lg mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
              </motion.div>

              {/* Terminal header bar */}
              <motion.div
                className="w-full max-w-lg mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 bg-slate-800/40 border border-slate-700/30 rounded-t-lg px-4 py-2 backdrop-blur-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-slate-500">
                    ushan@portfolio:~$
                  </span>
                </div>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  textShadow: '0 0 40px rgba(0,230,118,0.2), 0 0 80px rgba(0,230,118,0.1)',
                }}
              >
                System Initializing
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </motion.h1>

              {/* Progress bar */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ProgressBar progress={progress} />
              </motion.div>

              {/* Terminal messages */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <TerminalMessages
                  visibleCount={visibleMessages}
                  isComplete={isComplete}
                />
              </motion.div>

              {/* Bottom decorative line */}
              <motion.div
                className="w-full max-w-lg mt-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              >
                <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
              </motion.div>

              {/* Status badge */}
              <motion.div
                className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isComplete ? 'bg-emerald-400' : 'bg-amber-400'
                  }`}
                  animate={{
                    opacity: isComplete ? 1 : [1, 0.3, 1],
                    scale: isComplete ? [1, 1.3, 1] : 1,
                  }}
                  transition={{
                    duration: isComplete ? 0.4 : 1,
                    repeat: isComplete ? 0 : Infinity,
                  }}
                />
                {isComplete ? 'All systems operational' : 'Booting up'}
              </motion.div>
            </div>

            {/* ── Fade overlay on exit ── */}
            <AnimatePresence>
              {isFadingOut && (
                <motion.div
                  className="absolute inset-0 z-50 bg-slate-950"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main site content ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
