import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  WHITE,
  GREY,
  LIGHT_GREY,
  DARK_BG,
  DARK_TEXT,
  DARK_ANNOTATION,
} from '../constants/colors';

type Theme = 'light' | 'dark';

type ThemeColors = {
  background: string;
  text: string;
  annotation: string;
};

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  colors: ThemeColors;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const LIGHT_COLORS: ThemeColors = {
  background: WHITE,
  text: GREY,
  annotation: LIGHT_GREY,
};

const DARK_COLORS: ThemeColors = {
  background: DARK_BG,
  text: DARK_TEXT,
  annotation: DARK_ANNOTATION,
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.style.backgroundColor = theme === 'dark' ? DARK_BG : WHITE;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const colors = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;

  return (
    <ThemeContext.Provider
      value={{ theme, isDark: theme === 'dark', toggleTheme, colors }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
