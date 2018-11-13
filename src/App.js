import React, { Component } from 'react';
// import TestComponent from './components/TestComponent';
// import TestClass from './components/TestClass';
import Display from './components/Display';
import Grid from './components/Grid';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render(){
    return(
      <div class="container">
      <div class="calculator">
        <h2 id="title">Electronic Calculator</h2>
        <div class="display">
          <p id="topDisplay">0</p>
          <p id="botDisplay">0</p>
        </div>
        <div class="buttons">
          <button value="AC">AC</button> <button value="CE">CE</button>
          <button value="÷">÷</button> <button value="x">X</button>
          <button value="7" class="num">7</button>
          <button value="8" class="num">8</button>
          <button value="9" class="num">9</button> <button value="-">-</button>
          <button value="4" class="num">4</button>
          <button value="5" class="num">5</button>
          <button value="6" class="num">6</button> <button value="+">+</button>
          <button value="1" class="num">1</button>
          <button value="2" class="num">2</button>
          <button value="3" class="num">3</button>
          <button value="=" id="equal-button">=</button>
          <button value="0" class="num" id="zero-button">0</button>
          <button value=".">.</button>
        </div>
      </div>
    </div>
    )
  }
}

export default App;