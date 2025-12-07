'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import { MainTemplate } from '@/templates/MainTemplate'

export function HomePage() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <MainTemplate />
      </ThemeProvider>
    </LanguageProvider>
  )
}
