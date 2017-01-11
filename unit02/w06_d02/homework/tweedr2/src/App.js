import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Footer';
import TweedFeed from './TweedFeed';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweeds: {
        initialTweed: 'initial'
      }
    };
    this.addTweed = this.addTweed.bind(this);
    this.displayTweeds = this.displayTweeds.bind(this);
  }


  componentDidMount() {
  const url = 'https://tweedr-ed6e3.firebaseio.com/.json';
  axios.get(url)
    .then((response) => {
      let tweeds = response.data.Tweedr.tweeds;
      this.setState({
        tweeds: tweeds
      })
      /*console.log(this.state.tweeds);*/
      this.displayTweeds();
    })
    .catch((error) => {
      console.log(error);
    })
}

/*  componentWillUnmount() {
    base.removeBinding(this.baseRef);
  }*/

  addTweed(tweed) {
    // retrieve our current messages state
    const tweeds = {...this.state.tweeds};
    // add our new message, appending the current time
    // to give our new message a unique key
    const timestamp = Date.now();
    tweeds[`tweed-${timestamp}`] = tweed;
    // set the messages portion of our app's state
    this.setState({ tweeds });
  }

  displayTweeds() {
    console.log(this.state.tweeds);
/*    const tweeds = {...this.state.tweeds};
    for (tweed in tweeds) {Object.keys(tweeds)
          .map((key) => <div className='tweed' key={key} value={key}>{tweeds[key].title}</div>)*/
  }

/*   changeCurrentMessage(event) {
    event.preventDefault();
    this.setState({ currentMessage: this.state.messages[event.target.value]});
  }

   deleteCurrentMessage(event) {
    event.preventDefault();
    this.setState({ currentMessage: this.state.messages[event.target.value]});
  }*/


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweedr2</h2>
        </div>
        <div className="App-intro">
          <TweedFeed />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
