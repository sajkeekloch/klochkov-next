'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { SkillCard } from '@/molecules/SkillCard'
import { useLanguage } from '@/hooks/useLanguage'
import type { Skill } from '@/types'
import { PageContainer } from '@/templates/PageContainer'

const SkillsSection = styled(PageContainer).attrs({ as: 'section' })`
  margin: 0 auto;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.media.tablet} {
    padding: 100px 20px 20px;
  }

  ${({ theme }) => theme.media.mobile} {
    padding: 80px 15px 15px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding-top: 100px;

  ${({ theme }) => theme.media.tablet} {
    padding-top: 80px;
  }

  ${({ theme }) => theme.media.mobile} {
    padding-top: 0;
  }
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  ${({ theme }) => theme.media.mobile} {
    gap: 15px;
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
      <ContentWrapper>
        <Grid>
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </Grid>
      </ContentWrapper>
    </SkillsSection>
  )
}
