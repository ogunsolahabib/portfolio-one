import React from "react";
import {Link} from "react-router-dom";

class Work extends React.Component {
  state = {
    data: this.props.index
  };

  checkReady() {
    if (!this.props.index) {
      return <p>loading</p>;
    } else {
      return (
        <div className="work" id="work-0">
          <div className="image">
            <img src={"./" + this.props.index.image} alt="Rest Countries" />
          </div>
          <div className="desc">
            <h3 className="project-name">{this.props.index.name}</h3>
            <p>{this.props.index.description}</p>
            <div className="btn-group">
              <div className="btn-in">
                <Link to={this.props.index.repository} target="_blank">
                  <button className="btn btn-primary">View on Github</button>
                </Link>
              </div>
              <div className="btn-in">
                <Link to={this.props.index.liveWebsite} target="_blank">
                  <button className="btn btn-primary">Launch Website</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.checkReady()}</div>;
  }
}

export default Work;
