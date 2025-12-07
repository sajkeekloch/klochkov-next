'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

interface SectionTitleProps {
  children: React.ReactNode
}

const TitleWrapper = styled(motion.h2)<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  position: sticky;
  z-index: 150;
  background: transparent;
  padding: 20px 0;
  margin: 0;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
    top: 20px;
  }
`

export function SectionTitle({ children }: SectionTitleProps) {
  const { isDark } = useTheme()

  return (
    <TitleWrapper
      $isDark={isDark}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </TitleWrapper>
  )
}
