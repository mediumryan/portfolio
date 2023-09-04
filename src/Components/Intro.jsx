import { motion } from 'framer-motion';
import { styled } from 'styled-components';

// styled-components
const IntroWrapper = styled(motion.div)`
    grid-area: 1 / 1 / 2 / 2;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 12px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
    color: var(--primary-100);
`;

const IntroContent = styled.div``;

// variants
const intro_wrapper_variants = {
    initial: {
        y: -50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 1,
        },
    },
};

export default function Intro() {
    return (
        <IntroWrapper
            variants={intro_wrapper_variants}
            initial="initial"
            animate="animate"
        >
            <Title>I'm</Title>
            <IntroContent>
                <p>29 Years-old</p>
                <p>Major in Computer Science & Tourism japanese</p>
                <p>Living in Yakuin-Fukuoka-Japan</p>
                <p>Studying Front-End Languages</p>
            </IntroContent>
        </IntroWrapper>
    );
}
