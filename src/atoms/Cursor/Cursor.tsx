'use client'

import styled from 'styled-components'

const StyledCursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 85px;
  background: ${({ theme }) => theme.colors.light.primary};
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
    height: 40px;
  }
`

export function Cursor() {
  return <StyledCursor />
}
