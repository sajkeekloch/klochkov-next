'use client'

import styled from 'styled-components'
import { useTheme } from '@/hooks/useTheme'

interface TextProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'intro' | 'description' | 'paragraph'
  className?: string
}

const H1 = styled.h1<{ $isDark: boolean }>`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSizes['5xl']};
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  }

  ${({ theme }) => theme.media.mobileSm} {
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  }
`

const H2 = styled.h2<{ $isDark: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes['5xl']};
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textSecondary : theme.colors.light.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  width: min-content;

  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSizes['4xl']};
  }

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.typography.fontSizes['3xl']};
  }

  ${({ theme }) => theme.media.mobileSm} {
    font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  }
`

const Intro = styled.div<{ $isDark: boolean }>`
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.secondary : theme.colors.light.secondary};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
`

const Description = styled.p<{ $isDark: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.foreground : theme.colors.light.foreground};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
  }
`

const Paragraph = styled.p<{ $isDark: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  margin-bottom: 50px;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.foreground : theme.colors.light.foreground};

  ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
    margin-bottom: 30px;
  }
`

export function Text({ children, variant = 'paragraph', className }: TextProps) {
  const { isDark } = useTheme()

  switch (variant) {
    case 'h1':
      return <H1 $isDark={isDark} className={className}>{children}</H1>
    case 'h2':
      return <H2 $isDark={isDark} className={className}>{children}</H2>
    case 'intro':
      return <Intro $isDark={isDark} className={className}>{children}</Intro>
    case 'description':
      return <Description $isDark={isDark} className={className}>{children}</Description>
    case 'paragraph':
      return <Paragraph $isDark={isDark} className={className}>{children}</Paragraph>
    default:
      return <Paragraph $isDark={isDark} className={className}>{children}</Paragraph>
  }
}
