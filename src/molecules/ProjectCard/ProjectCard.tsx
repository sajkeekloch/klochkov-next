'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'
import { Tag } from '../../atoms/Tag'
import { Link } from '../../atoms/Link'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

const Card = styled(motion.div)<{ $isDark: boolean }>`
  background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.cardBackground : theme.colors.light.cardBackground};
  padding: 40px;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};
  display: flex;
  flex-direction: column;
  min-height: 400px;
  height: 100%;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.light.primary};
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.light.shadow};
  }
`

const Title = styled.h3<{ $isDark: boolean }>`
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.textPrimary : theme.colors.light.textPrimary};
  font-size: ${({ theme }) => theme.typography.fontSizes['2xl']};
  margin-bottom: 15px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
`

const Description = styled.p<{ $isDark: boolean }>`
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.foreground : theme.colors.light.foreground};
  margin-bottom: 20px;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSizes.base};
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`

const Links = styled.div`
  display: flex;
  gap: 20px;
  margin-top: auto;
`

export function ProjectCard({ project }: ProjectCardProps) {
  const { isDark } = useTheme()
  const { t } = useLanguage()

  return (
    <Card
      $isDark={isDark}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Title $isDark={isDark}>{project.title}</Title>
      <Description $isDark={isDark}>{project.description}</Description>
      <TechTags>
        {project.technologies.map((tech, index) => (
          <Tag key={index}>{tech}</Tag>
        ))}
      </TechTags>
      <Links>
        {project.link && (
          <Link target='_blank' href={project.link} variant="project">
            {t('projects.viewProject')}
          </Link>
        )}
        {project.github && (
          <Link target='_blank' href={project.github} variant="project">
            {t('projects.viewGithub')}
          </Link>
        )}
      </Links>
    </Card>
  )
}
