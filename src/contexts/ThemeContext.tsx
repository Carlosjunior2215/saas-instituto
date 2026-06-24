'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ler tema salvo do localStorage
    const savedTheme = localStorage.getItem('instituto-theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Aplicar tema ao documento
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('instituto-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('instituto-theme', 'light');
    }
  }, [isDark, isMounted]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
}
