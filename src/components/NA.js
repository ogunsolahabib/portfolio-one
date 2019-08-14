import React from "react";
import { Link } from "react-router-dom";
const NA = () => {
  return (
    <div className="not-available">
      <h3>
        This page is not available on this device. Please visit it on a desktop
        screen.
      </h3>
      <br />
      <div>
        <Link className="brand-logo" to="/">
          <h1>&lt;home/&gt;</h1>
        </Link>
      </div>
    </div>
  );
};
export default NA;
