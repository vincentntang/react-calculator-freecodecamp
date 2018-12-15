import React from "react";

const Display = props => (
  <div className="display-wrapper">
    <p id="display">0</p>
    <p id="currentOperation">{props.display}</p>
  </div>
);

export default Display;
