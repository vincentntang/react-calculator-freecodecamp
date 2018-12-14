import React, { Component } from "react";
import Display from "./Display";
import Grid from "./Grid";
import Header from "./Header";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="calculator">
          <Header />
          <Display />
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
