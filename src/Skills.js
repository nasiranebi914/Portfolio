import React from "react";

function Skills() {
  return (
    <div className="skills is-justify-content-space-between mt-6" id="skills">
      <p className="is-size-3 mr-6">My web development skills</p>
      <div className="block ml-6" style={{ width: "800px" }}>
        <nav class="level is-mobile ">
          <div class="level-item has-text-centered">
            <div>
              <p class="title">HTML5</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">CSS3</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">JavaScript</p>
            </div>
          </div>
        </nav>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="title">React.js</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">Redux</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">Bulma</p>
            </div>
          </div>
        </nav>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="title">Node.js</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">Netlify</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="title">Heroku</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Skills;
