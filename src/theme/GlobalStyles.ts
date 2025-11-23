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
  }

  ::selection {
    background: ${({ theme }) => theme.colors.light.primary};
    color: #ffffff;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.background : theme.colors.light.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.light.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.light.secondary};
  }
`
