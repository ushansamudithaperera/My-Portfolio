'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
 *  CENTRAL PIPELINE — Trace Layer (z-20)
 *  Renders ON TOP of everything. Owns the unbroken outer borders AND
 *  the inner core trace so the vertical line is never interrupted.
 *  Also manages the globally-synchronized packet + junction-split system.
 * ═══════════════════════════════════════════════════════════════════════ */

// Timing constants
const FALL_DURATION = 14;   // seconds for one packet to travel full height
const NUM_PACKETS = 5;      // number of vertical packets in flight
const INTERVAL = FALL_DURATION / NUM_PACKETS; // stagger between packets

export function CentralPipelineTrace() {
  const { scrollYProgress } = useScroll();
  const traceHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const containerRef = useRef<HTMLDivElement>(null);
  const [totalH, setTotalH] = useState(0);
  const [junctionYs, setJunctionYs] = useState<number[]>([]);

  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setTotalH(rect.height);

      // Find all junction markers placed by PipelineBranch
      const markers = document.querySelectorAll('[data-pipeline-junction]');
      const ys = Array.from(markers).map((el) => {
        const r = el.getBoundingClientRect();
        return r.top - rect.top + r.height / 2;
      });
      // Deduplicate (left & right branch at same row share the same Y)
      const unique = [...new Set(ys.map((y) => Math.round(y)))].sort((a, b) => a - b);
      setJunctionYs(unique);
    }

    measure();
    const t = setTimeout(measure, 800);   // re-measure once layout settles
    window.addEventListener('resize', measure);
    return () => { clearTimeout(t); window.removeEventListener('resize', measure); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[24px] h-full flex justify-center relative pointer-events-none
                 border-x-[2px] border-emerald-500/40"
    >
      {/* Inner core trace (grows with scroll) */}
      <motion.div
        className="absolute top-0 w-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(0,230,160,1)] z-10"
        style={{ height: traceHeight }}
      />

      {/* Packet system */}
      {totalH > 0 && <PacketSystem height={totalH} junctions={junctionYs} />}
    </div>
  );
}

/* ───────────────────────────────────────────────────────────────────────
 *  PacketSystem — evenly-spaced vertical packets + junction peel-offs
 * ─────────────────────────────────────────────────────────────────────── */
function PacketSystem({ height, junctions }: { height: number; junctions: number[] }) {
  // 1. Vertical packets — smooth, even sequence top→bottom
  const verticals = Array.from({ length: NUM_PACKETS }, (_, i) => (
    <motion.div
      key={`vp-${i}`}
      className="absolute left-1/2 -translate-x-1/2 w-[8px] h-[14px] rounded-full
                 bg-[#00e6a0] shadow-[0_0_12px_rgba(0,230,160,0.9)] z-20"
      animate={{ top: [0, height] }}
      transition={{
        duration: FALL_DURATION,
        delay: i * INTERVAL,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  ));

  // 2. Junction peel-off packets
  //    For each junction Y we calculate the exact delay so the horizontal
  //    packets spawn precisely when a vertical packet crosses that Y.
  const peelOffs = junctions.flatMap((y, ji) => {
    const fraction = y / height;                       // 0–1 position
    const hitOffset = fraction * FALL_DURATION;        // time within one cycle
    const baseDelay = hitOffset % INTERVAL;            // align to interval

    const HORIZ_DURATION = 1.4; // seconds for horizontal travel

    return [
      // Left peel
      <motion.div
        key={`pl-${ji}`}
        className="absolute left-1/2 -translate-x-1/2 w-[14px] h-[4px] rounded-full
                   bg-[#00e6a0] shadow-[0_0_12px_rgba(0,230,160,0.9)] z-20"
        style={{ top: y }}
        animate={{
          x: [0, '-6vw'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: HORIZ_DURATION,
          delay: baseDelay,
          repeat: Infinity,
          repeatDelay: INTERVAL - HORIZ_DURATION,
          ease: 'easeOut',
        }}
      />,
      // Right peel
      <motion.div
        key={`pr-${ji}`}
        className="absolute left-1/2 -translate-x-1/2 w-[14px] h-[4px] rounded-full
                   bg-[#00e6a0] shadow-[0_0_12px_rgba(0,230,160,0.9)] z-20"
        style={{ top: y }}
        animate={{
          x: [0, '6vw'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: HORIZ_DURATION,
          delay: baseDelay,
          repeat: Infinity,
          repeatDelay: INTERVAL - HORIZ_DURATION,
          ease: 'easeOut',
        }}
      />,
    ];
  });

  // 3. Small static junction dots
  const dots = junctions.map((y, ji) => (
    <div
      key={`jd-${ji}`}
      className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full
                 bg-emerald-300 shadow-[0_0_8px_rgba(0,230,160,0.8)] z-30"
      style={{ top: y - 3 }}
    />
  ));

  return (
    <>
      {verticals}
      {peelOffs}
      {dots}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
 *  PIPELINE BRANCH — Horizontal connector
 *  Sits at z-[-1] so it slides UNDER the vertical trace-layer borders,
 *  ensuring the vertical line is never visually broken.
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
                 shadow-[0_0_15px_rgba(0,255,170,0.15)] -z-10"
      style={{
        width,
        opacity,
        scaleX,
        transformOrigin: isLeft ? 'right' : 'left',
        [isLeft ? 'right' : 'left']: positionOffset,
      }}
    >
      {/* Inner trace */}
      <div className="absolute w-full h-[2px] bg-emerald-400/60 shadow-[0_0_12px_rgba(0,230,160,0.8)]" />

      {/* Invisible junction marker — used by CentralPipelineTrace to detect Y positions */}
      <div
        data-pipeline-junction
        className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 ${
          isLeft ? 'right-0' : 'left-0'
        }`}
      />
    </motion.div>
  );
}
