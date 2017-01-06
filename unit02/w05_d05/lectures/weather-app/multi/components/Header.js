import React from 'react';
import logo from '../logo.svg';

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to my {props.title}</h2>
    </header>
  )
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Header;
