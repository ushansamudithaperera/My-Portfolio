'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* ═══════════════════════════════════════════════════════════════════════
 * CENTRAL PIPELINE — Background Layer (z-0)
 * ═══════════════════════════════════════════════════════════════════════ */
export function CentralPipelineBackground() {
  return (
    <div className="w-[24px] bg-[#0a0e14] h-full shadow-[0_0_20px_rgba(0,255,170,0.1)]" />
  );
}

/* ═══════════════════════════════════════════════════════════════════════
 * CENTRAL PIPELINE — Trace Layer (z-[1])
 * (Fixed: NO solid lines at all. Only the borders and the data packets)
 * ═══════════════════════════════════════════════════════════════════════ */

const FALL_DURATION = 12; // පරණ Normal Speed එකමයි
const NUM_PACKETS = 15;   // Packets ගාණ වැඩි කරලා තියෙන්නේ (ළඟින් ළඟින් යන්න)
const INTERVAL = FALL_DURATION / NUM_PACKETS;

export function CentralPipelineTrace() {
  return (
    // මෙතන ඇතුලේ කිසිම Background Color එකක් හරි Static line එකක් හරි නෑ. හිස් ටියුබ් එකක්.
    <div className="w-[24px] h-full flex justify-center relative pointer-events-none
                    border-x-[2px] border-emerald-500/40 overflow-hidden">

      {/* Vertical data packets ONLY — travel INSIDE the hollow channel */}
      {Array.from({ length: NUM_PACKETS }, (_, i) => (
        <motion.div
          key={`vp-${i}`}
          // Data packet එකේ හැඩය
          className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[16px] rounded-full
                     bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] z-20"
          animate={{ top: ['-5%', '105%'] }}
          transition={{
            duration: FALL_DURATION,
            delay: i * INTERVAL,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
 * PIPELINE BRANCH — Horizontal connector
 * ═══════════════════════════════════════════════════════════════════════ */
export function PipelineBranch({
  direction = 'left',
  width = '4vw',
  offset,
}: {
  direction?: 'left' | 'right';
  width?: string;
  offset?: string;
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isLeft = direction === 'left';
  const attachEdge = offset || '100%';

  return (
    /* Outer wrapper */
    <div
      ref={ref}
      className="absolute top-1/2 -translate-y-1/2 h-[24px] -z-10"
      style={{
        width,
        [isLeft ? 'right' : 'left']: attachEdge,
      }}
    >
      {/* Layer 1: Scaled background — entrance grow animation */}
      <motion.div
        className="absolute inset-0 bg-[#0a0e14] border-y-[2px] border-emerald-500/40
                   shadow-[0_0_15px_rgba(52,211,153,0.15)]"
        style={{
          opacity,
          scaleX,
          transformOrigin: isLeft ? 'right' : 'left',
        }}
      >
        {/* Inner faint track line (very low opacity so it doesn't look like a solid bar) */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-[2px] bg-emerald-400/20" />
        </div>
      </motion.div>

      {/* Layer 2: Packet container */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ opacity }}
      >
        {/* Packet 1 */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[12px] h-[6px] rounded-full
                     bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] z-10"
          animate={{
            left: isLeft ? ['100%', '-10%'] : ['-10%', '100%'],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.3,
          }}
        />
        {/* Packet 2 */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-[12px] h-[6px] rounded-full
                     bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] z-10"
          animate={{
            left: isLeft ? ['100%', '-10%'] : ['-10%', '100%'],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'linear',
            delay: 1.2,
          }}
        />
      </motion.div>
    </div>
  );
}