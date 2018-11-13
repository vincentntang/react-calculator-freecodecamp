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
        <Header/>
        <Display/>
        <Grid/>
      </div>
    </div>
    )
  }
}

export default App;