'use client'

import { Navigation } from '../../organisms/Navigation'
import { MobileNavigation } from '../../organisms/MobileNavigation'
import { Hero } from '../../organisms/Hero'
import { SkillsGrid } from '../../organisms/SkillsGrid'
import { ProjectsCarousel } from '../../organisms/ProjectsCarousel'
import { ContactSection } from '../../organisms/ContactSection'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;

    /* Hide scrollbar for cleaner look */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */

    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`

export function MainTemplate() {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <Container>
        {/*<CodeBackground />*/}
        <Hero />
        <SkillsGrid />
        <ProjectsCarousel />
        <ContactSection />
      </Container>
    </>
  )
}
