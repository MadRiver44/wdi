import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Selector from './Selector';
import PropertyTable from './PropertyTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className='container'>
          <Selector />
          <PropertyTable />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
