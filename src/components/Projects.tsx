'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  year: string;
  tags: string[];
  details: string[];
  image: string;
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
    image: '/Sentinel Stream.png'
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
    image: '/Smart Inventory AI.png'
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
    image: '/IT Support Agent.png'
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
    image: '/Travel Commerce.png'
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
    image: '/EDU QUIZ.png'
  },
  {
    id: 6,
    title: 'Happy Paws Clinic System',
    year: '2025',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'XAMPP'],
    details: [
      'Happy Paws Veterinary Clinic System | Group Project (2025)',
      'Built a full-stack clinic management platform supporting appointment scheduling, patient workflows, and pet adoption services.',
      'Implemented SQL prepared statements across all user input fields, eliminating SQL injection vulnerabilities.'
    ],
    image: '/Happy Paws.png'
  },
  {
    id: 7,
    title: 'Voltiva 2.0',
    year: 'May 2025 – Aug 2025',
    tags: ['ESP32', 'Arduino IDE', 'Blynk IoT', 'Telegram Bot API', 'C++'],
    details: [
      'Voltiva 2.0 - IoT Smart Energy Meter',
      'Thrilled to share that our team has successfully completed our project for the Creative Design Project II module - Voltiva 2.0, an IoT-based smart energy monitoring system built to help people actually see and understand their electricity usage in real time.',
      '⚡ About the Project : Voltiva 2.0 is a smart energy meter built on ESP32 that monitors voltage and current live, calculates electricity cost based on Sri Lanka\'s CEB tariff structure, and keeps you updated through instant alerts - so you always know exactly what your appliances are costing you.',
      '⚙️ Key Features : Real-time voltage & current monitoring (ZMPT101B + ACS712 sensors)',
      'Automatic cost calculation using CEB\'s tiered tariff rates',
      'Live remote dashboard via Blynk IoT',
      'Telegram alerts every minute + full session summary on unplug',
      'On-device 16x2 LCD display',
      'EEPROM storage so data survives power cuts'
    ],
    image: '/Creative Design.png'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative w-full max-w-6xl mx-auto py-24 px-4 sm:px-6" id="projects">
      
      {/* ── Main Glassmorphism Panel ── */}
      <div className="relative z-10 bg-[#141923]/60 backdrop-blur-xl border border-[#00ffaa]/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,255,170,0.1)]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[0.2em] uppercase text-center relative z-10">
            Projects Panel
          </h2>
          <p className="text-slate-400 font-mono text-sm tracking-widest mt-4 uppercase">
            Step 4: Deploy & Production
          </p>
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col bg-[#0a0e14]/80 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300"
              >
                {/* ── Card Thumbnail Area ── */}
                <div className="relative h-44 w-full bg-[#0a101d] border-b border-slate-800 flex items-center justify-center overflow-hidden">
                  
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(0,255,170,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,0.2) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  {/* Sci-Fi Glow behind Image */}
                  <div className="absolute w-32 h-32 bg-emerald-500/20 blur-2xl rounded-full group-hover:bg-emerald-400/30 transition-all duration-500" />
                  
                  {/* Image representing thumbnail */}
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="relative z-10 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                  )}
                  
                  {/* Decorative corner brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30 rounded-tl z-20" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-500/30 rounded-br z-20" />
                </div>

                {/* ── Card Details Area ── */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-md shadow-[0_0_8px_rgba(0,255,170,0.05)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold tracking-wider text-slate-300 transition-all duration-300 bg-slate-800/50 border border-slate-600/50 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_15px_rgba(0,255,170,0.15)]"
                  >
                    <FaExternalLinkAlt size={14} />
                    View Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
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
              className="relative w-full max-w-2xl bg-[#141923]/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-[0_0_40px_rgba(0,255,170,0.15)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-start bg-[#0a0e14]/90">
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
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,255,170,0.8)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
