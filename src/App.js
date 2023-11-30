import './css/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import HeaderBar from './Components/HeaderBar/HeaderBar';

// style-components
// const MainWrapper = styled.div`
//     background-color: var(--bg-100);
//     color: var(--text-100);
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     padding: var(--padding-double-large);
//     @media only screen and (min-width: 320px) and (max-width: 768px) {
//         height: 100%;
//     }
//     @media only screen and (min-width: 768px) and (max-width: 1024px) {
//     }
// `;

function App() {
    return (
        <div>
            <HeaderBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
}

export default App;
