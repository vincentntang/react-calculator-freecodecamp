import React from "react";

const Grid = () => (
  <div className="buttons">
    <button id="clear" value="AC">
      AC
    </button>{" "}
    <button id="clear-entry" value="CE">
      CE
    </button>
    <button id="divide" value="÷">
      ÷
    </button>{" "}
    <button id="multiply" value="x">
      X
    </button>
    <button id="seven" value="7" className="num">
      7
    </button>
    <button id="eight" value="8" className="num">
      8
    </button>
    <button id="nine" value="9" className="num">
      9
    </button>{" "}
    <button id="subtract" value="-">
      -
    </button>
    <button id="four" value="4" className="num">
      4
    </button>
    <button id="five" value="5" className="num">
      5
    </button>
    <button id="six" value="6" className="num">
      6
    </button>{" "}
    <button id="add" value="+">
      +
    </button>
    <button id="one" value="1" className="num">
      1
    </button>
    <button id="two" value="2" className="num">
      2
    </button>
    <button id="three" value="3" className="num">
      3
    </button>
    <button id="equals" value="=">
      =
    </button>
    <button id="zero" value="0" className="num">
      0
    </button>
    <button id="decimal" value=".">
      .
    </button>
  </div>
);

export default Grid;
