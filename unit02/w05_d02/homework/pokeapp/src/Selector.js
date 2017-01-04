import React from 'react';
import {render} from 'react-dom';

class Selector extends React.Component {
  render() {
    return (
      <div className='selector'>
        <h2>Pokemon</h2>
        <form>
          <select size="11">
            <option value="volvo">Pikachu</option>
            <option value="saab">Charmander</option>
            <option value="mercedes">Squirtle</option>
            <option value="audi">Earl</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Selector;

{/*        <ul>
          {JSONData.ingredients.map( (key) => <li> {key} </li>)}
        </ul>*/}
