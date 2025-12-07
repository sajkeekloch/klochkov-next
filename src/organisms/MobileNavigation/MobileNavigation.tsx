'use client'

import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from '@/molecules/ThemeToggle'
import { LanguageToggle } from '@/molecules/LanguageToggle'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const MobileNav = styled(motion.nav)<{ $isDark: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};
  background: ${({ $isDark, theme }) => $isDark ? 'rgba(10, 25, 47, 0.85)' : 'rgba(255, 255, 255, 0.85)'};

  @media (min-width: 769px) {
    display: none;
  }
`

const SectionTitle = styled(motion.div)<{ $isDark: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary};

  @media (max-width: 375px) {
    font-size: ${({ theme }) => theme.typography.fontSizes.base};
  }
`

const MenuButton = styled(motion.button)<{ $isDark: boolean }>`
  background: transparent;
  border: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
    color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
  }
`

const FullScreenMenu = styled(motion.div)<{ $isDark: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.background : theme.colors.light.background};
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 80px 30px 30px;
  overflow-y: auto;
`

const MenuHeader = styled.div`
  margin-bottom: 50px;
`

const ControlsWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
`

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
`

const NavLink = styled(motion.a)<{ $isDark: boolean; $isActive?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ $isDark, $isActive, theme }) =>
    $isActive
      ? ($isDark ? theme.colors.dark.primary : theme.colors.light.primary)
      : ($isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary)
  };
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 10px 0;
  border-bottom: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};

  &:hover {
    color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
    padding-left: 10px;
  }
`

const CloseButton = styled(motion.button)<{ $isDark: boolean }>`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
    color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
  }
`

export function MobileNavigation() {
  const { isDark } = useTheme()
  const { t } = useLanguage()
  const activeSection = useActiveSection()
  const { scrollToSection } = useSmoothScroll()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#about', label: t('navigation.about'), section: 'about' },
    { href: '#skills', label: t('navigation.skills'), section: 'skills' },
    { href: '#projects', label: t('navigation.projects'), section: 'projects' },
    { href: '#contact', label: t('navigation.contact'), section: 'contact' },
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
        return t('hero.greeting')
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    setTimeout(() => {
      scrollToSection(href)
    }, 300)
  }

  return (
    <>
      <MobileNav
        $isDark={isDark}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
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

        <MenuButton
          $isDark={isDark}
          onClick={() => setIsOpen(true)}
          whileTap={{ scale: 0.95 }}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </MenuButton>
      </MobileNav>

      <AnimatePresence>
        {isOpen && (
          <FullScreenMenu
            $isDark={isDark}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton
              $isDark={isDark}
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.95 }}
              aria-label="Close menu"
            >
              <X size={20} />
            </CloseButton>

            <MenuHeader>
              <ControlsWrapper>
                <LanguageToggle />
                <ThemeToggle />
              </ControlsWrapper>
            </MenuHeader>

            <NavLinks>
              {navItems.map((item, index) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  $isDark={isDark}
                  $isActive={activeSection === item.section}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </NavLink>
              ))}
            </NavLinks>
          </FullScreenMenu>
        )}
      </AnimatePresence>
    </>
  )
}
