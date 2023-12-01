import { styled } from 'styled-components';
import { SectionWrapper } from '../Greeting/Greeting';
// image
import avatar_upper from './../../images/avatar_upper.jpeg';
import IntroIntro from './IntroIntro';
import IntroCategory from './IntroCategory';
import IntroExperience from './IntroExperience';
import { useRecoilValue } from 'recoil';
import { introCategoryState } from '../../Data/introAtom';
import IntroSkills from './IntroSkills';

const IntroInner = styled.div`
    margin: 2.5rem 0;
`;

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Rampart One', sans-serif;
`;

const IntroContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2rem;
`;

const IntroLeft = styled.div`
    flex-basis: 50%;
    img {
        width: 325px;
        height: 325px;
    }
`;

const IntroRight = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Intro() {
    const introCategory = useRecoilValue(introCategoryState);

    return (
        <SectionWrapper id="intro">
            <IntroInner>
                <SectionTitle>私を紹介します</SectionTitle>
                <IntroContent>
                    <IntroLeft>
                        <img src={avatar_upper} alt="avatar upper body" />
                    </IntroLeft>
                    <IntroRight>
                        <IntroCategory />
                        {introCategory[0].isActive && <IntroIntro />}
                        {introCategory[1].isActive && <IntroExperience />}
                        {introCategory[2].isActive && <IntroSkills />}
                    </IntroRight>
                </IntroContent>
            </IntroInner>
        </SectionWrapper>
    );
}
