'use client'

import { useRef, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { ProjectCard } from '../../molecules/ProjectCard'
import { SectionTitle } from '../../molecules/SectionTitle'
import { useLanguage } from '../../hooks/useLanguage'
import type { Project } from '../../types'
import { PageContainer } from '@/templates/PageContainer'

// Импортируем стили Swiper
import 'swiper/css'
import 'swiper/css/pagination'

const ProjectsSection = styled(PageContainer)`
  margin: 0 auto;
  position: relative;
  z-index: 1;
  justify-content: center;
  width: 100%;
  max-width: 100vw;

  ${({ theme }) => theme.media.tablet} {
    padding: 100px 20px 20px;
  }
`

const CarouselContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding: 20px 0 100px;

  .swiper-slide {
    width: 900px;
    height: auto;

    ${({ theme }) => theme.media.tablet} {
      width: 90%;
    }

    ${({ theme }) => theme.media.mobile} {
      width: 95%;
    }
  }

  .swiper-pagination {
    bottom: 50px;

    .swiper-pagination-bullet {
      background: ${({ theme }) => theme.colors.light.primary};
      opacity: 0.3;
      transition: opacity 0.3s ease;

      &-active {
        opacity: 1;
      }
    }
  }
`

export function ProjectsCarousel() {
  const { t } = useLanguage()
  const [isFirstView, setIsFirstView] = useState(true)
  const swiperRef = useRef<SwiperType | null>(null)

  const projects: Project[] = [
    {
      title: t('projects.easydocs.title'),
      description: t('projects.easydocs.description'),
      technologies: t('projects.easydocs.technologies'),
      link: 'https://www.easydocs.ru',
    },
    {
      title: t('projects.easydocsApp.title'),
      description: t('projects.easydocsApp.description'),
      technologies: t('projects.easydocsApp.technologies'),
    },
    {
      title: t('projects.totalResearch.title'),
      description: t('projects.totalResearch.description'),
      technologies: t('projects.totalResearch.technologies'),
      link: 'https://trcompany.ru/',
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      technologies: t('projects.portfolio.technologies'),
      github: 'https://github.com/sajkeekloch?tab=repositories'
    },
  ]

  return (
    <ProjectsSection id="projects">
      <SectionTitle number="2">{t('projects.title')}</SectionTitle>
      <CarouselContainer
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        onViewportEnter={() => {
          if (isFirstView) {
            setIsFirstView(false)
          }
        }}
      >
        <StyledSwiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={60}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          speed={400}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </CarouselContainer>
    </ProjectsSection>
  )
}
