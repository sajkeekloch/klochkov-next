'use client'

import styled from 'styled-components'

interface TagProps {
  children: React.ReactNode
}

const StyledTag = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  color: ${({ theme }) => theme.colors.light.primary};
  background: rgba(20, 165, 235, 0.1);
  padding: 5px 12px;
  border-radius: 3px;
  font-family: ${({ theme }) => theme.typography.fonts.primary};
`

export function Tag({ children }: TagProps) {
  return <StyledTag>{children}</StyledTag>
}
