'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-10 md:pt-0 md:pb-0 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">

        {/* Left Column: Text & Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-center md:text-left z-10"
        >
          <h2 className="text-xl md:text-2xl text-emerald-400 font-semibold mb-2 tracking-wide">
            Hi, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Ushan <br className="hidden md:block" /> Perera
          </h1>

          <div className="text-xl md:text-3xl font-medium text-cyan-300 mb-6 h-[40px]">
            <Typewriter
              words={[
                'Full-Stack Developer',
                'DevOps & SRE Enthusiast',
                'AI & ML Enthusiast',
                'IoT Enthusiast'
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Passionate about building scalable automated software systems, modern web applications,
            and exploring the depths of cloud infrastructure, artificial intelligence and internet of things.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a
              href="/Ushan_Perera_Resume.pdf"
              download
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:scale-105"
            >
              <FaDownload /> Download Resume
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ushan-perera-16ab952b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/ushansamudithaperera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-400 hover:bg-slate-800 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: ONLY The Cutout Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[450px] md:h-[700px] lg:h-[850px] w-full flex items-end justify-center md:justify-end mt-10 md:mt-0"
        >
          <img
            src="/me-cutout.png"
            alt="Ushan Perera"
            className="h-[105%] w-auto object-contain object-middle -mb-12 md:-mb-16 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] z-10"
          />
        </motion.div>

        {/* Custom blending shadow (Darkening effect on the right side) */}
        <div className="absolute top-0 right-0 h-full w-[40%] bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-20"></div>

      </div>
    </section>
  );
}