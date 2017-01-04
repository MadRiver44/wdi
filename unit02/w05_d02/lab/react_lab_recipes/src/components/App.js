import React from 'react';
import JSONData  from '../../json/recipe';
import Ingredients from './Ingredients.js';
import Header from './Header';
import Nav from './Nav';

console.log('JSONData', JSONData)


class App extends React.Component {

  render() {
    return (
      <div>
        <div>I AM APP!!!!!!!!!!!!!!! {JSONData.foo}</div>
        <Header />
        <Ingredients />
        <Nav />
      </div>
    )
  }
}

export default App;
