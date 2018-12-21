import React, { Component } from "react";
import Output from "./Output";
import Formula from "./Formula";
import Buttons from "./Buttons";
import Header from "./Header";
import "../styles/App.css";
// import { operations, isOper } from "../helpers/operators";

const isOperator = /[x÷+-]/;
const hasDecimal = /[.]/;

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
 * Stage 3.1: Disallow first value as operator
 * Stage 4: Disallow sequential "."
 * Stage 4.1: Disallow multiple "." per numeric token (related)
 * Stage 4.2: curValue should capture a sequence of numbers
 * Stage 5: Creation of values done, now delete with clearAll
 */

class App extends Component {
  state = {
    curValue: 0, // current Number Token
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
    // Reset everything
    this.setState({
      curValue: 0, // current Number Token
      prevValue: 0,
      formula: "",
      curSign: "",
      lastClicked: ""
    });
  };
  handleClearEntry = () => {
    console.log("handleClearEntry");
  };
  handleOperators = e => {
    if (this.state.curValue === 0) {
      // Disallow first value as operator
    } else {
      // Forbid sequential operators
      if (isOperator.test(this.state.lastClicked)) {
        this.setState({
          // Allow operator change on current token
          curValue: e.target.value,
          curSign: e.target.value,
          formula: this.state.formula.slice(0, -1) + e.target.value
        });
      } else {
        this.setState({
          curValue: e.target.value,
          formula: this.state.formula + e.target.value,
          curSign: e.target.value,
          lastClicked: e.target.value
        });
      }
    }
  };
  handleNumbers = e => {
    if (this.state.curValue === 0 || isOperator.test(this.state.curValue)) {
      // Remove initialization and operator from token
      this.setState({ curValue: e.target.value });
    } else {
      // Capture a sequence of numbers
      this.setState({ curValue: this.state.curValue + e.target.value });
    }
    this.setState({
      prevValue: e.target.value,
      formula: this.state.formula + e.target.value,
      lastClicked: e.target.value
    });
  };
  handleEvaluate = () => {};
  handleDecimal = () => {
    // If operator previously used, the first value must be "0."
    if (isOperator.test(this.state.curValue)) {
      this.setState({
        curValue: "0.",
        formula: this.state.formula + "0."
      });
    } else if (!hasDecimal.test(this.state.curValue)) {
      this.setState({
        curValue: this.state.curValue + ".",
        formula: this.state.formula + "."
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Header />
          <div className="display-wrapper">
            <Formula formula={this.state.formula} />
            <Output curValue={this.state.curValue} />
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
