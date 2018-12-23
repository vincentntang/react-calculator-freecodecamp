import React, { Component } from "react";
import Output from "./Output";
import Formula from "./Formula";
import Buttons from "./Buttons";
import Header from "./Header";
import "../styles/App.css";
// import { operations, isOper } from "../helpers/operators";

const isOperator = /[*\/+-]/;
const hasDecimal = /[.]/;
const endsWithOperator = /[*\/+-]$/;

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
 * Stage 6: Evaluate all
 */

class App extends Component {
  state = {
    curValue: 0, // current Number Token
    prevValue: 0,
    formula: "",
    curSign: "",
    evaluated: false
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
      evaluated: false
      // curSign: "",
      // lastClicked:"",
    });
  };
  handleClearEntry = () => {};
  handleOperators = e => {
    // Disallow first value as operator
    if (!this.state.curValue === 0) {
      // Forbid sequential operators
      if (endsWithOperator.test(this.state.formula)) {
        this.setState({
          // Allow operator change on current token
          curValue: e.target.value,
          formula: this.state.formula.slice(0, -1) + e.target.value
        });
      } else {
        this.setState({
          curValue: e.target.value,
          formula: this.state.formula + e.target.value
        });
      }
    }
  };
  handleNumbers = e => {
    // Reset if "=" was last command
    if (this.state.evaluated) {
      this.setState({
        curValue: e.target.value,
        formula: e.target.value,
        evaluated: false
      });
      // else, behave normally
    } else {
      if (this.state.curValue === 0 || isOperator.test(this.state.curValue)) {
        // Remove initialization and operator from token
        this.setState({ curValue: e.target.value });
      } else {
        // Capture a sequence of numbers
        this.setState({ curValue: this.state.curValue + e.target.value });
      }
      this.setState({
        prevValue: e.target.value,
        formula: this.state.formula + e.target.value
      });
    }
  };
  handleEvaluate = () => {
    let evaluate = eval(this.state.formula);
    this.setState({
      prevValue: this.state.curValue,
      curValue: evaluate,
      formula: this.state.formula + "=" + evaluate,
      evaluated: true
    });
  };
  handleDecimal = () => {
    // If operator previously used, the first value must be "0."
    if (isOperator.test(this.state.curValue)) {
      this.setState({
        curValue: "0.",
        formula: this.state.formula + "0."
      });
      // otherwise just add a period
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
