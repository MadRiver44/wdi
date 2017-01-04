import React from 'react';
/*import {render} from 'react-dom';*/
import JSONData from './Data.json';

class Selector extends React.Component {
  render() {
    return (
      <div className='selector'>
        <h2>Pokemon</h2>
        <form>
          <select id='pokeSelector' size="11">
            <option value="1">{JSONData.pokemon[0].name}</option>
{/*         {JSONData.pokemon.map( (key) => <option> {key} </option>)}  */}
          </select>
        </form>
      </div>
    )
  }
}

export default Selector;


