import { ThemeMode } from '../theme'

export interface ThemeContextType {
  theme: ThemeMode
  toggleTheme: () => void
  isDark: boolean
}

export interface Skill {
  name: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}
