import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Footer';
import TweedFeed from './TweedFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweedr2</h2>
        </div>
        <div className="App-intro">
          <TweedFeed />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
