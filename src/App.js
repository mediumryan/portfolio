import { useRecoilState } from 'recoil';
import './css/index.css';
import { projects } from './Data/atom';
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

// style-components
const MainWrapper = styled.div`
    background-color: var(--bg-100);
    color: var(--text-100);
    height: 150vh;
    display: flex;
    flex-direction: column;
    padding: 24px 48px;
`;

function App() {
    const [project, setProject] = useRecoilState(projects);

    return (
        <MainWrapper>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </MainWrapper>
    );
}

export default App;
