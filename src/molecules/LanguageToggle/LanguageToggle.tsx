'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'

const ToggleButton = styled(motion.button)<{ $isDark: boolean }>`
  background: transparent;
  border: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};
  border-radius: 4px;
  padding: 10px 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textSecondary : theme.colors.light.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  text-transform: uppercase;
  min-width: 45px;

  &:hover {
    border-color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
    color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.primary : theme.colors.light.primary};
  }
`

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage()
  const { isDark } = useTheme()

  const toggleLanguage = () => {
    setLocale(locale === 'ru' ? 'en' : 'ru')
  }

  return (
    <ToggleButton
      $isDark={isDark}
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={t('language.toggle')}
      title={t('language.toggle')}
    >
      {locale.toUpperCase()}
    </ToggleButton>
  )
}
