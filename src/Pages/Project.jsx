import { styled } from 'styled-components';
import { PageWrapper } from './Home';
import ProjectMenu from '../Components/Project/ProjectMenu';
import ProjectGrid from '../Components/Project/ProjectGrid';
import FooterBar from '../Components/Footer/FooterBar';

const ProjectInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5rem 5rem 5rem;
`;

const ProjectTitle = styled.h2`
    margin: 3rem 0;
    font-family: 'Rampart One', sans-serif;
    font-style: italic;
    font-size: 2.5rem;
`;

export default function Project() {
    return (
        <PageWrapper>
            <ProjectInner>
                <ProjectTitle>My Projects</ProjectTitle>
                <ProjectMenu />
                <ProjectGrid />
            </ProjectInner>
            <FooterBar />
        </PageWrapper>
    );
}
