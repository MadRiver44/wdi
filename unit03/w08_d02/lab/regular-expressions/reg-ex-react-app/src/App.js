import React, { Component } from 'react';
import RegExForm from './components/RegExForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Regular Expression Lab</h2>
        </div>
        <main>
          <RegExForm />
        </main>
      </div>
    );
  }
}

export default App;
