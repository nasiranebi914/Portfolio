import React from "react";
import artWebsite from "./imgs/art_website.png";
import eWebsite from "./imgs/ecommerce_website.png";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
function Projects() {
  return (
    <div className="projects" id="projects">
      <p className="is-size-3 mb-6">Projects</p>
      <div className="project is-flex-direction-column mb-6">
        <div className="is-flex mb-6">
          <div className="card mr-6">
            <div className="card-image">
              <figure class="image is-640x480">
                <img src={artWebsite} alt="" />
                <div className="middle">
                  <a
                    target="blank"
                    href="https://sensational-brigadeiros-b2c78d.netlify.app/HOME"
                  >
                    <div class="button">Visit Website</div>
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <div className="ml-6">
            <p className="is-size-6 mt-6 ">Self made</p>
            <a
              target="blank"
              href="https://sensational-brigadeiros-b2c78d.netlify.app/HOME"
              className="links"
            >
              <p className="is-size-5 ">Art Gallery</p>
            </a>
            <div className="card my-4 has-background-warning-light">
              <div className="card-content">
                <div className="content">
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non mi porta gravida at eget metus. Cum
                </div>
              </div>
            </div>
            <p className="is-size-6">React.js Netlify </p>
            <a
              href="https://github.com/nasiranebi914/9.14g---A-Website-for-my-Artworks"
              target="blank"
              className="links mr-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://github.com/nasiranebi914/9.14g---A-Website-for-my-Artworks"
              target="blank"
              className="links"
            >
              <BiLinkExternal />
            </a>
          </div>
        </div>
        <div className="is-flex pt-6">
          <div className="mr-6">
            <p className="is-size-6 mt-6 ">Self made</p>
            <a
              target="blank"
              href="https://sensational-brigadeiros-b2c78d.netlify.app/HOME"
              className="links"
            >
              <p className="is-size-5 ">E-Commerce Website</p>
            </a>
            <div className="card my-4 has-background-warning-light">
              <div className="card-content">
                <div className="content">
                  Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
                  eros. Donec id elit non mi porta gravida at eget metus. Cum
                </div>
              </div>
            </div>
            <p className="is-size-6">React Bulma Netlify </p>
            <a
              href="https://github.com/nasiranebi914/9.14g---A-Website-for-my-Artworks"
              target="blank"
              className="links mr-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://github.com/nasiranebi914/9.14g---A-Website-for-my-Artworks"
              target="blank"
              className="links"
            >
              <BiLinkExternal />
            </a>
          </div>
          <div className="card ml-6">
            <div className="card-image">
              <figure class="image is-640x480">
                <img src={eWebsite} alt="" />
                <div className="middle">
                  <a
                    target="blank"
                    href="https://sensational-brigadeiros-b2c78d.netlify.app/HOME"
                  >
                    <div class="button">Visit Website</div>
                  </a>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
