'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

interface LinkProps {
  children: React.ReactNode
  href: string
  variant?: 'nav' | 'project'
  target?: '_blank' | '_self',
}

const NavLink = styled(motion.a)<{ $isDark: boolean }>`
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textSecondary : theme.colors.light.textSecondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`

const ProjectLink = styled(motion.a)<{ $isDark: boolean }>`
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.secondary : theme.colors.light.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  &:hover {
    transform: translateX(5px);
  }
`

export function Link({ target = '_self', children, href, variant = 'nav' }: LinkProps) {
  const { isDark } = useTheme()

  if (variant === 'project') {
    return (
      <ProjectLink $isDark={isDark} target={target} href={href} whileHover={{ x: 5 }}>
        {children}
      </ProjectLink>
    )
  }

  return (
    <NavLink target={target} href={href} $isDark={isDark}>
      {children}
    </NavLink>
  )
}
