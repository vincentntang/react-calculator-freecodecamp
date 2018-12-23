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
  /*
   * STATE VARIABLES
   * CurValue is the current numeric or operator token
   * Formula is the full operation before `eval` is called
   * evaluated is a true/false flag to let other methods handle reset logic
   * Unused variables: prevValue, curSign, lastClicked
   */
  state = {
    curValue: 0,
    formula: "",
    evaluated: false
  };
  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }
  componentDidUpdate() {
    console.log("I updated");
  }
  handleClearAll = () => {
    this.setState({
      curValue: 0,
      formula: "",
      evaluated: false
    });
  };
  handleOperators = e => {
    if (this.state.evaluated) {
      this.setState({
        formula: this.state.curValue + e.target.value,
        curValue: e.target.value,
        evaluated: false
      });
    } else {
      // Disallow first value as operator
      if (!(this.state.curValue === 0)) {
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
    }
  };
  handleNumbers = e => {
    // Reset if "=" was last command
    if (this.state.evaluated) {
      this.setState({
        curValue: e.target.value,
        formula: e.target.value == 0 ? "" : e.target.value,
        evaluated: false
      });
    } else {
      if (this.state.curValue === 0 && e.target.value == 0) {
        // do nothing
      } else if (
        this.state.curValue === 0 ||
        isOperator.test(this.state.curValue)
      ) {
        // Remove 0 or operator replace with [1-9] number
        this.setState({
          curValue: e.target.value,
          formula: this.state.formula + e.target.value
        });
      } else {
        // Capture a sequence of numbers
        this.setState({
          curValue: this.state.curValue + e.target.value,
          formula: this.state.formula + e.target.value
        });
      }
    }
  };
  handleEvaluate = () => {
    let tempFormula = this.state.formula;
    // Remove last char if operator
    if (endsWithOperator.test(tempFormula)) {
      tempFormula = tempFormula.slice(0, -1);
    }
    // order of operations calculate
    let evaluate = Math.round(10000000000 * eval(tempFormula)) / 10000000000;
    this.setState({
      curValue: evaluate,
      formula: tempFormula + "=" + evaluate,
      evaluated: true
    });
  };
  handleDecimal = () => {
    // If initialized, or just evaluated, the first value must be "0."
    if (this.state.curValue === 0 || this.state.evaluated) {
      this.setState({
        curValue: "0.",
        formula: "0.",
        evaluated: false
      });
      // If operator previously used, append result
    } else if (isOperator.test(this.state.curValue)) {
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
