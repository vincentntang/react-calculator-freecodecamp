import React from "react";

const Grid = () => (
  <div class="buttons">
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
    <button id="seven" value="7" class="num">
      7
    </button>
    <button id="eight" value="8" class="num">
      8
    </button>
    <button id="nine" value="9" class="num">
      9
    </button>{" "}
    <button id="subtract" value="-">
      -
    </button>
    <button id="four" value="4" class="num">
      4
    </button>
    <button id="five" value="5" class="num">
      5
    </button>
    <button id="six" value="6" class="num">
      6
    </button>{" "}
    <button id="add" value="+">
      +
    </button>
    <button id="one" value="1" class="num">
      1
    </button>
    <button id="two" value="2" class="num">
      2
    </button>
    <button id="three" value="3" class="num">
      3
    </button>
    <button id="equals" value="=" id="equal-button">
      =
    </button>
    <button id="zero" value="0" class="num" id="zero-button">
      0
    </button>
    <button id="decimal" value=".">
      .
    </button>
  </div>
);

export default Grid;
