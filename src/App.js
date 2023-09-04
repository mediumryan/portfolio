import { useRecoilState } from 'recoil';
import './css/index.css';
import { projects } from './Data/atom';
import { styled } from 'styled-components';
import Greeting from './Components/Greeting';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
// import components

// style-components
const MainWrapper = styled.div`
    background-color: var(--bg-100);
    color: var(--text-100);
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 24px 48px;
`;

const Grid = styled.div`
    background-color: red;
    height: 100%;
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

function App() {
    const [project, setProject] = useRecoilState(projects);

    console.log(project);

    return (
        <MainWrapper>
            <Greeting />
            <Grid>
                <Intro />
                <Skills />
                <Project />
                <Contact />
            </Grid>
        </MainWrapper>
    );
}

export default App;
