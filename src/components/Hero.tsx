'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-slate-950 flex items-center justify-center py-20 px-6 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Column: Text & Typewriter */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="text-emerald-400">Ushan Perera</span>
          </h1>
          <div className="text-xl lg:text-3xl text-slate-300 font-semibold h-[40px] mb-6">
            <Typewriter
              words={[
                'Full-Stack Developer', 
                'DevOps & SRE Enthusiast', 
                'AI & ML Enthusiast', 
                'Software Systems Engineer'
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          <p className="text-slate-400 text-lg max-w-lg mx-auto lg:mx-0">
            Passionate about building scalable automated software systems, modern web applications, and exploring the depths of cloud infrastructure.
          </p>
        </motion.div>

        {/* Middle Column: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center order-1 lg:order-2"
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-emerald-400 overflow-hidden relative shadow-[0_0_30px_rgba(52,211,153,0.3)]">
            {/* Using standard img tag for S3 static export compatibility */}
            <img 
              src="/me.png" 
              alt="Ushan Perera" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Column: Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex flex-col items-center lg:items-end gap-5 order-3"
        >
          {/* Download CV Button */}
          <a 
            href="/Ushan_Perera_CV.pdf" 
            download="Ushan_Perera_CV.pdf"
            className="flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full max-w-[250px] shadow-[0_0_15px_rgba(52,211,153,0.4)]"
          >
            <FaDownload size={18} /> Download CV
          </a>

          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/ushan-perera" // Oyaage LinkedIn link eka methanata danna
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-3 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full max-w-[250px]"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>

          {/* GitHub Button */}
          <a 
            href="https://github.com/ushan-perera" // Oyaage GitHub link eka methanata danna
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center justify-center gap-3 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full max-w-[250px]"
          >
            <FaGithub size={20} /> GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}