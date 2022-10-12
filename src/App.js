import "./App.css";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./Nav";
import Skills from "./Skills";

function App() {
  return (
    <div className="containeris-max-widescreen">
      <div className="home">
        <Nav />
        <div className="section is-large ">
          <h4 className="is-size-4">Hi, I am</h4>
          <h1 className="is-size-1">Nasira Nebi </h1>
          <h1 className="is-size-1">I enjoy creating websites</h1>
          <p>Schroll sign</p>
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
