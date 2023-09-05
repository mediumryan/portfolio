import './css/index.css';
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
    padding: var(--padding-double-large);
    @media (max-width: 412px) and (max-height: 915px) {
        height: 100%;
    }
`;

function App() {
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