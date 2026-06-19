'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, animate, PanInfo } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaProjectDiagram, FaAward, FaUsers, FaGithub, FaLinkedin, FaJava, FaAws, FaDatabase } from 'react-icons/fa';

import { SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus, SiSharp, SiPhp, SiReact, SiNextdotjs, SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiSpringboot, SiDotnet, SiMongodb, SiMysql, SiDocker, SiKubernetes, SiLinux, SiPrometheus, SiGrafana, SiGit, SiGithub } from 'react-icons/si';
// Education accordion data
const educationData = [
  {
    title: 'Undergraduate Degree',
    subtitle: 'University of Kelaniya \u2022 2023 \u2013 Present (Expected: 2027)',
    content:
      "Reading for a BSc in Computer Science. Deeply focused on high-level computer science concepts, modern software development, and automated software systems. Passionate about exploring AI & ML architectures and implementing scalable DevOps/SRE practices.",
  },
  {
    title: 'G.C.E. Advanced Level (A/L)',
    subtitle: 'R/New Town Prince College \u2022 2021 (2022)',
    content:
      "Successfully completed in the Physical Science (Mathematics) stream with 3 \u2018B\u2019 passes, building a strong foundation in analytical thinking, calculus, and advanced problem-solving.",
  },
  {
    title: 'G.C.E. Ordinary Level (O/L)',
    subtitle: 'R/Ananda Vidyalaya \u2022 2017',
    content:
      'Passed with excellent academic standing, demonstrating an early and strong aptitude for fundamental sciences, mathematics, and logical reasoning.',
  },
];

// Projects data array
const projectsData = [
  {
    title: "Sentinel Stream",
    status: "Finished",
    description: "A real-time network intrusion detection system with multi-layer detection architecture, adaptive feedback, and complete Dockerized deployment.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Docker"],
    github: "https://github.com/ushansamudithaperera/Sentinel-Stream-System",
    linkedin: "https://www.linkedin.com/posts/ushan-perera-16ab952b3_cybersecurity-intrusiondetection-fullstack-ugcPost-7438299983537229824-0JTY"
  },
  {
    title: "AI Smart Inventory System",
    status: "Finished",
    description: "Scalable inventory platform utilizing Google Gemini AI for automated product categorization, featuring Redis caching and Grafana monitoring.",
    tech: ["MERN Stack", "Gemini AI", "Redis", "Docker", "Grafana"],
    github: "https://github.com/ushansamudithaperera/Smart-Inventory-System",
    linkedin: "https://www.linkedin.com/posts/ushan-perera-16ab952b3_fullstackdevelopment-mern-artificialintelligence-ugcPost-7449506753236353024-fWdr"
  },
  {
    title: "Travel Commerce Platform",
    status: "Finished",
    description: "A full-stack digital marketplace connecting travelers with local service providers, featuring secure RESTful APIs and optimized data retrieval.",
    tech: ["React.js", "Spring Boot", "MongoDB", "REST APIs"],
    github: "https://github.com/ushansamudithaperera/Online-Platform-for-Travel-Based-Commerce",
    linkedin: "https://www.linkedin.com/posts/ushan-perera-16ab952b3_webdevelopment-fullstack-servicemarketplace-ugcPost-7441446922617495554-nvgm"
  },
  {
    title: "Gem Trading System",
    status: "Ongoing",
    description: "A modern digital platform currently in development for securely trading and managing gems with advanced commerce features.",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ushansamudithaperera/Gem-Trading-System",
    linkedin: ""
  }
];

