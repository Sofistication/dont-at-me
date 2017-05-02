import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Don't @ Me</h1>
        </div>
        <p className="App-intro">
          Welcome to a truly amazing app, where you can try to @ people.
        </p>
        <p>
          Spoilers: you can't @ anyone.
        </p>
      </div>
    );
  }
}

export default App;
