import React, { Component } from "react";
import Output from "./Output";
import Formula from "./Formula";
import Buttons from "./Buttons";
import Header from "./Header";
import "../styles/App.css";
// import { operations, isOper } from "../helpers/operators";

class App extends Component {
  state = {
    curDisplay: 5
  };
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  // Operators
  handleClearAll = () => {
    console.log("handleClearAll");
  };
  handleClearEntry = () => {
    console.log("handleClearEntry");
  };
  handleOperators = () => {
    console.log("handleOperators");
  };
  handleNumbers = () => {
    console.log("handleNumbers");
  };
  handleEvaluate = () => {
    console.log("handleEvaluate");
  };
  handleDecimal = () => {
    console.log("handleDecimal");
  };
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Header />
          <div className="display-wrapper">
            <Output curDisplay={this.state.curDisplay} />
            <Formula curDisplay={this.state.curDisplay} />
          </div>
          <Buttons
            clearAll={this.handleClearAll}
            clearEntry={this.handleClearEntry}
            operators={this.handleOperators}
            numbers={this.handleNumbers}
            evaluate={this.handleEvaluate}
            decimal={this.handleDecimal}
          />
        </div>
      </div>
    );
  }
}

export default App;
