import React from "react";
import artWebsite from "./imgs/art_website.png";
import eWebsite from "./imgs/ecommerce_website.png";
import todoList from "./imgs/todoList.png";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { Parallax } from "react-scroll-parallax";
import { RiArrowRightSLine } from "react-icons/ri";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="is-flex mb-6 mt-6">
        <p className="is-size-3">
          <RiArrowRightSLine />
          Personal Projects
        </p>
        <hr className="hrline ml-4"></hr>
      </div>

      <div className="project is-flex-direction-column mb-6">
        <Parallax translateX={[-20, 0]} easing="easeOutQuint">
          <div className="is-flex my-6">
            <figure class="image">
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
            <div className="projectContent ml-6">
              <a
                target="blank"
                href="https://sensational-brigadeiros-b2c78d.netlify.app/HOME"
                className="links"
              >
                <p className="is-size-4">Art Gallery</p>
              </a>
              <div className="card my-4 has-background-warning-light">
                <div className="card-content">
                  <div className="content">
                    <p>
                      Growing up, I have had this one hobby that I can not get
                      rid of: creating art works. Since I have a lot of
                      collections of my own art pieces, I had an idea to put
                      them on a website that only belongs to me. So I built this
                      website to showcase my artworks. It includes my canvas
                      paintings, scatches, drawings, and digital graphics. I had
                      a lot of fun building this website for myself.
                    </p>
                  </div>
                </div>
              </div>
              <p className="is-size-6 my-3">
                React.js&nbsp;&nbsp;&nbsp;&nbsp;Netlify&nbsp;&nbsp;&nbsp;&nbsp;Styled
                Components
              </p>
              <a
                href="https://github.com/nasiranebi914/9.14g---A-Website-for-my-Artworks"
                target="blank"
                className="links mr-4"
              >
                <FaGithub />
              </a>
              <a
                href="https://sensational-brigadeiros-b2c78d.netlify.app/HOME"
                target="blank"
                className="links"
              >
                <BiLinkExternal />
              </a>
            </div>
          </div>
        </Parallax>
        <Parallax translateX={[0, -20]} easing="easeInQuint">
          <div className="is-flex pt-6 my-6">
            <div className="projectContent mr-6">
              <a
                target="blank"
                href="https://sensational-brigadeiros-b2c78d.netlify.app/HOME"
                className="links"
              >
                <p className="is-size-4">E-Commerce Website</p>
              </a>
              <div className="card has-background-warning-light  my-4">
                <div className="card-content">
                  <div className="content">
                    <p>
                      An e-commerce website that uses Sephora's API to provide
                      cosmetic products for users to shop. A user can approach
                      different type of cosmetic products, view each product's
                      detail, add to their carts, and go on to payments. The
                      website is now in the process, and there are still 30% to
                      be done. It will be updated here soon once its done.
                    </p>
                  </div>
                </div>
              </div>
              <p className="is-size-6  my-4">
                React&nbsp;&nbsp;&nbsp;&nbsp;Bulma&nbsp;&nbsp;&nbsp;&nbsp;Sephora
                API&nbsp;&nbsp;&nbsp;&nbsp;Netlify
              </p>
              <a
                href="https://github.com/nasiranebi914/ecommerce-cosmeticStore"
                target="blank"
                className="links mr-4"
              >
                <FaGithub />
              </a>
              <a
                href="https://github.com/nasiranebi914/ecommerce-cosmeticStore"
                target="blank"
                className="links"
              >
                <BiLinkExternal />
              </a>
            </div>

            <figure class="image">
              <img src={eWebsite} alt="" />
              <div className="middle">
                <a
                  target="blank"
                  href="https://github.com/nasiranebi914/ecommerce-cosmeticStore"
                >
                  <div class="button">Coming Soon, Check out GitHub</div>
                </a>
              </div>
            </figure>
          </div>
        </Parallax>
        <Parallax translateX={[-20, 0]} easing="easeOutQuint">
          <div className="is-flex pt-6 my-6">
            <figure class="image">
              <img src={todoList} alt="" />
              <div className="middle">
                <a
                  target="blank"
                  href="https://6368b55e39a240110aea7607--imaginative-squirrel-1b5929.netlify.app/"
                >
                  <div class="button">Visit Website</div>
                </a>
              </div>
            </figure>

            <div className="projectContent ml-6">
              <a
                target="blank"
                href="https://6368b55e39a240110aea7607--imaginative-squirrel-1b5929.netlify.app/"
                className="links"
              >
                <p className="is-size-4 ">A Simple Todo List</p>
              </a>
              <div className="card my-4 has-background-warning-light">
                <div className="card-content">
                  <div className="content">
                    <p>
                      A simple todo list web application, in which a user can
                      add new tasks, mark accomplished task, and delete finished
                      tasks. For now, this application only supports the side
                      frontend, so there is no storage of the data. The future
                      development of this app can be adding a backend with a
                      database that can authenticate users, and store a users'
                      data.
                    </p>
                  </div>
                </div>
              </div>
              <p className="is-size-6 my-4">
                React.js&nbsp;&nbsp;&nbsp;&nbsp;Netlify&nbsp;&nbsp;&nbsp;&nbsp;Styled
                Components
              </p>
              <a
                href="https://github.com/nasiranebi914/TodoList-WebApp"
                target="blank"
                className="links mr-4"
              >
                <FaGithub />
              </a>
              <a
                href="https://6368b55e39a240110aea7607--imaginative-squirrel-1b5929.netlify.app/"
                target="blank"
                className="links"
              >
                <BiLinkExternal />
              </a>
            </div>
          </div>
        </Parallax>
      </div>
      <a href="https://github.com/nasiranebi914" target="blank">
        <button className="button mt-6 is-size-5 has-background-warning-light">
          And more
        </button>
      </a>
    </div>
  );
}

export default Projects;
