'use client'

import { LucideIcon } from 'lucide-react'
import styled from 'styled-components'

interface IconProps {
  icon: LucideIcon
  size?: number
  color?: string
}

const StyledIconWrapper = styled.span<{ $size: number; $color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ $color }) => $color || 'currentColor'};
  }
`

export function Icon({ icon: IconComponent, size = 24, color }: IconProps) {
  return (
    <StyledIconWrapper $size={size} $color={color}>
      <IconComponent />
    </StyledIconWrapper>
  )
}
