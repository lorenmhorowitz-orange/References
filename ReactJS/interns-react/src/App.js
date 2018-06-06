import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">2018 Summer Intern React Test Bed</h1>
        </header>
        <p>
          The interns for 2018 are:
        </p>
        <li>Loren Horowitz</li>
        <li>Jason Willmore</li>
        <li>Riki Montgomery</li>
        <li>Sean Paterson</li>
          
      </div>
    );
  }
}

export default App;
