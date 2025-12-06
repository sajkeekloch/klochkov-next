'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { SkillCard } from '@/molecules/SkillCard'
import { SectionTitle } from '@/molecules/SectionTitle'
import { useLanguage } from '@/hooks/useLanguage'
import type { Skill } from '@/types'
import { PageContainer } from '@/templates/PageContainer'

const SkillsSection = styled(PageContainer)`
  margin: 0 auto;
  position: relative;
  z-index: 1;
  justify-content: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 100px 20px 20px;
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

export function SkillsGrid() {
  const { t } = useLanguage()

  const skills: Skill[] = [
    {
      name: t('skills.frontend.name'),
      items: t('skills.frontend.items'),
    },
    {
      name: t('skills.mobile.name'),
      items: t('skills.mobile.items'),
    },
    {
      name: t('skills.tools.name'),
      items: t('skills.tools.items'),
    },
  ]

  return (
    <SkillsSection id="skills">
      <SectionTitle number="1">{t('skills.title')}</SectionTitle>
      <Grid>
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </Grid>
    </SkillsSection>
  )
}
