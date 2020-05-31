import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Works from "../components/Works";
import { Link } from "react-router-dom";

const Me = (props) => {
  return (
    <div className="mePage">
      <Header />
      <div className="matter">
        <div className="me">
          <div id="about">
            <h1 className="name-large">HABIB OGUNSOLA</h1>
            <p>
              I'm a creative and passionate Frontend Developer and UI/UX Design
              enthusiast based in Lagos, Nigeria.
              <br />I like learning about technologies, playing football and
              video games.
            </p>
          </div>

          <div className="bottom">
            <div id="skills">
              <h3>Skills</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>

                <li>TypeScript</li>
                <li>Materialize</li>
                <li>ReactJS</li>

                <li>NextJS</li>
                <li>Git</li>
                <li>Figma</li>
              </ul>
            </div>
            <div id="contact">
              <h3>Contact</h3>
              <div>
                <ul className="set social">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/ogunsolahabib"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://codepen.com/ogunsolahabib"
                    >
                      Codepen
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/ogunsolahabib"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/ogunsolahabib"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
                <div className="v-line" />
                <ul className="set address">
                  <li>
                    <a href="tel:+2348182141620">
                      <i class="fas fa-phone" /> &nbsp;+2348182141620
                    </a>
                  </li>
                  <li>
                    <a href="mailto:ogunsolahabib@yahoo.com">
                      <i class="far fa-envelope" /> &nbsp;
                      <span>ogunsolahabib@yahoo.com</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/works">
                      <button className="btn btn-primary btn-to-works">
                        MY WORKS
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-works">
          <h3>My Works</h3>
          <Works />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Me;
