import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

function Skills() {
  return (
    <div id="skills" className="skills my-6 py-6">
      <div className="skill my-6 is-justify-content-space-between is-align-items-center">
        <div className="is-size-3">
          <RiArrowRightSLine />
          Web development skills
        </div>
        <div className="columns is-size-4">
          <div className="column">
            <p>HTML</p>
            <p>React</p>
            <p>Node.js</p>
          </div>
          <div className="column">
            <p>CSS</p>
            <p>Redux</p>
            <p>Netlify</p>
          </div>
          <div className="column">
            <p>Javascript</p>
            <p>Bulma</p>
            <p>Heroku</p>
          </div>
        </div>
      </div>

      <div className="skill my-6 is-justify-content-space-between is-align-items-center pt-6">
        <div className="is-size-3">
          <RiArrowRightSLine />
          Language skills
        </div>
        <div className="columns is-size-4">
          <div className="column">
            <p>English</p>
            <p>Uyghur</p>
            <p>Japanese</p>
          </div>
          <div className="column">
            <p>German</p>
            <p>Korean</p>
          </div>
          <div className="column">
            <p>Chinese</p>
            <p>Turkish</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
