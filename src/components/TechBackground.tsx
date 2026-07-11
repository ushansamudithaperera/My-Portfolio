'use client';

import { motion } from 'framer-motion';

const techPhrases = [
  "sys.init()",
  "docker build -t portfolio .",
  "connecting to server...",
  "0x8F9A",
  "kernel modules loaded",
  "starting background services...",
  "auth token generated",
  "npm run start",
  "allocating memory...",
  "192.168.1.1:8080 active",
  "[OK] Network connected",
  "git pull origin main",
  "running diagnostics...",
  "deploying cluster..."
];

export default function TechBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#05080c] overflow-hidden pointer-events-none flex items-center justify-center">
      
      {/* Subtle Grid/Graph Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #4ade80 1px, transparent 1px),
            linear-gradient(to bottom, #4ade80 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* ─── Animated Graph Lines (SVGs) ─── */}
      <div className="absolute inset-0 opacity-[0.06] overflow-hidden pointer-events-none">
        {/* Sine Wave */}
        <motion.svg 
          className="absolute top-[20%] w-[200vw] h-[100px]" 
          viewBox="0 0 2000 100" 
          preserveAspectRatio="none"
          animate={{ x: ["0vw", "-100vw"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <path d="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50 T1400,50 T1600,50 T1800,50 T2000,50" fill="none" stroke="#10b981" strokeWidth="1.5" />
        </motion.svg>

        {/* Zigzag Data Line */}
        <motion.svg 
          className="absolute top-[60%] w-[200vw] h-[100px]" 
          viewBox="0 0 2000 100" 
          preserveAspectRatio="none"
          animate={{ x: ["-100vw", "0vw"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <path d="M0,50 L50,20 L100,80 L150,30 L200,70 L250,10 L300,90 L350,50 L400,50 L450,20 L500,80 L550,30 L600,70 L650,10 L700,90 L750,50 L800,50 L850,20 L900,80 L950,30 L1000,70 L1050,10 L1100,90 L1150,50 L1200,50 L1250,20 L1300,80 L1350,30 L1400,70 L1450,10 L1500,90 L1550,50 L1600,50 L1650,20 L1700,80 L1750,30 L1800,70 L1850,10 L1900,90 L1950,50 L2000,50" fill="none" stroke="#10b981" strokeWidth="1.5" />
        </motion.svg>
      </div>

      {/* ─── Sweeping Scanner Lines (Radar Effect) ─── */}
      {/* Horizontal Scanner */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Vertical Scanner */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
        animate={{ left: ["-10%", "110%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* ─── Floating Geometric Tech Shapes ─── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Crosshair 1 */}
        <motion.div 
          className="absolute top-[15%] left-[25%] opacity-[0.06] text-primary-400 font-mono text-xl"
          animate={{ rotate: 360, x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          +
        </motion.div>

        {/* Crosshair 2 */}
        <motion.div 
          className="absolute top-[75%] left-[75%] opacity-[0.04] text-cyan-400 font-mono text-xl"
          animate={{ rotate: -360, x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          +
        </motion.div>

        {/* Concentric Circles */}
        <motion.div 
          className="absolute top-[45%] left-[80%] w-32 h-32 opacity-[0.03] border-[1px] border-primary-400 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 border-[1px] border-primary-400 rounded-full border-dashed" />
        </motion.div>

        {/* Hollow Box */}
        <motion.div 
          className="absolute top-[80%] left-[15%] w-16 h-16 opacity-[0.05] border-[1px] border-cyan-400"
          animate={{ rotate: [0, 180, 360], x: [0, 40, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>


      {/* Ambient Glowing Orbs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary-900/20 rounded-full blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary-900/20 rounded-full blur-[120px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-cyan-900/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Moving Code Snippets (Columns) */}
      <div className="absolute inset-0 flex justify-between px-[5vw] opacity-60 pointer-events-none">
        {[...Array(5)].map((_, colIndex) => {
          // Deterministic speed per column
          const duration = 25 + (colIndex % 3) * 10; 
          return (
            <div key={colIndex} className="relative w-32 h-full overflow-hidden">
              <motion.div
                className="absolute top-0 w-full flex flex-col gap-12"
                animate={{
                  y: ["0%", "-50%"]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Double array to ensure seamless loop */}
                {[...techPhrases, ...techPhrases].map((phrase, i) => (
                  <div 
                    key={i} 
                    className={`text-[10px] font-mono tracking-widest whitespace-nowrap ${
                      (i + colIndex) % 2 === 0 ? 'text-primary-500/5' : 'text-white/5'
                    }`}
                    style={{
                      marginLeft: `${(i % 4) * 8}px`
                    }}
                  >
                    {phrase}
                  </div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
