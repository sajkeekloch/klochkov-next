'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Text } from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { Cursor } from '@/atoms/Cursor'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { useLanguage } from '@/hooks/useLanguage'
import { SectionTitle } from '@/molecules/SectionTitle'
import { PageContainer } from '@/templates/PageContainer'

const HeroSection = styled(PageContainer)`
  margin: 0 auto;
  position: relative;
  z-index: 1;
  justify-content: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 100px 20px 20px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
`

export function Hero() {
  const { t } = useLanguage()

  return (
    <HeroSection
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      id={'about'}
    >
      <SectionTitle number="1">{t('hero.greeting')}</SectionTitle>

      <motion.div variants={fadeInUp}>
        <TitleWrapper>
          <Text variant="h1">{t('hero.name')}</Text>
          <Cursor />
        </TitleWrapper>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Text variant="description">
          {t('hero.description')}
        </Text>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Button href="#contact">{t('hero.cta')}</Button>
      </motion.div>
    </HeroSection>
  )
}
