'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaProjectDiagram, FaAward, FaUsers, FaGithub, FaLinkedin, FaJava, FaAws, FaDatabase } from 'react-icons/fa';

import { SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus, SiSharp, SiPhp, SiReact, SiHtml5, SiCss, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiSpringboot, SiDotnet, SiMongodb, SiMysql, SiDocker, SiKubernetes, SiLinux, SiPrometheus, SiGrafana, SiGit, SiGithub } from 'react-icons/si';
// Api define karagamu ape Nodes (Tabs) tika
const tabs = [
  { id: 'education', label: 'Education', icon: FaGraduationCap },
  { id: 'skills', label: 'Skills', icon: FaLaptopCode },
  { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
  { id: 'certifications', label: 'Certifications', icon: FaAward },
  { id: 'extra', label: 'Extra-Curricular', icon: FaUsers },
];

export default function About() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="about" className="py-20 bg-slate-950 min-h-screen px-6 overflow-hidden">
      
      {/* Moving Carousel Effect ekata oni CSS tika methana inline danawa */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: 200%;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A dedicated tech enthusiast with a strong foundation in modern computing, 
            software engineering, and cloud infrastructure.
          </p>
        </motion.div>

        {/* The Node Interface (Horizontal Timeline) */}
        <div className="relative mb-16 w-full overflow-x-auto pb-4 custom-scrollbar">
          <div className="min-w-[600px] relative flex justify-between items-center mx-auto px-4 py-6 overflow-visible">
            {/* The Horizontal Background Line */}
            <div className="absolute left-0 right-0 h-1 bg-slate-800 top-1/2 transform -translate-y-1/2 z-0 rounded-full"></div>
            
            {/* The Nodes */}
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <div 
                  key={tab.id} 
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col items-center cursor-pointer group ${
                    isActive ? 'z-20' : 'z-10'
                  }`}
                >
                  <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-4 transition-all duration-300 ${
                    isActive 
                      ? 'bg-slate-900 border-emerald-400 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)] scale-110' 
                      : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-emerald-400/50 hover:text-emerald-400/80'
                  }`}>
                    <Icon size={isActive ? 28 : 24} />
                  </div>
                  <span className={`mt-3 text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400/80'}`}>
                    {tab.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[400px] bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* 1. Education Content */}
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-l-2 border-emerald-400 pl-6 relative">
                  <div className="absolute w-4 h-4 bg-emerald-400 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(52,211,153,1)]"></div>
                  <h3 className="text-xl font-bold text-white">Undergraduate Degree</h3>
                  <p className="text-emerald-400 text-sm mb-2">Ongoing</p>
                  <p className="text-slate-300">BSc in Electronics and Computer Science. Focusing on high-level computer science concepts and automated software systems.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-6 relative">
                  <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1"></div>
                  <h3 className="text-xl font-bold text-white">G.C.E. Advanced Level (A/L)</h3>
                  <p className="text-slate-400 text-sm mb-2">[Your School Name] - [Year]</p>
                  <p className="text-slate-300">Completed in the Physical Science (Maths) stream.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-6 relative">
                  <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1"></div>
                  <h3 className="text-xl font-bold text-white">G.C.E. Ordinary Level (O/L)</h3>
                  <p className="text-slate-400 text-sm mb-2">[Your School Name] - [Year]</p>
                  <p className="text-slate-300">Passed with excellent grades.</p>
                </div>
              </motion.div>
            )}

            {/* 2. Skills Content (With Carousel Effect) */}
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 overflow-hidden"
              >

                {[
                { title: "Programming Languages", items: [ <SiJavascript/>, <SiTypescript/>, <SiPython/>, <FaJava/>, <SiC/>, <SiCplusplus/>, <SiSharp/>, <SiPhp/> ] },
                { title: "Frontend Technologies", items: [ <SiReact/>, <SiHtml5/>, <SiCss/>, <SiTailwindcss/>, <SiBootstrap/> ] },
                { title: "Backend & Databases", items: [ <SiNodedotjs/>, <SiExpress/>, <SiSpringboot/>, <SiDotnet/>, <SiMongodb/>, <SiMysql/>, <FaDatabase/> ] },
                { title: "Cloud, DevOps & Tools", items: [ <FaAws/>, <SiDocker/>, <SiKubernetes/>, <SiLinux/>, <SiPrometheus/>, <SiGrafana/>, <SiGit/>, <SiGithub/> ] }
                ].map((category, index) => (
                  <div key={index} className="bg-slate-800/30 p-4 rounded-xl border border-slate-700">
                    <h3 className="text-emerald-400 font-semibold mb-3">{category.title}</h3>
                    <div className="overflow-hidden relative">
                      <div className="animate-scroll gap-8 text-4xl text-slate-400">
                        {/* Render items twice to create seamless loop */}
                        {category.items.map((icon, i) => <div key={i} className="hover:text-emerald-400 transition-colors">{icon}</div>)}
                        {category.items.map((icon, i) => <div key={`loop-${i}`} className="hover:text-emerald-400 transition-colors">{icon}</div>)}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. Projects Content */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Project Card Example 1 */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-colors relative">
                  <span className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                    Finished
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">Sentinel Stream</h3>
                  <p className="text-slate-400 text-sm mb-4">A real-time network intrusion detection system with multi-layer detection architecture.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-slate-300 bg-slate-900 px-2 py-1 rounded">Python</span>
                    <span className="text-xs text-slate-300 bg-slate-900 px-2 py-1 rounded">Machine Learning</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                    <a href="#" className="text-slate-400 hover:text-[#0077b5] transition-colors"><FaLinkedin size={20} /></a>
                  </div>
                </div>

                {/* Project Card Example 2 */}
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-400/50 transition-colors relative">
                  <span className="absolute top-4 right-4 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/30">
                    Ongoing
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Inventory System</h3>
                  <p className="text-slate-400 text-sm mb-4">Inventory management with AI-based product scanning utilizing the Gemini API.</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs text-slate-300 bg-slate-900 px-2 py-1 rounded">Next.js</span>
                    <span className="text-xs text-slate-300 bg-slate-900 px-2 py-1 rounded">Node.js</span>
                    <span className="text-xs text-slate-300 bg-slate-900 px-2 py-1 rounded">MongoDB</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 4. Certifications Content */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="animate-scroll gap-6">
                  {/* Replace images with actual certificate URLs or local public images */}
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="min-w-[300px] h-[200px] bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center relative group">
                       <FaAward className="text-slate-600 text-6xl group-hover:text-emerald-400 transition-colors" />
                       <div className="absolute inset-0 bg-emerald-500/90 text-slate-950 font-bold opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300">
                         View Certificate
                       </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-slate-400 mt-6 text-sm">Hover over certifications to view details.</p>
              </motion.div>
            )}

            {/* 5. Extra-Curricular Content */}
            {activeTab === 'extra' && (
              <motion.div
                key="extra"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-slate-300"
              >
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white">Membership Coordinator</h3>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20">
                      Mar 2025 - Aug 2025
                    </span>
                  </div>
                  <p className="text-emerald-400 font-semibold text-sm mb-4">UOK Robot Battles</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
                    <li>Communicated competition details and updates to registered members through emails and phone calls.</li>
                    <li>Provided support to fellow membership coordinators in managing participant engagement activities.</li>
                    <li>Assisted the organizing committee in ensuring effective coordination of membership-related operations.</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white">Member</h3>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20">
                      Jun 2023 - Present
                    </span>
                  </div>
                  <p className="text-emerald-400 font-semibold text-sm mb-4">Electronics and Computer Science Club (ECSC)</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-slate-400">
                    <li>Contributed to organizing and executing major technical events, boosting student engagement in modern computing and software engineering.</li>
                  </ul>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}