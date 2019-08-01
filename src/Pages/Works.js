import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Work from "../components/Work";
class Works extends React.Component {
  state = {
    index: 0,
    worksDB: []
  };
  prev() {
    this.setState(prevState => {
      return {index: prevState.index > 0 ? this.state.index - 1 : 0};
    });
  }
  next() {
    this.setState(prevState => {
      return {
        index:
          prevState.index < this.state.worksDB.length - 1
            ? this.state.index + 1
            : this.state.worksDB.length - 1
      };
    });
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
      <div className="worksPage">
        <Header />
        <div className="matter">
          <div className="works">
            <div className="left-btn">
              <button onClick={this.prev.bind(this)} className="btn btn-arrow">
                <i className="fas fa-chevron-left" />
              </button>
            </div>
            <Work index={this.state.worksDB[this.state.index]} />
            <div className="right-btn">
              <button onClick={this.next.bind(this)} className="btn btn-arrow">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Works;
