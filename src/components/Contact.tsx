'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="relative w-full max-w-4xl mx-auto py-24 px-4 sm:px-6" id="contact">


      {/* ── Glassmorphism Form Container ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#141923]/60 border border-[#00ffaa]/20 rounded-3xl p-6 md:p-10 shadow-[0_0_20px_rgba(0,255,170,0.15)] backdrop-blur-xl z-10"
      >

        {/* ── Section Header ── */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-white uppercase text-center mb-2">
            CONTACT
          </h2>
          <p className="text-xs md:text-sm text-slate-400 font-mono tracking-[0.1em] uppercase text-center mb-10">
            STEP 7: INITIATE SECURE CONNECTION
          </p>
        </div>
        <form action="https://formspree.io/f/xrevnabz" method="POST" className="space-y-6">

          {/* Name Field (Full Width) */}
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#0a0e14]/50 border border-slate-700/80 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
              placeholder="Name"
            />
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#0a0e14]/50 border border-slate-700/80 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-[#0a0e14]/50 border border-slate-700/80 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                placeholder="Phone"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-[#0a0e14]/50 border border-slate-700/80 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/50 transition-colors resize-none"
              placeholder="Message"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-semibold tracking-wider uppercase text-sm bg-slate-800/50 border border-slate-600 hover:bg-emerald-500/20 hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] transition-all duration-300"
            >
              Send Message
            </button>
            <a
              href="https://wa.me/94711742319"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-semibold tracking-wider uppercase text-sm bg-slate-800/50 border border-slate-600 hover:bg-emerald-500/20 hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(0,255,170,0.3)] transition-all duration-300"
            >
              <FaWhatsapp size={20} className="text-emerald-400" />
              WhatsApp Contact
            </a>
          </div>
        </form>

        {/* ── Pipeline Status Indicator ── */}
        <div className="mt-12 border-t border-slate-800/80 pt-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(0,230,160,1)]"></span>
            </span>
            <span className="text-emerald-400 text-xs font-mono tracking-[0.2em] uppercase">
              Pipeline Status: Secure Connection
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Terminal Node Glow below panel ── */}
      <div className="absolute left-1/2 bottom-0 w-32 h-10 bg-emerald-500/20 blur-3xl -translate-x-1/2 pointer-events-none" />
    </section>
  );
}