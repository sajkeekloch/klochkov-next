'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'
import type { Skill } from '../../types'

interface SkillCardProps {
  skill: Skill
}

const Card = styled(motion.div)<{ $isDark: boolean }>`
  background: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.cardBackground : theme.colors.light.cardBackground};
  padding: 30px;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: 1px solid ${({ $isDark, theme }) => $isDark ? theme.colors.dark.border : theme.colors.light.border};

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.light.primary};
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.light.shadow};
  }
`

const SkillName = styled.div`
  color: ${({ theme }) => theme.colors.light.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.lg};
  margin-bottom: 15px;
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
`

const SkillList = styled.ul<{ $isDark: boolean }>`
  list-style: none;
  color: ${({ $isDark, theme }) => $isDark ? theme.colors.dark.foreground : theme.colors.light.foreground};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
`

const SkillItem = styled.li`
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.light.secondary};
  }
`

export function SkillCard({ skill }: SkillCardProps) {
  const { isDark } = useTheme()

  return (
    <Card
      $isDark={isDark}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SkillName>{skill.name}</SkillName>
      <SkillList $isDark={isDark}>
        {skill.items.map((item, index) => (
          <SkillItem key={index}>{item}</SkillItem>
        ))}
      </SkillList>
    </Card>
  )
}
