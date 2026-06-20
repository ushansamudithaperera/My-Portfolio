import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900/80 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Section: 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Ushan <span className="text-cyan-300">Perera</span>
              </h3>
              <p className="text-slate-400 text-xs mt-2 font-medium tracking-wide leading-relaxed">
                Full-Stack Developer | AI/ML Enthusiast | DevOps & SRE | IoT Enthusiast
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/ushansamudithaperera"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/40 hover:shadow-[0_0_10px_rgba(52,211,153,0.15)] transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ushan-perera-16ab952b3/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-300/40 hover:shadow-[0_0_10px_rgba(103,232,249,0.15)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4 md:pl-16">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
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
                    className="text-slate-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+94711742319"
                className="flex items-center gap-3 text-slate-400 group w-fit transition-colors duration-300"
              >
                <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 hover:bg-emerald-400/20 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] group-hover:bg-emerald-400/20 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-300">
                  <FaPhoneAlt size={14} />
                </div>
                <span className="text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">+94 71 174 2319</span>
              </a>
              <a
                href="mailto:samudithaperera01@gmail.com"
                className="flex items-center gap-3 text-slate-400 group w-fit transition-colors duration-300"
              >
                <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/30 hover:bg-emerald-400/20 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] group-hover:bg-emerald-400/20 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-300">
                  <FaEnvelope size={14} />
                </div>
                <span className="text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">samudithaperera01@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Ushan Perera. All rights reserved.</p>
          <p>
            Built with <span className="text-slate-400">Next.js</span> & <span className="text-slate-400">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}