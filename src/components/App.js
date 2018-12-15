import React, { Component } from "react";
import Output from "./Output";
import Formula from "./Formula";
import Buttons from "./Buttons";
import Header from "./Header";
import "../styles/App.css";
import { operations, isOper } from "../helpers/operators";

class App extends Component {
  state = {
    curDisplay: 5
  };
  componentDidUpdate() {
    console.log("Hello world");
  }
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Header />
          <div className="display-wrapper">
            <Output curDisplay={this.state.curDisplay} />
            <Formula curDisplay={this.state.curDisplay} />
          </div>
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
