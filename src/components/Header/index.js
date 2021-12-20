import React from "react";
import "./index.scss";

const Header = (props) => {
  return (
    <header>
      <nav className="main-nav">
        <div className="brand-logo">
          <a href="/">
            <h1>&lt;h/&gt;</h1>
          </a>
        </div>
        <div className="right">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/e/2PACX-1vSC1_JjJakdpurDkDhz_mRRdqBxcJJmYwagC-8jqqAZQQtAsxt8nYXkoskhelio8ong5YRX46svYHXd/pub"
          >
            <button className="btn btn-primary">RESUME</button>
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
