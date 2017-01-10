import React, { Component } from 'react';
import axios from 'axios';
import Input from './components/Input';
import TweedList from './components/TweedList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      tweeds: [],
    }
  // You need to bind methods to constructor to have access to `this` context of the component - state.
  // getRequest() and postRequest() do not need to be bound because they are being called in either a React built-in
  // method (ex: componentDidMount) or another method being bound (this.handleSubmit())
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  //If you invoke the method from withing the lifecycle method,
  //it's ALREADY bound for you(has access to `state`)
  componentDidMount() {
    this.getRequest();
  }

  getRequest() {
    //this url you are created from the firebase db in the browser
    const url = 'https://hakuna-matata-tweedr.firebaseio.com/posts/.json';
    //send `GET` request to the firebase db
    axios.get(url)
      //you are declaring the `response` variable which is set to the response object from the db,
      // then it is passed to the callback

      //SIDE COMMENT: firebase gives you an object back, pretty straightforward,
      //other APIs may give you an array, some may give you text...
      //You need to test with Postman first to see the datatype.
      //that way you would need to parse it ;)
      .then((response) => {
        //try to
        console.log(response);
        //and you will see that it's bigger object with
        //multiple properties

        // So we only ask to get back the .data part fo that object (aka the db tweedr info)
        const data = response.data;

        // We create a new array in order to use it later on a map
        let tweeds = [];

        //this says, if there's data given to us
          if (data) {
          //Object.keys(data) - pass a data object and extract only the keys
          //the result is in an ARRAY
            tweeds = Object.keys(data).map((id) => {
              const tweed = data[id];
              return {
                post: tweed.post
              };
            });
          }

          // This line flips the order of the array, so the newest tweed is on top
          tweeds.reverse();

          // Then we set that flipped array to state
        this.setState({ tweeds })
      })

      // .catch is a way for any errors in the db request to be thrown into
      // we console log that error, so as developers we have error code to read/fix
      .catch((error) => {
        console.log(error);
      })
  }
  postRequest() {
    // The url you created from the firebase db in the browser
    const url = 'https://hakuna-matata-tweedr.firebaseio.com/posts.json';

    // Let's make a POST request to that database url and add that tweed to the list
    axios.post(url, {

          // The value of that tweed will come from this.state.value
          post: this.state.value
          })
          .then(() => {
            // Since there's NO response from POST request
            // Lets re-render the current(updated) list of tweeds on the page
            // By using the GET request method again!
            this.getRequest();

            //Let's reset/clear the state to the empty string,
            //so that the input will have an empty value for the users to have a better UX experience
            this.setState({ value: '' })
          })

          // .catch is a way for any errors in the db request to be thrown into
          // we console log that error, so as developers we have error code to read/fix
          .catch((error) => {
            console.log(error);
          })
  }

  //dynamically update the state at EVERY character input
  //this way the state is in immediate SYNC with the the input field in the browser
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  
  //Also since we already bound the `handleSubmit` method to the constructor,
  //`postRequest` method is automatically bound and has access to the state.
  handleSubmit(e) {
  // When the form is submitted, let's prevent the automatic default of
  //refreshing the browser through e.preventDefault()
    e.preventDefault();
  // And let's proceed forward with making that POST request
    this.postRequest();
  }

  render() {
    return (
      <div className="App">
        <h1>Tweedr</h1>
        <h3>What Ya Thinking?</h3>
        {/* First of all, this is how you comment in jsx.. You are welcome ;)*/}

        {/* Passing `inputValue`, `handleChange` and `handleSubmit` variables as props to the Input Component
            and assign them a name that makes it clear what the prop does
          */}
        <Input
          inputValue={this.state.input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

      {/* Just the same here, passing the array of abjects from the state to the TweedList Component
        as a prop and assign it to newly created variable `tweeds` */}
        <TweedList
          id="test"
          tweeds={this.state.tweeds}
        />
      </div>
    );
  }
}

export default App;
