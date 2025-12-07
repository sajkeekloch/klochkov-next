'use client'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Text } from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { useLanguage } from '@/hooks/useLanguage'
import { fadeInUp } from '@/utils/animations'
import { PageContainer } from '@/templates/PageContainer'

const ContactSectionWrapper = styled(PageContainer).attrs({ as: 'section' })`
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
  align-items: center;
  padding-top: 100px;

  ${({ theme }) => theme.media.tablet} {
    padding-top: 80px;
  }

  ${({ theme }) => theme.media.mobile} {
    padding-top: 60px;
  }
`

const ContactContent = styled(motion.div)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;

  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
  }
`

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 30px auto 0;

  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
    gap: 15px;
    margin-top: 20px;
  }
`

const ContactButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    flex-shrink: 0;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <ContactSectionWrapper id="contact">
      <ContentWrapper>
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
          <ContactButton
            href='https://t.me/sajkeekloch'
            target='_blank'
            rel='noopener noreferrer'
          >
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
      </ContentWrapper>
    </ContactSectionWrapper>
  )
}
