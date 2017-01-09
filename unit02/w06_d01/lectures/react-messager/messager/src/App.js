import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddMessageForm from './components/AddMessageForm';
import MessageList from './components/MessageList';
import CurrentMessageDisplay from './components/CurrentMessageDisplay';
import MessageTitleList from './components/MessageTitleList';
import base from './base';

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: {},
      currentMessage: {},
    };

    this.addMessage = this.addMessage.bind(this);
    this.changeCurrentMessage = this.changeCurrentMessage.bind(this);
  }

  componentDidMount() {
    this.baseRef = base.syncState(
      `messageBoard/messages`,
      {
        context: this,
        state: 'messages',
      }
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.baseRef);
  }

  addMessage(message) {
    // retrieve our current messages state
    const messages = {...this.state.messages};
    // add in our new message, appending the current time as a way
    // to give our new message a unique key
    const timestamp = Date.now();
    messages[`message-${timestamp}`] = message;
    // set the messages portion of our app's state
    this.setState({ messages });
  }

  changeCurrentMessage(event) {
    event.preventDefault();

    this.setState({ currentMessage: this.state.messages[event.target.value]});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <MessageTitleList messages={this.state.messages} changeCurrentMessage={this.changeCurrentMessage} />
        <CurrentMessageDisplay currentMessage={this.state.currentMessage} />
        <AddMessageForm addMessage={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
