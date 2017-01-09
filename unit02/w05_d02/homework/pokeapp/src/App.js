import React, { Component } from 'react';
import './App.css';
/*import Selector from './Selector';*/


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: '',
      weight: '',
      power1: '',
      power2: ''
    }
    this.getPokeStats = this.getPokeStats.bind(this);
  }

// Onload API call working, but app currently initializes Selector box via hardcoded JSON data

componentDidMount() {
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
}

getPokeStats(pokemon, i) {  // Takes args from click event in JSX below
  this.setState({
    index: i,
    pokemon: pokemon
  })
  const url = "http://pokeapi.co/api/v2/pokemon/";
  const index = (Number(i) + 1) + '/';
  const urlWithIndex = url + index;  // adds index of clicked pokemon to second API call url base
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.onreadystatechange = () => {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
      let myPokemon = JSON.parse(xhrRequest.responseText);
      this.setState({
        weight: myPokemon.weight,
        power1: myPokemon.abilities[0].ability.name,
        power2: myPokemon.abilities[1].ability.name
      });
      console.log(this.state.weight);
      let myWeight = this.state.weight;
      alert(`${pokemon} weighs ${myWeight} kg`);  // trying to port this to DOM
    }
  };
  xhrRequest.open('GET', urlWithIndex);
  xhrRequest.send();
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="flex-container">
        <header>
            <h1>PokeApp!</h1>
            <p className="App-intro">Catch 'em all! Learn about 151 different species of Pokemon here!</p>
        </header>
      </div>
        </div>
        <div className='container'>
      <div className='selector'>
        <h2>Pokemon</h2>
        <form>
          <select id='pokeSelector' size="11">
          {pokemonNames.map((pokemon, i) => <option key={i} onClick={()=> this.getPokeStats(pokemon, i)}> {pokemon} </option>)}
          </select>
        </form>
      </div>
      <div>
        <h2>PokeProfile</h2>
        <div className='propertyTable'>
          <div className='property' id='nameDiv'>
            Name:
          </div>
          <div className='property' id='weightDiv'>
            Weight: {this.state.weight}
          </div>
          <div className='property' id='power1Div'>
            Ability 1:
          </div>
          <div className='property' id='power2Div'>
            Ability 2:
          </div>
        </div>
      </div>
        </div>
    <footer className='clearfix'>
      <p className="App-intro">Developed by <a href="http://www.franklnchristopherbrooks.com">Franklin Brooks</a>.</p>
      <p className="App-intro">Created with <span className="heart">♥</span> at <span className="heart"><a href="http://www.generalassemb.ly">GA</a></span></p>
    </footer>
      </div>
    );
  }
}

export default App;
