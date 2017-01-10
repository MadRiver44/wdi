import React, { Component } from 'react';
import './App.css';
import AddMessageForm from './components/AddMessageForm';
import MessageList from './components/MessageList';
import MessageTitleList from './components/MessageTitleList';
import CurrentMessageDisplay from './components/CurrentMessageDisplay';
import base from './base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: {},
      currentMessage: {}
    };
    this.addMessage = this.addMessage.bind(this);
    this.updateMessageDisplay = this.updateMessageDisplay.bind(this);
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

  updateMessageDisplay(myMessage) {
    console.log(this.currentMessage);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Messenger App</h2>
        </div>
        <MessageTitleList messages={this.state.messages}
        />
        <CurrentMessageDisplay
          currentMessage={this.state.currentMessage}
          updateMessageDisplay={this.updateMessageDisplay}
        />
        <AddMessageForm
          addMessage={this.addMessage}
        />
        <MessageList
          messages={this.state.messages}
        />
      </div>
    );
  }
}

/*Loop through messages and add each title to the select.
The onClick event handler in the select should call updateMessageDisplay.
You should pass currentMessage to currentMessageDisplay as a prop*/










export default App;
