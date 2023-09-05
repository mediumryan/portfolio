import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Title } from './Intro';
import { FaBold, FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
// styled-components
const ContactWrapper = styled(motion.div)`
    grid-area: 3 / 5 / 5 / 6;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-double-small);
    padding-top: var(--padding-medium-large);
`;

const ContactItemBox = styled.div`
    width: 75%;
    margin-top: var(--margin-medium-large);
`;

const ContactItem = styled(motion.a)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--font-size-medium);
    padding: var(--padding-double-small);
    margin: var(--margin-medium) 0;
    border-radius: 10px;
    color: var(--text-100);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    transform-origin: left center;
    transition: 300ms all;
    cursor: pointer;
    span {
        margin-bottom: 12px;
    }
    &:hover {
        background-color: var(--primary-100);
        color: var(--bg-100);
    }
    @media only screen and (min-width: 360px) and (max-width: 767px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        span {
            margin-right: 12px;
        }
    }
`;

// variants
const contact_wrapper_variants = {
    initial: {
        x: -50,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            delay: 4,
        },
    },
};

const contact_item_variants = {
    initial: {
        scale: 0,
    },
    animate: {
        scale: 1,
        transition: {
            duration: 0.3,
            delay: 5,
        },
    },
};

export default function Contact() {
    const copyToClipboard = () => {
        const email = 'straightwind0726@gmail.com';
        navigator.clipboard
            .writeText(email)
            .then(() => {
                alert('Successfully Copied');
            })
            .catch((err) => {
                console.error('복사 실패: ', err);
            });
    };

    return (
        <ContactWrapper
            variants={contact_wrapper_variants}
            initial="initial"
            animate="animate"
        >
            <Title>Contact Me</Title>
            <ContactItemBox>
                <ContactItem
                    variants={contact_item_variants}
                    initial="initial"
                    animate="animate"
                    href="https://github.com/mediumryan"
                    target="blank"
                >
                    <span>Github</span>
                    <FaGithub />
                </ContactItem>
                <ContactItem
                    variants={contact_item_variants}
                    initial="initial"
                    animate="animate"
                    href="https://medium-ryan.tistory.com/"
                    target="blank"
                >
                    <span>Blog</span>
                    <FaBold />
                </ContactItem>
                <ContactItem
                    variants={contact_item_variants}
                    initial="initial"
                    animate="animate"
                    onClick={copyToClipboard}
                >
                    <span>Gmail</span>
                    <BiLogoGmail />
                </ContactItem>
            </ContactItemBox>
        </ContactWrapper>
    );
}
