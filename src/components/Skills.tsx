'use client';

import { motion } from 'framer-motion';
import { PipelineBranch } from './Pipeline';
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiFastapi, SiSpringboot, SiMongodb, SiPostgresql, SiRedis, SiMysql,
  SiDocker, SiKubernetes, SiMicrosoftazure, SiTensorflow, SiPytorch, SiHuggingface,
  SiGit, SiGithub, SiVisualstudiocode, SiPostman, SiArduino, SiRaspberrypi, SiCplusplus
} from 'react-icons/si';
import { FaJava, FaRobot, FaAws } from 'react-icons/fa6';
import { FaNetworkWired } from 'react-icons/fa';

/* ─── Data Arrays ────────────────────────────────────────────────── */

const categories = [
  {
    title: 'Programming Languages',
    techs: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
    ]
  },
  {
    title: 'Frontend Technologies',
    techs: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    ]
  },
  {
    title: 'Backend & Frameworks',
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    ]
  },
  {
    title: 'Databases',
    techs: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ]
  },
  {
    title: 'Cloud, DevOps & Infra',
    techs: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
    ]
  },
  {
    title: 'AI & Machine Learning',
    techs: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'LangChain', icon: FaRobot, color: '#10B981' },
      { name: 'Hugging Face', icon: SiHuggingface, color: '#FFD21E' },
    ]
  },
  {
    title: 'Developer Tools & IDEs',
    techs: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ]
  },
  {
    title: 'Electronics & IoT',
    techs: [
      { name: 'Arduino', icon: SiArduino, color: '#00979D' },
      { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#A22846' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'IoT Networks', icon: FaNetworkWired, color: '#10B981' },
    ]
  }
];

/* ─── Neural Panel Component ─────────────────────────────────────── */

function NeuralPanel({ title, techs, index }: { title: string, techs: any[], index: number }) {
  // Determine if this panel is on the left or right of the central pipeline on desktop
  const isLeftColumn = index % 2 === 0;
  
  // Staggered, asymmetrical node positions in percentages (x, y)
  const nodePositions = [
    { x: 25, y: 35 },
    { x: 75, y: 30 },
    { x: 30, y: 75 },
    { x: 70, y: 70 },
  ];

  // The entry point where the pipeline branch connects to the panel
  // If it's a left column panel, the branch connects to its RIGHT border (x: 100%)
  const entryX = isLeftColumn ? 100 : 0;
  const entryY = 50; // Middle of the panel height

  return (
    <motion.div 
      className="relative w-full h-[280px] md:h-[320px] bg-[#0a0f16]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl p-6 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.2 }}
    >
      {/* ── Title ── */}
      <h3 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase mb-4 text-center z-20 relative drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        {title}
      </h3>

      {/* ── SVG Neural Connections ── */}
      {/* We draw curved paths from the border entry point to each tech node */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
        {nodePositions.map((pos, i) => {
          // Calculate control points for a smooth organic curve
          const controlX = isLeftColumn ? entryX - 20 : entryX + 20;
          return (
            <motion.path 
              key={i}
              d={`M ${entryX} ${entryY} C ${controlX} ${entryY}, ${pos.x} ${pos.y - 10}, ${pos.x} ${pos.y}`}
              stroke="rgba(52,211,153,0.3)"
              strokeWidth="0.8"
              fill="none"
              className="drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 + (i * 0.15) }}
            />
          );
        })}
      </svg>

      {/* ── Technology Nodes ── */}
      {techs.map((tech, i) => (
        <div 
          key={tech.name} 
          className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ left: `${nodePositions[i].x}%`, top: `${nodePositions[i].y}%` }}
        >
          {/* Strict User Box Design */}
          <motion.div 
            className="w-16 h-16 flex items-center justify-center bg-[#0a0f16]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_15px_rgba(52,211,153,0.15)] relative z-10 transition-transform duration-300 hover:scale-110"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.8 + (i * 0.1) }}
          >
            <tech.icon style={{ color: tech.color, fontSize: '2rem' }} className="drop-shadow-[0_0_10px_currentColor]" />
          </motion.div>
          
          {/* Label underneath */}
          <motion.p 
            className="text-[11px] text-slate-300 mt-2 font-mono uppercase tracking-wider bg-[#0a0f16]/90 px-2 py-0.5 rounded border border-white/10 shadow-lg whitespace-nowrap"
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 + (i * 0.1) }}
          >
            {tech.name}
          </motion.p>
        </div>
      ))}

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
          className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]"
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
