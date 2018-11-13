import React, { Component } from 'react';
// import TestComponent from './components/TestComponent';
// import TestClass from './components/TestClass';
import Display from './components/Display';
import Grid from './components/Grid';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="main">
        <div className="calculator-wrapper">
          <Display/>
          <Grid/>
        </div>
      </div>
    )
  }
}

export default App;