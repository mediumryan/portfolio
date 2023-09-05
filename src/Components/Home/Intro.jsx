import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import avatar from './../../images/avatar.jpeg';

// styled-components
const IntroWrapper = styled(motion.div)`
    grid-area: 1 / 1 / 5 / 3;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-double-large);
`;

export const Title = styled.h2`
    font-size: var(--font-size-medium-large);
    font-weight: 600;
    color: var(--primary-100);
`;

const Avatar = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`;

const IntroContent = styled.div`
    margin-top: var(--margin-medium-large);
    p {
        font-size: var(--font-size-small);
        margin-bottom: var(--margin-medium-large);
        line-height: 1.5;
        padding: var(--padding-double-small);
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
            rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
`;

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
            <Avatar src={avatar} alt="This is me" />
            <IntroContent>
                <p>29 Years-old</p>
                <p>Major in Computer Science & Tourism japanese</p>
                <p>Living in Yakuin-Fukuoka-Japan</p>
                <p>Studying Front-End Languages</p>
            </IntroContent>
        </IntroWrapper>
    );
}
