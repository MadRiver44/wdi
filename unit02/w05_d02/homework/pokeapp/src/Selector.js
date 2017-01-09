/*import React from 'react';
import JSONData from './Data.json';
/*import PropertyTable from './PropertyTable';*/

/*class Selector extends React.Component {
  constructor() {
    super();
    this.state = {
      index: '',
      pokemon: '',
      weight: '',
      power1: '',
      power2: ''
    }
    this.getPokeStats = this.getPokeStats.bind(this);
  }

getPokeStats(pokemon, i) {  // Takes args from click event in JSX below
  alert(`You clicked ${pokemon}! Stand by while we calculate ${pokemon}'s weight...`);
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
    let pokemonNames = [];
    for (let i=0; i<JSONData.results.length; i++) {
      pokemonNames.push(JSONData.results[i].name);
    }
    return (

    )
  }
}

export default Selector;*/



