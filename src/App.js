import "./App.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Nav from "./Nav";
import Skills from "./Skills";
function App() {
  return (
    <div className="containeris-max-widescreen ">
      <div className="home">
        <Nav />
        <div className="section is-medium ml-6">
          <p
            className="is-size-4 has-text-weight-medium	 mb-4"
            style={{ color: "#8c8c8c" }}
          >
            Hi, my name is
          </p>
          <p className="is-size-1 has-text-weight-semibold">Nasira Nebi </p>
          <p
            className="is-size-1 has-text-weight-medium"
            style={{ color: "#7a7a7a" }}
          >
            I enjoy creating websites
          </p>
          <p
            className="is-size-5 mt-6 has-text-weight-medium	"
            style={{ color: "#8c8c8c" }}
          >
            I am a junior software engineer specializing in Web-Development.
            <br />
            Currently, I am based in Tokyo and looking for job opportunities
          </p>
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
