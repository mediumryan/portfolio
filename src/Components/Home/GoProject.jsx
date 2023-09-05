import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Title } from './Intro';
import { useNavigate } from 'react-router-dom';

// styled-components
const ProjectWrapper = styled(motion.div)`
    grid-area: 3 / 3 / 5 / 5;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: var(--padding-double-large);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProjectDescription = styled.p`
    line-height: 1.5;
    font-size: 20px;
    margin: var(--margin-large) 0;
`;

const ProjectBtn = styled.button`
    color: var(--bg-100);
    background: linear-gradient(var(--primary-100), var(--primary-200));
    font-size: var(--font-size-large);
    border-radius: 20px;
    padding: var(--padding-very-large) var(--padding-medium);
    transition: 300ms all;
    &:hover {
        opacity: 0.77;
        transform: scale(1.05);
    }
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
    const navigate = useNavigate();

    return (
        <ProjectWrapper
            variants={project_wrapper_variants}
            initial="initial"
            animate="animate"
        >
            <Title>Project</Title>
            <ProjectDescription>
                You can see some of my cool projects by clicking the button
                below.
            </ProjectDescription>
            <ProjectBtn
                onClick={() => {
                    navigate('/projects');
                }}
            >
                Go to Project Page
            </ProjectBtn>
        </ProjectWrapper>
    );
}
