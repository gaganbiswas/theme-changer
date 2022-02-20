import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') !== null
        ? localStorage.getItem('theme')
        : 'dark'
      : 'dark',
  );

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme! && theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme! && theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}
