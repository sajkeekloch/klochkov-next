export const colors = {
  light: {
    background: '#ffffff',
    foreground: '#4a4a4a',
    primary: '#EB5A14',
    secondary: '#14A5EB',
    textPrimary: '#000000',
    textSecondary: '#2a2a2a',
    cardBackground: '#f8f8f8',
    border: '#e0e0e0',
    shadow: 'rgba(235, 90, 20, 0.2)',
    navBackground: 'rgba(255, 255, 255, 0.85)',
  },
  dark: {
    background: '#000000',
    foreground: '#a0a0a0',
    primary: '#14A5EB',
    secondary: '#EB5A14',
    textPrimary: '#ffffff',
    textSecondary: '#e0e0e0',
    cardBackground: 'rgba(10,10,10,0.78)',
    border: '#1a1a1a',
    shadow: 'rgba(20, 165, 235, 0.2)',
    navBackground: 'rgba(0, 0, 0, 0.85)',
  },
}

export type ColorScheme = typeof colors.light
export type ThemeMode = 'light' | 'dark'
