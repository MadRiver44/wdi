import React from 'react';
import {render} from 'react-dom';
import JSONData from '../../json/recipe'

class Header extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <header>
            <h1>{JSONData.header}</h1>
            <cite className="contributors">
            <div>By {JSONData.author}</div>
            </cite>
        </header>
        <ul id="recipe_meta_data" className="list-group">
          <li className="list-group-item">Active: 1 Hour</li>
          <li className="list-group-item">Total: 5 Hours</li>
          <li className="list-group-item">6 Servings</li>
        </ul>
      </div>
)
  }
}


export default Header;
