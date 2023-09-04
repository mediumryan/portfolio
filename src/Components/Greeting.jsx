import { motion } from 'framer-motion';
import { styled } from 'styled-components';
// styled-components
const GreetingWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--accent-100);
    font-style: italic;
    font-size: 36px;
    font-weight: 700;
    border-bottom: 2px solid var(--accent-100);
    padding-bottom: 12px;
`;
// variants
const greeting_wrapper_variants = {
    initial: {
        y: -20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 3,
        },
    },
};

export default function Greeting() {
    return (
        <GreetingWrapper
            variants={greeting_wrapper_variants}
            initial="initial"
            animate="animate"
        >
            Hi, I'm Ryan. Welcome to my Portfolio
        </GreetingWrapper>
    );
}
