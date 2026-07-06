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
    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-6 z-0 pointer-events-none flex justify-center overflow-hidden">
      
      {/* Layer 1: The Track (Thickened) */}
      <div className="absolute inset-y-0 w-2 bg-white/5 border-x border-emerald-500/20 rounded-full" />
      
      {/* Layer 2: The Core Flow (Thickened) */}
      <motion.div 
        className="absolute top-0 w-[4px] bg-emerald-400 shadow-[0_0_25px_rgba(0,230,160,1)] rounded-full"
        style={{ height }}
      />

      {/* Layer 3: Data Packets (Simulating data flow down the absolute container) */}
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
      className="absolute w-[6px] h-[24px] rounded-full bg-[#00e6a0]"
      style={{
        boxShadow: '0 0 15px rgba(0,230,160,1)',
      }}
      animate={{
        top: ['-5%', '105%'], // Travel from top of the absolute container to the bottom
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
      className={`absolute top-1/2 h-[4px] bg-emerald-500/60 shadow-[0_0_15px_rgba(0,255,170,0.8)] -z-10 overflow-hidden`}
      style={{ 
        width,
        opacity, 
        scaleX,
        transformOrigin: isLeft ? 'right' : 'left', // Grow from the center outwards
        [isLeft ? 'right' : 'left']: `-${width}` // Position it sticking out of the panel
      }}
    >
       {/* Horizontal Data Packets flowing from center to panel */}
       <motion.div 
         className="absolute top-1/2 -translate-y-1/2 w-[24px] h-[6px] rounded-full bg-[#00e6a0] shadow-[0_0_15px_rgba(0,230,160,1)]"
         animate={{
           // If it's a left panel, data moves Right -> Left (100% to 0%).
           // If it's a right panel, data moves Left -> Right (0% to 100%).
           left: isLeft ? ['100%', '-20px'] : ['-20px', '100%']
         }}
         transition={{
           duration: 2,
           repeat: Infinity,
           ease: 'linear',
           delay: 0.5 // Offset so it looks natural
         }}
       />
       
       <motion.div 
         className="absolute top-1/2 -translate-y-1/2 w-[24px] h-[6px] rounded-full bg-[#00e6a0] shadow-[0_0_15px_rgba(0,230,160,1)]"
         animate={{
           left: isLeft ? ['100%', '-20px'] : ['-20px', '100%']
         }}
         transition={{
           duration: 2,
           repeat: Infinity,
           ease: 'linear',
           delay: 1.5 
         }}
       />

       {/* Branch Node connecting to the central pipeline */}
       <div 
         className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-400 border-[2px] border-[#0a0f16] shadow-[0_0_10px_rgba(0,230,160,1)] ${isLeft ? 'right-[-8px]' : 'left-[-8px]'}`} 
       />
       
       {/* Small connector node at the panel border */}
       <div 
         className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-300 ${isLeft ? 'left-[-4px]' : 'right-[-4px]'}`} 
       />
    </motion.div>
  );
}
