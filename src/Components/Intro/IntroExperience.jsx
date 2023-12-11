import { styled } from 'styled-components';
import { IntroContentWrapper } from './IntroIntro';
import { FaPencilAlt, FaSuitcase } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { introEducationState, introWorkState } from '../../Data/introAtom';

const ExperienceInner = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const ExperienceContent = styled.div`
    flex-basis: 48%;
    text-align: center;
`;

const ExperienceTitle = styled.h4`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: var(--accent-200);
    padding-left: 0.5rem;
    svg {
        margin-left: 0.5rem;
        width: 16px;
        height: 16px;
    }
`;

const ExperienceList = styled.ul`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ExperienceItem = styled.li`
    text-align: left;
    background-color: var(--accent-300);
    color: var(--black-100);
    font-size: 0.95rem;
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 10px;
    line-height: 1.5;
    h5 {
        max-width: 70%;
    }
    p {
        margin: 0.75rem 0 1.25rem 0;
        font-size: 0.8rem;
        color: var(--black-200);
    }
    span {
    }
`;

export default function IntroExperience() {
    const work = useRecoilValue(introWorkState);
    const edu = useRecoilValue(introEducationState);

    return (
        <IntroContentWrapper>
            <ExperienceInner>
                <ExperienceContent>
                    <ExperienceTitle>
                        <span>職務経験</span>
                        <FaSuitcase />
                    </ExperienceTitle>
                    <ExperienceList>
                        {work.map((item) => {
                            return (
                                <ExperienceItem key={item.id}>
                                    <h5>{item.company}</h5>
                                    <p>{item.position}</p>
                                    <span>{item.period}</span>
                                </ExperienceItem>
                            );
                        })}
                    </ExperienceList>
                </ExperienceContent>
                <ExperienceContent>
                    <ExperienceTitle>
                        <span>学歴</span>
                        <FaPencilAlt />
                    </ExperienceTitle>
                    <ExperienceList>
                        {edu.map((item) => {
                            return (
                                <ExperienceItem key={item.id}>
                                    <h5>{item.college}</h5>
                                    <p>{item.major}</p>
                                    <span>{item.period}</span>
                                </ExperienceItem>
                            );
                        })}
                    </ExperienceList>
                </ExperienceContent>
            </ExperienceInner>
        </IntroContentWrapper>
    );
}
