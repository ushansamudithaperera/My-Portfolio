'use client';

import { motion } from 'framer-motion';
import { PipelineBranch } from './Pipeline';
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiFastapi, SiSpringboot, SiMongodb, SiMysql,
  SiDocker, SiKubernetes, SiTensorflow, SiGit, SiGithub, SiPostman, SiArduino, SiCplusplus 
} from 'react-icons/si';

import { 
  FaJava, FaRobot, FaAws, FaCode, FaLayerGroup, FaNetworkWired, FaCubes, FaDatabase, FaLinux, 
  FaSync, FaChartBar, FaChartLine, FaTable, FaBrain, FaCogs, FaLanguage, FaSpaceShuttle, 
  FaAndroid, FaServer, FaMicrochip 
} from 'react-icons/fa';

import { VscVscode, VscAzure } from 'react-icons/vsc';

/* ─── Data Arrays ────────────────────────────────────────────────── */

const categories = [
  {
    title: 'Programming Languages',
    techs: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'C', icon: FaCode, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'C#', icon: FaCode, color: '#239120' },
      { name: 'PHP', icon: FaCode, color: '#777BB4' },
    ]
  },
  {
    title: 'Frontend Technologies',
    techs: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Streamlit', icon: FaLayerGroup, color: '#FF4B4B' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCode, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: FaCode, color: '#7952B3' },
    ]
  },
  {
    title: 'Backend & Frameworks',
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: '.NET', icon: FaCode, color: '#512BD4' },
      { name: 'REST APIs', icon: FaNetworkWired, color: '#00E6A0' },
      { name: 'Pydantic', icon: FaCubes, color: '#E92063' },
    ]
  },
  {
    title: 'Databases',
    techs: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Oracle', icon: FaDatabase, color: '#F80000' },
      { name: 'SQL Server', icon: FaDatabase, color: '#CC2927' },
      { name: 'ChromaDB', icon: FaDatabase, color: '#00E6A0' },
    ]
  },
  {
    title: 'Cloud, DevOps & Infra',
    techs: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Microsoft Azure', icon: VscAzure, color: '#0078D4' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Linux', icon: FaLinux, color: '#FCC624' },
      { name: 'CI/CD', icon: FaSync, color: '#00E6A0' },
      { name: 'Prometheus', icon: FaChartBar, color: '#E6522C' },
      { name: 'Grafana', icon: FaChartLine, color: '#F46800' },
    ]
  },
  {
    title: 'AI & Machine Learning',
    techs: [
      { name: 'Pandas', icon: FaTable, color: '#150458' },
      { name: 'NumPy', icon: FaTable, color: '#013243' },
      { name: 'LangChain', icon: FaRobot, color: '#10B981' },
      { name: 'TensorFlow Lite', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'Scikit-Learn', icon: FaBrain, color: '#F7931E' },
      { name: 'Joblib', icon: FaCogs, color: '#00E6A0' },
      { name: 'NLP', icon: FaLanguage, color: '#00E6A0' },
    ]
  },
  {
    title: 'Developer Tools & IDEs',
    techs: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'IntelliJ IDEA', icon: FaCode, color: '#000000' },
      { name: 'Antigravity', icon: FaSpaceShuttle, color: '#00E6A0' },
      { name: 'Android Studio', icon: FaAndroid, color: '#3DDC84' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'XAMPP', icon: FaServer, color: '#FB7A24' },
    ]
  },
  {
    title: 'Electronics & IoT',
    techs: [
      { name: 'ESP32', icon: FaMicrochip, color: '#E7352C' },
      { name: 'PIC Microcontroller', icon: FaMicrochip, color: '#00E6A0' },
      { name: 'Arduino', icon: SiArduino, color: '#00979D' },
      { name: 'C++ (embedded)', icon: SiCplusplus, color: '#00599C' },
    ]
  }
];

/* ─── Neural Panel Component ─────────────────────────────────────── */

