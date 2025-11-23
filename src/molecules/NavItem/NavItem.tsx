'use client'

import { Link } from '../../atoms/Link'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

interface NavItemProps {
  href: string
  children: React.ReactNode
}

export function NavItem({ href, children }: NavItemProps) {
  const { scrollToSection } = useSmoothScroll()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollToSection(href)
    }
  }

  return (
    <li>
      <Link href={href} variant="nav" onClick={handleClick as any}>
        {children}
      </Link>
    </li>
  )
}
