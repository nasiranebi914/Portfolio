import React from "react";

function Nav() {
  return (
    <div
      className="nav mr-6 mt-6"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-end">
        <div class="navbar-item">
          <a className="links" href="#about">
            About
          </a>
        </div>
        <div class="navbar-item">
          <a className="links" href="#skills">
            Skills
          </a>
        </div>
        <div class="navbar-item">
          <a className="links" href="#projects">
            Projects
          </a>
        </div>
        <div class="navbar-item">
          <a className="links" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
