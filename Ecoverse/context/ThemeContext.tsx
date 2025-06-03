import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

// Theme colors
export const lightTheme = {
  primary: '#2E7D32', // Green
  secondary: '#00796B', // Teal
  accent: '#0288D1', // Blue
  background: '#F7F9F4',
  card: '#FFFFFF',
  text: '#263238',
  secondaryText: '#546E7A',
  border: '#E0E0E0',
  success: '#43A047',
  warning: '#FFA000',
  error: '#E53935',
  disabled: '#9E9E9E',
  highlight: '#C5E1A5',
};

export const darkTheme = {
  primary: '#4CAF50',
  secondary: '#26A69A',
  accent: '#29B6F6',
  background: '#0F1F12',
  card: '#1E2A20',
  text: '#ECEFF1',
  secondaryText: '#B0BEC5',
  border: '#3E4E43',
  success: '#66BB6A',
  warning: '#FFB74D',
  error: '#EF5350',
  disabled: '#757575',
  highlight: '#558B2F',
};

type ThemeType = typeof lightTheme;
type ThemeContextType = {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');
  const [theme, setTheme] = useState<ThemeType>(isDark ? darkTheme : lightTheme);

  useEffect(() => {
    setTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  // Update theme when system preference changes
  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};