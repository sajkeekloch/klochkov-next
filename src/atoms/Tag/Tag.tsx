'use client'

import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme'

interface TagProps {
  children: React.ReactNode
}

const StyledTag = styled.span<{ $isDark: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
  background: ${({ $isDark }) => $isDark ? 'rgba(20, 165, 235, 0.1)' : 'rgba(235, 90, 20, 0.1)'};
  padding: 5px 12px;
  border-radius: 3px;
  font-family: ${({ theme }) => theme.typography.fonts.primary};

  @media (max-width: 425px) {
    padding: 4px 10px;
    font-size: 11px;
  }
`

export function Tag({ children }: TagProps) {
  const { isDark } = useTheme()
  return <StyledTag $isDark={isDark}>{children}</StyledTag>
}
