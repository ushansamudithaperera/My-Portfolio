'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * ─── Central Pipeline ────────────────────────────────────────────────
 * A fixed vertical sci-fi track spanning the height of the viewport.
 * - Layer 1: Translucent Track
 * - Layer 2: Core Flow (grows with scroll progress)
 * - Layer 3: Data Packets (continuous falling animation)
 */
export function CentralPipeline() {
  const { scrollYProgress } = useScroll();
  
  // The core flow line grows as the user scrolls down the entire page
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed left-1/2 top-0 bottom-0 -translate-x-1/2 w-4 z-0 pointer-events-none flex justify-center overflow-hidden">
      
      {/* Layer 1: The Track */}
      <div className="absolute inset-y-0 w-full bg-white/5 border-x border-emerald-500/20 rounded-full" />
      
      {/* Layer 2: The Core Flow */}
      <motion.div 
        className="absolute top-0 w-[2px] bg-emerald-400 shadow-[0_0_25px_rgba(52,211,153,1)] rounded-full"
        style={{ height }}
      />

      {/* Layer 3: Data Packets (Simulating data flow) */}
      <DataPacket delay={0} duration={3.5} />
      <DataPacket delay={1.2} duration={4} />
      <DataPacket delay={2.5} duration={3} />
      <DataPacket delay={3.1} duration={4.5} />
    </div>
  );
}

/**
 * ─── Data Packet ─────────────────────────────────────────────────────
 * Animated glowing node with a fading trail traveling down the track.
 */
function DataPacket({ delay, duration }: { delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute top-0 w-[2px] h-16 rounded-full"
      style={{
        background: 'linear-gradient(to bottom, transparent, rgba(52,211,153,0.8) 70%, rgba(255,255,255,1))',
        boxShadow: '0 10px 15px rgba(52,211,153,0.6)',
      }}
      animate={{
        y: ['-100%', '100vh'], // Travel from above viewport to below viewport
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
 * Explicit horizontal branching line that stems from the central pipeline 
 * and visually connects directly into the side borders of adjacent panels.
 * Animates opacity and scale based on scroll position.
 */
export function PipelineBranch({ 
  direction = 'left',
  width = '4vw' // Distance from panel to center pipeline
}: { 
  direction?: 'left' | 'right';
  width?: string;
}) {
  const ref = useRef(null);
  
  // Trigger animation as the branch enters the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const isLeft = direction === 'left';

  return (
    <motion.div
      ref={ref}
      className={`absolute top-1/2 h-[2px] bg-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.8)] -z-10`}
      style={{ 
        width,
        opacity, 
        scaleX,
        transformOrigin: isLeft ? 'right' : 'left', // Grow from the center outwards
        [isLeft ? 'right' : 'left']: `-${width}` // Position it sticking out of the panel
      }}
    >
       {/* Branch Node connecting to the central pipeline */}
       <div 
         className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-400 border-[2px] border-[#0a0f16] shadow-[0_0_10px_rgba(52,211,153,1)] ${isLeft ? 'right-[-6px]' : 'left-[-6px]'}`} 
       />
       
       {/* Small connector node at the panel border */}
       <div 
         className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-300 ${isLeft ? 'left-[-2px]' : 'right-[-2px]'}`} 
       />
    </motion.div>
  );
}
