'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

/* --- Types ---------------------------------------------------------- */

type Theme = 'green' | 'blue';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

/* --- Context -------------------------------------------------------- */

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'green',
  toggleTheme: () => {},
});

/* --- Provider ------------------------------------------------------- */

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('green');

  // On mount: read saved theme from localStorage and apply it immediately
  useEffect(() => {
    const saved = (localStorage.getItem('portfolio-theme') as Theme) || 'green';
    setTheme(saved);
    if (saved === 'blue') {
      document.documentElement.classList.add('theme-blue');
    } else {
      document.documentElement.classList.remove('theme-blue');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'green' ? 'blue' : 'green';
      localStorage.setItem('portfolio-theme', next);
      if (next === 'blue') {
        document.documentElement.classList.add('theme-blue');
      } else {
        document.documentElement.classList.remove('theme-blue');
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/* --- Hook ----------------------------------------------------------- */

export function useTheme() {
  return useContext(ThemeContext);
}
