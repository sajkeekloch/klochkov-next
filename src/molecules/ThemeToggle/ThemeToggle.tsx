'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

const ToggleButton = styled(motion.button)<{ $isDark: boolean }>`
  background: transparent;
  border: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};
  border-radius: 4px;
  padding: 10px 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textSecondary : theme.colors.light.textSecondary};
  min-width: 45px;

  &:hover {
    border-color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
    color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
  }
`

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <ToggleButton
      $isDark={isDark}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </ToggleButton>
  )
}
