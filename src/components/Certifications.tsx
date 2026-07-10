'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAws, FaDocker, FaLinux, FaNodeJs, FaShieldAlt, FaServer, FaExternalLinkAlt, FaTimes, FaPython, FaReact, FaJs, FaMicrosoft, FaCode, FaCloud } from 'react-icons/fa';

type Certification = {
  title: string;
  issuer: string;
  icon: any;
  color: string;
  pdfUrl: string;
};

const certsData: Certification[] = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    icon: FaAws,
    color: 'text-[#FF9900]',
    pdfUrl: '/aws.pdf'
  },
  {
    title: 'Kubernetes for the Absolute Beginners with Hands-on Labs',
    issuer: 'KodeKloud',
    icon: FaServer,
    color: 'text-blue-500',
    pdfUrl: '/kubernetes.pdf'
  },
  {
    title: 'Docker Training Course for the Absolute Beginner',
    issuer: 'KodeKloud',
    icon: FaDocker,
    color: 'text-[#2496ED]',
    pdfUrl: '/docker.pdf'
  },
  {
    title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
    issuer: 'IBM',
    icon: FaLinux,
    color: 'text-yellow-500',
    pdfUrl: '/Linux.pdf'
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM',
    icon: FaNodeJs,
    color: 'text-[#339933]',
    pdfUrl: '/node.pdf'
  },
  {
    title: 'Introduction to Information Security',
    issuer: 'HashX',
    icon: FaShieldAlt,
    color: 'text-emerald-500',
    pdfUrl: '/security.pdf'
  },
  {
    title: '100 Days of Cloud - AWS',
    issuer: '100 Days of Cloud',
    icon: FaAws,
    color: 'text-[#FF9900]',
    pdfUrl: '/100_Days_of_Cloud_AWS.pdf'
  },
  {
    title: '100 Days of Cloud - Azure',
    issuer: '100 Days of Cloud',
    icon: FaMicrosoft,
    color: 'text-[#00A4EF]',
    pdfUrl: '/100_Days_of_Cloud_Azure.pdf'
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    icon: FaCode,
    color: 'text-blue-400',
    pdfUrl: '/Introduction to Front-End Development.pdf'
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    icon: FaJs,
    color: 'text-yellow-400',
    pdfUrl: '/Programming with Java Script.pdf'
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    icon: FaPython,
    color: 'text-blue-500',
    pdfUrl: '/Python for Data Science, AI & Development.pdf'
  },
  {
    title: 'React Basics',
    issuer: 'Meta',
    icon: FaReact,
    color: 'text-[#61DAFB]',
    pdfUrl: '/React Basics.pdf'
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Duplicate array for infinite scroll
  const marqueeCerts = [...certsData, ...certsData];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto py-24 px-4 sm:px-6 overflow-hidden" id="certifications">
      
      {/* ── Main Glassmorphism Panel Container ── */}
      <div className="relative bg-[#141923]/60 border border-[#00ffaa]/20 rounded-3xl py-12 md:py-16 shadow-[0_0_40px_rgba(0,255,170,0.1)] backdrop-blur-xl z-10 overflow-hidden">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col items-center justify-center mb-16 relative px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[0.2em] uppercase text-center relative z-10">
            CERTIFICATIONS PANEL
          </h2>
          <p className="text-slate-400 font-mono text-sm tracking-widest mt-4 uppercase text-center">
            STEP 5: PROFESSIONAL VALIDATION
          </p>
        </div>

        {/* ── Continuous Marquee Carousel ── */}
        <div className="w-full overflow-hidden relative">
          
          {/* Left/Right Fade Gradients for smooth marquee entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#141923] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#141923] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div 
            className="flex gap-6 w-max hover:[animation-play-state:paused] px-16"
            style={{ animation: 'certMarquee 40s linear infinite' }}
          >
            <style>{`
              @keyframes certMarquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
            `}</style>

            {marqueeCerts.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div
                  key={`${cert.title}-${idx}`}
                  className="w-[320px] md:w-[380px] shrink-0 group relative flex flex-col bg-[#0a0e14]/90 border border-slate-700/60 rounded-3xl overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(0,255,170,0.15)] transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* ── PDF Thumbnail Area ── */}
                  <div className="relative h-56 w-full bg-[#1e2330] overflow-hidden border-b border-slate-800">
                    <iframe 
                      src={`${cert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      className="absolute inset-0 w-full h-[150%] -top-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      title={cert.title}
                    />
                    
                    {/* Intercept pointer events so PDF iframe doesn't steal scroll/drag or clicks */}
                    <div className="absolute inset-0 z-10 bg-transparent" />
                    
                    {/* Bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-[#0a0e14]/20 to-transparent z-20 pointer-events-none" />
                  </div>

                  {/* ── Card Details Area ── */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30 -mt-12">
                    
                    {/* Small Icon Badge */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className={cert.color} />
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-wide mb-3 group-hover:text-emerald-300 transition-colors duration-300 line-clamp-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-slate-400 text-xs font-mono tracking-widest uppercase mb-6 mt-auto">
                      {cert.issuer}
                    </p>
                    
                    {/* Action Button */}
                    <div className="mt-auto pt-4 border-t border-slate-800/80">
                      <button 
                        onClick={() => setSelectedCert(cert)}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold tracking-wider text-slate-300 transition-all duration-300 bg-slate-800/50 border border-slate-600/50 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300"
                      >
                        <FaExternalLinkAlt size={14} />
                        View Full Certificate
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Standard Full-Size PDF Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-[#0a0e14]/95 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl shadow-[0_0_50px_rgba(0,255,170,0.2)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/50 bg-[#0a0e14]/80">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center">
                    {(() => {
                      const Icon = selectedCert.icon;
                      return <Icon size={20} className={selectedCert.color} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                      {selectedCert.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                      {selectedCert.issuer}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors shrink-0"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* PDF Viewer Body */}
              <div className="flex-grow w-full h-full bg-[#1e2330] p-4 md:p-8">
                <iframe 
                  src={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="w-full h-full rounded-xl border border-slate-700 shadow-xl"
                  title={selectedCert.title}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
