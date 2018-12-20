import React, { Component } from "react";
import Output from "./Output";
import Formula from "./Formula";
import Buttons from "./Buttons";
import Header from "./Header";
import "../styles/App.css";
// import { operations, isOper } from "../helpers/operators";

const isOperator = /[x/+-]/;

class App extends Component {
  state = {
    curDisplay: 5,
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
    this.setState({
      curDisplay: e.target.value,
      curSign: e.target.value
    });
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
