'use client'

import { useCallback } from 'react'

export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [])

  return { scrollToSection }
}
