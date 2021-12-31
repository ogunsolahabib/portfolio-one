import React from "react";
import "./index.scss";

const Work = ({ index }) => {
  return (
    <div className="work" id="work-0">
      <div className="work__image-container">
        <img src={"./" + index.image} alt="Rest Countries" />
      </div>
      <div className="work__description-container">
        <h3 className="work__name">{index.name}</h3>
        <p className="work__description">{index.description}</p>
        <div className="btn-group">
          <div className="btn-in">
            <a
              href={index.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">Source Code</button>
            </a>
          </div>
          {index.liveWebsite && (
            <div className="btn-in">
              <a
                href={index.liveWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live Website</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
