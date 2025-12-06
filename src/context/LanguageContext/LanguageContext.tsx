'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import ru from '../../locales/ru.json'
import en from '../../locales/en.json'

export type Locale = 'ru' | 'en'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_STORAGE_KEY = 'portfolio-language'

const translations = {
  ru,
  en,
}

// Helper function to get nested translation by key path
function getNestedTranslation(obj: any, path: string): any {
  return path.split('.').reduce((current, key) => current?.[key], obj)
}

// Detect browser language
function getBrowserLanguage(): Locale {
  if (typeof window === 'undefined') return 'ru'

  const browserLang = navigator.language.toLowerCase()

  // Check if browser language starts with 'ru'
  if (browserLang.startsWith('ru')) {
    return 'ru'
  }

  // Check if browser language starts with 'en'
  if (browserLang.startsWith('en')) {
    return 'en'
  }

  // Default to Russian
  return 'ru'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ru')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Priority: localStorage → browser language → default 'ru'
    const savedLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Locale | null

    if (savedLocale && (savedLocale === 'ru' || savedLocale === 'en')) {
      setLocaleState(savedLocale)
    } else {
      const browserLocale = getBrowserLanguage()
      setLocaleState(browserLocale)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, locale)

      // Update document lang attribute
      document.documentElement.setAttribute('lang', locale)
    }
  }, [locale, mounted])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  // Translation function
  const t = (key: string): any => {
    const translation = getNestedTranslation(translations[locale], key)

    if (translation === undefined) {
      console.warn(`Translation not found for key: ${key} in locale: ${locale}`)
      return key
    }

    return translation
  }

  // Prevent flash of unstyled content
  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
