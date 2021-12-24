import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import worksDb from "../worksDb.json";
import Work from "../components/Work";

const Me = (props) => {
  const socials = [
    {
      name: "Github",
      icon: "fab fa-github",
      link: "https://github.com/ogunsolahabib",
    },
    {
      name: "Linkedin",
      icon: "fab fa-linkedin",
      link: "https://linkedin.com/in/habib-ogunsola-92b79a15a/",
    },

    {
      name: "Twitter",
      icon: "fab fa-twitter",
      link: "https://twitter.com/ha_beeeb",
    },
    {
      name: "Codepen",
      icon: "fab fa-codepen",
      link: "https://codepen.io/ogunsolahabib",
    },
  ];

  return (
    <div className="mePage">
      <Header />
      <main className="me">
        <section className="section section--hero">
          <div className="hero__about">
            <h1 className="greeting">
              <span className="greeting__hi">Hi, I'm</span> HABIB OGUNSOLA
            </h1>
            <div className="description">
              <p>
                A creative Frontend Engineer and UX enthusiast with about{" "}
                {new Date().getFullYear() - 2018} years experience in building
                aesthetically pleasing large scale web applications.
              </p>
              <p>Interested in Tech, Business, Combat sports, and Football.</p>
            </div>
          </div>
          <div className="hero__image">
            <img src="img/stack-icons.png" alt="skills" />
          </div>
        </section>
        <section className="section bottom">
          <div id="contact">
            <h3>Contact</h3>
            <div>
              <ul className="set social">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.link}
                    >
                      <i className={social.icon} /> <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="v-line" />
              <ul className="set address">
                <li>
                  <a href="tel:+2348182141620">
                    <i class="fas fa-phone" />
                    &nbsp;+2348182141620
                  </a>
                </li>
                <li>
                  <a href="mailto:ogunsolahabib@yahoo.com">
                    <i class="far fa-envelope" />
                    &nbsp;
                    <span>ogunsolahabib@yahoo.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <h3>Projects</h3>
        {worksDb.data.map((work, index) => (
          <div>
            <Work index={worksDb.data[index]} />
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};
export default Me;
