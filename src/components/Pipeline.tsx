'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* ═══════════════════════════════════════════════════════════════════════
 *  CENTRAL PIPELINE — Background Layer (z-0)
 * ═══════════════════════════════════════════════════════════════════════ */
export function CentralPipelineBackground() {
  return (
    <div className="w-[24px] bg-[#0a0e14] h-full shadow-[0_0_20px_rgba(0,255,170,0.1)]" />
  );
}

/* ═══════════════════════════════════════════════════════════════════════
 *  CENTRAL PIPELINE — Trace Layer (z-[1])
 * ═══════════════════════════════════════════════════════════════════════ */

const FALL_DURATION = 12;
const NUM_PACKETS = 5;
const INTERVAL = FALL_DURATION / NUM_PACKETS;

export function CentralPipelineTrace() {
  const { scrollYProgress } = useScroll();
  const traceHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="w-[24px] h-full flex justify-center relative pointer-events-none
                    border-x-[2px] border-emerald-500/40">
      {/* Inner core trace (grows with scroll) */}
      <motion.div
        className="absolute top-0 w-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(0,230,160,1)] z-10"
        style={{ height: traceHeight }}
      />

      {/* Vertical data packets — travel INSIDE the channel */}
      {Array.from({ length: NUM_PACKETS }, (_, i) => (
        <motion.div
          key={`vp-${i}`}
          className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[12px] rounded-full
                     bg-[#00e6a0] shadow-[0_0_12px_rgba(0,230,160,0.9)] z-20"
          animate={{ top: ['-2%', '102%'] }}
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
 *  PIPELINE BRANCH — Horizontal connector (Fixed Logic)
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

  // FIX: Attach exactly to the outer edge of the central pipeline (100% of the parent's width)
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
                   shadow-[0_0_15px_rgba(0,255,170,0.15)]"
        style={{
          opacity,
          scaleX,
          // Scales outwards from the center spine
          transformOrigin: isLeft ? 'right' : 'left',
        }}
      >
        {/* Inner trace line */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-[2px] bg-emerald-400/60 shadow-[0_0_12px_rgba(0,230,160,0.8)]" />
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
                     bg-[#00e6a0] shadow-[0_0_12px_rgba(0,230,160,0.9)] z-10"
          animate={{
            // FIX: Uses clean percentages to travel the FULL container width outwards
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
                     bg-[#00e6a0] shadow-[0_0_12px_rgba(0,230,160,0.9)] z-10"
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