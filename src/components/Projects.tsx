'use client';

import { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  year: string;
  tags: string[];
  shortDescription: string;
  details: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Sentinel Stream',
    year: '2026',
    tags: ['React', 'Node', 'MongoDB', 'Docker'],
    shortDescription: 'Real-Time Intrusion Detection System with 4-layer anomalous network behavior detection.',
    details: [
      'Sentinel Stream - Real-Time Intrusion Detection System (2026)',
      'Designed a full-stack intrusion detection system with 4-layer detection mechanisms (volumetric, pattern-based, Z-score, and EWMA) to identify anomalous network behavior in real time.',
      'Built an adaptive feedback system enabling analysts to adjust detection sensitivity through alert classification without requiring model retraining.',
      'Secured the application with JWT authentication, HTTP-only cookies, and Role-Based Access Control (RBAC); deployed the full infrastructure using Docker containerization.'
    ],
    image: '/Sentinel Stream.png',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'Smart Inventory AI',
    year: '2026',
    tags: ['React', 'Gemini AI', 'Redis'],
    shortDescription: 'AI-Powered platform utilizing Google Gemini to automate product categorization and sales forecasting.',
    details: [
      'AI-Powered Smart Inventory System (2026)',
      'Integrated Google Gemini AI into a scalable inventory platform to automate product identification, categorization, and predictive sales forecasting, reducing manual data entry by over 50%.',
      'Implemented monitoring and observability using Prometheus and Grafana to track system performance and business metrics.',
      'Improved backend data retrieval speeds by ~30% through Redis caching and MongoDB aggregation pipelines; automated test workflows via GitHub Actions CI/CD.'
    ],
    image: '/Smart Inventory AI.png',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'IT Support Agent',
    year: '2026',
    tags: ['FastAPI', 'LangChain', 'ChromaDB'],
    shortDescription: 'High-performance IT helpdesk agent with custom Machine Learning and RAG architecture.',
    details: [
      'Smart IT Service Management Agent (2026)',
      'Engineered a high-performance IT helpdesk agent using FastAPI and Pydantic, integrating a custom LightGBM and Scikit-Learn machine learning pipeline to classify support tickets with ~86% classification accuracy.',
      'Architected a Retrieval-Augmented Generation (RAG) workflow via LangChain and ChromaDB, utilizing Google Gemini AI to synthesize context-grounded resolution guides from embedded troubleshooting runbooks.',
      'Implemented a dynamic confidence guardrail (60% threshold) to intelligently route ambiguous requests to Level 2 support, and deployed the full interactive Streamlit interface using Docker containerization.'
    ],
    image: '/IT Support Agent.png',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 4,
    title: 'Travel Commerce',
    year: '2025',
    tags: ['React', 'Spring Boot'],
    shortDescription: 'Full-stack digital marketplace connecting travelers with local service providers.',
    details: [
      'Travel Commerce Platform | Group Project (2025)',
      'Developed a full-stack digital marketplace connecting travelers with local service providers via a responsive React.js frontend.',
      'Built secure RESTful APIs with Spring Boot and optimized MongoDB queries, improving dynamic data retrieval efficiency.'
    ],
    image: '/Travel Commerce.png',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 5,
    title: 'EDU QUIZ',
    year: '2025',
    tags: ['C#', '.NET', 'SQL Server'],
    shortDescription: 'Desktop application supporting automated quiz evaluation and real-time result generation.',
    details: [
      'EDU QUIZ - Quiz Management System | Group Project (2025)',
      'Developed a desktop application supporting automated quiz evaluation and real-time result generation.',
      'Architected a centralized SQL Server database with role-based access control to manage multi-tier permissions for 2 user roles (teachers and students).'
    ],
    image: '/EDU QUIZ.png',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 6,
    title: 'Happy Paws Clinic',
    year: '2025',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    shortDescription: 'Full-stack clinic management platform for scheduling, workflows, and pet adoption.',
    details: [
      'Happy Paws Veterinary Clinic System | Group Project (2025)',
      'Built a full-stack clinic management platform supporting appointment scheduling, patient workflows, and pet adoption services.',
      'Implemented SQL prepared statements across all user input fields, eliminating SQL injection vulnerabilities.'
    ],
    image: '/Happy Paws.png',
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 7,
    title: 'Voltiva 2.0',
    year: '2025',
    tags: ['ESP32', 'Blynk IoT', 'C++'],
    shortDescription: 'IoT-based smart energy monitoring system calculating live electricity costs with real-time alerts.',
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
    image: '/Creative Design.png',
    githubUrl: '#',
    demoUrl: '#'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // --- Drag and Auto-scroll State ---
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered || isDragging) return;

    let animationFrameId: number;
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        // Snap back when we scroll past exactly half the duplicated content
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    if (!scrollRef.current) return;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Duplicate array for infinite scroll
  const marqueeProjects = [...projectsData, ...projectsData];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto py-24 px-4 sm:px-6 overflow-hidden" id="projects">

      {/* ── Main Glassmorphism Panel ── */}
      <div className="relative z-10 bg-[#141923]/60 backdrop-blur-xl border border-[var(--color-primary-400)]/20 rounded-3xl py-12 md:py-16 shadow-[0_0_40px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.1)] overflow-hidden">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16 relative px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500/20 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[0.2em] uppercase text-center relative z-10">
            Projects
          </h2>
          <p className="text-slate-400 font-mono text-sm tracking-widest mt-4 uppercase text-center">
            Step 4: Deploy & Production
          </p>
        </div>

        {/* ── Continuous Marquee Carousel ── */}
        <div className="w-full overflow-hidden relative">

          {/* Left/Right Fade Gradients for smooth marquee entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#141923] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#141923] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className={`flex gap-6 w-full overflow-x-auto scrollbar-hide py-4 pr-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
          >

            {marqueeProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className="w-[320px] md:w-[420px] shrink-0 group relative flex flex-col bg-[#0a0e14]/90 border border-slate-700/60 rounded-3xl overflow-hidden hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15)] transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* ── Card Thumbnail Area ── */}
                <div className="relative h-56 w-full bg-[#0a101d] overflow-hidden">
                  {/* True Color Image with Scale Hover */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Bottom fade into card body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-transparent to-transparent z-20 pointer-events-none" />
                </div>

                {/* ── Card Details Area ── */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30 -mt-10">
                  <h3 className="text-2xl font-bold text-white tracking-wide mb-3 group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono tracking-wider text-primary-300 bg-primary-500/10 border border-primary-500/20 px-2 py-1 rounded-md shadow-[0_0_8px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.05)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 flex items-center gap-3 border-t border-slate-800/80">
                    {/* Icon Links */}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-primary-500/10 text-primary-400 hover:bg-primary-400 hover:text-slate-900 transition-colors"
                        title="Watch Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-white hover:text-slate-900 transition-colors"
                        title="View Source Code"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}

                    {/* View Full Details */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-grow py-3 rounded-xl text-sm font-semibold tracking-wider text-slate-300 transition-all duration-300 bg-slate-800/50 border border-slate-600/50 hover:bg-primary-500/10 hover:border-primary-500/40 hover:text-primary-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Standard Split-View Glassmorphism Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Content (50/50 Split View) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-[85vh] md:h-[75vh] flex flex-col md:flex-row bg-[#0a0e14]/95 backdrop-blur-2xl border border-primary-500/30 rounded-3xl shadow-[0_0_50px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.2)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors backdrop-blur-md"
              >
                <FaTimes size={20} />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-5/12 h-64 md:h-full relative bg-slate-900 shrink-0 border-b md:border-b-0 md:border-r border-slate-800/50">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0e14]/95 via-[#0a0e14]/20 to-transparent" />
              </div>

              {/* Right Side: Detailed Content */}
              <div className="w-full md:w-7/12 h-full flex flex-col p-6 md:p-10 lg:p-12 overflow-y-auto custom-scrollbar">

                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-4">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono tracking-wider text-primary-300 bg-primary-500/10 border border-primary-500/20 px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-6 flex-grow">
                  {selectedProject.details.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 text-slate-300 text-sm md:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500/80 mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.8)]" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                {/* Modal Footer Actions */}
                <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap gap-4">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wider text-slate-900 bg-primary-400 hover:bg-primary-300 transition-colors shadow-[0_0_20px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.3)]"
                    >
                      <FaExternalLinkAlt size={16} />
                      Watch Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wider text-slate-300 bg-slate-800/80 hover:bg-slate-700 transition-colors border border-slate-700"
                    >
                      <FaGithub size={18} />
                      View Source Code
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
