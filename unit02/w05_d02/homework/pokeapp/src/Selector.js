import React from 'react';
import JSONData from './Data.json';

class Selector extends React.Component {

getPokeStats(pokemon, i) {  // Takes args from click event in JSX below
  alert(`You clicked ${pokemon}!`);
  const url = "http://pokeapi.co/api/v2/pokemon/";
  const index = (Number(i) + 1) + '/';
  const urlWithIndex = url + index;  // adds index of clicked pokemon to second API call url base
  const xhrRequest = new XMLHttpRequest();
  xhrRequest.onreadystatechange = () => {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
      let myPokemon = JSON.parse(xhrRequest.responseText);
      this.state = JSON.parse(xhrRequest.responseText);
      this.setState(this.state);
      let myWeight = myPokemon.weight;
      alert(`${pokemon} weighs ${myWeight} kg`);  // trying to port this to DOM
    }
  };
  xhrRequest.open('GET', urlWithIndex);
  xhrRequest.send();
}

  render() {
    let pokemonNames = [];
    for (let i=0; i<JSONData.results.length; i++) {
      pokemonNames.push(JSONData.results[i].name);
    }
    return (
      <div className='selector'>
        <h2>Pokemon</h2>
        <form>
          <select id='pokeSelector' size="11">
          {pokemonNames.map((pokemon, i) => <option key={i} onClick={()=> this.getPokeStats(pokemon, i)}> {pokemon} </option>)}
          </select>
        </form>
      </div>
    )
  }
}

export default Selector;



