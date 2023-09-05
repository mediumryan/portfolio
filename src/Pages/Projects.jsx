import { styled } from 'styled-components';
import ProjectGrid from '../Components/Project/ProjectGrid';
import { AiFillHome } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ProjectsWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--padding-double-large);
    height: 100vh;
    @media only screen and (min-width: 360px) and (max-width: 767px) {
        padding: var(--padding-double-small);
    }
`;

const ProjectTitle = styled.h2`
    font-size: var(--font-size-large);
    font-weight: 700;
    color: var(--primary-200);
    margin-bottom: var(--margin-very-large);
`;

const GoHome = styled.button`
    color: var(--primary-100);
    font-size: var(--font-size-medium-large);
    position: absolute;
    top: 0;
    left: 0;
    transition: 300ms all;
    &:hover {
        opacity: 0.7;
    }
`;

export default function Projects() {
    const navigate = useNavigate();

    return (
        <ProjectsWrapper>
            <ProjectTitle>Projects</ProjectTitle>
            <ProjectGrid />
            <GoHome onClick={() => navigate('/')}>
                <AiFillHome />
            </GoHome>
        </ProjectsWrapper>
    );
}
