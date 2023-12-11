import { keyframes, styled } from 'styled-components';
import { useEffect, useState } from 'react';
// image
import avatar from './../../images/avatar.png';
import { FaAngleDown, FaGithub } from 'react-icons/fa';

export const SectionWrapper = styled.section`
    padding: 5rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        padding: 2rem;
    }
`;

const GreetingInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        flex-direction: column;
    }
`;

const GreetingLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        order: 1;
    }
`;

const GreetingHello = styled.p`
    font-size: 2.5rem;
    margin: 1rem 0;
    min-height: 75px;
    line-height: 1.5;
    font-family: 'Rampart One', sans-serif;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        min-height: 35px;
    }
    &:nth-child(1) {
        background: #3535ff;
        background: linear-gradient(to right, #757590 0%, #ff0000 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    &:nth-child(2) {
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            font-size: 1.5rem;
            letter-spacing: -1px;
        }
    }
`;

const GreetingDescription = styled.p`
    margin: 3rem 0;
    font-size: 1.25rem;
    strong {
        font-weight: 900;
        color: var(--accent-200);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin: 1rem 0;
        padding: 1rem;
        line-height: 1.5;
        border-top: 2px solid var(--accent-300);
        border-bottom: 2px solid var(--accent-300);
    }
`;

const GreetingButtons = styled.div`
    display: flex;
    align-items: center;
    a {
        padding: 0.5rem 1rem;
        border-radius: 20px;
        line-height: 1.5;
        cursor: pointer;
        color: var(--black-100);
        margin-left: 1rem;
        border: 0.5px solid var(--black-200);
        &:first-child {
            background-color: var(--accent-200);
            color: var(--white-100);
        }
        &:hover {
            opacity: 0.75;
            box-shadow: rgba(0, 0, 0, 0.75) 0px 25px 50px -12px;
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-top: 2rem;
        justify-content: center;
    }
`;

const GreetingContact = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    li {
        cursor: pointer;
        border-radius: 50%;
        padding: 0.5rem;
        margin: 0 0.25rem;
        a {
            color: var(--black-100);
            svg {
                width: 30px;
                height: 30px;
            }
        }
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.75) 0px 25px 50px -12px;
        }
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        justify-content: center;
    }
`;

const GreetingRight = styled.div`
    order: 0;
    div {
        width: 325px;
        height: 325px;
        background-color: var(--white-200);
        border-radius: 50%;
        @media only screen and (min-width: 320px) and (max-width: 768px) {
            width: 175px;
            height: 175px;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

const bottomAnimation = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(25%);

    }
`;

const GreetingBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    svg {
        font-size: 2rem;
        color: var(--accent-200);
        animation: ${bottomAnimation} 1s ease-in infinite;
    }
`;

export default function Greeting() {
    const [blogTitle, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = '私は、フロントエンド開発者です。';

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setBlogTitle((prevTitleValue) => {
                let result = prevTitleValue
                    ? prevTitleValue + completionWord[count]
                    : completionWord[0];
                setCount(count + 1);

                if (count >= completionWord.length) {
                    setCount(0);
                    setBlogTitle('');
                }

                return result;
            });
        }, 300);

        return () => {
            clearInterval(typingInterval);
        };
    });

    return (
        <SectionWrapper>
            <GreetingInner>
                <GreetingLeft>
                    <GreetingHello>こんにちは.</GreetingHello>
                    <GreetingHello>{blogTitle}</GreetingHello>
                    <GreetingDescription>
                        新しいものを学び、作ることが大好きな
                        <strong>イ ジョンヒョク</strong>です。
                    </GreetingDescription>
                    <GreetingButtons>
                        <a href="#intro">
                            <span>Intro</span>
                        </a>
                        <a href="#skills">
                            <span>Skills</span>
                        </a>
                        <a href="#projects">
                            <span>Projects</span>
                        </a>
                    </GreetingButtons>
                    <GreetingContact>
                        <li>
                            <a
                                href="https://github.com/mediumryan"
                                target="blank"
                            >
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://medium-ryan.tistory.com/"
                                target="blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 459 459"
                                >
                                    <title>티스토리 로고</title>
                                    <g>
                                        <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </GreetingContact>
                </GreetingLeft>
                <GreetingRight>
                    <div>
                        <img src={avatar} alt="my character" />
                    </div>
                </GreetingRight>
            </GreetingInner>
            <GreetingBottom>
                <FaAngleDown />
            </GreetingBottom>
        </SectionWrapper>
    );
}
