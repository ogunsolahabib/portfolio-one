import React from "react";
import {NavLink} from "react-router-dom";
const Header = props => {
  return (
    <div>
      <header>
        <nav className="main-nav">
          <div className="brand-logo">
            <h1>&lt;h/&gt;</h1>
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
        </nav>
      </header>
    </div>
  );
};
export default Header;
