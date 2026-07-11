'use client';

import { motion } from 'framer-motion';
import { PipelineBranch, CentralPipelineBackground, CentralPipelineTrace } from './Pipeline';
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiFastapi, SiSpringboot, SiMongodb, SiMysql,
  SiDocker, SiKubernetes, SiTensorflow, SiGit, SiGithub, SiPostman, SiArduino, SiCplusplus,
  SiC, SiPandas, SiNumpy, SiScikitlearn, SiAndroidstudio, SiXampp, SiBootstrap, SiDotnet,
  SiPrometheus, SiGrafana
} from 'react-icons/si';

import {
  FaJava, FaAws, FaLayerGroup, FaNetworkWired, FaCubes, FaDatabase, FaLinux,
  FaSync, FaBrain, FaLanguage, FaSpaceShuttle, FaServer, FaMicrochip, FaPhp,
  FaCss3Alt, FaLink, FaBriefcase, FaLaptopCode, FaCogs
} from 'react-icons/fa';

import { VscVscode, VscAzure } from 'react-icons/vsc';
import { PiFileCSharp } from 'react-icons/pi';
import { TbDatabase, TbCpu } from 'react-icons/tb';

/* ─── Data Arrays ────────────────────────────────────────────────── */

const categories = [
  {
    title: 'Programming Languages',
    techs: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'C#', icon: PiFileCSharp, color: '#239120' },
      { name: 'PHP', icon: FaPhp, color: '#777BB4' },
    ]
  },
  {
    title: 'Frontend Technologies',
    techs: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Streamlit', icon: FaLayerGroup, color: '#FF4B4B' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ]
  },
  {
    title: 'Backend & Frameworks',
    techs: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
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
      { name: 'SQL Server', icon: FaServer, color: '#CC2927' },
      { name: 'ChromaDB', icon: TbDatabase, color: '#00E6A0' },
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
      { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
      { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    ]
  },
  {
    title: 'AI & Machine Learning',
    techs: [
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'LangChain', icon: FaLink, color: '#10B981' },
      { name: 'TensorFlow Lite', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'Joblib', icon: FaBriefcase, color: '#00E6A0' },
      { name: 'NLP', icon: FaLanguage, color: '#00E6A0' },
    ]
  },
  {
    title: 'Developer Tools & IDEs',
    techs: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'IntelliJ IDEA', icon: FaLaptopCode, color: '#000000' },
      { name: 'Antigravity', icon: FaSpaceShuttle, color: '#00E6A0' },
      { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
    ]
  },
  {
    title: 'Electronics & IoT',
    techs: [
      { name: 'ESP32', icon: FaMicrochip, color: '#E7352C' },
      { name: 'PIC Microcontroller', icon: TbCpu, color: '#00E6A0' },
      { name: 'Arduino', icon: SiArduino, color: '#00979D' },
      { name: 'C++ (embedded)', icon: FaCogs, color: '#00599C' },
    ]
  }
];

/* ─── Neural Panel Component ─────────────────────────────────────── */

