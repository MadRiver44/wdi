import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Selector from './Selector';
import PropertyTable from './PropertyTable';
import JSONData from './Data.json';

console.log(JSONData.pokemon[0].name)

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


/*let getPokeName = function() {
  let userChoice = document.querySelector('pokeSelector').value;
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/1/`);
  xhrRequest.send();

  xhrRequest.onreadystatechange = function() {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
      let parseData = JSON.parse(xhrRequest.responseText);
      let pokeName = (parseData.name);
      let nameDiv = document.getElementById('location');
      nameDiv.innerHTML = `${pokeName}`;
      console.log(pokeName);
    }
  }
}*/







