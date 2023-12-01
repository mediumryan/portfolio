import { styled } from 'styled-components';
import { IntroContentWrapper } from './IntroIntro';
import { FaCss3Alt, FaJsSquare, FaReact, FaSlack } from 'react-icons/fa';

const SkillsInner = styled.div`
    display: flex;
    flex-direction: column;
    & > div:first-child {
        margin-bottom: 2rem;
    }
`;

const SkillsSubTitle = styled.h4`
    font-size: 1.25rem;
    border-bottom: 2px solid var(--accent-300);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
`;

const SkillsContent = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const SkillsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
        font-size: 3rem;
        color: var(--accent-200);
        transition: 300ms all;
        &:hover {
            transform: rotate(5deg);
        }
    }
    span {
        margin-top: 1rem;
        font-size: 0.75rem;
        font-weight: 700;
    }
`;

export default function IntroSkills() {
    return (
        <IntroContentWrapper>
            <SkillsInner>
                <div>
                    <SkillsSubTitle>Skills</SkillsSubTitle>
                    <SkillsContent>
                        <SkillsItem>
                            <FaCss3Alt />
                            <span>CSS</span>
                        </SkillsItem>
                        <SkillsItem>
                            <FaJsSquare />
                            <span>JavaScript</span>
                        </SkillsItem>
                        <SkillsItem>
                            <FaReact />
                            <span>React</span>
                        </SkillsItem>
                        <SkillsItem>
                            <FaReact />
                            <span>TypeScript</span>
                        </SkillsItem>
                    </SkillsContent>
                </div>
                <div>
                    <SkillsSubTitle>Tools</SkillsSubTitle>
                    <SkillsContent>
                        <SkillsItem>
                            <FaReact />
                            <span>VsCode</span>
                        </SkillsItem>
                        <SkillsItem>
                            <FaReact />
                            <span>Notion</span>
                        </SkillsItem>
                        <SkillsItem>
                            <FaSlack />
                            <span>Slack</span>
                        </SkillsItem>
                    </SkillsContent>
                </div>
            </SkillsInner>
        </IntroContentWrapper>
    );
}
