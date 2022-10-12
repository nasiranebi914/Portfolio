import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";
function Contact() {
  return (
    <div
      id="contact"
      className="section is-large is-justify-content-space-around	 ml-6 "
    >
      <p className="is-size-1">Contact Me</p>
      <div>
        <p className="mt-6">
          I am open to Front-end/Full-stack positions in Tokyo OR global remote
          positions
        </p>
        <a className="email-link" href={`mailto:${"nasira914@icloud.com"}`}>
          <button className="button mt-6 has-background-link-light">
            Send Email
          </button>
        </a>
        <p className="header mt-6">Follow Me</p>
        <a
          href="https://github.com/nasiranebi914"
          target="blank"
          className="links mr-4"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nasira-nebi-379048185/"
          target="blank"
          className="links mr-4"
        >
          <SiLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;
