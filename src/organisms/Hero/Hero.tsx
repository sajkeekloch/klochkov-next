'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Text } from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { Cursor } from '@/atoms/Cursor'
import { fadeInUp, staggerContainer } from '@/utils/animations'
import { heroText } from '@/constants/heroText'
import { SectionTitle } from '@/molecules/SectionTitle'
import { PageContainer } from '@/templates/PageContainer'

const HeroSection = styled(PageContainer)`
  margin: 0 auto;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 20px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
`

export function Hero() {
  return (
    <HeroSection
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      id={'about'}
    >
      <SectionTitle number="1">привет, я</SectionTitle>

      {/*<motion.div variants={fadeInUp}>*/}
      {/*  <Text variant="intro">привет, я</Text>*/}
      {/*</motion.div>*/}

      <motion.div variants={fadeInUp}>
        <TitleWrapper>
          <Text variant="h1">Александр.</Text>
          <Cursor />
        </TitleWrapper>
      </motion.div>

      {/*<motion.div variants={fadeInUp}>*/}
      {/*  <TitleWrapper>*/}
      {/*    <Text variant="h2">Создаю веб-интерфейсы.</Text>*/}
      {/*  </TitleWrapper>*/}
      {/*</motion.div>*/}

      <motion.div variants={fadeInUp}>
        <Text variant="description">
          {heroText}
        </Text>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Button href="#contact">Давай сделаем что-то крутое!</Button>
      </motion.div>
    </HeroSection>
  )
}
