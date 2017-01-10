import React, { Component } from 'react';
import './App.css';
import base from './base';
import Input from './Input';
import TweedrFeed from './TweedrFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweedr</h2>
        </div>
        <p className="App-intro">
          <Input />
          <TweedrFeed />
        </p>
      </div>
    );
  }
}

export default App;
