import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PageContainer = styled(motion.section)`
    height: 100dvh;
    min-height: 100vh;
    width: 900px;
    display: flex;
    gap: 25px;
    flex-direction: column;
    padding-top: 100px;
    box-sizing: border-box;
    scroll-snap-align: start;
    scroll-snap-stop: always;

    ${({ theme }) => theme.media.tablet} {
        width: 100%;
    }
`