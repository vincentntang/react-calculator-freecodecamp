import React, { Component } from "react";
import Display from "./Display";
import Grid from "./Grid";
import Header from "./Header";
import "../styles/App.css";

class App extends Component {
  state = {
    curValue: []
  };
  componentDidUpdate() {
    console.log("Hello world");
  }
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Header />
          <Display />
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
