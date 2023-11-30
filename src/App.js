import './css/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import { styled } from 'styled-components';

const MainWrapper = styled.div`
    letter-spacing: 2px;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: 100%;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
`;

function App() {
    return (
        <MainWrapper>
            <HeaderBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </MainWrapper>
    );
}

export default App;
