import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Auto current year eka gannawa

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright Part */}
        <div className="text-slate-400 text-sm">
          &copy; {currentYear} <span className="text-emerald-400 font-semibold">Ushan Perera</span>. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a 
            href="https://github.com/ushan-perera" // Oyaage GitHub link eka danna
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub size={22} />
          </a>
          <a 
            href="https://linkedin.com/in/ushan-perera" // Oyaage LinkedIn link eka danna
            target="_blank" 
            rel="noreferrer" 
            className="text-slate-400 hover:text-[#0077b5] transition-colors duration-300"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Tech Stack Credit */}
        <div className="text-slate-500 text-sm">
          Built with <span className="text-white">Next.js</span> & <span className="text-white">Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
}