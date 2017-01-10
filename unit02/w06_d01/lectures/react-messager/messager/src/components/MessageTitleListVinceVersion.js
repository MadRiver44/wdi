import React from 'react';

class MessageTitleList extends React.Component {
  render() {
    const { messages, changeCurrentMessage } = this.props;

    // we use Object.keys so we can turn the items in our messages
    // Object into an array that we can then map over
    return (
      <select className="list-of-message-titles" size="10" onChange={(e) => changeCurrentMessage(e)}>
        {Object.keys(messages)
          .map((key) => <option key={key} value={key}>{messages[key].title}</option>)
        }
      </select>
    )
  }
}

MessageTitleList.propTypes = {
  messages: React.PropTypes.object.isRequired,
  changeCurrentMessage: React.PropTypes.func.isRequired,
};

export default MessageTitleList;
