'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'outline'
}

const StyledButton = styled(motion.a)<{ $isDark: boolean }>`
  display: inline-block;
  padding: 18px 50px;
  background: transparent;
  color: ${({ theme }) => theme.colors.light.primary};
  border: 1px solid ${({ theme }) => theme.colors.light.primary};
  border-radius: 4px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-family: ${({ theme }) => theme.typography.fonts.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(20, 165, 235, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.light.shadow};
  }

  &:active {
    transform: translateY(-1px);
  }
`

export function Button({ children, onClick, href, variant = 'outline' }: ButtonProps) {
  const { isDark } = useTheme()

  return (
    <StyledButton
      $isDark={isDark}
      href={href || '#'}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </StyledButton>
  )
}
