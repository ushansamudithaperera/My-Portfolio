'use client';

import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { toggleTheme } = useTheme();

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0a0e14]/40 backdrop-blur-2xl pt-16 pb-8 z-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section: 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4 w-fit">
                {/* Theme Toggle Logo — click to swap theme */}
                <button
                  onClick={toggleTheme}
                  title="Toggle theme"
                  className="relative flex items-center justify-center px-2.5 h-8 rounded-lg border-[2px] cursor-pointer
                             border-primary-400/50 shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.3)]
                             bg-primary-900/20 hover:border-primary-400 transition-all duration-300"
                >
                  <span className="font-extrabold text-sm tracking-[0.2em] bg-gradient-to-r from-primary-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent ml-[0.2em]">
                    Ushan Perera
                  </span>
                </button>
              </div>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-sm">
                Computer Science Undergraduate | DevOps & SRE Enthusiast
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/ushansamudithaperera"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-primary-400 hover:border-primary-400/50 hover:bg-primary-400/10 hover:shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.2)] transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ushan-perera-16ab952b3/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-primary-400 hover:border-primary-400/50 hover:bg-primary-400/10 hover:shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.2)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 md:pl-16">
            <h4 className="text-sm font-bold tracking-[0.2em] text-white uppercase mb-6">QUICK LINKS</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#home' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certifications', href: '#certifications' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold tracking-[0.2em] text-white uppercase mb-6">CONTACT INFO</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+94711742319"
                className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors text-sm group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-primary-400 group-hover:border-primary-400/50 group-hover:bg-primary-400/10 group-hover:shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.2)] transition-all duration-300">
                  <FaPhoneAlt size={14} />
                </div>
                <span>+94 71 174 2319</span>
              </a>
              <a
                href="mailto:samudithaperera01@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-primary-400 transition-colors text-sm group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-primary-400 group-hover:border-primary-400/50 group-hover:bg-primary-400/10 group-hover:shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.2)] transition-all duration-300">
                  <FaEnvelope size={14} />
                </div>
                <span>samudithaperera01@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">© {currentYear} Ushan Perera. All rights reserved.</p>
          <p className="text-slate-500 text-xs">
            Built with <span className="text-slate-400">Next.js</span> & <span className="text-slate-400">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}