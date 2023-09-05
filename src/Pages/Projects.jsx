import { styled } from 'styled-components';
import ProjectGrid from '../Components/Project/ProjectGrid';

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 48px;
    height: 100vh;
`;

const ProjectTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    color: var(--primary-200);
    margin-bottom: 64px;
`;

export default function Projects() {
    return (
        <ProjectsWrapper>
            <ProjectTitle>Projects</ProjectTitle>
            <ProjectGrid />
        </ProjectsWrapper>
    );
}
