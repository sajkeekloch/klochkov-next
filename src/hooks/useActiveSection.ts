'use client'

import { useEffect, useState } from 'react'

type SectionId = 'about' | 'skills' | 'projects' | 'contact'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -50% 0px', // Account for navbar and trigger when section is near top
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return activeSection
}
