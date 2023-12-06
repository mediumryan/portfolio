import './css/index.css';
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
// components
import HeaderBar from './Components/HeaderBar/HeaderBar';
// pages
import Home from './Pages/Home';
import Project from './Pages/Project';

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
                <Route path="/project" element={<Project />} />
            </Routes>
        </MainWrapper>
    );
}

export default App;
