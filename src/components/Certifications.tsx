'use client';

import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaLinux, FaNodeJs, FaShieldAlt, FaServer } from 'react-icons/fa';

const certsData = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    icon: FaAws,
    color: 'text-[#FF9900]'
  },
  {
    title: 'Kubernetes for the Absolute Beginners with Hands-on Labs',
    issuer: 'KodeKloud',
    icon: FaServer,
    color: 'text-blue-500'
  },
  {
    title: 'Docker Training Course for the Absolute Beginner',
    issuer: 'KodeKloud',
    icon: FaDocker,
    color: 'text-[#2496ED]'
  },
  {
    title: 'Hands-on Introduction to Linux Commands and Shell Scripting',
    issuer: 'IBM',
    icon: FaLinux,
    color: 'text-yellow-500'
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    issuer: 'IBM',
    icon: FaNodeJs,
    color: 'text-[#339933]'
  },
  {
    title: 'Introduction to Information Security',
    issuer: 'HashX',
    icon: FaShieldAlt,
    color: 'text-emerald-500'
  }
];

export default function Certifications() {
  return (
    <section className="relative w-full max-w-5xl mx-auto py-24 px-4 sm:px-6" id="certifications">
      
      
      {/* ── Section Header ── */}
      <div className="text-center mb-16 relative z-10 bg-slate-950/60 backdrop-blur-md py-4 rounded-3xl border border-slate-800/50 inline-block left-1/2 -translate-x-1/2 px-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase shadow-emerald-500/50 drop-shadow-lg"
        >
          Certifications Panel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-emerald-400 mt-2 tracking-widest font-mono uppercase"
        >
          Step 5: Professional Validation
        </motion.p>
      </div>

      {/* ── Main Glassmorphism Panel Container ── */}
      <div className="relative bg-[#141923]/60 border border-[#00ffaa]/20 rounded-[2rem] p-8 md:p-12 shadow-[0_0_20px_rgba(0,255,170,0.15)] backdrop-blur-xl z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certsData.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col items-center text-center bg-[#0a0e14]/80 border border-slate-700/60 rounded-2xl p-6 hover:border-emerald-500/60 hover:shadow-[0_0_20px_rgba(0,255,170,0.15)] transition-all duration-300"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                
                {/* Glowing Icon */}
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                  <div className={`absolute inset-0 blur-md opacity-20 group-hover:opacity-40 transition-opacity bg-current ${cert.color}`} />
                  <Icon size={30} className={`relative z-10 ${cert.color}`} />
                </div>
                
                {/* Text */}
                <h3 className="text-white font-bold text-sm md:text-base leading-snug mb-2 group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm font-mono tracking-wider uppercase mt-auto">
                  {cert.issuer}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
