import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Works from "./Works";
import {Link} from "react-router-dom";

const Me = props => {
  return (
    <div className="mePage">
      <Header />
      <div className="matter">
        <div className="me">
          <div className="large-text">
            <div id="about">
              <h1 className="name-large">HABIB OGUNSOLA</h1>
              <p>
                I'm a creative and passionate Front-end Web Developer and UI/UX
                Design enthusiast based in Lagos, Nigeria.
                <br />I like learning about tech, teaching maths, and playing
                football and video games.
              </p>
            </div>

            <div className="bottom">
              <div id="skills">
                <h3>Skills</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>

                  <li>Materialize</li>
                  <li>Semantic-UI</li>
                  <li>ReactJS</li>

                  <li>Git</li>
                  <li>REST APIs</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div id="contact">
                <h3>Contact</h3>
                <ul>
                  <div className="set social">
                    <li>Github</li>
                    <li>Codepen</li>
                    <li>Linkedin</li>
                    <li>Twitter</li>
                  </div>
                  <div className="v-line" />
                  <div className="set address">
                    <li>+2348182141620</li>
                    <li>ogunsolahabib@yahoo.com</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="right arrow-area">
            <Link to="/works" className="arrow-circle">
              <i className="fas fa-long-arrow-alt-right" />
            </Link>
          </div>
        </div>
        <div className="mobile-works">
          <Works />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Me;
