import React, { Component } from 'react';
import TestComponent from './components/TestComponent';
import TestClass from './components/TestClass';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="main">
        Hello World
        <TestComponent/>
        <TestClass/>
      </div>
    )
  }
}

export default App;