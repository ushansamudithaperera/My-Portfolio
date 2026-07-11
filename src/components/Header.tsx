'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import { useTheme } from './ThemeProvider';

/* ─── Navigation Config ──────────────────────────────────────────── */

const NAV_LINKS = [
  { name: 'BIO', href: '#home' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXTRA', href: '#extracurricular' },
  { name: 'CONTACT', href: '#contact' },
];

/* ─── Logo Component ─────────────────────────────────────────────── */

function Logo() {
  const { theme, toggleTheme } = useTheme();
  const isBlue = theme === 'blue';

  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Theme Toggle Badge — click to swap colors */}
      <motion.button
        onClick={toggleTheme}
        title={`Switch to ${isBlue ? 'Green' : 'Blue'} theme`}
        className="relative flex items-center justify-center px-2.5 h-8 rounded-lg border-[2px] cursor-pointer
                   transition-all duration-500
                   border-primary-400/50 shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.3)]
                   bg-primary-900/20 hover:border-primary-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <span className="font-extrabold text-sm tracking-[0.2em] bg-gradient-to-r from-primary-400 via-primary-300 to-cyan-400 bg-clip-text text-transparent ml-[0.2em]">
          Ushan Perera
        </span>
        {/* Tiny theme-swap dot indicator */}
        <span
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full border border-[#0a0e14] transition-colors duration-500"
          style={{ backgroundColor: isBlue ? '#22d3ee' : 'rgb(var(--color-accent-r) var(--color-accent-g) var(--color-accent-b))' }}
        />
      </motion.button>

      {/* Wordmark — still navigates home */}
      <motion.a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="text-[22px] font-bold tracking-[0.15em] text-slate-100 hover:text-white transition-colors duration-300 cursor-pointer"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      >
      </motion.a>
    </div>
  );
}

/* ─── Hamburger Icon ─────────────────────────────────────────────── */

function HamburgerIcon({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <motion.button
      onClick={toggle}
      className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-800/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="w-5 h-4 flex flex-col justify-between">
        <motion.span
          className="block h-[2px] w-full bg-slate-300 rounded-full origin-left"
          animate={isOpen ? { rotate: 45, x: 1, y: -1 } : { rotate: 0, x: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.span
          className="block h-[2px] w-full bg-slate-300 rounded-full"
          animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-[2px] w-full bg-slate-300 rounded-full origin-left"
          animate={isOpen ? { rotate: -45, x: 1, y: 1 } : { rotate: 0, x: 0, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.button>
  );
}

/* ─── Desktop Pill Nav ───────────────────────────────────────────── */

function PillNav({ activeSection }: { activeSection: string }) {
  return (
    <motion.nav
      className="hidden lg:flex items-center"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <div
        className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full border border-slate-700/30"
        style={{
          background: 'rgba(20, 25, 35, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 0 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
        }}
      >
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(sectionId);
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative px-4 py-2 rounded-full text-[13px] font-medium tracking-[0.08em] transition-colors duration-300 whitespace-nowrap"
              style={{
                color: isActive ? '#e2e8f0' : '#94a3b8',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#cbd5e1';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                }
              }}
            >
              {/* Active indicator pill */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '1px solid rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.5)',
                    background: 'rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.08)',
                    boxShadow: '0 0 12px rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15), inset 0 0 8px rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.05)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}

/* ─── Mobile Menu Overlay ────────────────────────────────────────── */

function MobileMenu({
  isOpen,
  activeSection,
  onClose,
}: {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-[280px] lg:hidden overflow-y-auto"
            style={{
              background: 'rgba(20, 25, 35, 0.95)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(71,85,105,0.2)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <div className="flex justify-end p-5">
              <motion.button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-800/50 transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1L17 17M17 1L1 17" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-6 pb-8">
              {NAV_LINKS.map((link, idx) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      setTimeout(() => {
                        const el = document.getElementById(sectionId);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                    className={`relative flex items-center gap-3 py-4 px-4 rounded-xl text-[14px] font-medium tracking-[0.1em] transition-all duration-200 group ${isActive
                      ? 'text-primary-300'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                      }`}
                  >
                    {/* Active bar */}
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active"
                        className="absolute left-0 top-[25%] bottom-[25%] w-[3px] rounded-full bg-primary-400"
                        style={{
                          boxShadow: '0 0 8px rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.4)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Dot */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200 ${isActive ? 'bg-primary-400' : 'bg-slate-600 group-hover:bg-slate-400'
                        }`}
                    />

                    {link.name}
                  </motion.a>
                );
              })}

              {/* Divider */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-700/40 to-transparent my-4" />

              {/* CTA Button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  setTimeout(() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-2 flex items-center justify-center gap-2 py-3 px-6 rounded-full text-[13px] font-semibold tracking-[0.1em] text-slate-950 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary-400), #00ffaa)',
                  boxShadow: '0 0 20px rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.25)',
                }}
              >
                HIRE ME
              </motion.a>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Header ────────────────────────────────────────────────── */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  // Hide header on scroll down, show on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const diff = latest - lastScrollY.current;
    setHasScrolled(latest > 20);

    if (latest < 50) {
      setIsHidden(false);
    } else if (diff > 5) {
      setIsHidden(true);
    } else if (diff < -5) {
      setIsHidden(false);
    }

    lastScrollY.current = latest;
  });

  // Intersection Observer for active section tracking
  const updateActiveSection = useCallback(() => {
    const sectionIds = ['home', 'education', 'skills', 'projects', 'extra', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    let current = 'home';
    const offset = 150;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset) {
        current = section.id;
      }
    }

    // Removed mapping for 'about' as it now points to 'home'
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[999]"
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Background texture layer */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: hasScrolled
              ? 'rgba(20, 25, 35, 0.82)'
              : 'linear-gradient(180deg, rgba(20,25,35,0.9) 0%, rgba(20,25,35,0) 100%)',
            backdropFilter: hasScrolled ? 'blur(16px) saturate(1.2)' : 'none',
            WebkitBackdropFilter: hasScrolled ? 'blur(16px) saturate(1.2)' : 'none',
          }}
        />

        {/* Subtle code/data texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.4) 1px, transparent 1px), linear-gradient(rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Bottom glow line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15) 20%, rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.25) 50%, rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15) 80%, transparent 100%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hasScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Pill Nav (desktop) */}
          <PillNav activeSection={activeSection} />

          {/* Right: Hamburger (mobile) */}
          <HamburgerIcon
            isOpen={mobileOpen}
            toggle={() => setMobileOpen((prev) => !prev)}
          />

          {/* Right side spacer for desktop to balance the logo */}
          <div className="hidden lg:block w-[120px]" />
        </div>
      </motion.header>

      {/* Mobile slide-out menu */}
      <MobileMenu
        isOpen={mobileOpen}
        activeSection={activeSection}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
