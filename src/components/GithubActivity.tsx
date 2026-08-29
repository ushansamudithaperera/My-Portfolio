'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaTrophy, FaUsers, FaBook, FaCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from './ThemeProvider';

const greenThemeColors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
const blueThemeColors = ['#080e14', '#083344', '#0e7490', '#06b6d4', '#22d3ee'];

export default function GithubActivity() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const githubUsername = "ushansamudithaperera";

  const [stats, setStats] = useState({ stars: 0, repos: 0, followers: 0, loading: true });
  const [topLangs, setTopLangs] = useState<[string, number][]>([]);
  const [recentRepos, setRecentRepos] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    
    async function fetchGitHubData() {
      try {
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${githubUsername}`);
        if (!userRes.ok) throw new Error('User fetch failed');
        const userData = await userRes.json();
        
        // Fetch repos
        const reposRes = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=pushed`);
        if (!reposRes.ok) throw new Error('Repos fetch failed');
        const reposData = await reposRes.json();
        
        if (Array.isArray(reposData)) {
          let totalStars = 0;
          const langsCount: Record<string, number> = {};
          
          reposData.forEach((repo) => {
            totalStars += repo.stargazers_count;
            if (repo.language) {
              langsCount[repo.language] = (langsCount[repo.language] || 0) + 1;
            }
          });
          
          setStats({ 
            stars: totalStars, 
            repos: userData.public_repos || reposData.length, 
            followers: userData.followers || 0,
            loading: false
          });
          
          // Sort languages by count
          const sortedLangs = Object.entries(langsCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 4); // Top 4 languages
          setTopLangs(sortedLangs);
          
          // Get top/recent repos
          const sortedRepos = [...reposData]
             .filter(r => !r.fork)
             .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
             .slice(0, 4); // Top 4 repos
          setRecentRepos(sortedRepos);
        } else {
           setStats(s => ({ ...s, loading: false }));
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
        setStats(s => ({ ...s, loading: false }));
      }
    }
    
    fetchGitHubData();
  }, [githubUsername]);

  const isBlue = mounted && theme === 'blue';
  const calendarTheme = {
    dark: isBlue ? blueThemeColors : greenThemeColors,
  };

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
        <div className="flex flex-col gap-8 px-4 md:px-8 max-w-[1100px] mx-auto relative z-10">
          
          {/* 1. Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { icon: FaBook, label: 'Public Repos', value: stats.repos },
               { icon: FaUsers, label: 'Followers', value: stats.followers },
               { icon: FaStar, label: 'Total Stars', value: stats.stars },
               { icon: FaCodeBranch, label: 'Top Language', value: topLangs.length > 0 ? topLangs[0][0] : '-' },
             ].map((stat, i) => (
               <div key={i} className="bg-[#030508]/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-[0_0_15px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.05)] transition-transform hover:-translate-y-1">
                 <stat.icon className="text-primary-400 text-2xl mb-3" />
                 <span className="text-3xl font-bold text-white mb-1">
                   {stats.loading ? '-' : stat.value}
                 </span>
                 <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</span>
               </div>
             ))}
          </div>

          {/* 2. Calendar Container */}
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

          {/* 3. Top Repositories */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 px-2">
              <FaTrophy className="text-primary-400 text-xl" />
              <h3 className="text-2xl font-bold text-white tracking-wide">Top Repositories</h3>
            </div>
            
            {stats.loading ? (
              <div className="text-slate-400 px-2 font-mono">Loading repositories...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentRepos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#030508]/40 border border-white/5 hover:border-primary-500/30 rounded-2xl p-6 transition-all hover:bg-[#0a0f16]/60 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(var(--color-accent-r),var(--color-accent-g),var(--color-accent-b),0.15)] flex flex-col justify-between min-h-[160px]"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-primary-300 group-hover:text-primary-400 transition-colors flex items-center gap-2">
                          {repo.name}
                          <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                        {repo.description || 'No description provided.'}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                       <div className="flex items-center gap-4">
                         {repo.language && (
                           <span className="flex items-center gap-1.5">
                             <FaCircle className="text-[8px] text-primary-500" />
                             {repo.language}
                           </span>
                         )}
                         <span className="flex items-center gap-1.5">
                           <FaStar className="text-amber-400" />
                           {repo.stargazers_count}
                         </span>
                         <span className="flex items-center gap-1.5">
                           <FaCodeBranch className="text-slate-400" />
                           {repo.forks_count}
                         </span>
                       </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
