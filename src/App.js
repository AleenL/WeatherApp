import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name = 'sara'/>
        <Welcome name = 'jack'/>
        <Welcome name = 'aleen'/>
        <Welcome name = 'Frank'/>
      </div>
    );
  }
}

export default App;
