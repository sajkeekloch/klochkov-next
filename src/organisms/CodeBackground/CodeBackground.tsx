'use client'

import styled from 'styled-components'

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  font-family: ${({ theme }) => theme.typography.fonts.code};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  line-height: 1.5;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`

const CodeLine = styled.div<{ $delay?: number }>`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.light.primary};
  animation: scroll 20s linear infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const codeSnippets = [
  "const developer = { name: 'Frontend Dev', skills: ['React', 'TypeScript', 'Next.js'], passion: '∞' };",
  "function createAmazingWebsite() { return innovation + creativity; }",
  "while(learning) { skills.push(newTechnology); }",
]

export function CodeBackground() {
  return (
    <BackgroundWrapper>
      {codeSnippets.map((snippet, index) => (
        <CodeLine key={index} $delay={index * 2}>
          {snippet}
        </CodeLine>
      ))}
    </BackgroundWrapper>
  )
}
