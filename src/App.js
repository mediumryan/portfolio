import "./css/index.css";
// import components
import TopHeader from "./components/TopHeader";
import Home from "./components/Home";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main_container">
      <TopHeader />
      <Home />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
