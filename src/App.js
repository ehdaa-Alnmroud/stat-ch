import React, { Component } from "react";
import Containing from "./stat/containing";
import Mynav from "./stat/Mynav";
import Medal from "./Medal";
import Part from "./stat/Part";
import Footerm from "./stat/Footerm";

import "./App.css";

class App extends Component {
  state = {
    visibility: false,
  };
  handelChange = () => this.setState({ visibility: !this.state.visibility });

  render() {
    return (
      <div className="cont">
        <Mynav />
        <Part />
        <Medal />

        <div className="stat">
          <div>
            <h6>LIMITLESS LEARNING</h6>
            <h2>SEE OUR CURATED CONTENT</h2>
            <p>
              oga International’s library of reference material is always up to
              date and created by industry professionals
            </p>
          </div>
          <button className="lebut" onClick={this.handelChange}>
            {" "}
            {this.state.visibility ? "hide" : "shwo"}
          </button>
          {this.state.visibility === true && <Containing />}
        </div>
        <Footerm />
      </div>
    );
  }
}

export default App;
