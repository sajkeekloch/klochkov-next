'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { MainTemplate } from '@/templates/MainTemplate'

export function HomePage() {
  return (
    <ThemeProvider>
      <MainTemplate />
    </ThemeProvider>
  )
}
