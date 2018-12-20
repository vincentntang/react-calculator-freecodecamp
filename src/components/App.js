import React, { Component } from "react";
import Output from "./Output";
import Formula from "./Formula";
import Buttons from "./Buttons";
import Header from "./Header";
import "../styles/App.css";
// import { operations, isOper } from "../helpers/operators";

const isOperator = /[x÷+-]/;

/**
 * REQUIREMENTS
 * It should.......
 * Add a number
 * Forbid sequential operators
 * Forbid multiple "."
 * Limit one "." per token
 * Set to 0 if nothing added
 *
 * Create, Delete, Update
 * Stage 1: Get things to render on screen with numbers and operators
 * Stage 2: Disallow formula to change on sequential operators
 * Stage 3: Allow operator change on current token
 */

class App extends Component {
  state = {
    curDisplay: 0,
    prevValue: 0,
    formula: "",
    curSign: "",
    lastClicked: ""
  };
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  componentDidUpdate() {
    // For debugging purposes
    console.log(this.state);
  }
  handleClearAll = () => {
    console.log("numbers");
  };
  handleClearEntry = () => {
    console.log("handleClearEntry");
  };
  handleOperators = e => {
    // Forbid sequential operators
    if (isOperator.test(this.state.lastClicked)) {
    } else {
      this.setState({
        curDisplay: e.target.value,
        formula: this.state.formula + e.target.value,
        curSign: e.target.value,
        lastClicked: e.target.value
      });
    }
  };
  handleNumbers = e => {
    this.setState({
      curDisplay: e.target.value,
      prevValue: e.target.value,
      formula: this.state.formula + e.target.value,
      lastClicked: e.target.value
    });
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
            <Formula formula={this.state.formula} />
            <Output curDisplay={this.state.curDisplay} />
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