function NeuralPanel({ title, techs, index }: { title: string, techs: any[], index: number }) {
  const isLeftColumn = index % 2 === 0;

  // A fixed square coordinate space ensures a perfect circle regardless of panel width
  const SVG_SIZE = 400;
  const center = SVG_SIZE / 2;
  const RADIUS = 135;

  const PULSE_DURATION = 3.5;

  // Calculate perfect circular positions
  const nodes = techs.map((tech, i) => {
    const angle = (i / techs.length) * 2 * Math.PI - Math.PI / 2;
    const cx = center + RADIUS * Math.cos(angle);
    const cy = center + RADIUS * Math.sin(angle);

    // Calculate Quadratic Bezier control point for a swirling curved spoke
    const midX = (center + cx) / 2;
    const midY = (center + cy) / 2;
    const dx = cx - center;
    const dy = cy - center;
    const curveStrength = 0.25;
    const ctrlX = midX - dy * curveStrength;
    const ctrlY = midY + dx * curveStrength;

    return {
      cx, cy, ctrlX, ctrlY,
      pathD: `M ${center} ${center} Q ${ctrlX} ${ctrlY} ${cx} ${cy}`
    };
  });

  return (
    <motion.div
      className="relative w-full h-[360px] md:h-[400px] bg-[#0f141c]/40 backdrop-blur-[12px] border border-[rgba(0,230,160,0.25)] rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-6 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.2 }}
    >
      {/* ── Glassmorphism Reflection (Contains rounded clip internally) ── */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />
      </div>

      {/* ── Title ── */}
      <h3 className="absolute top-6 left-0 right-0 text-lg md:text-xl font-bold text-white tracking-widest uppercase text-center z-20 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] pointer-events-none">
        {title}
      </h3>

      {/* ── Fixed Square Container for Perfect Circle Topology ── */}
      <div className="absolute inset-0 flex items-center justify-center mt-6">
        <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px]">

          {/* SVG Canvas for Spoke Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
          >
            <defs>
              <mask id={`mask-${index}`}>
                <rect width={SVG_SIZE} height={SVG_SIZE} fill="white" />
                {/* Cut out the center hub so lines don't pierce it */}
                <circle cx={center} cy={center} r="20" fill="black" />
                {/* Cut out the outer nodes */}
                {nodes.map((n, i) => (
                  <circle key={i} cx={n.cx} cy={n.cy} r="35" fill="black" />
                ))}
              </mask>
            </defs>

            <g mask={`url(#mask-${index})`}>
              {/* Hub Spoke Traces */}
              {nodes.map((n, i) => (
                <g key={`spoke-${i}`}>
                  {/* Base Spoke Line */}
                  <path
                    d={n.pathD}
                    stroke="rgba(0,255,170,0.2)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  {/* Animated Data Packet (Pill) flowing OUTWARD from hub to node */}
                  <motion.path
                    d={n.pathD}
                    stroke="#00e6a0"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    className="drop-shadow-[0_0_8px_rgba(0,255,170,1)]"
                    initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}
                    animate={{ pathOffset: 1, opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: PULSE_DURATION,
                      repeat: Infinity,
                      ease: "linear",
                      delay: (i * 0.4) // Stagger the packets radiating outward
                    }}
                  />
                </g>
              ))}
            </g>
          </svg>

          {/* ── Central Core Hub ── */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex items-center justify-center w-8 h-8">
              <div className="absolute inset-0 bg-[#00e6a0] rounded-full blur-[8px] opacity-70 animate-pulse" />
              <div className="relative w-4 h-4 bg-emerald-300 rounded-full shadow-[0_0_15px_#00e6a0]" />
            </div>
          </div>

          {/* ── Surrounding Technology Nodes ── */}
          {techs.map((tech, i) => {
            const pos = nodes[i];
            // Compute percentage for DOM absolute positioning (0 to 100%)
            const pctX = (pos.cx / SVG_SIZE) * 100;
            const pctY = (pos.cy / SVG_SIZE) * 100;

            // Sync the icon glow to the arrival of the data packet
            const delay = (i * 0.4) + PULSE_DURATION * 0.9;

            return (
              <div
                key={tech.name}
                className="absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${pctX}%`, top: `${pctY}%` }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + (i * 0.1) }}
                  className="relative flex flex-col items-center justify-center group"
                >
                  {/* Reactive Glow Box */}
                  <motion.div
                    className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-[#0f141c]/90 backdrop-blur-md border border-[rgba(0,230,160,0.25)] rounded-xl relative z-10 group-hover:scale-110 transition-transform duration-300 cursor-default"
                    animate={{
                      boxShadow: [
                        "0 0 15px rgba(0,230,160,0.1)", // Base
                        "0 0 30px rgba(0,230,160,1)",   // Peak exactly when packet arrives
                        "0 0 15px rgba(0,230,160,0.1)"  // Fade down
                      ],
                      borderColor: [
                        "rgba(0,230,160,0.25)",
                        "rgba(0,230,160,1)",
                        "rgba(0,230,160,0.25)"
                      ]
                    }}
                    transition={{
                      duration: PULSE_DURATION,
                      repeat: Infinity,
                      delay: delay,
                      times: [0, 0.1, 0.3],
                      ease: "easeInOut"
                    }}
                  >
                    <tech.icon style={{ color: tech.color, fontSize: '1.25rem' }} className="drop-shadow-[0_0_5px_currentColor]" />
                  </motion.div>

                  {/* Label */}
                  <p className="text-[9px] md:text-[10px] text-slate-300 mt-2 font-mono uppercase tracking-wider bg-[#0f141c]/90 px-1.5 py-0.5 rounded border border-[rgba(0,230,160,0.25)] shadow-lg text-center leading-tight whitespace-nowrap absolute top-[110%]">
                    {tech.name}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Pipeline Branch Connector (Behind the panel contents) ── */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0 z-[-1] pointer-events-none mt-6">
        <PipelineBranch
          direction={isLeftColumn ? 'left' : 'right'}
          width="5vw"
          offset="-5vw"
        />
      </div>
    </motion.div>
  );
}

/* ─── Main Skills Section ────────────────────────────────────────── */

export default function Skills() {
  return (
    <section className="relative w-full mx-auto py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" id="skills">

      {/* Section Header */}
      <div className="flex flex-col items-center justify-center py-4 px-10 bg-[#141923]/60 backdrop-blur-xl border border-[#00ffaa]/20 rounded-2xl shadow-[0_0_20px_rgba(0,255,170,0.15)] mx-auto max-w-fit mb-12 z-10 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase text-center">
          SKILLS
        </h2>
        <p className="text-xs md:text-sm text-slate-400 mt-2 font-mono tracking-[0.15em] uppercase text-center">
          Step 3: Technical Capabilities
        </p>
      </div>

      {/* Grid of Neural Panels (z-10 relative) */}
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
