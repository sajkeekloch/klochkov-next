'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { SkillCard } from '@/molecules/SkillCard'
import { SectionTitle } from '@/molecules/SectionTitle'
import type { Skill } from '@/types'
import { PageContainer } from '@/templates/PageContainer'

const SkillsSection = styled(PageContainer)`
  margin: 0 auto;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.media.tablet} {
    padding: 80px 20px;
  }
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 30px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`

const skills: Skill[] = [
  {
    name: 'Frontend',
    items: ['React / Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS'],
  },
  {
    name: 'Mobile',
    items: ['React Native', 'WebView Integration', 'Responsive Design'],
  },
  {
    name: 'Tools & Others',
    items: ['GitHub / GitLab', 'Webpack', 'REST API', 'Redux / effector', 'Jest / React Testing Library'],
  },
]

export function SkillsGrid() {
  return (
    <SkillsSection id="skills">
      <SectionTitle number="1">Мои навыки</SectionTitle>
      <Grid>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </Grid>
    </SkillsSection>
  )
}
