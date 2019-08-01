import React from "react";
import {Link, NavLink} from "react-router-dom";
const Header = props => {
  return (
    <div>
      <header>
        <nav className="main-nav">
          <div className="brand-logo">
            <Link to="/">
              <h1>&lt;h/&gt;</h1>
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="/" exact={true}>
                  ME
                </NavLink>
              </li>
              <li>
                <NavLink to="/works">WORKS</NavLink>
              </li>
            </ul>
          </div>
          <div className="right">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1Cpb-NaS-AcTmD_7n5WNhVGzfabatJDR-eNTjWJR05Hg/edit?usp=sharing"
            >
              <button className="btn btn-primary">RESUME</button>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
