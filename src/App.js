import './css/index.css';
import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
// import components
import HeaderBar from './Components/HeaderBar/HeaderBar';
// import pages
import Home from './Pages/Home';
import Project from './Pages/Project';
import NotFound from './Pages/NotFound';
// import icons
import { FaArrowUp } from 'react-icons/fa';

const MainWrapper = styled.div`
    position: relative;
    letter-spacing: 2px;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        height: 100%;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
    }
`;

const GoToTop = styled.a`
    position: fixed;
    bottom: 10%;
    right: 5%;
    padding: 0.35rem;
    border: 5px solid var(--accent-200);
    border-radius: 50%;
    color: var(--accent-200);
    transition: 300ms all;
    z-index: 2;
    svg {
        font-size: 1.15rem;
    }
    &:hover {
        color: var(--white-100);
        background-color: var(--accent-200);
    }
`;

function App() {
    return (
        <MainWrapper>
            <HeaderBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <GoToTop href="#header">
                <FaArrowUp />
            </GoToTop>
        </MainWrapper>
    );
}

export default App;
