import './css/index.css';
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

// style-components
const MainWrapper = styled.div`
    background-color: var(--bg-100);
    color: var(--text-100);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: var(--padding-double-large);
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: 100%;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
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
