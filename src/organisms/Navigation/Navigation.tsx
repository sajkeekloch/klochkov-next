'use client'

import styled from 'styled-components'
import { motion, useScroll } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NavItem } from '@/molecules/NavItem'
import { ThemeToggle } from '@/molecules/ThemeToggle'
import { LanguageToggle } from '@/molecules/LanguageToggle'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

const Nav = styled(motion.nav)<{ $isDark: boolean; $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 25px 50px;
  display: none;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 100;
  transition: all 0.3s unset;
  border-bottom: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: flex;
  }

  ${({ theme }) => theme.media.desktop} {
    padding: 20px 40px;
  }
`

const Logo = styled.div<{ $isDark: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
`

const SectionTitle = styled(motion.div)<{ $isDark: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary};

  ${({ theme }) => theme.media.desktop} {
    font-size: ${({ theme }) => theme.typography.fontSizes.xl};
  }
`

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;

  & > li:nth-child(2) {
    margin-left: -30px;
  }

  ${({ theme }) => theme.media.desktop} {
    gap: 30px;

    & > li:nth-child(2) {
      margin-left: -20px;
    }
  }
`

export function Navigation() {
  const { isDark } = useTheme()
  const { t } = useLanguage()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useActiveSection()

  const navItems = [
    { href: '#about', label: t('navigation.about') },
    { href: '#skills', label: t('navigation.skills') },
    { href: '#projects', label: t('navigation.projects') },
    { href: '#contact', label: t('navigation.contact') },
  ]

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'about':
        return t('hero.greeting')
      case 'skills':
        return t('skills.title')
      case 'projects':
        return t('projects.title')
      case 'contact':
        return t('contact.title')
      default:
        return ''
    }
  }

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
      <NavList>
        <li>
          <LanguageToggle />
        </li>
        <li>
          <ThemeToggle />
        </li>
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.label}
          </NavItem>
        ))}
      </NavList>

      <AnimatePresence mode="wait">
        <SectionTitle
          key={activeSection}
          $isDark={isDark}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {getSectionTitle()}
        </SectionTitle>
      </AnimatePresence>
    </Nav>
  )
}
