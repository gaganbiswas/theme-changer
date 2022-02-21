import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.getItem('theme') !== null &&
        setTheme(localStorage.getItem('theme')!);
    }
  }, []);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme!);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme!);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}
