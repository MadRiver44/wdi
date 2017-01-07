import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Selector from './Selector';
import PropertyTable from './PropertyTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: '',
      weight: '',
      power1: '',
      power2: ''
    }
  }

// Onload API call working, but app currently initializes Selector box via hardcoded JSON data

/*componentDidMount() {
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.onreadystatechange = () => {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
      this.state.data = JSON.parse(xhrRequest.responseText);
      console.log(xhrRequest.responseText);
      this.setState(this.state);
    }
  };
  xhrRequest.open('GET', 'http://pokeapi.co/api/v2/pokemon/?limit=151&offset=0');
  xhrRequest.send();
}*/

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className='container'>
          <Selector

          />
          <PropertyTable

          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
