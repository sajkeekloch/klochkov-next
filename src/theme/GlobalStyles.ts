'use client'

import { createGlobalStyle } from 'styled-components'
import { typography } from './typography'

export const GlobalStyles = createGlobalStyle<{ $isDark: boolean }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${typography.fonts.primary};
    background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.background : theme.colors.light.background};
    color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.foreground : theme.colors.light.foreground};
    line-height: ${typography.lineHeights.normal};
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 425px) {
      font-size: 13px;
    }
  }

  ::selection {
    background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
    color: #ffffff;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 10px;

    @media (max-width: 768px) {
      width: 6px;
    }
  }

  ::-webkit-scrollbar-track {
    background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.background : theme.colors.light.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.secondary : theme.colors.light.secondary};
  }

  /* Mobile touch optimizations */
  @media (max-width: 768px) {
    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
    }

    input, textarea, select {
      font-size: 16px; /* Prevents zoom on iOS */
    }
  }
`