function NeuralPanel({ title, techs, index }: { title: string, techs: any[], index: number }) {
  // Determine if this panel is on the left or right of the central pipeline on desktop
  const isLeftColumn = index % 2 === 0;
  
  // The entry point where the pipeline branch connects to the panel
  // If it's a left column panel, the branch connects to its RIGHT border (x: 100%)
  const entryX = isLeftColumn ? 100 : 0;
  const entryY = 50; 
  
  const PULSE_DURATION = 4; // seconds for a full loop

  // Snake indexing for sequential connection
  const getSnakeIndex = (i: number) => {
    if (i < 4) return i; // Top row goes L->R
    const bottomCount = techs.length - 4;
    return 4 + (bottomCount - 1 - (i - 4)); // Bottom row goes R->L
  };

  // Generate dynamic grid positions for up to 8 nodes
  const nodePositions = techs.map((_, i) => {
    const isTopRow = i < 4;
    const colIndex = i % 4;
    
    // Distribute nodes evenly in their row
    const rowCount = isTopRow ? Math.min(techs.length, 4) : techs.length - 4;
    const xSpace = 100 / (rowCount + 1);
    const x = xSpace * (colIndex + 1);
    const y = isTopRow ? 35 : 75; // Percentages from top
    
    return { x, y, originalIndex: i, snakeIndex: getSnakeIndex(i) };
  });

  // Sort nodes by snakeIndex to draw a continuous circuit trace
  const pathNodes = [...nodePositions].sort((a, b) => a.snakeIndex - b.snakeIndex);

  // We draw a line from entryX, entryY to the first node, then through all nodes sequentially
  const pathD = `M ${entryX} ${entryY} ` + pathNodes.map(pos => `L ${pos.x} ${pos.y}`).join(' ');

  return (
    <motion.div 
      className="relative w-full h-[320px] md:h-[360px] bg-[#141923]/60 backdrop-blur-xl border border-[#00ffaa]/20 rounded-[2rem] shadow-[0_0_20px_rgba(0,255,170,0.15)] p-6 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.2 }}
    >
      {/* ── Title ── */}
      <h3 className="absolute top-6 left-0 right-0 text-lg md:text-xl font-bold text-white tracking-widest uppercase text-center z-20 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        {title}
      </h3>

      {/* ── SVG Circuit Trace & Data Pulse ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
        {/* Base inactive trace */}
        <path 
          d={pathD}
          stroke="rgba(0,255,170,0.2)"
          strokeWidth="0.8"
          fill="none"
        />
        {/* Animated Data Pulse */}
        <motion.path 
          d={pathD}
          stroke="#00e6a0"
          strokeWidth="1.5"
          fill="none"
          className="drop-shadow-[0_0_8px_rgba(0,255,170,0.8)]"
          initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}
          animate={{ pathOffset: 1, opacity: [0, 1, 1, 0] }}
          transition={{ 
            pathOffset: { duration: PULSE_DURATION, repeat: Infinity, ease: "linear" },
            opacity: { duration: PULSE_DURATION, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.9, 1] } 
          }}
        />
      </svg>

      {/* ── Technology Nodes ── */}
      {techs.map((tech, i) => {
        const pos = nodePositions[i];
        // Delay calculation ensures glow peaks exactly as the pulse reaches the node
        const delay = ((pos.snakeIndex + 1) / (techs.length + 1)) * PULSE_DURATION;

        return (
          <div 
            key={tech.name} 
            className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10 w-[24%]"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
          >
            {/* Pop-in entry wrapper */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 + (i * 0.05) }}
              className="relative flex justify-center items-center"
            >
              {/* Reactive Glow Box */}
              <motion.div 
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#141923]/90 backdrop-blur-md border border-[#00ffaa]/20 rounded-xl relative z-10 hover:scale-110 transition-transform duration-300 cursor-default"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(0,255,170,1)",   // Peak exactly at start (t = delay)
                    "0 0 15px rgba(0,255,170,0.1)", // Fade down
                    "0 0 15px rgba(0,255,170,0.1)", // Stay down
                    "0 0 15px rgba(0,255,170,0.1)", // Stay down
                    "0 0 30px rgba(0,255,170,1)"    // Peak at end to loop seamlessly
                  ],
                  borderColor: [
                    "rgba(0,255,170,1)",
                    "rgba(0,255,170,0.2)",
                    "rgba(0,255,170,0.2)",
                    "rgba(0,255,170,0.2)",
                    "rgba(0,255,170,1)"
                  ]
                }}
                transition={{
                  duration: PULSE_DURATION,
                  repeat: Infinity,
                  delay: delay,
                  times: [0, 0.2, 0.5, 0.8, 1],
                  ease: "easeInOut"
                }}
              >
                <tech.icon style={{ color: tech.color, fontSize: '1.5rem' }} className="drop-shadow-[0_0_5px_currentColor]" />
              </motion.div>
            </motion.div>
            
            {/* Label */}
            <motion.p 
              className="text-[9px] md:text-[10px] text-slate-300 mt-2 font-mono uppercase tracking-wider bg-[#141923]/90 px-1.5 py-0.5 rounded border border-[#00ffaa]/20 shadow-lg text-center leading-tight whitespace-nowrap"
              initial={{ opacity: 0, y: -5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + (i * 0.05) }}
            >
              {tech.name}
            </motion.p>
          </div>
        );
      })}

      {/* ── Pipeline Branch Connector ── */}
      {/* Hidden on mobile, connects to CentralPipeline on desktop */}
      <div className="hidden md:block">
        <PipelineBranch direction={isLeftColumn ? 'left' : 'right'} width="5vw" />
      </div>
    </motion.div>
  );
}

/* ─── Main Skills Section ────────────────────────────────────────── */

export default function Skills() {
  return (
    <section className="relative w-full mx-auto py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="skills">
      
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(0,255,170,0.4)]"
        >
          Skills Arsenal
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xs md:text-sm text-emerald-400 mt-2 tracking-[0.15em] font-mono uppercase"
        >
          Step 3: Network Diagnostics
        </motion.p>
      </div>

      {/* Grid of Neural Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-[10vw] md:gap-y-16 w-full max-w-7xl mx-auto z-10 relative">
        {categories.map((cat, index) => (
          <NeuralPanel 
            key={cat.title} 
            title={cat.title} 
            techs={cat.techs} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}
