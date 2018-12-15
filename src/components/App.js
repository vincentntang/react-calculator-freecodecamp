import React, { Component } from "react";
import Display from "./Display";
import Grid from "./Grid";
import Header from "./Header";
import "../styles/App.css";

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
          <Display curDisplay={this.state.curDisplay} />
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
