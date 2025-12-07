'use client'

import styled from 'styled-components'
import { useTheme } from '../../hooks/useTheme'

const StyledCursor = styled.span<{ $isDark: boolean }>`
  display: inline-block;
  width: 3px;
  height: 85px;
  background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
  margin-left: 5px;
  vertical-align: middle;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    height: 50px;
  }

  ${({ theme }) => theme.media.mobile} {
    height: 35px;
    width: 2px;
  }

  ${({ theme }) => theme.media.mobileSm} {
    height: 28px;
  }
`

export function Cursor() {
  const { isDark } = useTheme()
  return <StyledCursor $isDark={isDark} />
}