// Certifications data array
const certifications = [
  { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", date: "Apr 2026", pdfLink: "/aws.pdf" },
  { title: "Kubernetes for the Absolute Beginners", issuer: "KodeKloud", date: "Mar 2026", pdfLink: "/kubernetes.pdf" },
  { title: "Docker Training Course for the Absolute Beginner", issuer: "KodeKloud", date: "Mar 2026", pdfLink: "/docker.pdf" },
  { title: "Hands-on Introduction to Linux Commands and Shell Scripting", issuer: "IBM", date: "Mar 2026", pdfLink: "/linux.pdf" },
  { title: "Developing Back-End Apps with Node.js and Express", issuer: "IBM", date: "Mar 2026", pdfLink: "/node.pdf" },
  { title: "Introduction to Information Security", issuer: "HashX", date: "Mar 2026", pdfLink: "/security.pdf" }
];

// Accordion-style Education Timeline sub-component
function EducationTimeline() {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {/* Continuous vertical guide line */}
      <div className="absolute left-[7px] top-0 w-[2px] h-full bg-slate-800 rounded-full" />

      <div className="space-y-0">
        {educationData.map((item, index) => {
          const isActive = activeNode === index;
          return (
            <div key={index} className="relative pl-10 pb-8 last:pb-0">
              {/* Dot */}
              <button
                onClick={() => setActiveNode(index)}
                aria-label={`Expand ${item.title}`}
                className={`absolute left-0 top-[3px] w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all duration-300 focus:outline-none ${isActive
                  ? 'bg-emerald-400 border-emerald-400 shadow-[0_0_10px_#34d399] scale-110'
                  : 'bg-slate-800 border-slate-600 hover:border-emerald-400/60'
                  }`}
              />

              {/* Header — clickable */}
              <button
                onClick={() => setActiveNode(index)}
                className="w-full text-left group focus:outline-none"
              >
                <h3
                  className={`text-lg font-bold leading-snug transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs mt-0.5 transition-colors duration-300 ${isActive ? 'text-emerald-400' : 'text-slate-600'
                    }`}
                >
                  {item.subtitle}
                </p>
              </button>

              {/* Animated content panel */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed border-l-2 border-cyan-300 pl-4 py-1">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// Draggable Infinite Marquee Track using Framer Motion
interface MarqueeTrackProps {
  children: React.ReactNode;
  className?: string;
}

function MarqueeTrack({ children, className = "" }: MarqueeTrackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth;
    const halfWidth = totalWidth / 2;

    let controls: any;

    if (!isDragging && !isHovered) {
      const currentX = x.get();
      let startX = currentX % halfWidth;
      if (startX > 0) startX -= halfWidth;
      x.set(startX);

      const targetX = -halfWidth;
      const distance = Math.abs(targetX - startX);
      const speed = 40; // Pixels per second
      const duration = distance / speed;

      controls = animate(x, targetX, {
        ease: "linear",
        duration: duration,
        onComplete: () => {
          x.set(0);
          setLoopKey((prev) => prev + 1);
        },
      });
    }

    return () => {
      controls?.stop();
    };
  }, [isDragging, isHovered, loopKey]);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (!trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth;
    const halfWidth = totalWidth / 2;

    let currentX = x.get();
    let normalizedX = currentX % halfWidth;
    if (normalizedX > 0) {
      normalizedX -= halfWidth;
    }
    x.set(normalizedX);
    setLoopKey((prev) => prev + 1);
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={trackRef}
        style={{ x }}
        drag="x"
        dragElastic={0.1}
        dragConstraints={{ left: -3000, right: 3000 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="flex w-max cursor-grab active:cursor-grabbing select-none py-4"
      >
        {children}
      </motion.div>
    </div>
  );
}

// Api define karagamu ape Nodes (Tabs) tika
const tabs = [
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'skills', label: 'Skills', icon: FaLaptopCode },
  { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
  { id: 'certifications', label: 'Certifications', icon: FaAward },
  { id: 'extra', label: 'Extra-Curricular', icon: FaUsers },
];


export default function About() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="about" className="py-20 bg-slate-950 min-h-screen px-6 overflow-hidden">

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A dedicated tech enthusiast with a strong foundation in modern computing,
            software engineering, and cloud infrastructure.
          </p>
        </motion.div>

        {/* The Node Interface (Horizontal Timeline) */}
        <div className="relative mb-16 w-full overflow-x-auto pb-4 custom-scrollbar">
          <div className="min-w-[600px] relative flex justify-between items-center mx-auto px-4 py-6 overflow-visible">
            {/* The Horizontal Background Line */}
            <div className="absolute left-0 right-0 h-1 bg-slate-800 top-1/2 transform -translate-y-1/2 z-0 rounded-full"></div>

            {/* The Nodes */}
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col items-center cursor-pointer group ${isActive ? 'z-20' : 'z-10'
                    }`}
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-4 transition-all duration-300 ${isActive
                    ? 'bg-slate-900 border-emerald-400 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)] scale-110'
                    : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-emerald-400/50 hover:text-emerald-400/80'
                    }`}>
                    <Icon size={isActive ? 28 : 24} />
                  </div>
                  <span className={`mt-3 text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400/80'}`}>
                    {tab.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[400px] bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">

            {/* 1. Education Content — Accordion Timeline */}
            {activeTab === 'education' && (
              <EducationTimeline />
            )}

            {/* 2. Skills Content (With Carousel Effect) */}
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 overflow-hidden"
              >
                {[
                  {
                    title: "Programming Languages",
                    items: [
                      { name: "JavaScript", icon: <SiJavascript size={32} /> },
                      { name: "TypeScript", icon: <SiTypescript size={32} /> },
                      { name: "Python", icon: <SiPython size={32} /> },
                      { name: "Java", icon: <FaJava size={32} /> },
                      { name: "C", icon: <SiC size={32} /> },
                      { name: "C++", icon: <SiCplusplus size={32} /> },
                      { name: "C#", icon: <SiSharp size={32} /> },
                      { name: "PHP", icon: <SiPhp size={32} /> }
                    ]
                  },
                  {
                    title: "Frontend Technologies",
                    items: [
                      { name: "React", icon: <SiReact size={32} /> },
                      { name: "Next.js", icon: <SiNextdotjs size={32} /> },
                      { name: "HTML5", icon: <SiHtml5 size={32} /> },
                      { name: "CSS3", icon: <SiCss size={32} /> },
                      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
                      { name: "Bootstrap", icon: <SiBootstrap size={32} /> }
                    ]
                  },
                  {
                    title: "Backend & Databases",
                    items: [
                      { name: "Node.js", icon: <SiNodedotjs size={32} /> },
                      { name: "Express.js", icon: <SiExpress size={32} /> },
                      { name: "Spring Boot", icon: <SiSpringboot size={32} /> },
                      { name: ".NET", icon: <SiDotnet size={32} /> },
                      { name: "MongoDB", icon: <SiMongodb size={32} /> },
                      { name: "MySQL", icon: <SiMysql size={32} /> },
                      { name: "Databases", icon: <FaDatabase size={32} /> }
                    ]
                  },
                  {
                    title: "Cloud, DevOps & Tools",
                    items: [
                      { name: "AWS", icon: <FaAws size={32} /> },
                      { name: "Docker", icon: <SiDocker size={32} /> },
                      { name: "Kubernetes", icon: <SiKubernetes size={32} /> },
                      { name: "Linux", icon: <SiLinux size={32} /> },
                      { name: "Prometheus", icon: <SiPrometheus size={32} /> },
                      { name: "Grafana", icon: <SiGrafana size={32} /> },
                      { name: "Git", icon: <SiGit size={32} /> },
                      { name: "GitHub", icon: <SiGithub size={32} /> }
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-slate-800/30 p-4 rounded-xl border border-slate-700">
                    <h3 className="text-emerald-400 font-semibold mb-3">{category.title}</h3>
                    <MarqueeTrack className="[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                      {/* Render first copy */}
                      <div className="flex gap-6 pr-6 shrink-0">
                        {category.items.map((item, i) => (
                          <div
                            key={`first-${i}`}
                            className="flex flex-col items-center justify-center min-w-[100px] h-[90px] gap-2 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(103,232,249,0.3)] transition-all duration-300 group"
                          >
                            <div className="text-slate-400 group-hover:text-cyan-300 transition-colors">
                              {item.icon}
                            </div>
                            <span className="text-xs text-slate-400 font-medium tracking-wide">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* Render second copy */}
                      <div className="flex gap-6 pr-6 shrink-0">
                        {category.items.map((item, i) => (
                          <div
                            key={`second-${i}`}
                            className="flex flex-col items-center justify-center min-w-[100px] h-[90px] gap-2 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(103,232,249,0.3)] transition-all duration-300 group"
                          >
                            <div className="text-slate-400 group-hover:text-cyan-300 transition-colors">
                              {item.icon}
                            </div>
                            <span className="text-xs text-slate-400 font-medium tracking-wide">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </MarqueeTrack>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. Projects Content */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden relative w-full"
              >
                <MarqueeTrack>
                  {/* First copy */}
                  <div className="flex gap-6 pr-6 shrink-0">
                    {projectsData.map((project, idx) => (
                      <div
                        key={`first-${idx}`}
                        className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(103,232,249,0.3)] transition-all duration-300 relative flex flex-col justify-between w-[400px] shrink-0 grow-0"
                      >
                        <div>
                          <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full border ${project.status === "Finished"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }`}>
                            {project.status}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-2 pr-16">{project.title}</h3>
                          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                              <span key={i} className="text-xs text-slate-300 bg-slate-900 px-2 py-1 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 items-center">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-white transition-colors"
                              aria-label={`${project.title} GitHub repository`}
                            >
                              <FaGithub size={20} />
                            </a>
                          )}
                          {project.linkedin && (
                            <a
                              href={project.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-[#0077b5] transition-colors"
                              aria-label={`${project.title} LinkedIn post`}
                            >
                              <FaLinkedin size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Second copy */}
                  <div className="flex gap-6 pr-6 shrink-0">
                    {projectsData.map((project, idx) => (
                      <div
                        key={`second-${idx}`}
                        className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(103,232,249,0.3)] transition-all duration-300 relative flex flex-col justify-between w-[400px] shrink-0 grow-0"
                      >
                        <div>
                          <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full border ${project.status === "Finished"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            }`}>
                            {project.status}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-2 pr-16">{project.title}</h3>
                          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                              <span key={i} className="text-xs text-slate-300 bg-slate-900 px-2 py-1 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 items-center">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-white transition-colors"
                              aria-label={`${project.title} GitHub repository`}
                            >
                              <FaGithub size={20} />
                            </a>
                          )}
                          {project.linkedin && (
                            <a
                              href={project.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-[#0077b5] transition-colors"
                              aria-label={`${project.title} LinkedIn post`}
                            >
                              <FaLinkedin size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </MarqueeTrack>
              </motion.div>
            )}

            {/* 4. Certifications Content */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden relative w-full min-h-[300px] md:min-h-[320px] flex flex-col justify-center"
              >
                <MarqueeTrack>
                  {/* First copy */}
                  <div className="flex gap-6 pr-6 shrink-0">
                    {certifications.map((cert, index) => (
                      <a
                        key={`first-${index}`}
                        href={cert.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 flex flex-col justify-between min-h-[220px] w-[400px] shrink-0 grow-0 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(103,232,249,0.3)] transition-all duration-300 group"
                      >
                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors leading-snug">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-slate-400">
                            {cert.issuer}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xs text-slate-500">
                            {cert.date}
                          </span>
                          <span className="text-xs text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                            View Certificate ↗
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Second copy */}
                  <div className="flex gap-6 pr-6 shrink-0">
                    {certifications.map((cert, index) => (
                      <a
                        key={`second-${index}`}
                        href={cert.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800/40 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 flex flex-col justify-between min-h-[220px] w-[400px] shrink-0 grow-0 hover:border-cyan-300 hover:shadow-[0_0_15px_rgba(103,232,249,0.3)] transition-all duration-300 group"
                      >
                        <div className="flex flex-col gap-2">
                          <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors leading-snug">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-slate-400">
                            {cert.issuer}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-xs text-slate-500">
                            {cert.date}
                          </span>
                          <span className="text-xs text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                            View Certificate ↗
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </MarqueeTrack>
              </motion.div>
            )}

            {/* 5. Extra-Curricular Content */}
            {activeTab === 'extra' && (
              <motion.div
                key="extra"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-slate-300"
              >
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white">Membership Coordinator</h3>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20">
                      Mar 2025 - Aug 2025
                    </span>
                  </div>
                  <p className="text-cyan-300 font-semibold text-sm mb-4">UOK Robot Battles</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
                    <li>Communicated competition details and updates to registered members through emails and phone calls.</li>
                    <li>Provided support to fellow membership coordinators in managing participant engagement activities.</li>
                    <li>Assisted the organizing committee in ensuring effective coordination of membership-related operations.</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white">Member</h3>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20">
                      Jun 2023 - Present
                    </span>
                  </div>
                  <p className="text-cyan-300 font-semibold text-sm mb-4">Electronics and Computer Science Club (ECSC)</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
                    <li>Contributed to organizing and executing major technical events, boosting student engagement in modern computing and software engineering.</li>
                  </ul>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}