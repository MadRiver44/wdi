import React from 'react';

class PropertyTable extends React.Component {

  render() {
    const pokemon = {
/*    name: this.name.value,
      weight: this.weight.value,*/
    }
    return (
      <div>
        <h2>PokeProfile</h2>
        <div className='propertyTable'>
          <div className='property' id='nameDiv'>
          Name: {pokemon.name}
          </div>
          <div className='property' id='weightDiv'>
          Weight: {pokemon.weight}
          </div>
        </div>
      </div>
    )
  }
}

export default PropertyTable;
