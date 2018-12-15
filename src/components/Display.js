import React from "react";

const Display = props => (
  <div className="display-wrapper">
    <p id="display">0</p>
    <p id="currentOperation">{props.curDisplay}</p>
  </div>
);

export default Display;
