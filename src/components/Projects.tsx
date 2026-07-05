'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaNetworkWired, FaCube, FaBrain, FaGlobe, FaCheckSquare, FaGithub, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  year: string;
  tags: string[];
  details: string[];
  icon: any;
  isGitHub?: boolean;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Sentinel Stream',
    year: '2026',
    tags: ['React', 'Node', 'MongoDB', 'Docker'],
    details: [
      'Sentinel Stream - Real-Time Intrusion Detection System (2026)',
      'Designed a full-stack intrusion detection system with 4-layer detection mechanisms (volumetric, pattern-based, Z-score, and EWMA) to identify anomalous network behavior in real time.',
      'Built an adaptive feedback system enabling analysts to adjust detection sensitivity through alert classification without requiring model retraining.',
      'Secured the application with JWT authentication, HTTP-only cookies, and Role-Based Access Control (RBAC); deployed the full infrastructure using Docker containerization.'
    ],
    icon: FaNetworkWired
  },
  {
    id: 2,
    title: 'Smart Inventory AI',
    year: '2026',
    tags: ['React', 'Gemini AI', 'Redis'],
    details: [
      'AI-Powered Smart Inventory System (2026)',
      'Integrated Google Gemini AI into a scalable inventory platform to automate product identification, categorization, and predictive sales forecasting, reducing manual data entry by over 50%.',
      'Implemented monitoring and observability using Prometheus and Grafana to track system performance and business metrics.',
      'Improved backend data retrieval speeds by ~30% through Redis caching and MongoDB aggregation pipelines; automated test workflows via GitHub Actions CI/CD.'
    ],
    icon: FaCube
  },
  {
    id: 3,
    title: 'IT Support Agent',
    year: '2026',
    tags: ['FastAPI', 'LangChain', 'ChromaDB'],
    details: [
      'Smart IT Service Management Agent (2026)',
      'Engineered a high-performance IT helpdesk agent using FastAPI and Pydantic, integrating a custom LightGBM and Scikit-Learn machine learning pipeline to classify support tickets with ~86% classification accuracy.',
      'Architected a Retrieval-Augmented Generation (RAG) workflow via LangChain and ChromaDB, utilizing Google Gemini AI to synthesize context-grounded resolution guides from embedded troubleshooting runbooks.',
      'Implemented a dynamic confidence guardrail (60% threshold) to intelligently route ambiguous requests to Level 2 support, and deployed the full interactive Streamlit interface using Docker containerization.'
    ],
    icon: FaBrain
  },
  {
    id: 4,
    title: 'Travel Commerce',
    year: '2025',
    tags: ['React', 'Spring Boot'],
    details: [
      'Travel Commerce Platform | Group Project (2025)',
      'Developed a full-stack digital marketplace connecting travelers with local service providers via a responsive React.js frontend.',
      'Built secure RESTful APIs with Spring Boot and optimized MongoDB queries, improving dynamic data retrieval efficiency.'
    ],
    icon: FaGlobe
  },
  {
    id: 5,
    title: 'EDU QUIZ',
    year: '2025',
    tags: ['C#', '.NET', 'SQL Server'],
    details: [
      'EDU QUIZ - Quiz Management System | Group Project (2025)',
      'Developed a desktop application supporting automated quiz evaluation and real-time result generation.',
      'Architected a centralized SQL Server database with role-based access control to manage multi-tier permissions for 2 user roles (teachers and students).'
    ],
    icon: FaCheckSquare
  },
  {
    id: 6,
    title: 'GitHub Archive',
    year: '',
    tags: ['View Source Code'],
    details: [
      'GitHub Archive',
      'Explore all my other projects, scripts, and open-source contributions directly on my GitHub profile.'
    ],
    icon: FaGithub,
    isGitHub: true
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-4 sm:px-6" id="projects">
      
      {/* ── Section Header ── */}
      <div className="text-center mb-16 relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-white tracking-[0.3em] uppercase shadow-emerald-500/50 drop-shadow-2xl"
        >
          Projects Panel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-emerald-400 mt-3 tracking-[0.2em] font-mono uppercase"
        >
          Step 4: Deploy & Production
        </motion.p>
      </div>

      {/* ── Main Container (Like Image Reference) ── */}
      <div className="relative bg-[#080d19]/80 border border-slate-700/50 rounded-[2.5rem] p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        
        {/* Subtle inner background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 rounded-[2.5rem] pointer-events-none" />

        {/* ── 3x2 Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {projectsData.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col bg-[#111928]/90 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300"
              >
                {/* ── Card Thumbnail Area ── */}
                <div className="relative h-44 w-full bg-[#0a101d] border-b border-slate-800 flex items-center justify-center overflow-hidden">
                  
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(16,185,129,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.2) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  {/* Sci-Fi Glow behind Icon */}
                  <div className="absolute w-24 h-24 bg-emerald-500/20 blur-2xl rounded-full group-hover:bg-emerald-400/30 transition-all duration-500" />
                  
                  {/* Glowing Icon representing thumbnail */}
                  <Icon className="relative z-10 text-emerald-400 opacity-90 text-6xl group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-500 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                  
                  {/* Decorative corner brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30 rounded-tl" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-500/30 rounded-br" />
                </div>

                {/* ── Card Details Area ── */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-md shadow-[0_0_8px_rgba(16,185,129,0.05)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold tracking-wider text-slate-300 transition-all duration-300 bg-slate-800/50 border border-slate-600/50 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  >
                    {project.isGitHub ? (
                      <>
                        <FaGithub size={16} />
                        View on GitHub
                      </>
                    ) : (
                      <>
                        <FaExternalLinkAlt size={14} />
                        View Details
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Connecting Pipeline Below Panel ── */}
      <div className="flex justify-center relative mt-2 md:mt-4">
        <div className="absolute top-0 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,1)] z-10 -mt-1.5" />
        <div className="w-1 h-24 bg-gradient-to-b from-emerald-500/80 via-emerald-500/40 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
      </div>

      {/* ── Glassmorphism Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            
            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0f172a] border border-emerald-500/30 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.15)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-start bg-[#0b1121]">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                    {selectedProject.details[0]}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors ml-4 shrink-0"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <ul className="space-y-4">
                  {selectedProject.details.slice(1).map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Modal Footer */}
              {selectedProject.isGitHub && (
                <div className="px-6 py-4 border-t border-slate-800 bg-[#0b1121] flex justify-end">
                  <a 
                    href="https://github.com/ushansamudithaperera" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                  >
                    <FaGithub size={18} />
                    Open GitHub Profile
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
