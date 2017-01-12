import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Footer';
import Input from './Input';
import TweedFeed from './TweedFeed';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tweeds: {
      }
    };
/*    this.addTweed = this.addTweed.bind(this);*/
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
      this.displayTweeds();
    })
    .catch((error) => {
      console.log(error);
    })
}

  displayTweeds() {
    /*const tweeds = {...this.state.tweeds};*/  // this spread should allow access to tweed values
    let keyArray = Object.keys(this.state.tweeds);
    let currentTweed = keyArray[0];
    console.log(currentTweed);
    console.log(this.state.tweeds);
    // .{keyArray[0]}.content  or  .tweed-1484041777190.content
  }
 /*  https://tweedr-ed6e3.firebaseio.com/Tweedr/tweeds/tweed-1484058017254/content.json
     https://tweedr-ed6e3.firebaseio.com/Tweedr/tweeds/.json
     Object.keys(keyArray).map((key) => <div key={key} value={key}>{tweeds[key].title}</div>)}
     keyArray.forEach(key in keyArray)
     {Object.keys(tweeds).map((key) => <div className='tweed' key={key} value={key}>{tweeds[key].title}</div>)
  */

    addTweed(tweed) {
      console.log(this.state.tweeds);
/*    // retrieve our current messages state
    const tweeds = {...this.state.tweeds};
    // add our new message, appending the current time
    // to give our new message a unique key
    const timestamp = Date.now();
    tweeds[`tweed-${timestamp}`] = tweed;
    // set the messages portion of our app's state
    this.setState({ tweeds });*/
  }

/*updateTweed() {
  const url = 'https://tweedr-ed6e3.firebaseio.com/.json';
  axios.post(url, {
    // an example of how data can be sent...
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(() => {
    // once you post, what other request should be made? maybe retrieve the current state of the database?? maybe ?
    console.log("POSTED");
  })
  .catch((error) => {
    console.log(error);
  });
}*/

/*deleteTweed() {
  // how do you route the request the specific item you want to delete?
  const url = 'https://tweedr-ed6e3.firebaseio.com/.json'; // add variable to reference currentTweed
  axios.delete(url)
    .then(() => {
      // what other actions do you want to take when deleting data...
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

  deleteCurrentMessage(event) {
    event.preventDefault();
    this.setState({ currentMessage: this.state.messages[event.target.value]});
  }
*/

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweedr2</h2>
        </div>
        <div className="App-intro">
          <Input />
          <TweedFeed
          tweeds={this.state.tweeds}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
