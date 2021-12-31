import React from "react";
import "./index.scss";

const Footer = (props) => {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} Habib Ogunsola</p>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ogunsolahabib"
              title="Github"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codepen.com/ogunsolahabib"
              title="Codepen"
            >
              <i className="fab fa-codepen" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook.com/ogunsolahabib"
              title="Facebook"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/habeeb_ogee"
              title="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/habib-ogunsola-92b79a15a/"
              title="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/ha_beeeb_"
              title="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
