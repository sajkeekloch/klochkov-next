'use client'

import styled from 'styled-components'
import { ProjectCard } from '../../molecules/ProjectCard'
import { SectionTitle } from '../../molecules/SectionTitle'
import type { Project } from '../../types'
import { PageContainer } from '@/templates/PageContainer'

const ProjectsSection = styled(PageContainer)`
  margin: 0 auto;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.media.tablet} {
    padding: 80px 20px;
  }
`

const projects: Project[] = [
  {
    title: 'EasyDocs',
    description:
      'Электронная платформа управления документами для HR-процессов. Разработка и поддержка фронтенд части, оптимизация производительности.',
    technologies: ['React', 'TypeScript', 'effector', 'REST API'],
    link: 'https://www.easydocs.ru',
  },
  {
    title: 'EasyDocs app',
    description:
      'React Native приложение с интеграцией WebView. Реализация сложной логики аутентификации и управления cookies между нативным приложением и веб-компонентами.',
    technologies: ['React Native', 'WebView', 'Native Modules'],
    // 'в разрабтке': '#',
  },
  {
    title: 'Total research',
    description:
      'Миграция монолитной CRM на микрофронтенд-архитектуру' +
      'Принимал активное участие в переходе от legacy Angular-монолита к модульной архитектуре React + TS, с использованием SPA.',
    technologies: ['React', 'Redux', 'GitLab', 'SCSS', 'Docker', 'Webpack', 'Redux'],
    link: 'https://trcompany.ru/',
  },

  {
    title: 'Portfolio Projects',
    description:
      'Коллекция личных проектов и экспериментов с новыми технологиями. От UI компонентов до полноценных веб-приложений.',
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/sajkeekloch?tab=repositories'
  },
]

export function ProjectsList() {
  return (
    <ProjectsSection id="projects">
      <SectionTitle number="2">Проекты</SectionTitle>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ProjectsSection>
  )
}
