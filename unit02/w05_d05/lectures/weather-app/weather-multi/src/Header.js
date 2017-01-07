import React from 'react';

const Header = (props) => {
  return (
    <header className="App-header">
      <h2>Welcome to my {props.title}</h2>
    </header>
  )
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Header;
