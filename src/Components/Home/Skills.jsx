import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Title } from './Intro';
import SkillsChart from './Skills/SkillsChart';

// styled-components
const SkillsWrapper = styled(motion.div)`
    grid-area: 1 / 3 / 3 / 6;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-double-large);
`;
const SkillOther = styled.div`
    padding: 0 var(--padding-very-large);
    line-height: 1.5;
    span {
        color: var(--primary-200);
    }
`;
// variants
const skill_wrapper_variants = {
    initial: {
        x: -50,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 2,
        },
    },
};

export default function Skills() {
    return (
        <SkillsWrapper
            variants={skill_wrapper_variants}
            initial="initial"
            animate="animate"
        >
            <Title>Skills</Title>
            <SkillsChart />
            <SkillOther>
                I can also use various libraries that help with JavaScript and
                React, including{' '}
                <span>
                    jQuery, Recoil, Redux-Toolkit, React-Query, Framer-Motion,
                    Styled-Components, and Apex-Chart.
                </span>
            </SkillOther>
        </SkillsWrapper>
    );
}
