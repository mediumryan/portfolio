import { styled } from 'styled-components';
import { SectionWrapper } from '../Greeting/Greeting';
import { SectionTitle } from '../Intro/Intro';
import SlideMenu from './SlideMenu';
import Slide from './Slide';

const SlideContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function ProjectSlide() {
    return (
        <SectionWrapper id="projects">
            <SectionTitle>Projects</SectionTitle>
            <SlideContent>
                <SlideMenu />
                <Slide />
            </SlideContent>
        </SectionWrapper>
    );
}
