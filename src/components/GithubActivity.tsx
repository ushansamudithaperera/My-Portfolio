'use client';

import { FaGithub, FaTrophy, FaCodeBranch } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

const greenThemeColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
const blueThemeColors = ['#080e14', '#083344', '#0e7490', '#06b6d4', '#22d3ee'];

export default function GithubActivity() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const githubUsername = "ushansamudithaperera";

  useEffect(() => {
    setMounted(true);
  }, []);

  const isBlue = mounted && theme === 'blue';
  const calendarTheme = {
    dark: isBlue ? blueThemeColors : greenThemeColors,
  };

  const accentColorHex = isBlue ? '22d3ee' : '39d353';

  return (
    <section className="relative w-full max-w-[1400px] mx-auto py-24 px-4 sm:px-6 overflow-hidden" id="github-activity">
      {/* ── Main Glassmorphism Panel Container ── */}
      <div className="relative bg-[#141923]/60 border border-[var(--color-primary-400)]/20 rounded-3xl py-12 md:py-16 shadow-[0_0_40px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.1)] backdrop-blur-sm md:backdrop-blur-xl z-10 overflow-hidden transform-gpu" style={{ willChange: 'transform' }}>
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12 relative px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500/20 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[0.2em] uppercase text-center relative z-10 flex items-center justify-center gap-4 flex-wrap">
            GITHUB CONTRIBUTIONS
          </h2>
          <p className="text-slate-400 font-mono text-sm tracking-widest mt-4 uppercase text-center">
            STEP 5: ACTIVITY OVERVIEW
          </p>
        </div>

        {/* Content Container */}
        <div className="flex flex-col gap-8 px-4 md:px-8 max-w-[1100px] mx-auto">
          
          {/* 1. Calendar Container */}
          <div className="w-full bg-[#030508]/40 border border-white/5 p-6 md:p-8 rounded-3xl shadow-[0_0_20px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.1)] backdrop-blur-md">
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.2)]">
                   <FaGithub className="text-primary-400 text-xl" />
                 </div>
                 <h3 className="text-xl font-bold text-white tracking-wide">Contribution Graph</h3>
               </div>
               <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-xs font-semibold text-primary-400 border border-primary-500/40 bg-primary-500/10 px-4 py-2 rounded-full hover:bg-primary-500/20 hover:border-primary-400/60 transition-colors shadow-[0_0_10px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.1)]"
               >
                 @{githubUsername}
               </a>
            </div>
            
            {/* Calendar */}
            <div className="w-full overflow-x-auto custom-scrollbar pb-4 flex justify-start md:justify-center">
              <div className="min-w-[750px]">
                {mounted && (
                  <GitHubCalendar
                    username={githubUsername}
                    colorScheme="dark"
                    blockSize={13}
                    blockMargin={5}
                    fontSize={14}
                    theme={calendarTheme}
                  />
                )}
              </div>
            </div>
          </div>

          {/* 2. Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Stats Card */}
            <div className="bg-[#030508]/40 border border-white/5 p-6 rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md flex flex-col items-center">
               <div className="w-full flex items-center gap-3 mb-6">
                 <FaTrophy className="text-primary-400 text-lg" />
                 <h3 className="text-lg font-bold text-white tracking-wide">GitHub Stats</h3>
               </div>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               {mounted && (
                 <img 
                   src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=${accentColorHex}&text_color=94a3b8&icon_color=${accentColorHex}`} 
                   alt="GitHub Stats" 
                   className="w-full max-w-[400px] h-auto filter drop-shadow-lg transform transition-transform hover:scale-105 duration-300"
                 />
               )}
            </div>

            {/* Top Languages Card */}
            <div className="bg-[#030508]/40 border border-white/5 p-6 rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-md flex flex-col items-center">
               <div className="w-full flex items-center gap-3 mb-6">
                 <FaCodeBranch className="text-primary-400 text-lg" />
                 <h3 className="text-lg font-bold text-white tracking-wide">Top Languages</h3>
               </div>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               {mounted && (
                 <img 
                   src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=${accentColorHex}&text_color=94a3b8&icon_color=${accentColorHex}`} 
                   alt="Top Languages" 
                   className="w-full max-w-[400px] h-auto filter drop-shadow-lg transform transition-transform hover:scale-105 duration-300"
                 />
               )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
