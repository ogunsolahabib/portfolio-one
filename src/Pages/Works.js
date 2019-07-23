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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, deserunt tempore? Corporis praesentium voluptatum minus, accusantium quibusdam quo nihil necessitatibus.",
          repository: "https://github.com/ogunsolahabib/world-countries",
          liveWebsite: "https://ogunsolahabib.github.io/world-countries"
        },
        {
          name: "Books App",
          image: "img/BOOKS.png",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, deserunt tempore? Corporis praesentium voluptatum minus, accusantium quibusdam quo nihil necessitatibus.",
          repository: "https://github.com/ogunsolahabib/books-app",
          liveWebsite: "https://ogunsolahabib.github.io/books-app"
        },
        {
          name: "Rosetta",
          image: "img/ROSETTA.png",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, deserunt tempore? Corporis praesentium voluptatum minus, accusantium quibusdam quo nihil necessitatibus.",
          repository: "https://github.com/ogunsolahabib/rosetta",
          liveWebsite: "https://ogunsolahabib.github.io/rosetta"
        },
        {
          name: "Renvies",
          image: "img/RENVIES.png",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, deserunt tempore? Corporis praesentium voluptatum minus, accusantium quibusdam quo nihil necessitatibus.",
          repository: "https://github.com/ogunsolahabib/renvies",
          liveWebsite: "https://ogunsolahabib.github.io/renvies"
        }
      ]
    });
  }
  render() {
    return (
      <div>
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
