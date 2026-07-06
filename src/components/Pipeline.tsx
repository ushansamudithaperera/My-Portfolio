'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * ─── Central Pipeline (Background Layer) ──────────────────────────────
 * Renders behind the grid (z-0) so horizontal branches can overlap it.
 */
export function CentralPipelineBackground() {
  return (
    <div className="w-[24px] bg-[#0a0e14] border-x-[2px] border-emerald-500/40 flex justify-center h-full shadow-[0_0_20px_rgba(0,255,170,0.1)]" />
  );
}

/**
 * ─── Central Pipeline (Inner Trace Layer) ──────────────────────────────
 * Renders in front of the grid (z-20) so the core trace crosses over branches.
 */
export function CentralPipelineTrace() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="w-[24px] h-full flex justify-center relative overflow-hidden">
      {/* The Core Flow (Inner Trace) */}
      <motion.div 
        className="absolute top-0 w-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(0,230,160,1)] z-10"
        style={{ height }}
      />
      {/* Data Packets */}
      <DataPacket delay={0} duration={8} />
      <DataPacket delay={2} duration={8} />
      <DataPacket delay={4} duration={8} />
      <DataPacket delay={6} duration={8} />
    </div>
  );
}

/**
 * ─── Data Packet ─────────────────────────────────────────────────────
 * Animated glowing node traveling down the vertical track.
 */
function DataPacket({ delay, duration }: { delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute w-[8px] h-[16px] rounded-full bg-[#00e6a0] z-20"
      style={{
        boxShadow: '0 0 15px rgba(0,230,160,1)',
      }}
      animate={{
        top: ['-5%', '105%'],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/**
 * ─── Pipeline Branch ─────────────────────────────────────────────────
 * Hollow horizontal branching line that overlaps the vertical background
 * but sits beneath the vertical inner trace, creating a seamless T-junction.
 */
export function PipelineBranch({ 
  direction = 'left',
  width = '4vw', 
  offset 
}: { 
  direction?: 'left' | 'right';
  width?: string;
  offset?: string;
}) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isLeft = direction === 'left';
  const positionOffset = offset || `-${width}`;

  return (
    <motion.div
      ref={ref}
      className={`absolute top-1/2 -translate-y-1/2 h-[24px] bg-[#0a0e14] border-y-[2px] border-emerald-500/40 flex items-center shadow-[0_0_15px_rgba(0,255,170,0.2)] -z-10`}
      style={{ 
        width,
        opacity, 
        scaleX,
        transformOrigin: isLeft ? 'right' : 'left', 
        [isLeft ? 'right' : 'left']: positionOffset 
      }}
    >
       {/* Core Inner Trace */}
       <div className="absolute w-full h-[2px] bg-emerald-400/80 shadow-[0_0_15px_rgba(0,230,160,1)] z-0" />

       {/* Horizontal Data Packets flowing from center to panel border */}
       <motion.div 
         className="absolute top-1/2 -translate-y-1/2 w-[16px] h-[8px] rounded-full bg-[#00e6a0] shadow-[0_0_15px_rgba(0,230,160,1)] z-10"
         animate={{
           left: isLeft ? ['100%', '0%'] : ['0%', '100%'],
           opacity: isLeft ? [0, 1, 1, 0] : [0, 1, 1, 0] 
         }}
         transition={{
           duration: 2,
           repeat: Infinity,
           ease: 'linear',
           delay: 0.5 
         }}
       />
       
       <motion.div 
         className="absolute top-1/2 -translate-y-1/2 w-[16px] h-[8px] rounded-full bg-[#00e6a0] shadow-[0_0_15px_rgba(0,230,160,1)] z-10"
         animate={{
           left: isLeft ? ['100%', '0%'] : ['0%', '100%'],
           opacity: isLeft ? [0, 1, 1, 0] : [0, 1, 1, 0]
         }}
         transition={{
           duration: 2,
           repeat: Infinity,
           ease: 'linear',
           delay: 1.5 
         }}
       />

       {/* Small hollow plug ring exactly at the panel border */}
       <div 
         className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0e14] shadow-[0_0_10px_rgba(0,230,160,1)] border-[2px] border-[#00e6a0] z-20 ${isLeft ? 'left-[0px] -translate-x-1/2' : 'right-[0px] translate-x-1/2'}`} 
       />
    </motion.div>
  );
}
