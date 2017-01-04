import React from 'react';
import JSONData  from '../../json/recipe';
import Ingredients from './Ingredients.js';
import Header from './Header';
import Nav from './Nav';

console.log('JSONData', JSONData)


class App extends React.Component {
  foodArray = ['Sugar', 'Pepper']
  render() {
    return (
      <div>
        <div>I AM APP!!!!!!!!!!!!!!! {JSONData.foo}</div>
        <Header />
        <Ingredients foodList={this.foodArray}/>
        <Nav />
      </div>
    )
  }
}

export default App;
