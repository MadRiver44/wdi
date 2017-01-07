import React from 'react';

class PropertyTable extends React.Component {
  constructor() {
    super();
  }

getState() {

}

  render() {
    return (
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
    )
  }
}

export default PropertyTable;
