import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
  render() {
    const { messages } = this.props;

    // we use Object.keys so we can turn the items in our messages
    // Object into an array that we can then map over
    return (
      <ul className="list-of-messages">
        {Object.keys(messages)
          .map(key => <Message key={key} details={messages[key]} />)
        }
      </ul>
    )
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.object.isRequired,
};

export default MessageList;
