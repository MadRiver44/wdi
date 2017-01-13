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
    this.addTweed = this.addTweed.bind(this);
    this.displayTweeds = this.displayTweeds.bind(this);
  }

  componentDidMount() {
  const url = 'https://tweedr-ed6e3.firebaseio.com/.json';
  axios.get(url)
    .then((response) => {
      let tweeds = response.data.Tweedr.tweeds;
      this.setState({
        tweeds: tweeds // also can set state of 'is ready' to true once data returns
      })
      this.displayTweeds();
    })
    .catch((error) => {
      console.log(error);
    })
}

  displayTweeds() {
    /*const tweeds = {...this.state.tweeds};*/  // this spread should allow access to tweed values
/*    let keyArray = Object.keys(this.state.tweeds);
    let currentTweed = keyArray[0];*/
    console.log(this.state.tweeds.tweed-1484041777190.content);
    // .{keyArray[0]}.content  or  .tweed-1484041777190.content
  }
 /*  https://tweedr-ed6e3.firebaseio.com/Tweedr/tweeds/tweed-1484058017254/content.json
     https://tweedr-ed6e3.firebaseio.com/Tweedr/tweeds/.json
     Object.keys(keyArray).map((key) => <div key={key} value={key}>{tweeds[key].title}</div>)}
     keyArray.forEach(key in keyArray)

.then((res) => {
.map((index) =>
res.data[index].key = index;
return res.data[index]}).reverse();

     {Object.keys(tweeds).map((key) => <div className='tweed' key={key} value={key}>{tweeds[key].title}</div>)
  */

    addTweed(tweed) {
    // retrieve our current messages state
    const tweeds = {...this.state.tweeds};
    // add our new message, appending the current time
    // to give our new message a unique key
    const timestamp = Date.now();
    tweeds[`tweed-${timestamp}`] = tweed;  // POST may do this step for us???
    // set the messages portion of our app's state
    this.setState({ tweeds });
    console.log(tweeds);
  }

/*updateTweed() {
  const url = 'https://tweedr-ed6e3.firebaseio.com/.json';
  axios.post(url, {   // add variable to reference currentTweed
    // an example of how data can be sent...
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(() => {
    // once you post, what other request should be made? maybe retrieve the current state of the database?? maybe ?
    this.displayTweeds();
  })
  .catch((error) => {
    console.log(error);
  });
}*/

/*deleteTweed() {
  // how do you route the request the specific item you want to delete?
  const url = 'https://tweedr-ed6e3.firebaseio.com/.json';
  axios.delete(url)  // add variable to reference currentTweed
    .then(() => {
      this.displayTweeds();
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
          <Input
          addTweed={this.addTweed}
          />
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
