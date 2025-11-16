import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import 'normalize.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Klochkov - Portfolio',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
