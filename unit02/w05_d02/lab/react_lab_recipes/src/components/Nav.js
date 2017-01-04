import React from 'react';
import {render} from 'react-dom';
import JSONData from '../../json/recipe';

class Nav extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <nav className="nav">
          <p><b>More Recipes By {JSONData.author}</b></p>
            <ul className="nav">
                <li className="nav-item"><a className="btn btn-default" href="#">Tikka Masala</a></li>
                <li className="nav-item"> <a className="btn btn-default" href="#">Eggs Benedict</a></li>
                <li className="nav-item"> <a className="btn btn-default" href="#">Crawfish Etouffee</a></li>
                <li className="nav-item"> <a className="btn btn-default" href="#">Swedish Meatballs</a></li>
            </ul>
        </nav>
        <footer>Copyright &copy; General Assembly</footer>
      </div>
)
  }
}


export default Nav;
