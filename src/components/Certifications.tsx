'use client';

import { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAws, FaDocker, FaLinux, FaNodeJs, FaShieldAlt, FaServer, FaExternalLinkAlt, FaTimes, FaPython, FaReact, FaJs, FaMicrosoft, FaCode, FaCloud } from 'react-icons/fa';

type Certification = {
  title: string;
  issuer: string;
  icon: any;
  color: string;
  pdfLink: string;
  thumbnail: string;
};

const certsData: Certification[] = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    icon: FaAws,
    color: 'text-[#FF9900]',
    pdfLink: '/aws.pdf',
    thumbnail: '/aws.png'
  },
  {
    title: 'Kubernetes for the Absolute Beginners with Hands-on Labs',
    issuer: 'KodeKloud',
    icon: FaServer,
    color: 'text-blue-500',
    pdfLink: '/kubernetes.pdf',
    thumbnail: '/kubernetes.png'
  },
  {
    title: 'Docker Training Course for the Absolute Beginner',
    issuer: 'KodeKloud',
    icon: FaDocker,
    color: 'text-[#2496ED]',
    pdfLink: '/docker.pdf',
    thumbnail: '/docker.png'
  },
  {
    title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
    issuer: 'IBM',
    icon: FaLinux,
    color: 'text-yellow-500',
    pdfLink: '/Linux.pdf',
    thumbnail: '/Linux.png'
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM',
    icon: FaNodeJs,
    color: 'text-[#339933]',
    pdfLink: '/node.pdf',
    thumbnail: '/node.png'
  },
  {
    title: 'Introduction to Information Security',
    issuer: 'HashX',
    icon: FaShieldAlt,
    color: 'text-primary-500',
    pdfLink: '/security.pdf',
    thumbnail: '/security.png'
  },
  {
    title: '100 Days of Cloud - AWS',
    issuer: '100 Days of Cloud',
    icon: FaAws,
    color: 'text-[#FF9900]',
    pdfLink: '/100_Days_of_Cloud_AWS.pdf',
    thumbnail: '/100_Days_of_Cloud_AWS.png'
  },
  {
    title: '100 Days of Cloud - Azure',
    issuer: '100 Days of Cloud',
    icon: FaMicrosoft,
    color: 'text-[#00A4EF]',
    pdfLink: '/100_Days_of_Cloud_Azure.pdf',
    thumbnail: '/100_Days_of_Cloud_Azure.png'
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    icon: FaCode,
    color: 'text-blue-400',
    pdfLink: '/Introduction to Front-End Development.pdf',
    thumbnail: '/Introduction to Front-End Development.png'
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    icon: FaJs,
    color: 'text-yellow-400',
    pdfLink: '/Programming with Java Script.pdf',
    thumbnail: '/Programming with Java Script.png'
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    icon: FaPython,
    color: 'text-blue-500',
    pdfLink: '/Python for Data Science, AI & Development.pdf',
    thumbnail: '/Python for Data Science, AI & Development.png'
  },
  {
    title: 'React Basics',
    issuer: 'Meta',
    icon: FaReact,
    color: 'text-[#61DAFB]',
    pdfLink: '/React Basics.pdf',
    thumbnail: '/React Basics.png'
  }
];

export default function Certifications() {

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
  const marqueeCerts = [...certsData, ...certsData];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto py-24 px-4 sm:px-6 overflow-hidden" id="certifications">

      {/* ── Main Glassmorphism Panel Container ── */}
      <div className="relative bg-[#141923]/60 border border-[var(--color-primary-400)]/20 rounded-3xl py-12 md:py-16 shadow-[0_0_40px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.1)] backdrop-blur-sm md:backdrop-blur-xl z-10 overflow-hidden transform-gpu" style={{ willChange: 'transform' }}>

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center justify-center mb-16 relative px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[0.2em] uppercase text-center relative z-10">
            CERTIFICATIONS
          </h2>
          <p className="text-slate-400 font-mono text-sm tracking-widest mt-4 uppercase text-center">
            STEP 5: PROFESSIONAL VALIDATION
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

            {marqueeCerts.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={`${cert.title}-${idx}`}
                  className="w-[320px] md:w-[380px] shrink-0 group relative flex flex-col bg-[#0a0e14]/90 border border-slate-700/60 rounded-3xl overflow-hidden hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15)] transition-all duration-300 transform hover:-translate-y-2 transform-gpu"
                  style={{ willChange: 'transform' }}
                >
                  {/* ── Image Thumbnail Area ── */}
                  <div className="relative w-full h-48 md:h-60 lg:h-64 overflow-hidden rounded-t-xl bg-[#05080c] flex items-center justify-center">
                    <img src={cert.thumbnail} alt={cert.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* ── Card Details Area ── */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30 -mt-12">

                    {/* Small Icon Badge */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className={cert.color} />
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-primary-300 transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h3>

                    <p className="text-slate-400 text-xs font-mono tracking-widest uppercase mb-6 mt-auto">
                      {cert.issuer}
                    </p>

                    {/* Action Button */}
                    <div className="mt-auto pt-4 border-t border-slate-800/80">
                      <a
                        href={cert.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold tracking-wider text-slate-300 transition-all duration-300 bg-slate-800/50 border border-slate-600/50 hover:bg-primary-500/10 hover:border-primary-500/40 hover:text-primary-300"
                      >
                        <FaExternalLinkAlt size={14} />
                        View Full Certificate
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
