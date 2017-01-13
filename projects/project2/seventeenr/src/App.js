import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Create from './Create';
import Read from './Read';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
        <div className="App-intro">
          <Create />

{/*          <div className='divider'> </div>*/}

          <Read />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
