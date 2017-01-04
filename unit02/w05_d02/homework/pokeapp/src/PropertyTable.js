import React from 'react';
/*import {render} from 'react-dom';*/
import JSONData from './Data.json';

class PropertyTable extends React.Component {



  render() {
    return (
      <div>
        <h2>PokeProfile</h2>
        <div className='propertyTable'>
          <div className='property'>
          Name:
          </div>
          <div className='property'>
          Weight:
          </div>
        </div>
      </div>
    )
  }
}

export default PropertyTable;
