import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddMessageForm from './components/AddMessageForm';
import MessageList from './components/MessageList';
import base from './base';

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: {},
    };

    this.addMessage = this.addMessage.bind(this);
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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AddMessageForm addMessage={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
