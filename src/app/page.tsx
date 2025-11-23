import type { Metadata } from 'next'
import { HomePage } from '@/pages/HomePage'

export const metadata: Metadata = {
  title: 'клочков',
  description: 'Personal portfolio website',
}

export default function Home() {
  return <HomePage />
}