import React, { useEffect } from "react";

const Work = ({ index }) => {
  useEffect(() => {}, [index]);
  return (
    <div className="work" id="work-0">
      <div className="image">
        <img src={"./" + index.image} alt="Rest Countries" />
      </div>
      <div className="desc">
        <h3 className="project-name">{index.name}</h3>
        <p>{index.description}</p>
        <div className="btn-group">
          <div>
            <div className="btn-in">
              <a
                href={index.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Source Code</button>
              </a>
            </div>
            <div className="btn-in">
              <a
                href={index.liveWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
