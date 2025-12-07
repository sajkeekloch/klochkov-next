'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Text } from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { Cursor } from '@/atoms/Cursor'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { useLanguage } from '@/hooks/useLanguage'
import { PageContainer } from '@/templates/PageContainer'

const HeroSection = styled(PageContainer).attrs({ as: 'section' })`
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
  gap: 25px;
  justify-content: center;
  flex: 1;
  padding-top: 100px;

  ${({ theme }) => theme.media.tablet} {
    padding-top: 80px;
    gap: 20px;
  }

  ${({ theme }) => theme.media.mobile} {
    padding-top: 60px;
    gap: 15px;
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
    <HeroSection id="about">
      <ContentWrapper
        as={motion.div}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
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
      </ContentWrapper>
    </HeroSection>
  )
}
