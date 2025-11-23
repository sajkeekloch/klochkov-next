'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

interface SectionTitleProps {
  number: string
  children: React.ReactNode
}

const TitleWrapper = styled(motion.h2)<{ $isDark: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  margin-bottom: 50px;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  }
`

export function SectionTitle({ number, children }: SectionTitleProps) {
  const { isDark } = useTheme()

  return (
    <TitleWrapper
      $isDark={isDark}
      number={number}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </TitleWrapper>
  )
}
