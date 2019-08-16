import React from "react";

import Work from "../components/Work";
import Loader from "../components/Loader";
class WorksPage extends React.Component {
  state = {
    index: 0,
    isLoading: false,
    worksDB: []
  };
  prev() {
    this.setState(prevState => {
      if (this.state.index === 0) {
        this.setState({ index: this.state.worksDB.length - 1 });
      } else {
        return { index: prevState.index > 0 ? this.state.index - 1 : 0 };
      }
    });
  }
  next() {
    this.setState(prevState => {
      if (this.state.index === this.state.worksDB.length - 1) {
        this.setState({ index: 0, isLoading: false });
      } else {
        return {
          index:
            prevState.index < this.state.worksDB.length - 1
              ? this.state.index + 1
              : this.state.worksDB.length - 1
        };
      }
    });
  }
  componentDidUpdate(prevState) {
    if (prevState.index !== this.state.index && this.state.index.image) {
      this.setState({ isLoading: true });
    }
  }
  componentDidMount() {
    this.setState({
      worksDB: [
        {
          name: "REST Countries",
          image: "img/REST_COUNTRIES.png",
          description:
            "I found a challenge online to build this. The web app shows information of 250 countries and has a light theme and dark theme. I built it using ReactJS and Semantic UI",
          repository: "https://github.com/ogunsolahabib/world-countries",
          liveWebsite: "https://ogunsolahabib.github.io/world-countries"
        },
        {
          name: "Books App",
          image: "img/BOOKS.png",
          description:
            "The Books App shows details of different programming books on backend languages. I used React and Semantic UI.",
          repository: "https://github.com/ogunsolahabib/books-app",
          liveWebsite: "https://ogunsolahabib.github.io/books-app"
        },
        {
          name: "Rosetta",
          image: "img/ROSETTA.png",
          description:
            "Here's an online platform that can be used to make monthly orders for meals and schedule them based on preference. Materialize CSS, FullCalendarJS were mainly used.",
          repository: "https://github.com/ogunsolahabib/rosetta",
          liveWebsite: "https://ogunsolahabib.github.io/rosetta"
        },
        {
          name: "Renvies",
          image: "img/RENVIES.png",
          description:
            "Movie Rental Application that fetches movie data from the OMDB API. Axios is used as the HTTP server and Bootstrap was used for the User interface.",
          repository: "https://github.com/ogunsolahabib/renvies",
          liveWebsite: "https://ogunsolahabib.github.io/renvies"
        }
      ]
    });
  }
  render() {
    return (
      <div className="works">
        <div className="dir-btn left-btn">
          <button onClick={this.prev.bind(this)} className="btn btn-arrow">
            <i className="fas fa-chevron-left" />
          </button>
        </div>

        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Work index={this.state.worksDB[this.state.index]} />
        )}

        <div className="dir-btn right-btn">
          <button onClick={this.next.bind(this)} className="btn btn-arrow">
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}
export default WorksPage;
