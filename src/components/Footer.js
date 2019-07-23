import React from "react";
const Footer = props => {
  return (
    <footer>
      <p>&copy; 2019 Habib Ogunsola</p>
      <ul>
        <li>
          <a href="https://github.com">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="https://codepen.com">
            <i className="fab fa-codepen" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <i className="fab fa-instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
