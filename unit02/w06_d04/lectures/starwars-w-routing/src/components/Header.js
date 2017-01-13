import React from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg';

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to our React Star Wars People Browser</h2>
    <ul>
      <li>
        <Link
          to="/"
          activeOnlyWhenExact
          activeClassName="active"
        >
          SW Home
        </Link>
      </li>
      <li>
        <Link
          to="/people"
          activeOnlyWhenExact
          activeClassName="active"
        >
          People List
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
