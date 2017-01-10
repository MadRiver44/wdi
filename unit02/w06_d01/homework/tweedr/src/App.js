import React, { Component } from 'react';
import './App.css';
import base from './base';
import Input from './Input';
import TweedrFeed from './TweedrFeed';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweeds: {
        tweed1: "Here's a tweed."
      },
    };
    this.addTweed = this.addTweed.bind(this);
  }

  componentDidMount() {
    this.baseRef = base.syncState(
      `Tweedr/tweeds`,
      {
        context: this,
        state: 'tweeds',
      }
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.baseRef);
  }

  addTweed(tweed) {
    // retrieve our current messages state
    const tweeds = {...this.state.tweeds};
    console.log(tweeds);
    // add our new message, appending the current time
    // to give our new message a unique key
    const timestamp = Date.now();
    tweeds[`tweed-${timestamp}`] = tweed;
    // set the messages portion of our app's state
    this.setState({ tweeds });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweedr</h2>
        </div>
        <div className="App-intro">
          <Input addTweed={this.addTweed}/>
          <TweedrFeed />
        </div>
      </div>
    );
  }
}

export default App;
