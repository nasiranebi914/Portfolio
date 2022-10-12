import React from "react";
import { Parallax } from "react-scroll-parallax";
function About() {
  return (
    <div className="about is-justify-content-space-evenly" id="about">
      <Parallax speed={-8}>
        <div className="mt-6">
          <div style={{ width: "400px" }}>
            <p className="is-size-3">About</p>
            <p className="is-size-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              quis sodales mauris. Aenean tincidunt purus nibh, vel vulputate
              velit ullamcorper et. In vel justo est. Nunc tortor mi, molestie
              sed vulputate nec, iaculis a libero. Fusce fermentum congue sem et
              fringilla. Aenean eu ligula ut velit viverra blandit. Morbi
              aliquet metus magna, eu tempor lectus consequat eu. Suspendisse
              sagittis tempor tortor, id scelerisque magna. Quisque lacus leo,
              consequat non porttitor nec, egestas vel diam. Vestibulum tellus
              libero, iaculis et efficitur sed, tincidunt id purus.
            </p>
          </div>
        </div>
      </Parallax>
      <Parallax speed={25}>
        <div className="mt-6 ">
          <figure className="image is-256x256">
            <img
              alt=""
              src="https://i.picsum.photos/id/586/200/300.jpg?grayscale&hmac=bl4Q7obfcEbQA723rHa91ZqfhveWu2EKh3aRhPB7vPA"
            ></img>
          </figure>
        </div>
      </Parallax>
    </div>
  );
}

export default About;
