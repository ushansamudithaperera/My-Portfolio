import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0a0f16]/80 backdrop-blur-md pt-16 pb-8 z-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section: 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold tracking-wide">
                <span className="text-white">Ushan</span> <span className="text-emerald-400">Perera</span>
              </h3>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                Computer Science Undergraduate | DevOps & SRE Enthusiast
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/ushansamudithaperera"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors flex items-center justify-center w-10 h-10"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ushan-perera-16ab952b3/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 transition-colors flex items-center justify-center w-10 h-10"
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
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Certifications', href: '#certifications' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm block"
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
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors flex items-center justify-center">
                  <FaPhoneAlt size={14} />
                </div>
                <span>+94 71 174 2319</span>
              </a>
              <a
                href="mailto:samudithaperera01@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors text-sm group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors flex items-center justify-center">
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