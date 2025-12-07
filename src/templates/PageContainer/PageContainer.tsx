import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PageContainer = styled(motion.section)`
    height: 100dvh;
    min-height: 100vh;
    width: 900px;
    display: flex;
    gap: 25px;
    flex-direction: column;
    box-sizing: border-box;
    scroll-snap-align: start;
    scroll-snap-stop: always;

    ${({ theme }) => theme.media.tablet} {
        width: 100%;
        gap: 20px;
    }

    ${({ theme }) => theme.media.mobile} {
        width: 100%;
        gap: 15px;
        min-height: 100vh;
        height: auto;
    }
`