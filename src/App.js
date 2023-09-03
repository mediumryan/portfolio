import { useRecoilState } from 'recoil';
import './css/index.css';
import { projects } from './Data/atom';
// import components

function App() {
    const [project, setProject] = useRecoilState(projects);

    console.log(project);

    return <div>hi</div>;
}

export default App;
