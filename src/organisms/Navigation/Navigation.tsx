'use client'

import styled from 'styled-components'
import { motion, useScroll } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import { NavItem } from '@/molecules/NavItem'
import { ThemeToggle } from '@/molecules/ThemeToggle'
import { LanguageToggle } from '@/molecules/LanguageToggle'
import { useState, useEffect } from 'react'

const Nav = styled(motion.nav)<{ $isDark: boolean; $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 25px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.navBackground : theme.colors.light.navBackground};
  backdrop-filter: blur(10px);
  z-index: 100;
  transition: all 0.3s ease;
  border-bottom: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.media.tablet} {
    padding: 20px;
  }
`

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  color: ${({ theme }) => theme.colors.light.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;

  ${({ theme }) => theme.media.tablet} {
    gap: 20px;
  }
`

export function Navigation() {
  const { isDark } = useTheme()
  const { t } = useLanguage()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { href: '#about', label: t('navigation.about') },
    { href: '#skills', label: t('navigation.skills') },
    { href: '#projects', label: t('navigation.projects') },
    { href: '#contact', label: t('navigation.contact') },
  ]

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 100)
    })
  }, [scrollY])

  return (
    <Nav
      $isDark={isDark}
      $scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Logo></Logo>
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.label}
          </NavItem>
        ))}
        <li>
          <LanguageToggle />
        </li>
        <li>
          <ThemeToggle />
        </li>
      </NavList>
    </Nav>
  )
}
