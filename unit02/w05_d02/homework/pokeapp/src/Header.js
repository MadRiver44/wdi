import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="flex-container">
        <header>
            <h1>PokeApp!</h1>
            <p className="App-intro">Catch 'em all! Learn about 151 different species of Pokemon here!</p>
        </header>
      </div>
    )
  }
}

export default Header;
