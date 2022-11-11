import React from "react";
import { Parallax } from "react-scroll-parallax";
import me from "./imgs/me.jpeg";
import { RiArrowRightSLine } from "react-icons/ri";
function About() {
  return (
    <div className="about is-justify-content-space-evenly mt-6" id="about">
      <Parallax speed={-10}>
        <div className="is-flex  mt-6">
          <p className="is-size-3">
            <RiArrowRightSLine />
            About
          </p>
          <hr className="hrline ml-4"></hr>
        </div>
        <div className="mt-6">
          <div style={{ width: "500px" }}>
            <p className="is-size-6">
              Hey there! My name is Nasira, I graduated with a Bachelor degree
              in Computer Science from HTW Berlin in 2022.
            </p>
            <p>
              I have ~1 year experience working as an intern on the cloud
              computing team at a
              <a
                className="aboutLink"
                href="https://www.ibm.com/de-de/cloud"
                target="blank"
              >
                {" "}
                huge coorperation
              </a>
              . At there, I worked on a few full-stack development projects.
              This experience made me even more interested in web development,
              where I realised that I can combine my artistic skills with my
              technical skills to build something useful.
              <p>
                I've recently moved to Tokyo, Japan and I've been actively
                recruiting for a Software Engineering role here.
              </p>
            </p>
          </div>
        </div>
      </Parallax>
      <Parallax speed={10}>
        <div className=" mt-6 ">
          <figure>
            <img className="myImg" alt="" src={me}></img>
          </figure>
        </div>
      </Parallax>
    </div>
  );
}

export default About;
