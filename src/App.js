import "./css/index.css";
// import components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main_container">
      <Navbar />
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
