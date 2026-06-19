'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text & Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-center md:text-left"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="text-emerald-400">Connect</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md mx-auto md:mx-0">
              I'm actively looking for internship opportunities in DevOps, SRE, AI & ML, and Full-Stack development.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                <FaEnvelope size={20} />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold">Email</h4>
                {/* Oyaage real email eka methanata danna */}
                <p className="text-slate-400">samudithaperera01@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.1)]">
                <FaMapMarkerAlt size={20} />
              </div>
              <div className="text-left">
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-slate-400">Rathnapura, Sri Lanka</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-xl"
        >
          {/* Formspree Action URL eka methanata danna */}
          <form action="https://formspree.io/f/xrevnabz" method="POST" className="space-y-6">

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors resize-none"
                placeholder="Hello Ushan, I'd like to discuss an opportunity..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_15px_rgba(52,211,153,0.3)]"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}