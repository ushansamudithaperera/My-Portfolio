'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* ═══════════════════════════════════════════════════════════════════════
 *  CENTRAL PIPELINE — Background Layer (z-0)
 *  Plain dark fill only — NO borders here so the horizontal branches
 *  can slide underneath without visually breaking the vertical line.
 * ═══════════════════════════════════════════════════════════════════════ */
export function CentralPipelineBackground() {
  return (
    <div className="w-[24px] bg-[#0a0e14] h-full shadow-[0_0_20px_rgba(0,255,170,0.1)]" />
  );
}

/* ═══════════════════════════════════════════════════════════════════════
 *  CENTRAL PIPELINE — Trace Layer (z-[1])
 *  Owns the unbroken outer borders AND the inner core trace.
 *  Vertical data packets travel INSIDE this channel.
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
 *  PIPELINE BRANCH — Horizontal connector
 *  Sits behind the panel content. Data packets travel INSIDE this channel,
 *  flowing from the central spine outward toward the panel border.
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
  const positionOffset = offset || `-${width}`;

  return (
    <motion.div
      ref={ref}
      className="absolute top-1/2 -translate-y-1/2 h-[24px] bg-[#0a0e14]
                 border-y-[2px] border-emerald-500/40 flex items-center
                 shadow-[0_0_15px_rgba(0,255,170,0.15)] -z-10 overflow-hidden"
      style={{
        width,
        opacity,
        scaleX,
        transformOrigin: isLeft ? 'right' : 'left',
        [isLeft ? 'right' : 'left']: positionOffset,
      }}
    >
      {/* Inner trace line */}
      <div className="absolute w-full h-[2px] bg-emerald-400/60 shadow-[0_0_12px_rgba(0,230,160,0.8)]" />

      {/* Data packets: both use `left` — right side goes 0→100%, left side goes 100%→0% */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-[12px] h-[6px] rounded-full
                   bg-[#00e6a0] shadow-[0_0_12px_rgba(0,230,160,0.9)] z-10"
        animate={{
          left: isLeft
            ? ['calc(100% - 12px)', '-12px']   // start at right/center, move to left/panel
            : ['-12px', 'calc(100% - 12px)'],  // start at left/center, move to right/panel
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.3,
        }}
      />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-[12px] h-[6px] rounded-full
                   bg-[#00e6a0] shadow-[0_0_12px_rgba(0,230,160,0.9)] z-10"
        animate={{
          left: isLeft
            ? ['calc(100% - 12px)', '-12px']
            : ['-12px', 'calc(100% - 12px)'],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'linear',
          delay: 1.2,
        }}
      />
    </motion.div>
  );
}
