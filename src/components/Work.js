import React from "react";

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
                <a
                  href={this.props.index.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">Source Code</button>
                </a>
              </div>
              <div className="btn-in">
                <a
                  href={this.props.index.liveWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">Live Website</button>
                </a>
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
