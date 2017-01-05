import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hero: null,
      counter: 1,
    }
    this.nextHero = this.nextHero.bind(this);
    this.prevHero = this.prevHero.bind(this);
  }

  componentDidMount() {
  axios.get('http://swapi.co/api/people/1/')
  .then((res) => {
    console.log(res.data)
    this.setState({
      hero: res.data.name,
      counter: this.state.counter
    });
  });
  }

  nextHero() {
    axios.get(`http://swapi.co/api/people/${this.state.counter + 1}/`)
    .then((res) => {
    console.log(res.data);
    this.setState({
      hero: res.data.name,
      counter: this.state.counter + 1
    });
  })
    .catch(function (error) {
    console.log(error);
  });
  }

  prevHero() {
    axios.get(`http://swapi.co/api/people/${this.state.counter - 1}/`)
    .then((res) => {
    console.log(res.data);
    this.setState({
      hero: res.data.name,
      counter: this.state.counter - 1
    })
  })
    .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return (
      <div className="App">
        <div id="counter">{this.state.counter}</div>
        <p id="title">WHO IS YOUR HERO: {this.state.hero}</p>
        <button disabled={(this.state.counter > 1 ? false : true)} onClick={this.prevHero}>Previous</button>
        <button onClick={this.nextHero}>Next</button>
        <div id="stats">
          <h2>PROFILE STATS</h2>
        </div>
      </div>
    );
  }
}

export default App;
