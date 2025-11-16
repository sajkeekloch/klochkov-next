import type { Metadata } from 'next'
import Main from '@/components/Main/Main'

export const metadata: Metadata = {
  title: 'Klochkov - Portfolio',
  description: 'Personal portfolio website',
}

export default function Home() {
  return <Main />
}