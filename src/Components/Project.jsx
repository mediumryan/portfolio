import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Title } from './Intro';

// styled-components
const ProjectWrapper = styled(motion.div)`
    grid-area: 2 / 1 / 3 / 3;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
// variants
const project_wrapper_variants = {
    initial: {
        y: -50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 3,
        },
    },
};

export default function Project() {
    return (
        <ProjectWrapper
            variants={project_wrapper_variants}
            initial="initial"
            animate="animate"
        >
            <Title>Project</Title>
        </ProjectWrapper>
    );
}
