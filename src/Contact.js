import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="section is-large">
      <div className="contactMe">
        <p className="is-size-3">Get In Touch</p>
      </div>
      <div>
        <p className="mt-6 is-size-5">
          Interested in working with me?
          <br /> I am open to Software Engineering job opportunities in
          <strong> Tokyo, Japan</strong>
          <br />I would love to discuss about any projects and talk about
          creative things, just say Hi!
        </p>
        <a className="email-link" href={`mailto:${"nasiranebi914@gmail.com"}`}>
          <button className="button mt-6 has-background-warning-light	">
            Send me an Email!
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
