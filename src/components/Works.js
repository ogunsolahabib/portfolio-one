import React, { useState, useEffect } from "react";

import Work from "../components/Work";
import worksDb from "../worksDb.json";

const WorksPage = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    index > 0 ? setIndex(index - 1) : setIndex(worksDb.data.length - 1);
  };
  const next = () => {
    index < worksDb.data.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  return (
    <div className="works">
      <div className="dir-btn left-btn">
        <button onClick={prev} className="btn btn-arrow">
          <i className="fas fa-chevron-left" />
        </button>
      </div>

      <Work index={worksDb.data[index]} />

      <div className="dir-btn right-btn">
        <button onClick={next} className="btn btn-arrow">
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default WorksPage;
