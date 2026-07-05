'use client';

import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go'],
  },
  {
    category: 'Backend & Frameworks',
    items: ['Node.js', 'Express', 'FastAPI', 'Spring Boot'],
  },
  {
    category: 'Frontend Technologies',
    items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'],
  },
  {
    category: 'Cloud, DevOps & Infra',
    items: ['AWS', 'Docker', 'Linux', 'Jenkins', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Pandas', 'Scikit-Learn'],
  },
  {
    category: 'Developer Tools & IDEs',
    items: ['Git', 'VS Code', 'Postman', 'Jira', 'Figma', 'Webpack'],
  },
  {
    category: 'Electronics & IoT',
    items: ['Arduino', 'Raspberry Pi', 'ESP32', 'Sensors'],
  },
];

// Helper to generate coordinates and edge connections for the Neural Network layout
const getLayout = (count: number, isLeft: boolean) => {
  if (count === 4) {
    const nodes = [
      [25, 35], // 0
      [75, 30], // 1
      [25, 75], // 2
      [75, 80], // 3
    ];
    // edges: [from_idx, to_idx] (-1 means the main branch entry point)
    const edgesLeft = [
      [-1, 1], [-1, 3], 
      [1, 0], [3, 2],   
      [1, 2], [0, 3],   
    ];
    const edgesRight = [
      [-1, 0], [-1, 2], 
      [0, 1], [2, 3],   
      [0, 3], [1, 2],   
    ];
    return { nodes, edges: isLeft ? edgesLeft : edgesRight };
  } else {
    // 6 items layout
    const nodes = [
      [20, 30], // 0
      [50, 25], // 1
      [80, 35], // 2
      [20, 75], // 3
      [50, 85], // 4
      [80, 75], // 5
    ];
    const edgesLeft = [
      [-1, 2], [-1, 5],
      [2, 1], [5, 4],
      [1, 0], [4, 3],
      [2, 4], [1, 3], [5, 1], [0, 4]
    ];
    const edgesRight = [
      [-1, 0], [-1, 3],
      [0, 1], [3, 4],
      [1, 2], [4, 5],
      [0, 4], [1, 5], [3, 1], [2, 4]
    ];
    return { nodes, edges: isLeft ? edgesLeft : edgesRight };
  }
};

function SkillPanel({ data, isLeft, index }: { data: any, isLeft: boolean, index: number }) {
  const { nodes, edges } = getLayout(data.items.length, isLeft);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col w-full"
    >
      {/* ── Branch Connecting to Central Pipeline ── */}
      <motion.div 
        className={`hidden md:block absolute top-1/2 h-1.5 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] -translate-y-1/2 z-0 ${
           isLeft ? 'left-[100%] w-10' : 'right-[100%] w-10'
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ originX: isLeft ? 1 : 0 }} 
      />
      
      {/* ── Glassmorphism Panel ── */}
      <div className="relative h-[340px] md:h-[400px] w-full rounded-[2rem] bg-[#0b1121]/80 border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-xl p-6 group">
        
        {/* Subtle hover glow on panel */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Title */}
        <h3 className="relative z-10 text-center text-base md:text-lg font-bold text-white tracking-[0.2em] uppercase shadow-emerald-500/50 drop-shadow-lg">
          {data.category}
        </h3>
        
        {/* Sci-fi Decorative Labels */}
        <div className="absolute top-4 left-4 text-[9px] text-emerald-500/70 font-mono uppercase tracking-widest hidden sm:block">
          SYS.ACTV
        </div>
        <div className="absolute bottom-4 right-4 text-[9px] text-blue-400/70 font-mono uppercase tracking-widest hidden sm:block">
          UNIT TESTS: PASSING
        </div>

        {/* ── Neural Network Area ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          
          {/* SVG Canvas for Edges */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <defs>
               <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" /> {/* emerald-400 */}
                 <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" /> {/* blue-500 */}
               </linearGradient>
             </defs>
             
             {edges.map((edge, i) => {
                const [from, to] = edge;
                const startPoint = from === -1 ? (isLeft ? [100, 50] : [0, 50]) : nodes[from];
                const endPoint = nodes[to];
                
                // SVG Bezier S-curve for a fluid organic look
                const d = `M ${startPoint[0]},${startPoint[1]} C ${(startPoint[0]+endPoint[0])/2},${startPoint[1]} ${(startPoint[0]+endPoint[0])/2},${endPoint[1]} ${endPoint[0]},${endPoint[1]}`;
                
                return (
                  <motion.path 
                    key={i}
                    d={d}
                    fill="none"
                    stroke="url(#edge-gradient)"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 1.2, delay: 0.8 + (i * 0.1), ease: "easeInOut" }}
                  />
                );
             })}
          </svg>
          
          {/* Node Elements */}
          {data.items.map((item: string, i: number) => {
            const pos = nodes[i];
            // Grab the first two letters for the icon (or custom logic)
            const iconText = item.substring(0, 2).toUpperCase();
            
            return (
              <motion.div
                key={item}
                className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 + (i * 0.1), type: 'spring', bounce: 0.4 }}
              >
                {/* Node Icon Circle/Square */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900/90 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.4)] backdrop-blur-md relative hover:scale-110 hover:border-emerald-400 transition-all duration-300 cursor-default group/node">
                  <div className="absolute inset-0 rounded-xl bg-emerald-400/20 opacity-0 group-hover/node:opacity-100 transition-opacity blur-md" />
                  <span className="text-emerald-300 font-bold text-xs md:text-sm tracking-widest z-10">
                    {iconText}
                  </span>
                </div>
                
                {/* Text Label */}
                <span className="mt-2 text-[10px] md:text-[11px] text-slate-300 font-mono tracking-wider whitespace-nowrap bg-slate-950/80 px-2 py-0.5 rounded border border-slate-700/50 shadow-lg">
                  {item}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-4 sm:px-6" id="skills">
      
      {/* ── Section Header ── */}
      <div className="text-center mb-24 relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-white tracking-[0.3em] uppercase shadow-emerald-500/50 drop-shadow-2xl"
        >
          SKILLS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-emerald-400 mt-3 tracking-[0.2em] font-mono uppercase"
        >
          Step 3: Neural Network & Stack
        </motion.p>
      </div>

      <div className="relative">
        
        {/* ── Main Central Pipeline (Backbone) ── */}
        {/* Renders behind the grid, descending down the absolute middle */}
        <div className="hidden md:block absolute left-1/2 top-[-60px] bottom-[-60px] w-1.5 bg-slate-800/40 -translate-x-1/2 rounded-full z-0 overflow-hidden shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]">
          {/* Animated glowing fill */}
          <motion.div 
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-emerald-300 via-emerald-500 to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,1)]"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        
        {/* ── 2x4 Grid of Panels ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-24 md:gap-x-20 relative z-10">
          {skillsData.map((category, index) => {
            const isLeft = index % 2 === 0;
            return (
              <SkillPanel 
                key={category.category} 
                data={category} 
                isLeft={isLeft} 
                index={index} 
              />
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
