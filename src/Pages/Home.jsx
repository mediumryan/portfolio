import { styled } from 'styled-components';
import Greeting from '../Components/Greeting/Greeting';
import Intro from '../Components/Intro/Intro';
import SkillBar from '../Components/SkillBar/SkillBar';
import ProjectSlide from '../Components/ProjectSlide/ProjectSlide';
import ContactMe from '../Components/ContactMe/ContactMe';
import FooterBar from '../Components/Footer/FooterBar';

export const PageWrapper = styled.div`
    background-color: var(--white-100);
    color: var(--black-100);
    height: 100vh;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
`;
export default function Home() {
    return (
        <PageWrapper>
            <Greeting />
            <Intro />
            <SkillBar />
            <ProjectSlide />
            <ContactMe />
            <FooterBar />
        </PageWrapper>
    );
}
