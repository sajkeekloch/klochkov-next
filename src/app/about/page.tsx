import type { Metadata } from 'next'
import About from '@/components/About/About'

export const metadata: Metadata = {
  title: 'About - Klochkov',
  description: 'About me',
}

export default function AboutPage() {
  return <About />
}
