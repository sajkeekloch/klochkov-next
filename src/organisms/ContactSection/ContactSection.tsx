'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { SectionTitle } from '@/molecules/SectionTitle'
import { Text } from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { useLanguage } from '@/hooks/useLanguage'
import { fadeInUp } from '@/utils/animations'
import { PageContainer } from '@/templates/PageContainer'

const ContactSectionWrapper = styled(PageContainer)`
  margin: 0 auto;
  position: relative;
  z-index: 1;
  justify-content: center;

  ${({ theme }) => theme.media.tablet} {
    padding: 100px 20px 20px;
  }
`

const ContactContent = styled(motion.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 30px auto 0;
`

const ContactButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    flex-shrink: 0;
  }
`

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <ContactSectionWrapper id='contact'>
      <SectionTitle number='3'>{t('contact.title')}</SectionTitle>
      <ContactContent
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Text variant='paragraph'>
          {t('contact.description')}
        </Text>
        <ContactMethods>
          <ContactButton href='https://t.me/sajkeekloch'>
            {t('contact.telegram')}
          </ContactButton>
          <ContactButton href='mailto:sajkeekloch@gmail.com'>
            {t('contact.email')}
          </ContactButton>
          <ContactButton
            href='https://www.linkedin.com/in/sajkeekloch/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('contact.linkedin')}
          </ContactButton>
        </ContactMethods>
      </ContactContent>
    </ContactSectionWrapper>
  )
}
