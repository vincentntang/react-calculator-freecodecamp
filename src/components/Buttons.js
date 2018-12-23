import React from "react";

const Buttons = props => (
  <div className="buttons">
    <button id="clear" onClick={props.clearAll}>
      AC
    </button>
    <button id="clear-entry" onClick={props.clearEntry} value="CE">
      CE
    </button>
    <button id="divide" onClick={props.operators} value="/">
      ÷
    </button>
    <button id="multiply" onClick={props.operators} value="*">
      x
    </button>
    <button id="seven" onClick={props.numbers} value="7">
      7
    </button>
    <button id="eight" value="8" onClick={props.numbers}>
      8
    </button>
    <button id="nine" value="9" onClick={props.numbers}>
      9
    </button>
    <button id="subtract" onClick={props.operators} value="-">
      -
    </button>
    <button id="four" value="4" onClick={props.numbers}>
      4
    </button>
    <button id="five" value="5" onClick={props.numbers}>
      5
    </button>
    <button id="six" value="6" onClick={props.numbers}>
      6
    </button>
    <button id="add" onClick={props.operators} value="+">
      +
    </button>
    <button id="one" value="1" onClick={props.numbers}>
      1
    </button>
    <button id="two" value="2" onClick={props.numbers}>
      2
    </button>
    <button id="three" value="3" onClick={props.numbers}>
      3
    </button>
    <button id="equals" value="=" onClick={props.evaluate}>
      =
    </button>
    <button id="zero" value="0" onClick={props.numbers}>
      0
    </button>
    <button id="decimal" value="." onClick={props.decimal}>
      .
    </button>
  </div>
);

export default Buttons;
